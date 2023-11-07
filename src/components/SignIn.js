import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SignIn.css';

function SignIn() {
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    return (
        <div className="signin">
            <div className="signin-div">
                <h3>Sign in to your account</h3>
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <input
                            // value={username}
                            onChange={handleUsernameChange}
                            type="email"
                            placeholder="Enter phone number or email"
                            required
                        />
                        <input
                            // value={password}
                            onChange={handlePasswordChange}
                            type="password"
                            placeholder="Enter password"
                            required
                        />
                        <button type="submit" disabled={!validateForm}>sign in</button>
                        <p>Don't have an account yet? <a href="/signup"><strong>Sign up</strong></a></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignIn;