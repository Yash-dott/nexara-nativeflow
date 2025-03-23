import deviceScreenSizeCategory from './DeviceSizeCategory';

interface DeviceCategory {
    size: string;
    value: number;
}

const getGridValue = (propsSizeObj: Record<string, number>, windowWidth: number | undefined) => {
    const propsSizeArray: [string, number][] = Object.entries(propsSizeObj);
    let screenSizeCategory: DeviceCategory = deviceScreenSizeCategory(windowWidth);
    let gridValue: number = 0;
    if (!propsSizeObj[screenSizeCategory.size]) {
        const arrIndex = propsSizeArray.findIndex(([size]) => size === screenSizeCategory.size);
        for (let index = arrIndex - 1; index >= 0; index--) {
            if (propsSizeArray[index]?.[1]) {
                gridValue = propsSizeArray[index]?.[1] as number;
                break;
            }
        }
    } else {
        gridValue = propsSizeObj[screenSizeCategory.size] as number;
    }
    return gridValue;
}

export default getGridValue;