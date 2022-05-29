
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Category from './components/category';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          localStorage.getItem('token') == null ? <Route
            path="/"
            element={<Navigate to="/login" replace />}
          /> : <Route
            path="/login"
            element={<Navigate to="/" replace />}
          />
        }
        <Route path="/" element={<Category />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
