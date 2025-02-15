import { useState } from "react";

// Centralizes modal control
const useModal = (): [boolean, () => void, () => void]  => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return [ modalOpen, close, open ];
};

export default useModal;