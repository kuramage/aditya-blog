import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("");
    const handelUpClick = ()=>{
        // console.log("uppercase is clicked");
        const newText=text.toUpperCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }
    const noOfWords = ()=>{
        if(text==''){
            return 0;
        }
        else{
            return text.split(" ").length;
        }
    }
    const handleLoClick = ()=>{
        const newText=text.toLowerCase();
        setText(newText);
    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">  
            <textarea className="form-control" id="myBox" rows="12" value={text} onChange={handelOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary </h2>
        <p> <b>{noOfWords()}</b> words and  <b>{text.length}</b> characters</p>
        <p><b>{0.008* noOfWords()} </b>minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
