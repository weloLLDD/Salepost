import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'

function PrivanteRoute({component:Component, ...rest}) {
    return (
        <Route
        {...rest}
        component = {(props) =>{
            const token = window.localStorage.getItem("userInfo")
            if (token) {
                return <Component {...props}   />
            } else {
                return <Redirect to={"/login"}/>
            }
        }}
        />
          
     
    )
}

export default PrivanteRoute
