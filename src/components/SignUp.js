import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import './SignUp.css';

// type FormValues = {
//     email: String
//     password: String
//     password2: String
// }

function SignUp() {
    const form = useForm()
    const { register, control, handleSubmit, watch, validate, formState } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log("Form has been submitted!", data)
    }

    return (
        <div className="signup">
            <div className="signup-div">
                <h3>Sign up to create your account</h3>
                <div className="form-div">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
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
                        <p className='errors'>{errors.email?.message}</p>

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
                        <p className='errors'>{errors.password?.message}</p>

                        <input
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword", {
                                required: {
                                    value: "true",
                                    message: "this is a required field*"
                                },
                                validate: (fieldValue) => fieldValue === watch("password") || "passwords do not match*"
                            })}
                            placeholder="Confirm password"
                        />
                        <p className='errors'>{errors.confirmPassword?.message}</p>

                        <button type="submit">sign up</button>
                        <p>Already have an account? <a href="/signin"><strong>Sign in</strong></a></p>
                    </form>
                    <DevTool control={control} />
                </div>
            </div>
        </div>
    )
};

export default SignUp;



// old form management

// function SignUp() {
//     const [username, setUsername] = useState(' ');
//     const [password, setPassword] = useState(' ');
//     const [passwordtwo, setPasswordTwo] = useState(' ');

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handlePasswordChangeTwo = (event) => {
//         setPasswordTwo(event.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     function validateForm() {
//         return username.length > 0 && password.length > 0 && passwordtwo.length > 0;
//     }

//     return (
//         <div className="signup">
//             <div className="signup-div">
//                 <h3>Sign up to create your account</h3>
//                 <div className="form-div">
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             placeholder="Enter phone number or email"
//                             // value={username}
//                             onChange={handleUsernameChange}
//                             type="email"
//                             required
//                         />
//                         <input
//                             // value={password}
//                             onChange={handlePasswordChange}
//                             type="password"
//                             placeholder="Enter password"
//                             required
//                         />
//                         <input
//                             // value={passwordtwo}
//                             onChange={handlePasswordChangeTwo}
//                             type="password"
//                             placeholder="Confirm password"
//                             required
//                         />
//                         <button type="submit" disabled={!validateForm}>sign up</button>
//                         <p>Already have an account? <a href="/signin"><strong>Sign in</strong></a></p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default SignUp;