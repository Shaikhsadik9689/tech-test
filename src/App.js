import ProfilePage from "./Components/ProfilePage";
import MainTab from "./Components/MainTab/MainTab"
import Login from "./Components/Login/Login"
import Sadiqu from './Components/sadiq/Sadiqu'
import "./App.css"
// import BasicInformation from "./Components/ChildTab/BasicInformation"

function App() {
  return (
    <div className="App">
      <MainTab /> 
      <Sadiqu/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
