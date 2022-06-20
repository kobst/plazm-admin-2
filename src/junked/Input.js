
   
import React from 'react'
import styled from 'styled-components'

const InputText = styled.input`
border: 1px solid  ${props => props.usererror ? "#FF7171" : "#DBE2EA" };
height: 52px;
font-size: 16px;
line-height:21px;
width: 50%;
padding:0 15px;
margin-top:7px;
background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
font-family: 'IBM Plex Sans', sans-serif;
border-radius: 6px;
:focus{
    outline:none;
}
::placeholder{
color:#7C9CBF
}
@media (max-width:991px){
    height: 40px;
    font-size: 14px;
    line-height:19px 
}
@media (max-width:767px){
    height: 35px;
}
`

const Input = (props) => {
    return(
        <>
            <InputText ref={props.refs} {...props} usererror = {props.error}/>
            <h4>SEARCH BUSINESS</h4>

        </>
    )
}

export default Input
