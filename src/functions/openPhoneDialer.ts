import { businessPhoneNumber1, businessPhoneNumber2 } from "../constants/contact-and-info";

const openPhoneDialer = (useMainNumber: boolean = true) => {
    const businessPhoneNumber = useMainNumber ? businessPhoneNumber1 : businessPhoneNumber2;

    window.location.href = `tel:+${businessPhoneNumber}`
};

export default openPhoneDialer