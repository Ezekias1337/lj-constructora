type FetchError = {
  type:
    | "NetworkError"
    | "Unauthorized"
    | "RefreshFailed"
    | "HttpError"
    | "Unknown";
  status?: number;
  message: string;
};

export default FetchError;
