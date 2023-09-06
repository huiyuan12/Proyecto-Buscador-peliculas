import { useRef, useState } from 'react'

import './App.css'
import Formulario from './components/Formulario'
import ListadoPeliculas from './components/ListadoPeliculas'
import Peliculas from './components/Peliculas'

const peliculasMap = peliculas=>{
  {
    const peliculasMapeadas = peliculas.map(element=>{
      return {
      id: element.imdbID,
      año: element.Year,
      img: element.Poster,
      titulo: element.Title
    }})
    return peliculasMapeadas;
  }
}

function App() {
  const [peliculas,setPeliculas] = useState("");
  const [alerta,setAlerta] = useState("");
  const InputRepetido = useRef(true);
  const [error,setError] = useState(false);
  const [titulo,setTitulo] = useState("");
  const buscarPelicula = async (search)=>{
    
    try{
      if(InputRepetido.current === search) { setError(true); return;};
      setTitulo(search);
      const url = `https://www.omdbapi.com/?apikey=5ea920b3&s=${search}`
      const res = await fetch(url);
      const data = await res.json();
      InputRepetido.current = search;
      console.log(data)
      if(data.Search){
        const peliculas= peliculasMap(data.Search);
        setPeliculas(peliculas)
      }
      else if(data.Response)
      {
        setAlerta("No hay pelis")
        setPeliculas([])
      }
    }catch(error){
      console.log(error);
      setAlerta("No se han encontrado");
    }
  }
  return (
   <>
    <header className='flex justify-center flex-col items-center  bg-slate-400 py-5 '>
      <h1 className='text-4xl'> Buscador de peliculas</h1>
        <Formulario buscarPelicula={buscarPelicula} setError={setError}/>
        {error && <p> No puedes repetir la busqueda </p>}
    </header>
    <main>
      <Peliculas peliculas={peliculas} alerta={alerta} titulo={titulo}/>
    </main>
   </>
  )
}

export default App
