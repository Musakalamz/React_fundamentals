import { createContext, useContext, useState } from "react";

const GlobalContext = createContext("Musa");

export function useGlobalContext() {
  return useContext(GlobalContext);
}

function AppContex({ children }) {
  const [name, setName] = useState("Musa");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContex;
