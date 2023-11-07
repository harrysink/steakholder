import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SignUp.css';

function SignUp() {
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [passwordtwo, setPasswordTwo] = useState(' ');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordChangeTwo = (event) => {
        setPasswordTwo(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function validateForm() {
        return username.length > 0 && password.length > 0 && passwordtwo.length > 0;
    }

    return (
        <div className="signup">
            <div className="signup-div">
                <h3>Sign up to create your account</h3>
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Enter phone number or email"
                            // value={username}
                            onChange={handleUsernameChange}
                            type="email"
                            required
                        />
                        <input
                            // value={password}
                            onChange={handlePasswordChange}
                            type="password"
                            placeholder="Enter password"
                            required
                        />
                        <input
                            // value={passwordtwo}
                            onChange={handlePasswordChangeTwo}
                            type="password"
                            placeholder="Confirm password"
                            required
                        />
                        <button type="submit" disabled={!validateForm}>sign up</button>
                        <p>Already have an account? <a href="/signin"><strong>Sign in</strong></a></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;