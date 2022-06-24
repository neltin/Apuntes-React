import React, { useEffect, useState } from 'react';

export default function ConsumoApi() {
  const [characters, setCharacters] = useState([]);

  //Trae los datos del servidor
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?page=2', {
      method: 'GET',
      //"body": {name: "martin", image: "martin.jpg"} Sirve para PATCH, POST, PUT
    })
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      {characters.map((character, key) => (
        <div key={key}>
          <img src={character.image} />
          <p>
            <strong>{character.name}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}
