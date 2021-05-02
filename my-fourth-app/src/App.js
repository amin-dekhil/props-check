import './App.css';
import Profile from './profile/Profile'
import Image from './components/Image'
import myImg from './components/myImg.jpg'
import  HandleName from './components/HandleName'
import PropTypes from "prop-types";
function App() {
  const HandleClick=(e)=>{
    e.preventDefault();
    alert('mohamed amin')
}
  return (
    <div className="App">
      <Profile fullName="Mohamed amin" profession="student" bio="laurem"  ><Image imgUrl= {myImg} /></Profile>
      <HandleName onClick={HandleClick}/>
    </div> 
  );
}

export default App;
