import React, { useState, useEffect } from 'react'

 function GetPosts() {
  const [pokemon, setPokemon] = useState([]);
  const [ability, setAbility] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25&offset=25")
    .then((response) => response.json())
    // console.log(response.json())
    // .then((data) => setPosts(data.results));
    .then((data) => setPokemon(data.results))
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/ability")
    .then((response) => response.json())
    // console.log(response.json())
    // .then((data) => setPosts(data.results));
    .then((data) => setAbility(data.results))
  }, []);
  

  return (
    <div className='main-container'> {pokemon && pokemon.map((poke, idx ) => {
      return (
        <div key={idx}>
          <h1>{poke.name}</h1>
          <h1>{}</h1>
        </div>

      )

    })}
      



    </div>
  )
}

export default GetPosts;