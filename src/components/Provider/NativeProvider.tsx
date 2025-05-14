import React, { createContext, useMemo, useState } from 'react';
import type { ReactNode } from "react";
import { LightTheme, DarkTheme } from '../../themes';
import type { scalingModeTypes, Theme, themeModeTypes, ThemeTypes } from '../../types';
import { setGlobalContext } from './ContextManager';

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
    // isResponsive?: boolean;

    /** 
     * Custom theme object that overrides the default light/dark themes.
     * If not provided, the default themes (LightTheme/DarkTheme) will be used.
     */
    theme?: Theme;

    options?: {
        defaultTheme?: themeModeTypes;
        scalingMode?: scalingModeTypes;
    }
};

type ThemeContextType = {
    theme?: ThemeTypes & {
        toggleThemeMode: () => void;
    };
    mode?: themeModeTypes;
    scaling: { mode: scalingModeTypes }
};


export const Context = createContext<ThemeContextType>({
    mode: 'light',
    theme: { ...LightTheme, toggleThemeMode: () => { } },
    scaling: { mode: 'partial' }
});

const NativeProvider: React.FC<ProviderProps> = ({
    children,
    theme,
    options
}) => {
    const [mode, setMode] = useState<themeModeTypes>(options?.defaultTheme ?? 'light');
    const toggleThemeMode = () => setMode((prev) => prev === 'dark' ? 'light' : 'dark');
    const setTheme = { ...((theme && theme[mode]) || (mode === 'light' ? LightTheme : DarkTheme)), toggleThemeMode };
    const value = useMemo(() => ({
        theme: setTheme,
        mode,
        scaling: { mode: options?.scalingMode ?? 'partial' }
    }), [theme, mode, options]);

    // useLayoutEffect(() => {
    //     setGlobalContext(value);
    // }, [value]);
    setGlobalContext(value);

    return (<>
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    </>);
}
export default NativeProvider;
export type { ProviderProps };