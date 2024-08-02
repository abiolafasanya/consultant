import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export default function ApptProvider({ children }) {
  const [openDonationModal, setOpenDonationModal] = useState(false);
  function toggleDonationModal() {
    setOpenDonationModal((open) => !open);
  }

  return (
    <AppContext.Provider
      value={{
        openDonationModal,
        toggleDonationModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
