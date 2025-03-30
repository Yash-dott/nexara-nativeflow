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

const scalingCache = new Map<'hScale' | 'vScale' | 'fs', object>();

export const fun = () => {
    return scalingCache
}
const checkIsPhone = (size: number): number => {
    if (SCREEN_WIDTH <= 430 && SCREEN_WIDTH >= 375) {
        return size;
    }
    return 0;
}
export const horizontalScale = (size: number): number => {
    if (checkIsPhone(size)) {
        return size;
    }
    const hScaleCache: any = scalingCache.get('hScale') || {};
    if (hScaleCache?.[size]) {
        return hScaleCache?.[size];
    }
    const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.40;
    let scale = (shortDimension / guidelineBaseHeight);
    scale = 1 + (scale - 1) * slowDownRate;
    let adjustedSize = size * Math.max(scale, 0.80);
    const finalSize = Math.floor(PixelRatio.roundToNearestPixel(adjustedSize));
    hScaleCache[size] = finalSize;
    scalingCache.set('hScale', hScaleCache)
    return finalSize;
}


export const verticalScale = (size: number): number => {
    if (checkIsPhone(size)) {
        return size;
    }
    const vScaleCache: any = scalingCache.get('vScale') || {};
    if (vScaleCache?.[size]) {
        return vScaleCache?.[size];
    }
    const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.40;
    let scale = (longDimension / guidelineBaseHeight);
    scale = 1 + (scale - 1) * slowDownRate;
    let adjustedSize = size * Math.max(scale, 0.80);
    const finalSize = Math.floor(PixelRatio.roundToNearestPixel(adjustedSize));
    vScaleCache[size] = finalSize;
    scalingCache.set('vScale', vScaleCache)
    return finalSize;
}


export const moderateScale = (size: number, factor = 0.5): number => {
    if (isResponsive) {
        return size + ((shortDimension / guidelineBaseWidth * size) - size) * factor;
    } else {
        return size + factor + 1;
    }
}
export const moderateVerticalScale = (size: number, factor = 0.5): number => {
    if (isResponsive) {
        return size + (longDimension / guidelineBaseHeight * size) * factor;
    } else {
        return size + factor + 5;
    }
}

export const responsiveFontSize = (fontSize: number): number => {
    if (checkIsPhone(fontSize)) {
        return fontSize;
    }
    const fsCache: any = scalingCache.get('fs') || {};
    if (fsCache?.[fontSize]) {
        return fsCache?.[fontSize];
    }
    const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.20
    const screenDiagonal = Math.sqrt(SCREEN_WIDTH ** 2 + SCREEN_HEIGHT ** 2);
    const baseScreenDiagonal = Math.sqrt(360 ** 2 + 640 ** 2);
    let scale = screenDiagonal / baseScreenDiagonal;
    scale = 1 + (scale - 1) * slowDownRate;
    let adjustedFontSize = fontSize * Math.max(scale, 0.85);
    const finalSize = Math.floor(PixelRatio.roundToNearestPixel(adjustedFontSize));
    fsCache[fontSize] = finalSize;
    scalingCache.set('vScale', fsCache)
    return finalSize;
};





