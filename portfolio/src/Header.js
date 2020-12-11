import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export class Header extends React.Component{
    render() {
        return(
            <div className='header'>
                
                <div className='head'>
                    <Link to='/'><h4 id='about'>About me</h4></Link>
                    <Link to='/cute_app'><h4 id='cute'>Cute</h4></Link>
                    <Link to='/tiktok'><h4 id='tiktok'>Tiktok</h4></Link>
                    <Link to='/luvie'><h4 id='luvie'>Luvie</h4></Link>
                    
                </div>
              
            </div>
            )
    }
}