import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import Navbar from './components/Navbar';
import UserTable from './components/Table';
import AddUser from './components/AddUserForm';


function App() {

  return (
    <>
    <Navbar></Navbar>
    <AddUser></AddUser>
    <UserTable/>
    </>
  );
}

export default App;
