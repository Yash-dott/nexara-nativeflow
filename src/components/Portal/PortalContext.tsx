import * as React from 'react'
interface Element {
    name: string;
    component: React.ReactNode;
}
const PortalContext = React.createContext({
    addComponent: (element: Element) => { element },
    removeComponent: (name: string) => { name }
})
export default PortalContext;