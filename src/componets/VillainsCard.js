import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const lock = <FontAwesomeIcon icon={faUserLock} />
const wanted = <FontAwesomeIcon icon={faUserSecret} />

function VillainsCard({ villainToRender, handleVillainsSides, canGoToJail }) {
    // console.log(villainToRender)

    const clickHandler = () => {
        // console.log(villainToRender.name)

        handleVillainsSides(villainToRender)
    }


    return (

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
                        <button className="jailButton" onClick={clickHandler}>{canGoToJail ? lock : wanted }</button>

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