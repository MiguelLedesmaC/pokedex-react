import { useState, useEffect } from "react";
import { Button } from "./components/button/Button";
import './App.scss';


const App = ()=> {

    let [pokemonNumber, setPokemonNumber] = useState(1);
    let [pokemonName, setPokemonName] = useState('');

    function increaseNumber (){
        setPokemonNumber(pokemonNumber + 1);
        // console.log(`Pokemon antes del render: ${pokemonNumber}`);
    }
    useEffect(()=>{
        // console.log(`Pokemon despues del render: ${pokemonNumber}`);
        //Dentro de useEffect Aqui debemos llamar al API
        // todo Consumir una API  con fetch
    //    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    //    .then(result => result.json())
    //    .then(data => setPokemonName(data.name));
    
    searchPokemon(pokemonNumber)

    },[pokemonNumber]);

    // Promesa await Async
    let searchPokemon = async pokemonNumber => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        const data = await response.json();
        setPokemonName(data.name)       
    }


    return(
        <>
            <div className="button-container">
                <Button text='Siguiente' />
                <Button text='Anterior' />
            </div>
            
            {/* <button onClick={increaseNumber}>Next</button> */}
            <div>{pokemonNumber} - {pokemonName}</div>
        </>
        
    )
}

export {App}