import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen} //Indica se o modal está aberto ou fechado
            //Propiedade para fechar o modal
            onRequestClose={onRequestClose}
            //Estilizar o modal do 0
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Register transaction</h2>

                <input
                    placeholder="Title" />

                <input
                    type="number"
                    placeholder="Value"
                />

                <input
                    placeholder="Category"
                />

                <button type="submit">
                    Sign Up
                </button>

            </Container>

        </Modal>
    )

}