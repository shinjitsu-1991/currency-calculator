import React from 'react';
import SwitchButton from 'components/SwitchButton';
import 'styles/styles.scss'

const App = () => {
    return(
        <div className='app-wrap'>
            <SwitchButton animationType='from-outside' />
        </div>
    );
}

export default App;