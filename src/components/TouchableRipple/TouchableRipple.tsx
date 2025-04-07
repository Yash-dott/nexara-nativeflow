// import React from 'react';
// import { Pressable, StyleSheet } from "react-native";
// import type { ViewStyle, StyleProp, PressableProps } from "react-native";
// import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';
// import { StyledView } from '../StyledComponents';


// type TouchableRippleProps = PressableProps & {
//     rippleColor?: string;
//     style?: StyleProp<ViewStyle>;
//     children?: React.ReactNode;
// }

// const TouchableRipple: React.FC<TouchableRippleProps> = ({
//     rippleColor = '#b6b6b681',
//     style,
//     children,
//     ...rest
// }) => {

//     const positionX = useSharedValue(0);
//     const positionY = useSharedValue(0);
//     const overlayHeight = useSharedValue(0);
//     const overlayWidth = useSharedValue(0);
//     const scale = useSharedValue(0);
//     const opacity = useSharedValue(1);

//     const STYLES = StyleSheet.create({
//         OVERLAY: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             zIndex: -1
//         }
//     });

//     const effectAnimatedStyle = useAnimatedStyle(() => {
//         const radius = Math.sqrt(overlayWidth.value ** 2 + overlayHeight.value ** 2);
//         return {
//             height: radius * 2,
//             width: radius * 2,
//             opacity: opacity.value,
//             borderRadius: radius,
//             backgroundColor: rippleColor,
//             transform: [
//                 { translateX: positionX.value - radius },
//                 { translateY: positionY.value - radius },
//                 {
//                     scale: scale.value
//                 }
//             ]
//         }
//     });

//     const onGesturePress = !props.disabled ? Gesture.Tap().runOnJS(true).onTouchesDown(({ allTouches }: { allTouches: any }) => {
//         positionX.value = allTouches[0].x;
//         positionY.value = allTouches[0].y;
//         opacity.value = 1;
//         scale.value = 0;
//         scale.value = withTiming(1, { duration: 600 });
//     }).onTouchesUp(() => {
//         opacity.value = withTiming(0, { duration: 800 });
//     }).onTouchesCancelled(() => {
//         opacity.value = withTiming(0, { duration: 800 });
//     }) : Gesture.Simultaneous();


//     return (<>
//         <GestureHandlerRootView style={{ width: '100%' }}>
//             <GestureDetector gesture={onGesturePress}>
//                 <Pressable
//                     {...rest}
//                 >
//                     <StyledView
//                         overflow='hidden'
//                         onLayout={({ nativeEvent: { layout: { height, width } } }) => {
//                             overlayHeight.value = height;
//                             overlayWidth.value = width;
//                         }}
//                         style={style}
//                     >
//                         {children}
//                         <Animated.View style={[STYLES.OVERLAY, effectAnimatedStyle]} />
//                     </StyledView>
//                 </Pressable>
//             </GestureDetector>
//         </GestureHandlerRootView>
//     </>);
// };
// export default TouchableRipple;
// export type { TouchableRippleProps };
