import React from "react"

const Button = props => {
console.log(props)
return(<button style={{padding:"20px",background:"blue", color:"white", borderRadius:"8px"}}>{props.children}</button>)
}
export default Button 