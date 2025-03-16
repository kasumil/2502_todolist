import { useState } from "react";

function useModal() {
    const [isVisible, setIsVisible] = useState(false);

    const modalShow = () => {
        setIsVisible(true);
    };

    const modalHide = () => {
        setIsVisible(false);
    };

    return { isVisible, modalShow, modalHide };
}

export default useModal;
