import VillainsCard from "./VillainsCard";
import React from "react";

function Wanted(props) {
    // console.log("From Wanted", props)

    const oneVillainWasClicked=(clickedVillains)=>{
        console.log(clickedVillains)
         
    props.alertVillain(clickedVillains)

    }
     const canGoToJail = true
      
    return(<div>
        
            <h1>Wanted!</h1>

            {
                props.villainsToMap.map( eachVillain => {//console.log(eachVillain)
                
                return(

                    <VillainsCard
                                 canGoToJail={canGoToJail}
                                key={eachVillain.id}
                                villainToRender={eachVillain}
                                powerstats={eachVillain.powerstats}
                                appearance={eachVillain.appearance}

                                handleVillainsSides={oneVillainWasClicked}
                    />
                )
                
                })
            }
        </div>);
}

export default Wanted;