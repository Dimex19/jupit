import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import HeroHOne from '../assets/fonts/MangoGrotesque-SemiBold.otf'
import Globe from '../assets/images/globe.svg'

const SectionOne = () => {
  return (
    <Wrapper>
        <img src={Globe} alt="" />
        <OneText>
            <p id='firstPara'>Your gateway to borderless freedom.</p>
            <h2>Trade with Confidence on Nigeria’s Safest Digital Asset Exchange</h2>
            <p>By building this simple and secure solution for trading digital assets, we hope to have eliminated the limits that people encounter while performing transactions.</p>
            <Button text='Register Now' style={{backgroundColor: '#1C1C93', border: 'none', fontSize: '18px', width:'210px', height: '64px', color: 'white', borderRadius: '10px', marginTop: '30px'}}/>
        </OneText>
        

    </Wrapper>
  )
}

export default SectionOne

const Wrapper = styled.div`
    max-width: 1690px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 100px;
    margin-top: 100px;
    margin-bottom: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: center;
    color: inherit;
    background-color: #FAFAFA;
    /* border: 1px solid red; */
    @font-face {
        font-family: 'MangoGrotesque';
        src: url(${HeroHOne});
        }
    img {
        height: 420px;
        @media (max-width:767px){
            /* max-width: 20px; */
        }
        /* border: 1px solid red; */
    }
    @media (max-width:767px){
        padding: 20px 20px;
    
    }
`
const OneText = styled.div`
    /* border: 1px solid red; */
    max-width: 560px;
    padding: 53px 0px;
    h2 {
        /* border: 1px solid red; */
        font-family: 'MangoGrotesque', sans-serif;
        font-size: 54px;
        line-height: 67.2px;
    }
    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        margin-top: 16px;
    }
    #firstPara {
        color: #FFA000;
        margin-top: 0px;
        font-size: 20px;
    }
`