import React from 'react'
import './Form.css'

function Form(props) {
    return(
        <div className="generator">

            <div className="flex-row">
                <form className="meme-form" onSubmit={props.generateMeme}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Enter Top Text"
                        value={props.data.topText}
                        onChange={props.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Enter Bottom Text"
                        value={props.data.bottomText}
                        onChange={props.handleChange}
                    />

                    <button>Generate</button>
                </form>
            </div>

            <div className="flex-row">
                <div className="meme">
                    <img src={props.data.randomImage} alt="" />
                    {/* Below are two statements that render conditionally and 
                    do functionally the same thing but with different operators */}
                    <p className="top">
                        {props.data.randomImage !== "" && props.data.topText}
                    </p>
                    <p className="bottom">
                        {props.data.randomImage === "" ? "" : props.data.bottomText}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Form