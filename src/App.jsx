import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage"; // Import the LandingPage component
import { HomePage } from "./pages/HomePage";
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import { Navigate } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <LandingPage /> } />
                <Route
                    path={ '/home' }
                    element={
                        <AuthenticatedComponent fallback={ <Navigate to="/" /> }>
                            <HomePage />
                        </AuthenticatedComponent>
                    }
                    exact={ true }
                />
            </Routes>
        </Router>
    );
}

export default App;
