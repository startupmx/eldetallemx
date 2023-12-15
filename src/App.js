import './App.css';
import logo from './assets/11.jpg'
import logo2 from './assets/12.jpg'
import logo3 from './assets/13.jpg'

//App
function App() {
  return (
    <div className="App">
      <img style={{width:'100%', height:'100%'}} src={logo} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo2} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo3} alt="" />
    </div>
  );
}
export default App;
