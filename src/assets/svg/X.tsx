import { Path, Svg } from "react-native-svg";

const X = ({ size = 24, color = '#000' }) => {
    return (
        <Svg
            height={size}
            viewBox="0 -960 960 960"
            width={size}
            fill={color}
        >
            <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </Svg>
    );
}

export default X;