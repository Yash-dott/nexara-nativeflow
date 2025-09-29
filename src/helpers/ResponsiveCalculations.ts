import { Dimensions, PixelRatio } from 'react-native';
import { getGlobalContext } from '../components/Provider/ContextManager';
import type { scalingModeTypes } from '../types';


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// const isResponsive = true;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const [shortDimension, longDimension] = SCREEN_WIDTH < SCREEN_HEIGHT ? [SCREEN_WIDTH, SCREEN_HEIGHT] : [SCREEN_HEIGHT, SCREEN_WIDTH];

type scalingCacheKey = 'hScale' | 'vScale' | 'fs';

const scalingCache = new Map<scalingCacheKey, object>();

const checkIsPhone = (size: number): number => {
    if (SCREEN_WIDTH <= 430 && SCREEN_WIDTH >= 375) {
        return size;
    }
    return 0;
}

const scale = (size: number, cacheKey: scalingCacheKey, mode: scalingModeTypes) => {
    if (checkIsPhone(size)) {
        return size;
    }
    const cacheScaleValue: any = scalingCache.get(cacheKey) || {};
    let finalSize;
    if (cacheScaleValue?.[size]) {
        return cacheScaleValue?.[size];
    }
    if (mode === 'partial') {
        // const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.40;
        const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.20;
        let scale = ((cacheKey === 'hScale' ? shortDimension : longDimension) / guidelineBaseHeight);
        scale = 1 + (scale - 1) * slowDownRate;
        let adjustedSize = size * Math.max(scale, 0.80);
        finalSize = Math.floor(PixelRatio.roundToNearestPixel(adjustedSize));
    } else {
        const baseScaleFactor = (cacheKey === 'hScale' ? (shortDimension / guidelineBaseWidth) : (longDimension / guidelineBaseHeight));
        const clampedScaleFactor = Math.max(0.9, Math.min(baseScaleFactor, 1.2));
        finalSize = Math.round(PixelRatio.roundToNearestPixel(size * clampedScaleFactor))
    }
    cacheScaleValue[size] = finalSize;
    cacheScaleValue[size] = finalSize;
    scalingCache.set(cacheKey, cacheScaleValue);
    return finalSize;
}

export const horizontalScale = (size: number): number => {
    const scalingMode = getGlobalContext().scaling.mode;
    return scale(size, 'hScale', scalingMode ?? 0);
}

export const verticalScale = (size: number): number => {
    const scalingMode = getGlobalContext().scaling.mode;
    return scale(size, 'vScale', scalingMode ?? 0);
}


// export const moderateScale = (size: number, factor = 0.5): number => {
//     if (isResponsive) {
//         return size + ((shortDimension / guidelineBaseWidth * size) - size) * factor;
//     } else {
//         return size + factor + 1;
//     }
// }
// export const moderateVerticalScale = (size: number, factor = 0.5): number => {
//     if (isResponsive) {
//         return size + (longDimension / guidelineBaseHeight * size) * factor;
//     } else {
//         return size + factor + 5;
//     }
// }

export const responsiveFontSize = (fontSize: number): number => {
    if (checkIsPhone(fontSize)) {
        return fontSize;
    }
    const fsCache: any = scalingCache.get('fs') || {};
    if (fsCache?.[fontSize]) {
        return fsCache?.[fontSize];
    }
    // const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.20
    const slowDownRate = SCREEN_WIDTH < 375 ? 2 : 0.15
    const screenDiagonal = Math.sqrt(SCREEN_WIDTH ** 2 + SCREEN_HEIGHT ** 2);
    const baseScreenDiagonal = Math.sqrt(360 ** 2 + 640 ** 2);
    let scale = screenDiagonal / baseScreenDiagonal;
    scale = 1 + (scale - 1) * slowDownRate;
    let adjustedFontSize = fontSize * Math.max(scale, 0.85);
    const finalSize = Math.floor(PixelRatio.roundToNearestPixel(adjustedFontSize));
    fsCache[fontSize] = finalSize;
    scalingCache.set('fs', fsCache)
    return finalSize;
};





