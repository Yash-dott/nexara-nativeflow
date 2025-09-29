import React, { useCallback, useState, type FC } from "react";
import { StyledView } from "../StyledComponents";
import type { RadioGroupProps } from "../../types";


const RadioGroup: FC<RadioGroupProps> = ({
    name,
    defaultValue,
    children,
    onSelect,
    ...rest
}) => {

    const [selectedChildren, setSelectedChildren] = useState<string>(defaultValue ?? '');

    const renderChildren = useCallback(() => {
        return React.Children.toArray(children).map((child) => {
            if (React.isValidElement<{ name: string; value: string; active: boolean; disabled?: boolean; onPress: () => void; }>(child)) {
                return React.cloneElement(child, {
                    active: selectedChildren === child.props.value,
                    onPress: () => {
                        if (!('disabled' in child.props) && !child?.props?.disabled) {
                            child.props?.onPress?.();
                            onSelect?.(name || child.props.name, child.props.value);
                            setSelectedChildren(child?.props?.value);
                        }
                    }
                })
            }
            return null;
        })
    }, [children, selectedChildren]);

    return (<>
        <StyledView flexDirection='row' gap={15} {...rest}>
            {renderChildren()}
        </StyledView>
    </>);
}
export default RadioGroup;