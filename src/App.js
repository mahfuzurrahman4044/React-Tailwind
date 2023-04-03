import './index.css';
import './App.css'
import Navbar from './component/Navbar/Navbar';
import PriceList from './component/PriceList/PriceList';
import Dashboard from './component/Dashboard/Dashboard';
import PhoneBar from './component/PhoneBar/PhoneBar';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <h4 className='text-6xl text-sky-600 font-semibold text-center'>Welcone to Tailwind</h4>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;