import './styles.css'
import logo from './images/logo-calindra.svg'
import axios from 'axios'
import { useState } from 'react'
import Item from './components/item'

function App() {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState()

  const handleSearch = params => {
    axios.post('/api', {params})
      .then(res => {
        let data = JSON.parse(JSON.stringify(res.data))
        setResult(data)
      })
      .catch(err => console.log(err))
      console.log(params)
  }

  return (
    <div className='container'>
      <img src={logo} className='logo' alt='logo' />
      <input type='text' placeholder='Pesquisar' className='search' onChange={e => setSearch(e.target.value)} />
      <button className='button' onClick={() => handleSearch(search)}>Pesquisar</button>
    
    <div className='item-container'>
      {
        result ?
          result.items.map((r,i) =>
            <Item key={i}
            image={r.map['images.url'][r.map['images.url'].length -1]}
            name={r.map.name[0]} price={`${r.map.salePrice[0]}`} />
          )
        : null
      }
    </div>
      
    </div>
  );
}

export default App;
