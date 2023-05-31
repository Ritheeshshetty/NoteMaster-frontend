import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a=useContext(noteContext)
  return (
    <div className='about'>
      <h1>About Website</h1>
        <p>Welcome to our note-taking website! We've built this platform with the goal of providing you with a secure and intuitive way to manage your notes.

Our website is built using modern frontend technologies such as HTML, CSS, JavaScript, and React. We've designed our user interface with simplicity and ease of use in mind, so you can quickly and easily create, edit, and delete notes.

To ensure the security of your data, we've implemented a backend using Node.js, a powerful and flexible server-side runtime for JavaScript. We've also chosen MongoDB as our database technology, which provides high-performance, scalable, and flexible data storage.

With our website, you can trust that your notes are safely stored and protected with secure authentication. Our platform offers you the convenience and flexibility to access your notes from anywhere, at any time.

We're dedicated to providing you with the best note-taking experience possible. If you have any questions or feedback, please don't hesitate to contact us using the provided contact form. We hope you enjoy using our website!{a.name}</p>
    </div>
  )
}

export default About