import Jail from './Jail';
import Wanted from './Wanted';
import CommentsForm from './CommentsForm';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  ReactDOM from 'react-dom';

function VillainHome() {
  const [villain, setVillain] = useState([]);
  const [villainsInJail, setVillainsInJail] = useState([]);
  const [commentsPost, setPost] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/villains")
      .then(response => response.json())
      .then(fetchedVillains => { console.log("Fetched: ", fetchedVillains)

    setVillain(fetchedVillains)
      })

  }, [])

  const VillainsWasClicked = (clickedVillains) => {
    console.log(clickedVillains)
    let villainFound = villainsInJail.find(eachVillainInJail => 
        eachVillainInJail.id === clickedVillains.id
        )
        if(!villainFound){
            setVillainsInJail([...villainsInJail, clickedVillains])
        }
        else{
            console.log("Hey! its add", clickedVillains.name)
        }
  }

  const VillainClickedRemove=(clickedVillains)=>{

    let filterVillain = villainsInJail.filter(eachVillainInJail=>
        eachVillainInJail.id !== clickedVillains.id
        )
        console.log(filterVillain)
        setVillainsInJail([...filterVillain])
  }

  useEffect(() => {
  fetch("http://localhost:3000/comments", {method: 'Post', headers:{'Content-Type': 'application/json'}, body: JSON.stringify()})
    .then(response => response.json())
    .then(commentsFetched => {console.log("Post-Fetch: ", commentsFetched)
        setPost(commentsFetched.id)
    })

  }, []);

    return(
        <div>
        <h1>Home</h1>
    {/* <BrowserRouter> */}
    {/* <Switch> */}
      {/* <Route path="/jail"> */}
        <Jail villainJailToMap={villainsInJail}
                alertVillain={VillainClickedRemove}
        />
      {/* </Route> */}
      {/* <Route path="/wanted"> */}
        <Wanted villainsToMap={villain}
                alertVillain={VillainsWasClicked}
        />
      {/* </Route> */}
      {/* <Route path="/comments"> */}
        <CommentsForm />
      {/* </Route> */}
          {/* </Switch> */}
      
          {/* </BrowserRouter> */}
        </div>
    )
}

// ReactDom.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/jail">
//         <Jail />
//       </Route>
//       <Route path="/wanted">
//         <Wanted />
//       </Route>
//       <Route path="/comments">
//         <CommentsForm />
//       </Route>
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
//)

export default VillainHome;