import React from 'react';

class Keypad extends React.Component {
    render() {
        return(
            <form> 
                <input 
                    type="password"
                    onKeyUp={() => console.log('Entering password...')}>
                </input>
            </form>
            
        )
    }
}

export default Keypad;