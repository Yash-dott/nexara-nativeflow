export type anchorLayoutTypes = {
    pageY: number;
    pageX: number;
    height: number;
    width: number;
}
export type menuLayoutTypes = {
    height: number;
    width: number;
}

const positionCalculations = ((anchorLayoutRef: anchorLayoutTypes, menuLayoutRef: menuLayoutTypes, placement: any) => {
    let positionValues = { top: 0, bottom: 0, left: 0, right: 0 };

    if (anchorLayoutRef.pageX < menuLayoutRef.width) {
        positionValues.left = anchorLayoutRef.pageX + anchorLayoutRef.width;
    } else {
        positionValues.left = anchorLayoutRef.pageX - menuLayoutRef.width;
    }
    // else if (anchorLayoutRef.current.pageX + menuLayoutRef.current.width > SCREEN_WIDTH) {
    //     positionValues.left = anchorLayoutRef.current.pageX - menuLayoutRef.current.width;
    // }

    if (placement === 'top') {
        positionValues.top = anchorLayoutRef.pageY;
    } else if (placement === 'bottom') {
        positionValues.top = (anchorLayoutRef.pageY - menuLayoutRef.height) + anchorLayoutRef.height;
    }
    return positionValues;
});

export {
    positionCalculations,
} 