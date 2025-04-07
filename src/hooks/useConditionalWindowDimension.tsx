import { useWindowDimensions } from "react-native";

const useConditionalWindowDimension = (isTrackDimension: boolean): { width: number | undefined; height: number | undefined } => {
    return isTrackDimension ? useWindowDimensions() : { width: undefined, height: undefined }
}

export default useConditionalWindowDimension;
