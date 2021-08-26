import React from "react";

function VillainsCard({villainToRender, handleVillainsSides}) {
    console.log(villainToRender)

const clickHandler=()=>{
    console.log(villainToRender.name)

    handleVillainsSides(villainToRender)
}


    return (
        // <div className='card' onClick={clickHandler}>
        //     <h2> {villainToRender.name}</h2>
        //     <img className='image' src={villainToRender.image} />
        //     <p>Intelligence: {villainToRender.powerstats.intelligence}</p>
        //     <p>Strength:{villainToRender.powerstats.strength}</p>
        //     <p>Speed:{villainToRender.powerstats.speed}</p>
        //     <p>Durability:{villainToRender.powerstats.durability}</p>
        //     <p>Power: {villainToRender.powerstats.power}</p>
        //     <p>Combat: {villainToRender.powerstats.combat}</p>
        //     <p>Height: {villainToRender.appearance.height}</p>
        //     <p>Weight: {villainToRender.appearance.weight}</p>
        //     <p>Gender: {villainToRender.appearance.gender}</p>
        //     <p>Race: {villainToRender.appearance.race}</p>
        // </div>
        <div className="collection">
        <div className="flipCard">

            <div className="flipCardInner">
                <div className="flipCardFront">
                    <h2 className="villainName">{villainToRender.name}</h2>
                    <img src={villainToRender.image} className="image" />
                    <p>Height: {villainToRender.appearance.height}</p>
                    <p>Weight: {villainToRender.appearance.weight}</p>
                    <p>Gender: {villainToRender.appearance.gender}</p>
                    <p>Race: {villainToRender.appearance.race}</p>
                </div>
                
                <div className="flipCardBack">                        
                    <button className="jailButton" onClick={clickHandler}>Go to Jail</button>

                    <p>Intelligence:{villainToRender.powerstats.intelligence}</p>
                    <p>Strength:{villainToRender.powerstats.strength}</p>
                    <p>Speed:{villainToRender.powerstats.speed}</p>
                    <p>Durability:{villainToRender.powerstats.durability}</p>
                    <p>Power: {villainToRender.powerstats.power}</p>
                    <p>Combat: {villainToRender.powerstats.combat}</p>
                    
                </div>
            </div>
            </div>
            </div>
        )
};
export default VillainsCard;