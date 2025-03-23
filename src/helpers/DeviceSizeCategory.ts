import { Dimensions } from "react-native";
import { BreakPoints } from "../constants";
const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface DeviceCategory {
    size: string;
    value: number;
}

const deviceScreenSizeCategory = (windowWidth: number = SCREEN_WIDTH): DeviceCategory => {
    if (windowWidth >= BreakPoints.xl) {
        return { size: 'xl', value: BreakPoints.xl };
    } else if (windowWidth >= BreakPoints.lg) {
        return { size: 'lg', value: BreakPoints.xl };
    } else if (windowWidth >= BreakPoints.md) {
        return { size: 'md', value: BreakPoints.md };
    } else if (windowWidth >= BreakPoints.sm) {
        return { size: 'sm', value: BreakPoints.sm };
    }
    return { size: 'xs', value: BreakPoints.xs };
}
export default deviceScreenSizeCategory;