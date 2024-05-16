import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage'; // Import the LandingPage component
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/Home' element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default App
