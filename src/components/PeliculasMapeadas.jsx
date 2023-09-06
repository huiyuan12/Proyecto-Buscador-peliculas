import React from 'react'

export default  peliculasMap = peliculas=>{
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
