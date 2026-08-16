/* eslint-disable @typescript-eslint/no-unused-vars */
// Functions, Helpers, Utils, and Hooks
import tryCatch from "../../utils/tryCatch";
// Interfaces and Types
import FetchError from "../../constants/types/FetchError";
// Constants
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const getAccessToken = () => localStorage.getItem("accessToken");

const withAuthHeaders = (init?: RequestInit): RequestInit => {
  const token = getAccessToken();
  return {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
    },
    credentials: "include",
    redirect: "follow",
  };
};

const fetchData = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<
  { data: Response; error: null } | { data: null; error: FetchError }
> => {
  const url = `${VITE_SERVER_URL}${input}`;

  // 1. First attempt
  const { data: response, error: initialErr } = await tryCatch(
    fetch(url, withAuthHeaders(init))
  );

  if (initialErr) {
    return {
      data: null,
      error: {
        type: "NetworkError",
        message: "Network error or CORS issue",
      },
    };
  }

  if (response.status === 401) {
    // 2. Try refresh token
    const refreshUrl = `${VITE_SERVER_URL}/api/users/refresh-token`;

    const { data: refreshRes, error: refreshErr } = await tryCatch(
      fetch(refreshUrl, { method: "POST", credentials: "include" })
    );

    if (refreshErr || !refreshRes.ok) {
      return {
        data: null,
        error: {
          type: "RefreshFailed",
          message: "Could not refresh session. Please log in again.",
        },
      };
    }

    const { data: tokenData, error: jsonErr } = await tryCatch(
      refreshRes.json()
    );

    if (jsonErr || !tokenData?.accessToken) {
      return {
        data: null,
        error: {
          type: "RefreshFailed",
          message: "Invalid refresh response.",
        },
      };
    }

    localStorage.setItem("accessToken", tokenData.accessToken);

    // Retry original request with new token
    const { data: retryRes, error: retryErr } = await tryCatch(
      fetch(url, withAuthHeaders(init))
    );

    if (retryErr) {
      return {
        data: null,
        error: {
          type: "NetworkError",
          message: "Network error on retry.",
        },
      };
    }

    if (!retryRes.ok) {
      const { data: body, error: bodyErr } = await tryCatch(retryRes.json());
      return {
        data: null,
        error: {
          type: "HttpError",
          status: retryRes.status,
          message: body?.message ?? bodyErr,
        },
      };
    }

    return { data: retryRes, error: null };
  }

  if (!response.ok) {
    const { data: errorBody, error: bodyErr } = await tryCatch(response.json());
    return {
      data: null,
      error: {
        type: "HttpError",
        status: response.status,
        message: errorBody?.message ?? bodyErr,
      },
    };
  }

  return { data: response, error: null };
};

export default fetchData;