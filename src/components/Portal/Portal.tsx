import React, { useContext, useEffect } from "react";
import PortalContext from "./PortalContext";

interface PortalProps {
    children: React.ReactNode,
    name?: string
}
const Portal: React.FC<PortalProps> = ({ children, name }) => {
    const { addComponent, removeComponent } = useContext(PortalContext);

    useEffect(() => {
        const uniqueId = name ?? `${Math.random() * 50}`;
        addComponent({ name: uniqueId, component: children });
        return () => removeComponent(uniqueId);
    }, [children, name]);

    return null;
}
export default Portal;