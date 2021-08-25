import React from "react";

function CommentsForm({ villainsToComments }) {
    console.log(villainsToComments)
    const villainsInfo = villainsToComments.map(info => {
        return (
            <option value={info.name}>{info.name}</option>
        )
    })

    function submitForm(e) {
        e.preventDefault()
        console.log("helo")
    }
    
    
    return (
        <div className="formContainer">
            <form onSubmit={submitForm}>
                <label for="villainComments">Choose Villain</label>
                <select id="villainComments" name="villainComments">
                    {villainsInfo}
                </select>
                <label for="comments">Comments</label>
                <textarea id="comments" name="comments" placeholder="Write a comment..." style={{ height: 100 }}></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default CommentsForm;