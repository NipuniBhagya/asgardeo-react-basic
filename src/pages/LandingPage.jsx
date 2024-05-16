import viteLogo from "../../public/vite.svg";
import reactLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    
    const navigate = useNavigate();

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
                <button onClick={ () => navigate("/login") }>Sign In</button>
                <button onClick={ () => navigate("/signup") }>Create Account</button>
            </div>
        </div>
    );
};
