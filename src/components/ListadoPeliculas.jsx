import React from 'react'

function ListadoPeliculas({peliculas,titulo}) {
  return (
    <ul className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {peliculas.map(element=>(
            <li key={element.id} className='text-center'>
                <h3>{element.titulo}</h3>
                <p>{element.año}</p>
                <img className='mx-auto' src={element.img} alt={`Imagen de la pelicula ${element.titulo}`}/>
            </li>
        ))}
    </ul>
  )
}

export default ListadoPeliculas