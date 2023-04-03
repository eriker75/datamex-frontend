import { FC, useState, useEffect, useRef } from 'react';
import Modal from "react-modal";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "50vw",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999",
    opacity: 1,
  },
};

interface Props {
  modalIsOpen: boolean;
  handleModal: any;
}

const MyModal: FC<Props> = ({ modalIsOpen, handleModal }) => {
  let subtitle;

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={customModalStyles}
      overlayClassName={"Overlay"}
    >
      <div className="d-flex justify-content-between">
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button className="btn btn-primary" onClick={handleModal}>close</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
        eveniet! Quam doloremque amet voluptatum ex debitis molestiae iusto
        blanditiis impedit voluptas quas dignissimos ullam, molestias hic culpa
        soluta adipisci quia! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aliquid consectetur ex iure nulla repellat rerum, repudiandae
        blanditiis incidunt libero ducimus! Nemo nam ratione nihil velit
        accusantium blanditiis facilis harum magnam.
      </p>
    </Modal>
  );
};

const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  const handleModal = () => {
    setModalIsOpen((modalState) => {
      return !modalState;
    });
    const interval = setTimeout(()=> {
      setModalIsOpen(false);
    }, 3000)
    timeoutRef.current = interval;
  };

  useEffect(()=> {
    document.body.style.overflowY = modalIsOpen ?  "hidden" : "scroll";
  }, [modalIsOpen])

  useEffect(()=>{
    return () => {
      clearInterval(timeoutRef.current as NodeJS.Timeout);
    }
  }, [])

  return {
    modalIsOpen,
    setModalIsOpen,
    handleModal,
    MyModal: <MyModal modalIsOpen={modalIsOpen} handleModal={handleModal} />,
  };
};

export default useModal;
