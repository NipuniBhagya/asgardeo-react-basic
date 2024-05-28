import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticatedComponent } from "@asgardeo/auth-react";
import { Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { InsightsPage } from "./pages/InsightsPage";

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
                <Route
                    path={ '/insights' }
                    element={
                        <AuthenticatedComponent fallback={ <Navigate to="/" /> }>
                            <InsightsPage />
                        </AuthenticatedComponent>
                    }
                    exact={ true }
                />
            </Routes>
        </Router>
    );
}

export default App;
