import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import{FeatureCarousa,LarnMore,ComponentTitle,Subtitle,LearnArrow} from './styles.js'
// import {} from '../styles.js'
import '../FeatureCarousal/styles.css';
function FeatureCarousal(){
    return(
        <>
        <FeatureCarousa>
            <ComponentTitle>Featured</ComponentTitle>
            <Subtitle>Grant to charity effectively</Subtitle>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} stopOnHover={false} infiniteLoop={true}>
                <div className='slider'>
                    <p className='content'>One way to ensure your donations are used to make a lasting impact is to research the causes you are supporting. Take time to get to know a charity--including how it meets its mission, uses its money, and plans for the future--before recommending a grant.</p>
                   
                </div>
                <div className='slider'>
                    <p className='content'>One way to ensure your donations are used to make a lasting impact is to research the causes you are supporting. Take time to get to know a charity--including how it meets its mission, uses its money, and plans for the future--before recommending a grant.</p>
                   
                </div>
                <div className='slider'>
                    <p className='content'>One way to ensure your donations are used to make a lasting impact is to research the causes you are supporting. Take time to get to know a charity--including how it meets its mission, uses its money, and plans for the future--before recommending a grant.</p>
                   
                </div>
                
            </Carousel>
            <LarnMore>LEARN MORE <LearnArrow>&#8594;</LearnArrow></LarnMore>
        </FeatureCarousa>
            
        </>
    )
}
export default FeatureCarousal;