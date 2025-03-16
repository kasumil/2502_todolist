import React from "react";
import Modal from "@/components/common/Modal";
import ButtonStyle from "@/components/common/ButtonStyle";

const CategoryNameModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-4">
                {" "}
                {/* Adjusted gap for better spacing */}
                <h2 className="text-black text-xl font-bold">카테고리 작성</h2>
                <input
                    className="text-black placeholder-gray-500 shadow-md p-2" // Added padding for better input spacing
                    placeholder="카테고리 제목을 입력하세요"
                    type="text"
                />
                <ButtonStyle fullWidth>저장</ButtonStyle>
            </div>
        </Modal>
    );
};

export default CategoryNameModal;
