import Jail from './Jail';
import Wanted from './Wanted';
import CommentsForm from './CommentsForm';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Home from "./Home";


function VillainHome() {
  const [villain, setVillain] = useState([]);
  const [villainsInJail, setVillainsInJail] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/villains")
      .then(response => response.json())
      .then(fetchedVillains => {
        // console.log("Fetched: ", fetchedVillains)

        setVillain(fetchedVillains)
      })

  }, [])

  const VillainsWasClicked = (clickedVillains) => {

    const villainGoingToJail = villain.indexOf(clickedVillains);
    console.log("CLICKING!!!!!!", villainGoingToJail)
    // console.log(clickedVillains)
    let villainFound = villainsInJail.find(eachVillainInJail =>
      eachVillainInJail.id === clickedVillains.id
    )
    if (!villainFound) {
      setVillainsInJail([...villainsInJail, clickedVillains])
      setVillain([...villain.slice(0, villainGoingToJail), ...villain.slice(villainGoingToJail + 1)])
    }
    else {
      // console.log("Hey! its add", clickedVillains.name)
    }
  }

  const VillainClickedRemove = (clickedVillains) => {
    let filterVillain = villainsInJail.filter(eachVillainInJail =>
      eachVillainInJail.id !== clickedVillains.id
    )
    console.log(filterVillain)
    setVillainsInJail([...filterVillain])
    setVillain([clickedVillains, ...villain])

  }

  // const RemoveFromWanted = () => {
  //   let fitlerWanted = villainsInJail.filter()
  // }


  return (
    <div className="route">
      {/* <h1>Home</h1> */}
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/jail">
            <Jail villainJailToMap={villainsInJail}
              alertVillain={VillainClickedRemove}
            />
          </Route>
          <Route path="/wanted">
            <Wanted villainsToMap={villain}
              alertVillain={VillainsWasClicked}
            />
          </Route>
          <Route path="/comments">

            <CommentsForm villainsToComments={villain}
            />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </BrowserRouter>
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