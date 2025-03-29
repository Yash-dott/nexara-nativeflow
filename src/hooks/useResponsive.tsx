import { useContext } from 'react';
import { Context } from '../components/Provider/NativeProvider';

const useResponsive = () => useContext(Context)?.isResponsive;

export default useResponsive;
