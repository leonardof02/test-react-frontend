import React, { ReactNode, createContext, useContext, useState } from "react";

interface ServicesContext {
    services: string[],
    setServices: Function;
}

interface Props {
    children: ReactNode | ReactNode[];
}

const ServicesContext = createContext<ServicesContext>({
    services: [],
    setServices: () => {}
});

export const useServiceContext = () => useContext(ServicesContext);

export default function ServicesContextProvider({ children }: Props) {
    const [ services, setServices ] = useState([]);
    return <ServicesContext.Provider value={{ services, setServices }}>
        { children }
    </ServicesContext.Provider>;
}