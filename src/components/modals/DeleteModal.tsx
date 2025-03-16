import ButtonStyle from "../common/ButtonStyle";
import Modal from "../common/Modal";

function DeleteModal({
    isOpen,
    onClose,
    text = "해당 일정을 삭제하시겠습니까?",
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-4">
                <p className="text-black text-center">{text}</p>
                <div className="flex gap-3">
                    <ButtonStyle
                        buttonColor={"blue"}
                        variant={"outline"}
                        shade={200}
                        fullWidth
                        disabled={false}
                        onClick={onClose}
                    >
                        취소
                    </ButtonStyle>
                    <ButtonStyle
                        fullWidth
                        disabled={false}
                        buttonColor={"red"}
                        variant={"solid"}
                        shade={700}
                        onClick={onClose}
                    >
                        확인
                    </ButtonStyle>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteModal;
