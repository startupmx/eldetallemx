import './App.css';
import logo from './assets/1.jpg'
import logo2 from './assets/2.jpg'
import logo3 from './assets/3.jpg'
import logo4 from './assets/4.jpg'
import logo5 from './assets/5.jpg'
import logo6 from './assets/6.jpg'
import logo7 from './assets/7.jpg'

//App
function App() {
  return (
    <div className="App">
      <img style={{width:'100%', height:'100%'}} src={logo} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo2} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo3} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo4} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo5} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo6} alt="" />
      <img style={{width:'100%', height:'100%'}} src={logo7} alt="" />
    </div>
  );
}
export default App;
