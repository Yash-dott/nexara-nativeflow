import { useContext } from 'react';
import { Context } from '../components/Provider/NativeProvider';


const useTheme = () => {
    const context = useContext(Context)?.theme;
    if (!context) {
        throw new Error('Ensure that your code is wrapped with NativeProvider in App.js, and make sure you are not using the useTheme hook outside of the NativeProvider.');
    }
    return context;
};

export default useTheme;