import React, { createContext, useContext, useState } from 'react';

const TypeContext = createContext();

export const TypeProvider = ({ children }) => {
    const [type, setType] = useState('');

    const setTypeValue = (newValue) => {
        setType(newValue);
        console.log("Novo valor definido para o tipo:", newValue);
    };

    return (
        <TypeContext.Provider value={{ type, setTypeValue}}>
            {children}
        </TypeContext.Provider>
    );
};

export const useType = () => {
    const context = useContext(TypeContext);

    if (!context) {
        throw new Error('useType deve ser usado dentro de um TypeProvider');
    }

    console.log("Valor atual do tipo:", context.type);
    return context;
};
