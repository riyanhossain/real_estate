import React from 'react'
import Footer from '../Footer/Footer'
import HomeSec from '../HomeSec/HomeSec'
import HomeSec2 from '../HomeSec2/HomeSec2'
import HS3 from '../HomeSec3/HS3'
import HS4 from '../HomeSec4/HS4'
import HS5 from '../HomeSec5/HS5'
import HS6 from '../HomeSec6/HS6'

function Home() {
  return (
    <div >
        <HomeSec/>
        <HomeSec2/>
        <HS3/>
        <HS4/>
        <HS5/>
        <HS6/>
        <Footer/>
    </div>
  )
}

export default Home