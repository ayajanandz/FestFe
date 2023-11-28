import { Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import Pantheon_1 from './Components/Events/Pantheon_1';
import Pantheon_2 from './Components/Events/Pantheon_2';
import Pantheon_3 from './Components/Events/Pantheon_3';
import { AuthProvider } from './Components/Context/AuthContext';

import './App.css';

function App() {
  return (
   <div className='App'>
   <AuthProvider>
    <Route path='/' component={Homepage} exact />
    <Route path ='/dashboard' component ={Dashboard} exact/>
    <Route path = '/pantheon_1' component={Pantheon_1} exact />
    <Route path = '/pantheon_2' component={Pantheon_2} exact />
    <Route path = '/pantheon_3' component={Pantheon_3} exact />
    </AuthProvider>
   </div>
  );
}

export default App;
