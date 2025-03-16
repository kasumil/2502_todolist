import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-500/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;
