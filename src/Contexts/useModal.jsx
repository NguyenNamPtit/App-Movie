import React, { createContext, useEffect, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalSigninVisible, setModalSigninVisible] = useState(false);
    const [modalSignupVisible, setModalSignupVisible] = useState(false);

    // console.log({ modalSigninVisible, modalSignupVisible });
    return (
        <ModalContext.Provider value={{
            modalSigninVisible,
            setModalSigninVisible,
            modalSignupVisible,
            setModalSignupVisible

        }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
