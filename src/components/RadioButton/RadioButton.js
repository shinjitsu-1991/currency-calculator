import React, {useState} from 'react';

const RadioButton = (props) => {
    const [btnState, setBtnState] = useState(props.initialValue);

    const checkerPosition = () => {
        return `radio-button__state state-${props.animationType}-${btnState}`;
    }

    return(
        <div onClick={() => setBtnState(!btnState)} className='radio-button'>
            <div className="radio-button__part radio-button__true">
                {props.trueValue}
            </div>
            <div className="radio-button__part radio-button__false">
                {props.falseValue}
            </div>
            <div className={checkerPosition()}></div>
        </div>
    );
}

RadioButton.defaultProps = {
    trueValue: 'is',
    falseValue: 'is not',
    initialValue: true,
    animationType: 'move'
};

RadioButton.propsType = {
    trueValue : (props, propName, componentName) => {
        const value = props[propName];
        if(typeof value === "string") {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    },
    falseValue : (props, propName, componentName) => {
        const value = props[propName];
        if(typeof value === "string") {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a string`);
    },
    initialValue : (props, propName, componentName) => {
        const value = props[propName];
        if(typeof value === "boolean") {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be a boolean`);
    },
    animationType : (props, propName, componentName) => {
        const value = props[propName];
        if(value === "move" || value === "fade") {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be 'move' or 'fade' or 'from-outside'`);
    },

};

export default RadioButton;