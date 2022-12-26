import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {

    const {deleteID, modaldispatch} = useContext(ModalContext)

    const confirmdelete = async () => {
        await deleteDoc(doc(db, "Quiz", deleteID));
        await deleteDoc(doc(db, "Takequiz", deleteID));
        modaldispatch({type:"id",payload:null})
        modaldispatch({type:"CLOSE"})
    }

    const canceldelete = async () => {
        modaldispatch({type:"id",payload:null})
        modaldispatch({type:"CLOSE"})
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <h4>Are you sure you want delete your quiz?</h4>
                <div className="btn-container">
                    <div className="confirm-btn" onClick={confirmdelete}>
                        confirm
                    </div>
                    <div className="undo-btn" onClick={canceldelete}>
                        cancel
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;