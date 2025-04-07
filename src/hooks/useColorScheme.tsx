import { useContext } from 'react';
import { Context } from '../components/Provider/NativeProvider';

const useColorScheme = () => {
    const context = useContext(Context)?.mode;
    if (!context) {
        throw new Error('useColorScheme must be used within a NativeProvider');
    }
    return context;
};

export default useColorScheme;