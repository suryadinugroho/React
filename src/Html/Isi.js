import React from 'react'
import { dino, skilvul1, skilvul2 ,images, petanicode, w3school, skilvul, github, html, css, java} from '../Image/gambar'

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
      <div id='programimg'>
          <li id='program1'>
            <a href='https://skilvul.com/courses/html-dasar'>
              <img src={html} width={400}/>
              <p>HTML Dasar</p>
              </a>
          </li>
          <li id='program1'>
            <a href='https://skilvul.com/courses/css-dasar'>
              <img src={css} width={400}/>
              <p>CSS Dasar</p>
              </a>
          </li>
          <li id='program2'>
            <a href='https://skilvul.com/courses/git-dan-github-dasar'>
              <img src={github} width={400} />
              <p>GihHub Dasar</p>
              </a>
          </li>
          <li id='program2'>
            <a href='https://skilvul.com/courses/javascript-dasar'>
              <img src={java} width={400}/>
              <p>JavaScript Dasar</p>
              </a>
          </li>
      </div>
    </section>

  <section id='about3'>
    <div>
      <li id='gambar1'>
      <a href='https://jobs.skilvul.com/' >
        <img src={skilvul1} width={1200} height={300}/>
      </a>
      </li>
      <li id='gambar2'>
      <a href='https://skilvul.com/home'>
        <img src={skilvul2} width={1200} height={300}/>
      </a>
      </li>
    </div>
  <div id='login'>
    <h1 id='h1-login'>Login</h1>
    <label>Name:</label><br/>
    <input type="text" name="name" id="name"  placeholder="Your Name" required=""/><br/>
    <label>Email:</label><br/>
    <input type="email" name="email" id="email"  placeholder="Your Email" required=""/><br/>
    <label>Password:</label><br/>
    <input type="password" name="password" id="password"  placeholder="Your Password" required=""/><br/>
   <a href='' type='button'>Masuk</a>
  </div>
  </section>
  

    </>
  )
}

export default Isi
   
    
    