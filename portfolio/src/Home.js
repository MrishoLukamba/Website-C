import React from 'react'
import './home.css'
import pink_2 from '../src/picture/pink_2.jpg'
import luv_1 from '../src/picture/luv_1.jpg'
import luv_2 from '../src/picture/luv_2.jpg'


export class AmCute extends React.Component{
    render() {
        return(
            <div className='cute_app'>
                <div className='image'><img src={pink_2} alt=''/><button><h3>CINDY❤</h3></button></div>
                <div className='image'><img src={luv_1} alt=''/><button><h3>CINDY💕</h3></button></div>
                <div className='image'><img src={luv_2} alt=''/><button><h3>CINDY💋</h3></button></div>
                

                
            </div>
            )
    }
} 