import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import RightPart from './components/rightPart/RightPart';

function App() {
  return (
    <div className='App overflow-y-hidden flex'>
      <NavBar />
      <div className='grid grid-cols-1 col-span-10 w-full'>
        <Header />
        <RightPart />
      </div>
    </div>
  );
}

export default App;
