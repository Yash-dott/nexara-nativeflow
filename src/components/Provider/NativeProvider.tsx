import React, { createContext, useMemo, useState } from 'react';
import type { ReactNode } from "react";
import { LightTheme, DarkTheme } from '../../themes';
import type { ThemeTypes } from "../../themes";


type Theme = {
    light: ThemeTypes;
    dark: ThemeTypes;
};

type ProviderProps = {
    children: ReactNode;
    isResponsive?: boolean;
    theme?: Theme;
}
type ThemeContextType = {
    isResponsive?: boolean;
    theme?: object & { toggleThemeMode: () => void };
    mode?: 'dark' | 'light';
}

type themeType = 'light' | 'dark';

export const Context = createContext<ThemeContextType | undefined>(undefined);

const NativeProvider: React.FC<ProviderProps> = ({
    children,
    isResponsive = true,
    theme,
}) => {
    const [mode, setMode] = useState<themeType>('light');

    const toggleThemeMode = () => setMode(mode === 'dark' ? 'light' : 'dark');
    const setTheme = { ...(theme ? theme[mode] : theme ?? (mode === 'light' ? LightTheme : DarkTheme)), toggleThemeMode };
    const value = useMemo(() => ({ theme: setTheme, isResponsive, mode }), [theme, mode]);

    return (<>
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    </>);
}
export default NativeProvider;
export type { ProviderProps };