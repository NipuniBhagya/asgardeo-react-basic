import { useState } from "react";
import axios from "axios";

export const SignUpPage = () => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [errors, setErrors ] = useState({});

    // Handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        // Username validation
        if (!username.trim()) {
            validationErrors.username = 'Username is required';
        }

        // Password validation
        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length === 0) {

            // Send the request to the server
            axios.post("http://localhost:8000/login", {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container-center with-bg">
            <form onSubmit={ () => handleSubmit() }>
                <h2>Sign up to Continue</h2>
                <label htmlFor="username">First Name</label>
                <input
                    placeholder="Ex: John"
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    onChange={ (e) => setFirstName(e.target.value) }
                />
                { errors.username && <span className="error">{errors.username}</span> }
                <label htmlFor="username">Last Name</label>
                <input 
                    placeholder="Ex: Doe"
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    onChange={ (e) => setLastName(e.target.value) }
                />
                { errors.username && <span className="error">{errors.username}</span> }
                <label htmlFor="username">Username</label>
                <input 
                    placeholder="Enter a unique username"
                    type="text" 
                    id="username" 
                    name="username" 
                    onChange={ (e) => setUsername(e.target.value) }
                />
                { errors.username && <span className="error">{errors.username}</span> }
                <label htmlFor="password">Password</label>
                <input 
                    placeholder="Enter a strong password"
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={ (e) => setPassword(e.target.value) }
                />
                { errors.password && <span className="error">{errors.password}</span> }
                <button type="submit">Submit</button>
                 <p>Already a member? <a href="/login">Sign In</a></p>
            </form>
        </div>
    )
};
