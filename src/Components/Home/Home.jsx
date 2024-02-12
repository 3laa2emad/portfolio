import React, { Component } from 'react'
import myImg from '../../img/avataaars.svg'

import './Home.css'


export default class Home extends Component {
  render() {
    return <>
    
    <div className='HomePage d-flex justify-content-center align-items-center py-5' >

<div className='DivImg py-3' >
<img src={myImg} alt="avatar" />
</div>
<div className='contentHome text-white text-center ' >
<h2 className='H2BeforeHome position-relative py-3' >START FRAMEWORK</h2>
<div></div>
<p className='py-3' >Graphic Artist - Web Designer - Illustrator</p>
</div>



    </div>
    
    
    
    
    
    
    
    
    
    </>
  }
}
