import { useState, createContext, useContext } from "react";

const Modal = createContext();

function Context({ children }) {
  const [modalShow, setModalShow] = useState(false);
  const [searchModalShow, setSearchModalShow] = useState(false);
  return (
    <Modal.Provider
      value={{ modalShow, setModalShow, searchModalShow, setSearchModalShow }}
    >
      {children}
    </Modal.Provider>
  );
}

export default Context;

export const ModalState = () => useContext(Modal);
