import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Hello = () => {
    const [initialState, setIntialState] = useState([])

    // fetch api and if response ok return res.json then whatever the json is, set the state to what we get from the backend
    useEffect(() => {
        fetch('/api/').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setIntialState(jsonResponse.hello))
    }, [])

    console.log(initialState)
    // if something in it, look through intital state. with data there .map to e
    return (<div>
        {initialState.length > 0 && initialState.map((e, i) => <li key={i}>{e}</li>)}
    </div>
    )
}