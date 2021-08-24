import React from "react";
import VillainsCard from "./VillainsCard";

function Jail(props) {
    return (
    <>
        <h1>Jail</h1>
            {
                props.villainJailToMap.map(eachVillain => {//console.log(eachVillain)

                    return (

                        <VillainsCard key={eachVillain.id}
                            villainToRender={eachVillain}
                            powerstats={eachVillain.powerstats}
                            appearance={eachVillain.appearance}

                            handleVillainsSides={props.alertVillain}

                        />
                    )

                })
            }
    </>)
}

export default Jail;