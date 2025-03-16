import React from "react";
import Modal from "@/components/common/Modal";
import ButtonStyle from "@/components/common/ButtonStyle";

const TaskModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-2">
                <h2 className="text-black text-xl font-bold">일정 작성</h2>
                <input
                    className="text-black placeholder-gray-500 shadow-md"
                    placeholder="일정 제목을 입력하세요"
                    type="text"
                />
                <textarea
                    cols={15}
                    rows={8}
                    className="text-black placeholder-gray-500 shadow-md"
                    placeholder="일정 내용을 입력하세요"
                />
                <input type="datetime-local" className="text-black shadow-md" />
                <ButtonStyle fullWidth>저장</ButtonStyle>
            </div>
        </Modal>
    );
};

export default TaskModal;
