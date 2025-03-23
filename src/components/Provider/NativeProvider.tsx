import React, { createContext, useMemo, useState } from 'react';
import type { ReactNode } from "react";
import { LightTheme, DarkTheme } from '../../themes';
import type { Theme, themeModeTypes, ThemeTypes } from '../../types';

type ProviderProps = {
    /** 
     * The child components that will be wrapped by the provider.  
     * This ensures all components within the provider have access to the theme context. 
     */
    children: ReactNode;

    /** 
     * Determines whether the theme should be responsive based on screen size.
     * Default: `true`  
     */
    isResponsive?: boolean;

    /** 
     * Custom theme object that overrides the default light/dark themes.
     * If not provided, the default themes (LightTheme/DarkTheme) will be used.
     */
    theme?: Theme;
};

type ThemeContextType = {
    isResponsive?: boolean;
    theme?: ThemeTypes & {
        toggleThemeMode: () => void;
    };
    mode?: themeModeTypes;
};


export const Context = createContext<ThemeContextType | undefined>({
    isResponsive: true,
    mode: 'light',
    theme: { ...LightTheme, toggleThemeMode: () => { } }
});

const NativeProvider: React.FC<ProviderProps> = ({
    children,
    isResponsive = true,
    theme,
}) => {
    const [mode, setMode] = useState<themeModeTypes>('light');

    const toggleThemeMode = () => setMode((prev) => prev === 'dark' ? 'light' : 'dark');
    const setTheme = { ...((theme && theme[mode]) || (mode === 'light' ? LightTheme : DarkTheme)), toggleThemeMode };
    const value = useMemo(() => ({ theme: setTheme, isResponsive, mode }), [theme, mode]);
    return (<>
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    </>);
}
export default NativeProvider;
export type { ProviderProps };