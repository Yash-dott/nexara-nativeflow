import deviceScreenSizeCategory from './DeviceSizeCategory'

const getGridValue = (propsSizeObj: Record<string, number>) => {
    interface DeviceCategory {
        size: string;
        value: number;
    }
    const propsSizeArray: [string, number][] = Object.entries(propsSizeObj);
    let screenSizeCategory: DeviceCategory = deviceScreenSizeCategory();
    let gridValue: number = 0;
    if (!propsSizeObj[screenSizeCategory.size]) {
        const filteredProps = propsSizeArray.filter((elem) => elem[1] || elem[0] === screenSizeCategory.size);
        filteredProps.splice(filteredProps.findIndex((e) => e[0] === screenSizeCategory.size), filteredProps.length);
        // @ts-ignore
        gridValue = filteredProps[filteredProps.length - 1][1];
    } else {
        // @ts-ignore
        gridValue = propsSizeObj[screenSizeCategory.size];
    }
    return gridValue;
}

export default getGridValue;