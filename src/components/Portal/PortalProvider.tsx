import React, { useCallback, useMemo, useState } from "react";
import PortalContext from "./PortalContext";
interface PortalProviderProps {
    children: React.ReactNode;
}
interface Element {
    name: string;
    component: React.ReactNode;
}
const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {

    const [components, setComponents] = useState<Record<string, React.ReactNode>>({});
    const addComponent = useCallback(({ name, component }: Element) => {
        setComponents(prevComponents => ({
            ...prevComponents,
            [name]: component
        }));
    },[]);
    const removeComponent = useCallback((name: string) => {
        setComponents(prevComponents => {
            const newComponents = { ...prevComponents };
            delete newComponents[name];
            return newComponents;
        });
    },[])
    const values = useMemo(()=>({addComponent, removeComponent}), []);
    return (<>
        <PortalContext.Provider value={values}>
            {children}
            {Object.entries(components).map(([_name, Component]) => (
                Component
            ))}
        </PortalContext.Provider>
    </>);

}
export default PortalProvider;