import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return <>
    
    <div className='contentContact text-center py-5 ' >

<h2 className='H2BeforeContact position-relative' >CONATCT SECTION</h2>
    
    </div>
    

    <form className='container formCONTACT ' >

<div className="ONEinput w-50 mx-auto py-3">
<label htmlFor="UserNAME">UserName:</label>
<input type="text" id='UserNAME' placeholder='UserName ' className='form-control text-black' />
</div>

<div className="ONEinput w-50 mx-auto py-3">
<label htmlFor="UserAge">UserAge:</label>
<input type="number" id='UserAge' placeholder='UserAge ' className='form-control text-black' />
</div>

<div className="ONEinput w-50 mx-auto py-3">
<label htmlFor="UserEmail">UserEmail:</label>
<input type="email" id='UserEmail' placeholder='UserEmail ' className='form-control text-black' />
</div>

<div className="ONEinput w-50 mx-auto py-3">
<label htmlFor="UserPassword">UserPassword:</label>
<input type="password" id='UserPassword' placeholder='UserPassword ' className='form-control text-black' />
<button className='form-btn btn btn-outline-info rounded-2 my-5 mb-5 ' type='button' >Send Message</button>
</div>



    </form>
    
    
    
    
    
    
    
    </>
  }
}
