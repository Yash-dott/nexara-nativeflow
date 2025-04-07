import React from 'react';
import type { JSX } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, responsiveFontSize } from '../../helpers/ResponsiveCalculations';
import { StyledText } from '../StyledComponents';
import { DefaultTheme } from '../../constants/theme';

type HeaderProps = {
    title?: string;
    titleSize?: number;
    titleColor?: string;
    titleAlignment?: "center" | "auto" | "left" | "right" | "justify";
    bg?: string;
    renderRightIcon?: () => JSX.Element;
    renderLeftIcon?: () => JSX.Element;
    isBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    title = 'Header',
    titleSize = 13,
    titleColor = DefaultTheme.TEXT_TARTARY_COLOR,
    titleAlignment = 'center',
    bg = '#000',
    renderRightIcon,
    renderLeftIcon,
}) => {

    const Styles = StyleSheet.create({
        MAIN_CONT: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: moderateVerticalScale(13),
            paddingHorizontal: moderateScale(10),
            backgroundColor: bg,
            gap: moderateScale(10)
        },
        TEXT: {
            fontSize: titleSize && responsiveFontSize(titleSize),
            textAlign: titleAlignment,
            color: titleColor
            // fontFamily: FONTS_STYLES.POPPINS_SEMI_BOLD
        },
        RIGHT_ICON: {
            flexGrow: renderRightIcon && 0.1
        },
        LEFT_ICON: {
            flexGrow: renderLeftIcon && 0.1,
            alignItems: 'flex-end'
        }
    });

    // const navigation = useNavigation();

    return (<>
        <View style={Styles.MAIN_CONT}>
            <View style={Styles.RIGHT_ICON}>
                {renderLeftIcon &&
                    <TouchableOpacity
                    // onPress={() => navigation.goBack()}
                    >
                        {
                            renderLeftIcon()
                        }
                    </TouchableOpacity>
                }
            </View>
            <View style={{ flex: 1 }}>
                <StyledText primary style={Styles.TEXT} tas>{title}</StyledText>
            </View>
            <View style={Styles.LEFT_ICON}>
                {
                    renderRightIcon &&
                    renderRightIcon()
                }
            </View>
        </View>
    </>);
}
export default Header;
export type { HeaderProps };
