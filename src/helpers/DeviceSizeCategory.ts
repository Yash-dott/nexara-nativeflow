import { Dimensions } from "react-native";
import { BreakPoints } from "../constants/breakPoints";
const { width: SCREEN_WIDTH } = Dimensions.get('window');



const deviceScreenSizeCategory = () => {
    const BreakPointsArray: [string, number][] = Object.entries(BreakPoints);
    // @ts-ignore
    let size = { size: BreakPointsArray[BreakPointsArray.length - 1][0], value: BreakPointsArray[BreakPointsArray.length - 1][1] }
    BreakPointsArray.some(([key, value], i) => {
        // @ts-ignore
        if (Math.floor(SCREEN_WIDTH) >= value && Math.floor(SCREEN_WIDTH) < BreakPointsArray[i + 1]?.[1] || i === BreakPointsArray.length - 1) {
            size = { size: key, value };
            return true;
        }
        return false;
    });
    return size;
}
export default deviceScreenSizeCategory;