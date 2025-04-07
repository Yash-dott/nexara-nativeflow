import { Path, Svg } from "react-native-svg";

const Check = ({ size = 24, color = '#000' }) => {
    return (<>
        <Svg
            height={size}
            viewBox="0 -960 960 960"
            width={size}
            fill={color}
        >
            <Path  d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </Svg>

    </>);
}

export default Check;