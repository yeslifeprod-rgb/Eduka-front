import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isTypeEventOpen: boolean;
  openTypeEvent: () => void;
  closeTypeEvent: () => void;
  isCategoryPrivateEventOpen: boolean;
  openCategoryPrivateEvent: () => void;
  closeCategoryPrivateEvent: () => void;
  isCategoryPublicEventOpen: boolean;
  openCategoryPublicEvent: () => void;
  closeCategoryPublicEvent: () => void;
  isAddTagsEventOpen: boolean;
  openAddTagsEvent: () => void;
  closeAddTagsEvent: () => void;
  isLogOutOpen: boolean;
  openLogOut: () => void;
  closeLogOut: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export default ModalContext;

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTypeEventOpen, setIsTypeEventOpen] = useState(false);
  const [isCategoryPrivateEventOpen, setIsCategoryPrivateEventOpen] =
    useState(false);
  const [isCategoryPublicEventOpen, setIsCategoryPublicEventOpen] =
    useState(false);
  const [isAddTagsEventOpen, setIsAddTagsEventOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openTypeEvent = () => {
    setIsTypeEventOpen(true);
  };
  const closeTypeEvent = () => {
    setIsTypeEventOpen(false);
  };

  const openCategoryPrivateEvent = () => {
    setIsCategoryPrivateEventOpen(true);
  };
  const closeCategoryPrivateEvent = () => {
    setIsCategoryPrivateEventOpen(false);
  };
  const openCategoryPublicEvent = () => {
    setIsCategoryPublicEventOpen(true);
  };
  const closeCategoryPublicEvent = () => {
    setIsCategoryPublicEventOpen(false);
  };
  const openAddTagsEvent = () => {
    setIsAddTagsEventOpen(true);
  };
  const closeAddTagsEvent = () => {
    setIsAddTagsEventOpen(false);
  };
  const openLogOut = () => {
    setIsLogOutOpen(true);
  };
  const closeLogOut = () => {
    setIsLogOutOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isTypeEventOpen,
        openTypeEvent,
        closeTypeEvent,
        isCategoryPrivateEventOpen,
        openCategoryPrivateEvent,
        closeCategoryPrivateEvent,
        isCategoryPublicEventOpen,
        openCategoryPublicEvent,
        closeCategoryPublicEvent,
        isAddTagsEventOpen,
        openAddTagsEvent,
        closeAddTagsEvent,
        isLogOutOpen,
        openLogOut,
        closeLogOut,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
