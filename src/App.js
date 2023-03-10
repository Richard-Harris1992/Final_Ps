import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';
import ProfileForm from './components/Pages/ProfileForm';
import EditProfile from './components/Pages/EditProfile'


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="create-profile" element={< ProfileForm />} />
        <Route path="/:id/edit-profile" element={< EditProfile />} />
      </Routes>
    </Router>

)}

export default App;
