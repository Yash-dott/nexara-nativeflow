import React, { useContext, useEffect, useRef } from "react";
import PortalContext from "./PortalContext";

interface PortalProps {
    children: React.ReactNode,
    name?: string
}
const Portal: React.FC<PortalProps> = ({ children, name }) => {
    const { addComponent, removeComponent } = useContext(PortalContext);
    const uniqueId = useRef(name ?? `portal_${Math.random() * 50}`).current;

    useEffect(() => {
        return () => removeComponent(uniqueId);
    }, []);

    useEffect(() => {
        addComponent({ name: uniqueId, component: children });
    }, [children]);

    return null;
}
export default Portal;