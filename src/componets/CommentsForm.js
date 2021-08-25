import React, { useEffect } from "react";
import { useState } from "react";


function CommentsForm({ villainsToComments }) {
    console.log(villainsToComments)

    const [comments, setComments] = useState([]);
    const [villainSelected, setVillainSelected] = useState(`Abomination`);
    const [commentContent, setcommentContent] = useState([]);

    const villainsInfo = villainsToComments.map(info => {
        return (
            <option value={info.name}>{info.name}</option>
        )
    })


    function submitForm(e) {
        e.preventDefault()
        console.log("helo")
        commentsToVillain()
    }

    useEffect(()=>{
    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(commentsData => {console.log("Comments-Fetched:", commentsData)

    setComments(commentsData)
    })
    }, [])
    


    // const commentFound=()=>{

    // }

    // }

    const commentsToVillain=()=>{
        fetch("http://localhost:3000/comments", {method: 'Post', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(
            {name:villainSelected, comments:commentContent}
        )})
    .then(response => response.json())
    .then(commentsFetched => {console.log("Post-Fetch: ", commentsFetched)
        setComments([...comments, commentsFetched])
    })
    
    
    }

    function handleComment(e){
        // console.log(e.target.value)
        setcommentContent(e.target.value)
        console.log(commentContent)
    }

     function selectedVillain(e){
        // console.log(e.target.value)
        setVillainSelected(e.target.value)
     }
    
    const commentsName= comments.map(eachComment => {
        console.log(eachComment.name)
        return(<>
            <h2>{eachComment.name}</h2>
            <p>{eachComment.comments}</p>
        </>)
    })

    return (
        <div className="formContainer">
            <form onSubmit={submitForm}>
                <label for="villainComments">Choose Villain</label>
                <select onChange={selectedVillain} id="villainComments" name="villainComments">
                    {villainsInfo}
                </select>
                <label for="comments">Comments</label>
                <textarea onChange={handleComment} id="comments" name="comments" placeholder="Write a comment..." style={{ height: 100 }}></textarea>
                <input type="submit" value="Submit"></input>
            </form>
            {commentsName}
        </div>
    )
}

export default CommentsForm;