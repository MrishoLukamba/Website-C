import React from 'react'
import './Tiktok.css'
import vid_1 from '../src/picture/vid_1.mp4'
import vid_2 from '../src/picture/vid_2.mp4'
import vid_4 from '../src/picture/vid_4.mp4'


export class Tiktok extends React.Component{
    render() {
        return(
            <div className='tiktok'>
                <div className='video'><video className='vid' controls src={vid_4} alt=''/></div>
                <div className='video'><video className='vid' controls src={vid_2} alt=''/></div>
                <div className='video'><video className='vid' controls src={vid_1} alt=''/></div>
               

            </div>
            
        )
    }
} 
