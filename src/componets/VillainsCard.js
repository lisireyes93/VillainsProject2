import React from "react";

function VillainsCard({villainToRender, handleVillainsSides}) {
    console.log(villainToRender)

const clickHandler=()=>{
    console.log(villainToRender.name)

    handleVillainsSides(villainToRender)
}


    return (
        <div className='card' onClick={clickHandler}>
            <h2> {villainToRender.name}</h2>
            <img className='image' src={villainToRender.image} />
            <p>Intelligence: {villainToRender.powerstats.intelligence}</p>
            <p>Strength:{villainToRender.powerstats.strength}</p>
            <p>Speed:{villainToRender.powerstats.speed}</p>
            <p>Durability:{villainToRender.powerstats.durability}</p>
            <p>Power: {villainToRender.powerstats.power}</p>
            <p>Combat: {villainToRender.powerstats.combat}</p>
            <p>Height: {villainToRender.appearance.height}</p>
            <p>Weight: {villainToRender.appearance.weight}</p>
            <p>Gender: {villainToRender.appearance.gender}</p>
            <p>Race: {villainToRender.appearance.race}</p>
        </div>

        )
};
export default VillainsCard;