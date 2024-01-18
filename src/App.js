import './App.css';
import logo from './assets/1.jpg'
import logo2 from './assets/2.jpg'

//App
function App() {
  return (
    <div className="App">
      <img style={{width:'100%', height:'100%'}} src={logo} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo2} alt="" />
    </div>
  );
}
export default App;
