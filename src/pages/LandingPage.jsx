import viteLogo from "../../public/vite.svg";
import reactLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

export const LandingPage = () => {
    
    const navigate = useNavigate();
    const { state, signIn, signOut } = useAuthContext();

    return (
        <div className='container-center'>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='button-container'>
                {
                    state?.isAuthenticated ? (
                        <button onClick={ () => signOut() }>Sign Out</button>
                    ) : (
                        <button onClick={ () => signIn() }>Sign In</button>
                    )
                }
                <button onClick={ () => navigate("/signup") }>Create Account</button>
            </div>
        </div>
    );
};
