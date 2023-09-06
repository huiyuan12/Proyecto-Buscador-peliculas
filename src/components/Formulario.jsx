import React, { useEffect, useRef, useState } from 'react'

const Formulario = ({buscarPelicula,setError}) => {
    const [search,setSearch] = useState("");
    const [alerta,setAlerta] = useState("");
    const firstInput = useRef(true);
    useEffect(()=>{
      setError("");
      if(firstInput.current) {
        firstInput.current = search == "";
        return;
    }
    
      if(search ==="") {
         setAlerta("No puede estar vacio");
         return;
      }
      if(search.length < 3){
        setAlerta("Introduce mas de 3 letras")
        return;
      }
      setAlerta("");
    },[search])

    const handleSubmit = e =>{
        e.preventDefault();
        firstInput.current = search;
        if(search ==="") {
            setAlerta("No puede estar vacio");
            return;
         }
        if(search.length < 3){
            setAlerta("Introduce mas de 3 letras")
            return;
          }
        buscarPelicula(search);
    }
  return (
    <form action="" className='mt-10' onSubmit={handleSubmit}>
        {alerta && <p className='bg-red-300 mb-3 rounded uppercase font-bold text-white p-2 w-full'>{alerta}</p>}
    <div>
     <input value={search} onChange={e=>setSearch(e.target.value)} type='text' placeholder='Escribe tu pelicula' className='w-full py-2 px-3 block'></input>
     <input  type="submit" value="enviar" className='w-full bg-blue-600 mt-5 rounded-sm py-3 uppercase font-bold text-white cursor-pointer hover:bg-blue-500'></input>
    </div>
   </form>
  )
}

export default Formulario