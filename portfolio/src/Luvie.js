import React from 'react'
import './Luvie.css'
import lov_1 from '../src/picture/lov_1.jpg'
import lov_2 from '../src/picture/lov_2.mp4'
import ll from '../src/picture/ll.MOV'

export class Luvie extends React.Component{
    render() {
        return(
            <div className='luvie'>
                <div className='luvv'><img className='vull' src={lov_1} alt=''/></div>
                <div className='luv'><video className='vul' controls src={lov_2} alt=''/></div>
                <div className='luv'><video className='vul' controls src={ll} alt=''/></div>
               
            </div>    
        )
    }
}