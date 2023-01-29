import React, { useState } from 'react'

export default function GlobalState() {
    let[state,setstate]=useState(false)
    function changeState(e)
    {
        setstate(e)
    }
  return {state,changeState}
}
