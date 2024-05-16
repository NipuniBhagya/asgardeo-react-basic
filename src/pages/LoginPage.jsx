import { useState } from "react";
import axios from "axios";

export const LoginPage = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [errors, setErrors ] = useState({});

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
                password: password
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
                <h2>Login to Continue</h2>
                <label htmlFor="username">Username</label>
                <input 
                    placeholder="Enter your username"
                    type="text" 
                    id="username" 
                    name="username" 
                    onChange={ (e) => setUsername(e.target.value) }
                />
                { errors.username && <span className="error">{errors.username}</span> }
                <label htmlFor="password">Password</label>
                <input 
                    placeholder="Enter your password"
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={ (e) => setPassword(e.target.value) }
                />
                { errors.password && <span className="error">{errors.password}</span> }
                <button type="submit">Submit</button>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </form>
        </div>
    )
};
