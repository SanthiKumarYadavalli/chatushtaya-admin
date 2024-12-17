import { Button } from "@/components/ui/button"
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';
import AdminPage from './components/AdminPage';

function App() {
  return (
    // <Router>
    //   <div className="min-h-screen w-screen bg-slate-100">
    //     <Routes>
    //       <Route path="/" element={<LoginPage />} />
    //       <Route path="/admin" element={<AdminPage />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <Button>Click me</Button>
    </div>
  );
}

export default App;



