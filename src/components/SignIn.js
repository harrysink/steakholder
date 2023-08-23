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
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username}
                onChange={handleUsernameChange}/>
            </label>
            <label>
                Password:
                <input type="password" value={password}
                onChange={handlePasswordChange}/>
            </label>
            <button type="submit" disabled={!validateForm}>Sign in</button>
        </form>
    )
};

export default SignIn;