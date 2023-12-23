import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/shared/Dashboard";
import Users from "./components/shared/Users";

function App() {
  return (
    <Router>
<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="login" element={<div>this is login</div>} />

    </Routes>


    </Router>
    
  );
}

export default App;
