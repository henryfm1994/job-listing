import './App.css';
import React, { useEffect, useState } from 'react'
import workers from "./assets/data.json"
import { Search } from './components/Search';
import { Workers } from './components/Workers';

function App() {

  const [search, setSearch] = useState("search-close")

  const [buscar, setBuscar] = useState([]);

  const deleteItem = (item) => {
    setBuscar(buscar.filter(del => item !== del))

  }

  const addItem = (item) => {
    const newBusc = item;
    setBuscar([...buscar, newBusc]);
    setSearch("search")
  }

  const addDel = (item) => {
    // console.log(item);
    const aux = buscar.filter(elem => item === elem)
    // console.log(aux);
    if (aux.length !== 0) {
      deleteItem(item)
    } else {
      addItem(item)
    }
  }

  const workerList = workers.map(
    worker => <Workers
      key={worker.id}
      logo={worker.logo}
      company={worker.company}
      nuevo={worker.new}
      featured={worker.featured}
      position={worker.position}
      postedAt={worker.postedAt}
      contract={worker.contract}
      location={worker.location}
      role={worker.role}
      level={worker.level}
      languages={worker.languages}
      addDel={addDel}
    />)

  useEffect(() => {
    if (buscar.length !== 0) {
      setSearch("search")
    } else {
      setSearch("search-close")
    }
  }, [buscar])

  return (
    <>
      <div className='head'></div>

      <div className='home' >
        <Search search={search} setSearch={setSearch} buscar={buscar} setBuscar={setBuscar} deleteItem={deleteItem} addItem={addItem} />
        <div>
          {workerList}
        </div>
      </div>
    </>
  )
}

export default App;
