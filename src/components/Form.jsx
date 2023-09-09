import React from "react";


function FormComponent() {
    return <div>
        <h1>COMPOSE</h1>
        <form action="/register" method="post">
            <div class="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="titleText" aria-describedby="emailHelp" placeholder="Enter Title"/>
            </div>
            <div class="form-group">
                <label>Post</label>
                <textarea type="text" className="form-control" rows="8" name="postText"></textarea>
            </div>
            <br/>
                <button type="submit" className="btn btn-primary">Publish</button>
        </form>
    </div>
}

export default FormComponent;