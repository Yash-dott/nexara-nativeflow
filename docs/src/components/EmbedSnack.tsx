import { useColorMode } from "@docusaurus/theme-common";
import React, { useEffect, useRef } from "react";
import Gist from 'react-gist';




const EmbedSnack: React.FC = () => {
    const { colorMode } = useColorMode();
    const snackRef = useRef<HTMLDivElement | null>(null);
    // console.log(colorMode)

    useEffect(() => {
        // updateSnackTheme();
        // getCode();
    }, [colorMode]);


    //     const getCode = () => {
    //         const code = {
    //             "files": {
    //                 "App.js": {
    //                     "type": "CODE",
    //                     "contents": `
    // import React from 'react';
    // import { View, Text } from 'react-native';

    // export default function App() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text style={{ fontSize: 20, color: '${colorMode === "dark" ? "white" : "black"}' }}>
    //                 Hello from Expo Snack!
    //             </Text>
    //         </View>
    //     );
    // }`
    //                 }
    //             }
    //         };
    //         const snackJSON = encodeURIComponent(JSON.stringify(code));
    //         // const data = await fetch('https://cors-anywhere.herokuapp.com/https://gist.github.com/Yash-dott/9a52f619584b0e8cb91e0b96919ee884.json');
    //         // const res = await data.json();
    //         // console.log(res)
    //         return snackJSON
    //     }

    // const updateSnackTheme = () => {
    //     if (snackRef.current) {
    //         const snackEmbed = snackRef.current.querySelector('#expo-snack');
    //         if (snackEmbed) {
    //             snackEmbed.remove();
    //         }
    //         console.log("okk")
    //         const newSnackEmbed = document.createElement('div');
    //         newSnackEmbed.setAttribute('id', 'expo-snack');
    //         // newSnackEmbed.setAttribute('data-snack-id', '@yash777/courageous-red-mixed-nuts');
    //         newSnackEmbed.setAttribute('data-snack-platform', 'web');
    //         newSnackEmbed.setAttribute('data-snack-preview', 'true');
    //         newSnackEmbed.setAttribute('data-snack-theme', colorMode);
    //         newSnackEmbed.setAttribute("data-snack-dependencies",  '@nexara/nativeflow, react-native-paper');
    //         newSnackEmbed.setAttribute("data-snack-code", `
    //             import React from 'react';
    //             import { View, Text } from 'react-native';
                
    //             export default function App() {
    //                 return (
    //                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //                         <Text style={{ fontSize: 20, color: '${colorMode === "dark" ? "white" : "black"}' }}>
    //                             Hello from Expo Snack!
    //                         </Text>
    //                     </View>
    //                 );
    //             }
    //                         `);
    //         snackRef.current.appendChild(newSnackEmbed);

    //         const script = document.createElement('script');
    //         script.src = 'https://snack.expo.dev/embed.js';
    //         script.async = true;
    //         document.body.appendChild(script);
    //     }
    // };

    return (<>
        <div ref={snackRef} />
        {/* <iframe
            src={`https://snack.expo.dev/?platform=web&theme=${colorMode}&preview=true&code=${getCode()}`}
            style={{ width: '100%', height: 500, border: 'none' }}
            allowFullScreen
        /> */}
        <div>
            <Gist id="Yash-dott/9a52f619584b0e8cb91e0b96919ee884" />
        </div>
        {/* <div id="expo-snack"
            data-snack-id="@yash777/courageous-red-mixed-nuts"
            data-snack-platform="web"
            data-snack-preview="true"

            // data-snack-theme={colorMode}
            ref={snackRef}
        /> */}
    </>);
}
export default EmbedSnack;