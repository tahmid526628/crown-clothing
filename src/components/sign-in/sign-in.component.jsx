import React from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

//we need to define class cause we need the access of states
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password );
            this.setState({ email: '', password: '' });

            alert("You've signed in");
        }catch(error) {
            console.error(error);
            alert(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have and account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />

                    <div className="button">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> { /*isGoogleSignIn for designing the sign in
                        button with google that is for different className*/ }
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;