import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/app' element={<OrphanagesMap />}></Route>
        </Routes>
      </Router>
    );
}

export default AppRoutes;