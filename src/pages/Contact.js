import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div>
      <form id="form">
        <label>
          <h2>Name:</h2>
          <input></input>
        </label>
        <label>
          <h2>Email Address:</h2>
          <input></input>
        </label>
        <label>
          <h2>Message:</h2>
          <textarea></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact