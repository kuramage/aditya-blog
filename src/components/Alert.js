import React from 'react'

export default function Alert(props) {

    const capitalise = (mssg)=>{
        const letter= mssg.toLowerCase();
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }

  return (

      props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show `} role="alert">
         <strong>{capitalise(props.alert.type)}</strong>: {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

  )
}
