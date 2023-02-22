// <-----------------Hooks------------------->//
import { useState, useEffect } from "react";

// <-----------------Icons------------------->//
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";

// ----------------Components-----------------
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";

// ----------------Styles--------------------//
import "./App.scss";

const App = () => {
  // <---------------------HOOKS------------------------->//
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);
  // const [pokemonNature, setPokemonNature] = useState([])

  useEffect(() => {
    getEvolutions(pokemonId);
  }, [pokemonId]);

  async function getEvolutions(id) {
    let response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();
    let pokemonEvolutionArray = [];

    let pokemonLv1 = data.chain.species.name;
    let pokemonLv1Img = await getPokemonImg(pokemonLv1);
    // let pokemonlv1Type = await getPokemonNature(pokemonLv1);
    pokemonEvolutionArray.push([pokemonLv1, pokemonLv1Img]);

    if (data.chain.evolves_to.length !== 0) {
      let pokemonLv2 = data.chain.evolves_to[0].species.name;

      let pokemonLv2Img = await getPokemonImg(pokemonLv2);
    //   let pokemonlv1Type2 = await getPokemonNature(pokemonLv2);
      pokemonEvolutionArray.push([pokemonLv2, pokemonLv2Img]);

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Img = await getPokemonImg(pokemonLv3);
        // let pokemonlv1Type3 = await getPokemonNature(pokemonLv3);
        pokemonEvolutionArray.push([
          pokemonLv3,
          pokemonLv3Img,
        ]);
      }
    }
    setPokemonEvolutions(pokemonEvolutionArray);
  }
  async function getPokemonImg(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    let artwork = data.sprites.other["official-artwork"].front_default;
    return artwork;
  }
//   async function getPokemonNature(name) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
//     const data = await response.json();
//     // console.log(data);
//     let types = data.types.length;

//     let type1 = data.types[0].type.name;
//     console.log(type1);

//     let type2 = data.types[1].type.name;
//     console.log(type2);

//     let type3 = data.types[0].type.name;

//     if ((types == 1) & (types == 2)) {
//       return `Tipo 1: ${type1} 
//             Tipo 2: ${type2}`;
//     }
//     return `Tipo 1: ${type1}`;
//   }

  function prevClickBtn() {
    pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1);
  }
  function nextClickBtn() {
    setPokemonId(pokemonId + 1);
  }

  return (
    <div className="app">
      <div className={`card-container card${pokemonEvolutions.length}`}>
        {pokemonEvolutions.map((pokemon) => (
          <Card
            key={pokemon[0]}
            name={pokemon[0]}
            img={pokemon[1]}
            nature={pokemon[2]}
          />
        ))}
      </div>

      <div className="button-container">
        <Button function={prevClickBtn} icon={<TiArrowLeftOutline />} />

        <Button function={nextClickBtn} icon={<TiArrowRightOutline />} />
      </div>
    </div>
  );
};

export { App };
