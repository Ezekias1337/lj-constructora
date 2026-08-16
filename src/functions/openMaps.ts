import { businessAddress } from "../constants/contact-and-info";

const openMaps = () => {
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${businessAddress}`;
};

export default openMaps;
