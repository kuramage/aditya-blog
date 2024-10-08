import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("");
    const handelUpClick = ()=>{
        // console.log("uppercase is clicked");
        const newText=text.toUpperCase();
        setText(newText);
        props.alert('Text converted to Uppercase','success')
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
        props.alert('Text converted to Lowercase','success')
    }
    const handleClearClick = ()=> {
        setText("");
        props.alert('Cleared text','success')
    }
    const speakText = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
    const handelCopy = () => {
        navigator.clipboard.writeText(text);
        props.alert('Text Copied to clipboard','success')
    }
    const handelspace = () =>{
        const newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">  
            <textarea className="form-control " id="myBox" rows="12" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'darkgrey':'white'}}></textarea>
        </div>
        <button className="btn btn-success" onClick={handelUpClick}>Convert to uppercase</button>
        <button className='btn btn-success mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-success" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success mx-2" onClick={speakText} > Text-to-Speech</button>
        <button className="btn btn-success " onClick={handelCopy} > Copy Text</button>
        <button className="btn btn-success mx-2" onClick={handelspace} > Remove Extraspaces</button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary </h2>
        <p> <b>{noOfWords()}</b> words and  <b>{text.length}</b> characters</p>
        <p><b>{0.008* noOfWords()} </b>minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above box to preview it here"}</p>
    </div>
    </>
  )
}
