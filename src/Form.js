import React from 'react'

export default function Form() {
  return (
    <div className='Form'>

      <h1 className="title">Sign In</h1>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Email</label>
      </div>

      <div class="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Password</label>   
      </div>

    <button className='submitBtn'>Sign In</button>
    </div>
  )
}
