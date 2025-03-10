import { Dimensions, PixelRatio } from 'react-native';
// import { useResponsive } from '../hooks';


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// const isResponsive = useResponsive();
const isResponsive = true;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const [shortDimension, longDimension] = SCREEN_WIDTH < SCREEN_HEIGHT ? [SCREEN_WIDTH, SCREEN_HEIGHT] : [SCREEN_HEIGHT, SCREEN_WIDTH];

const isTablet = () => {
    const aspectRatio = SCREEN_HEIGHT / SCREEN_WIDTH;
    return aspectRatio < 1.6 && longDimension >= 900;
};

export const horizontalScale = (size: number) => {
    const baseScaleFactor = shortDimension / guidelineBaseWidth;
    let scaledValue;

    if (isResponsive) {
        if (isTablet()) {
            scaledValue = size * (baseScaleFactor * 1);  
        } else {
            const clampedScaleFactor = Math.max(0.9, Math.min(baseScaleFactor, 1.2));
            scaledValue = size * clampedScaleFactor;
        }
    } else {
        scaledValue = size + 3;
    }

    return Math.round(PixelRatio.roundToNearestPixel(scaledValue));
}


export const verticalScale = (size: number) => {
    const baseScaleFactor = longDimension / guidelineBaseHeight;
    let scaledValue;

    if (isResponsive) {
        if (isTablet()) {
            scaledValue = size * (baseScaleFactor * 1);  
        } else {
            const clampedScaleFactor = Math.max(0.9, Math.min(baseScaleFactor, 1.2));
            scaledValue = size * clampedScaleFactor;
        }
    } else {
        scaledValue = size + 3;
    }

    return Math.round(PixelRatio.roundToNearestPixel(scaledValue));
}


export const moderateScale = (size: number, factor = 0.5) => {
    if (isResponsive) {
        return size + ((shortDimension / guidelineBaseWidth * size) - size) * factor;
    } else {
        return size + factor + 1;
    }
}
export const moderateVerticalScale = (size: number, factor = 0.5) => {
    if (isResponsive) {
        return size + (longDimension / guidelineBaseHeight * size) * factor;
    } else {
        return size + factor + 5;
    }
}


export const responsiveFontSize = (fontSize: number): number => {
    if (!isResponsive) return fontSize + 3;
    const screenDiagonal = Math.sqrt(Math.pow(SCREEN_WIDTH, 2) + Math.pow(SCREEN_HEIGHT, 2));
    const baseScreenWidth = 360;
    const baseScreenDiagonal = Math.sqrt(Math.pow(baseScreenWidth, 2) + Math.pow(640, 2));
    const scale = screenDiagonal / baseScreenDiagonal;
    const adjustedFontSize = fontSize * scale;
    return PixelRatio.roundToNearestPixel(adjustedFontSize);
};

export const responsiveWidth = (width: number): number => {
    const baseScreenWidth = 392;
    if (!isResponsive) return baseScreenWidth * width / 100
    return SCREEN_WIDTH * width / 100;
};

export const responsiveHeight = (height: number): number => {
    // console.log(SCREEN_HEIGHT < SCREEN_WIDTH)
    const baseScreenHeight = 838;
    if (!isResponsive) return baseScreenHeight * height / 100
    if (SCREEN_HEIGHT < SCREEN_WIDTH) {
        // return baseScreenHeight * height / 100
        return (SCREEN_HEIGHT * height / 100);
    }
    return SCREEN_HEIGHT * height / 100;
};
