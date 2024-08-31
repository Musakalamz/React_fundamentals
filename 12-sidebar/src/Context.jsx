import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openSideBar() {
    return setIsSideBarOpen(true);
  }

  function closeSideBar() {
    return setIsSideBarOpen(false);
  }

  function openModal() {
    return setIsModalOpen(true);
  }

  function closeModal() {
    return setIsModalOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
