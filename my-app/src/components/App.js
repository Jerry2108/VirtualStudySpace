import logo from '../logo.svg';
import '../css/App.css';
import SignIn from './SignIn';
import TopBar from './TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendListItem from './FriendListItem'
import Layout from './Layout';
import Firebase, {auth} from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

//import Name from './Name';
function App() {
  const [user] = useAuthState(auth);
  return (

    
    <div className="App">
      <TopBar /> 
         {/* <Name /> */}
         {
          user && (<Layout />)
         }
        
      
    </div>
  );
}

export default App;
