import Modal from "./Modal";
import { useState } from "react";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";


const InfoForParents = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    }
    return (
        <>
        <ReusableButton onClick={handleOpenModal}>
            {/* This is the onclick that opens the modal */}

        </ReusableButton>
        <Modal />
        </>
    );
};

export default InfoForParents;