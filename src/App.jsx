import './App.css';
import { Header } from './components/Header';
import { Lista } from './components/Lista';
import { Search } from './components/Search';
import { Workers } from './components/Workers';

function App() {
  return (
    <>
      <Header />
      {/* <Lista /> */}
      <div className='home' >
        <Search />
        <Workers />
      </div>
    </>
  )
}

export default App;
