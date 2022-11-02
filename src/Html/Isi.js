import React from 'react'
import { dino, foto} from '../Image/gambar'

const Isi = () => {
  return (
    <>
    <section id='profile'>
    <img width='400px' height='300px' src='https://sarkepo.com/wp-content/uploads/2022/06/pp-ultraman-wa-lucu-3.jpg'/>
        <h2>Profile</h2>
    </section>
    
    <section id='about'>
      <h2>#About</h2>
      <div id='gambar'>
        <img src={foto} alt=''/>
      </div>
    </section>
    </>
  )
}

export default Isi