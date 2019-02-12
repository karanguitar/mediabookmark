import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import {Transition} from 'semantic-ui-react' 

class TextValidator extends ValidatorComponent {

    render() {
        const { errorMessages, validators, requiredError, validatorListener, inputType, ...rest } = this.props;

        if(inputType ==="textarea"){
            return(
            <div>
                <textarea
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                
                {this.errorText()}
            </div>
            )
        }else{
            return (
                <div>
                    <input
                        {...rest}
                        ref={(r) => { this.input = r; }}
                    />
                    
                    {this.errorText()}
                </div>
            );
        }
 

    }
 
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <Transition animation="slide down" duration={1000}>
            <div className="ui inverted red segment">
                {this.getErrorMessage()}
            </div>
            </Transition>
        );
    }
}
 
export default TextValidator;