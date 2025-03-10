import React from 'react';
import { StyleSheet} from "react-native";
import { StyledView } from '../StyledComponents';


type SurfaceProps = {
  
}

const Surface: React.FC<SurfaceProps> = ({
  
}) => {

    const STYLES = StyleSheet.create({
        CONTAINER: {
            height: 100,
            width: 100,
            backgroundColor: '#fff',
            shadowColor: "#000",
            // shadowOffset: {
            //     width: 100,
            //     height: 100,
            // },
            // shadowOpacity: 0.43,
            // shadowRadius: 9.51,

            elevation: 15,
        }
    });

    return (<>
        <StyledView style={STYLES.CONTAINER}>

        </StyledView>
    </>);
};
export default Surface;
export type { SurfaceProps };
