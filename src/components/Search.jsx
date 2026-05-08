import { useState } from 'react'

const Search = ({onSearch}) => {
  const [query, setQuery] = useState("")
  const [categorias, setCategorias] = useState([])
  const [marcas, setMarcas] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value)
    onSearch(e.target.value, categorias, marcas)
  }

  const handleCategoria = (e) => {
    const {value, checked} = e.target
    const nuevasC = checked ? [...categorias, value] : categorias.filter(c => c !== value)
    setCategorias(nuevasC)
    onSearch(query, nuevasC, marcas)
  }

  const handleMarca = (e) => {
    const {value, checked} = e.target
    const nuevasM = checked ? [...marcas, value] : marcas.filter(c => c !== value)
    setMarcas(nuevasM)
    onSearch(query, categorias, nuevasM)
  }

  return (
    <section>
        <input type="search" placeholder="Busca tu Fragancia" value={query} onChange={handleChange} className="searchbar my-2"/>
        <h3 className='mt-4'>Filtrar por</h3>
        <div className='mt-3'>
          <h4>Categoría:</h4>
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Dama" onChange={handleCategoria} /> Dama
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Caballero" onChange={handleCategoria} /> Caballero
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Unisex" onChange={handleCategoria} /> Unisex
          </label>
        </div>
        <div className="mt-3">
          <h4>Marca:</h4>
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Afnan" onChange={handleMarca} /> Afnan
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Armaf" onChange={handleMarca} /> Armaf
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Emper" onChange={handleMarca} /> Emper
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Jean Paul Gaultier" onChange={handleMarca} /> Jean Paul Gaultier
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Katy Perry" onChange={handleMarca} /> Katy Perry
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Lattafa" onChange={handleMarca} /> Lattafa
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Moschino" onChange={handleMarca} /> Moschino
          </label>
          <br />
          <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="Nautica" onChange={handleMarca} /> Nautica
          </label>
        </div>
    </section>
  )
}

export default Search