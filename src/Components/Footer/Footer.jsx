import React, { Component } from 'react'

import './Footer.css'


export default class Footer extends Component {
  render() {
    return <>
    <footer className='MyFooter py-5' >
<div className='container py-5 ' >
<div className='row ' >
<div className='col-md-4 ' >
<div className='inerdiv  text-white text-center ' >
<h3>LOCATION</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
</div>
</div>
<div className='col-md-4' >
<div className='inerdiv  text-white text-center ' >
<h3>AROUND THE WEB</h3>
<div className='socialIcons d-flex justify-content-center align-items-center ' >
<div  className='DivIcon' >
  <i className='fa-brands fa-facebook mx-1' ></i>
</div>
<div className='DivIcon'>
  <i className='fa-brands fa-twitter mx-1' ></i>
</div>
<div className='DivIcon'>
  <i className='fa-brands fa-linkedin-in mx-1' ></i>
</div>
<div className='DivIcon'>
  <i className='fa-solid fa-globe mx-1' ></i>
</div>
</div>
</div>
</div>
<div className='col-md-4' >
<div className='inerdiv  text-white text-center ' >
<h3>ABOUT FREELANCER</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>
</div>
</div>
</div>
</footer>
<div className='cobyRight text-white text-center p-3 ' >
<p>Copyright &copy; Your Website 2021</p>
</div>
    </>
  }
}
