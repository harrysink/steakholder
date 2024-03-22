import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import './SignIn.css';

// type FormValues = {
//     email: String
//     password: String
//     password2: String
// }

function SignIn() {
    const form = useForm()
    const { register, control, handleSubmit, validate, formState } = form

    const onSubmit = (data) => {
        console.log("Form has been submitted!", data)
    }

    const { errors } = formState

    return (
        <div className="signin">
            <div className="signin-div">
                <h3>Sign in to your account</h3>
                <div className="form-div">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <input
                            type="email"
                            id="email"
                            {...register("email",{
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "invalid email format*"
                                },
                                required: {
                                    value: "true",
                                    message: "this is a required field*"
                                },
                                validate: (fieldValue) => !fieldValue.endsWith("baddomain.com") || "this domain is not supported"
                            })}
                            placeholder="Enter phone number or email"
                        />
                        <p className="errors">{errors.email?.message}</p>

                        <input
                            type="password"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: "true",
                                    message: "this is a required field*"
                                },
                                minLength: {
                                    value: 8,
                                    message: "password must be at least 8 characters*"
                                }
                            })}
                            placeholder="Enter password"
                        />
                        <p className="errors">{errors.password?.message}</p>

                        <button type="submit">sign in</button>
                        <p>Don't have an account yet? <a href="/signup"><strong>Sign up</strong></a></p>
                    </form>
                    <DevTool control={control}/>
                </div>
            </div>
        </div>
    )
};

export default SignIn;



// old form management

// function SignIn() {
//     const [username, setUsername] = useState(' ');
//     const [password, setPassword] = useState(' ');

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     function validateForm() {
//         return username.length > 0 && password.length > 0;
//     }

//     return (
//         <div className="signin">
//             <div className="signin-div">
//                 <h3>Sign in to your account</h3>
//                 <div className="form-div">
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             // value={username}
//                             onChange={handleUsernameChange}
//                             type="email"
//                             placeholder="Enter phone number or email"
//                             required
//                         />
//                         <input
//                             // value={password}
//                             onChange={handlePasswordChange}
//                             type="password"
//                             placeholder="Enter password"
//                             required
//                         />
//                         <button type="submit" disabled={!validateForm}>sign in</button>
//                         <p>Don't have an account yet? <a href="/signup"><strong>Sign up</strong></a></p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default SignIn;