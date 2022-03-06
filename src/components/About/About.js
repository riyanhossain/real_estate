import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../../App';
import Home1 from '../PAGE2/Home1/Home1'

function About() {
    let {id}=useParams();
    const houses=useContext(dataContext)
    const house=houses.filter(h=>id==h.id)
  return (
    <div>
        <Home1 house={house}/>
    </div>
  )
}

export default About