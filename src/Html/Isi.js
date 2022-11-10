import React from 'react'
import { dino ,images, petanicode, w3school, skilvul, github, html, css, java} from '../Image/gambar'

const Isi = () => {
  return (
    <>
    <section id='profile'>
    <img width='400px' height='300px' src={skilvul}/>
        <h2>Profile</h2>
        <h1>Project Sendiri</h1>
    </section>
    

    <section id='about1'>
    <h1>Project Sendiri</h1>
        <p>From React JavaScript</p>
      <div id='foto'>
        <a href='https://www.w3schools.com/default.asp'>
          <img src={w3school} alt=''/>
         <h2 id='kata'>#About1</h2>
          </a>     
      
        <a href=''>
          <img src={images} alt='' height={200}/>
         <h2 id='kata'>#About2</h2>
          </a>     
     
      
         <a href='https://www.petanikode.com/tutorial/'>
         <img src={petanicode} alt='' height={200}/>
         <h2 id='kata'>#About3</h2>
          </a>        
        </div>
    </section> 

    <section id='program'>
      <div>
          <li>
            <a href='https://skilvul.com/courses/html-dasar'>
              <img src={html} width={400}/>
              <ol>Foto1</ol>
              </a>
          </li>
          <li>
            <a href='https://skilvul.com/courses/css-dasar'>
              <img src={css} width={400}/>
              <ol>Foto2</ol>
              </a>
          </li>
          <li>
            <a href='https://skilvul.com/courses/javascript-dasar'>
              <img src={java} width={400}/>
              <ol>Foto3</ol>
              </a>
          </li>
          <li>
            <a href='https://skilvul.com/courses/git-dan-github-dasar'>
              <img src={github} width={400} />
              <ol>Foto4</ol>
              </a>
          </li>
      </div>
    </section>

    </>
  )
}

export default Isi