import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../../App';
import Footer from '../Footer/Footer';
import H1S2 from './H1S2';
import NewPageSec1 from './NewPageSec1';
import NewPageSec2 from './NewPageSec2';

function About() {
    let {id}=useParams();
    const houses=useContext(dataContext)
    const house=houses.filter(h=>id==h.id)
  return (
    <div>
      <NewPageSec1 house={house}/>
      <H1S2 house={house}/>
        <Footer />
    </div>
  )
}

export default About