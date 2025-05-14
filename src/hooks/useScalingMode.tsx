import { useContext } from 'react';
import { Context } from '../components/Provider/NativeProvider';

const useScalingMode = () => useContext(Context)?.scaling;

export default useScalingMode;
