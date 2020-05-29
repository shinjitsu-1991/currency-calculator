import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const SwitchButton = (props) => {
    const [btnState, setBtnState] = useState(props.initialValue);
    let textInput = React.createRef();

    const checkerPosition = () => {
        return `switch-button__state state-${props.animationType}-${btnState}`;
    }

    useEffect(()=>{
        let maxWidth = 0;
        [].forEach.call(textInput.current.children,(item) => {
            if(item.clientWidth > maxWidth) {
                maxWidth = item.clientWidth;
            }
        })
        textInput.current.style.width = `${maxWidth*2}px`;
    })

    return(
        <div ref={textInput} onClick={() => setBtnState(!btnState)} className='switch-button'>
            <div className="switch-button__part switch-button__true">
                {props.trueValue}
            </div>
            <div className="switch-button__part switch-button__false">
                {props.falseValue}
            </div>
            <div className={checkerPosition()}></div>
        </div>
    );
}

SwitchButton.defaultProps = {
    trueValue: 'is',
    falseValue: 'is not',
    initialValue: true,
    animationType: 'move'
};

SwitchButton.propTypes = {
    trueValue : PropTypes.string,
    falseValue : PropTypes.string,
    initialValue : PropTypes.bool,
    animationType : PropTypes.oneOf(['fade', 'from-outside', 'move']),
};

export default SwitchButton;