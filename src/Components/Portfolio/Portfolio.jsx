import React, { Component } from 'react'
import './Portfolio.css'
import img1 from '../../img/poert1.png' 
import img2 from '../../img/port2 (1).png'
import img3 from '../../img/port3 (1).png'

export default class Portfolio extends Component {
  render() {
    return <>
    
    <div className='contentPortfolio text-center py-5 ' >

<h2 className='H2BeforePortfolio position-relative pb-5' >PORTFOLIO COMPONENT</h2>
    </div>
    
    
    <div  className='container' >
      <div className='row py-4'>
        <div className='col-md-4 p-4'>
          <div className='innerdiv'>
<img className='w-100' src={img1} alt="home" />
<div className='layer d-flex justify-content-center align-items-center' >
<i className='fa-solid fa-plus fa-7x text-white' ></i>
</div>
          </div>
        </div>
        <div className='col-md-4 p-4'>
          <div className='innerdiv'>
<img className='w-100' src={img2} alt="home" />
<div className='layer d-flex justify-content-center align-items-center' >
<i className='fa-solid fa-plus fa-7x text-white' ></i>
</div>
          </div>
        </div>
        <div className='col-md-4 p-4'>
          <div className='innerdiv'>
<img className='w-100' src={img3} alt="home" />
<div className='layer d-flex justify-content-center align-items-center' >
<i className='fa-solid fa-plus fa-7x text-white' ></i>
</div>
          </div>
        </div>
        <div className='col-md-4 p-4'>
          <div className='innerdiv'>
<img className='w-100' src={img1} alt="home" />
<div className='layer d-flex justify-content-center align-items-center' >
<i className='fa-solid fa-plus fa-7x text-white' ></i>
</div>
          </div>
        </div>
        <div className='col-md-4 p-4'>
          <div className='innerdiv'>
<img className='w-100' src={img2} alt="home" />
<div className='layer d-flex justify-content-center align-items-center' >
<i className='fa-solid fa-plus fa-7x text-white' ></i>
</div>
          </div>
        </div>
        <div className='col-md-4 p-4'>
          <div className='innerdiv'>
<img className='w-100' src={img3} alt="home" />
<div className='layer d-flex justify-content-center align-items-center' >
<i className='fa-solid fa-plus fa-7x text-white' ></i>
</div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    </>
  }
}
