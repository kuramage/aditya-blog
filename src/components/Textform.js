import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("Enter your Text here");
    const handelUpClick = ()=>{
        // console.log("uppercase is clicked");
        const newText=text.toUpperCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="12" value={text} onChange={handelOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelUpClick}>Convert to uppercase</button>
    </div>
  )
}
