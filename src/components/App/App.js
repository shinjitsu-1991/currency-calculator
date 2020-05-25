import React from 'react';
import RadioButton from 'components/RadioButton';
import 'styles/styles.scss'

const App = () => {
    return(
        <div className='app-wrap'>
            <RadioButton animationType='from-outside' />
        </div>
    );
}

export default App;