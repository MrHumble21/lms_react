import React from 'react'
import {useParams, useLocation} from 'react-router-dom'

function ModuleDescription() {
  const {moduleId} = useParams()
  const location  = useLocation()
const info = [location.state]

  console.log(moduleId)
  return (
    <>
    <h1>Module desc ID - {moduleId}</h1>
    {
      info.map(x => (
        <div key={x.id}>
        <h2>{x.id}</h2>
        <h2>{x.email}</h2>
        <h2>{x.phone
        }</h2>
        </div>
      ))
    }
    </>
  )
}

export default ModuleDescription