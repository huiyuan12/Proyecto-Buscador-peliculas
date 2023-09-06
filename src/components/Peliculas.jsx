import React from 'react'
import ListadoPeliculas from './ListadoPeliculas'

function Peliculas({peliculas,alerta,titulo}) {
  return (
    <>
    {
        peliculas?.length > 0? (<>
        <h2 className='text-center mb-10 mt-5 text-2xl uppercase'>Peliculas de {titulo} 
        </h2><ListadoPeliculas titulo={titulo} peliculas={peliculas}/>
        
        </> ): alerta && <p>{alerta}</p>
    }
    </>
  )
}

export default Peliculas