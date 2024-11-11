import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Rectangle from '../assets/images/rectangle.png'
import HeroImg from '../assets/images/group22.svg'
import HeroHOne from '../assets/fonts/MangoGrotesque-SemiBold.otf'
const Hero = () => {
  return (
    <Wrapper>
        <HeroText>
            <h1>EASY AND <span>SEAMLESS</span> CRYPTOCURRENCY TRANSACTIONS</h1>
            <p>A place to buy and sell digital assets in only 120 seconds. Make your digital assets transactions easier anywhere  and anytime</p>
            <Button text='Get Started' style={{marginTop: '25px', backgroundColor: '#FFA000', border: 'none', width:'169px', height:'40px', borderRadius: '10px'}}/>

        </HeroText>
        <img src={HeroImg} alt="" />
    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.div`
    background-image: url(${Rectangle});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 20px 100px;
    height: calc(100vh - 80px);
    max-width: 1690px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width:767px){
        padding: 20px 20px;
    
    }
    /* border: 1px solid red; */

    @font-face {
        font-family: 'MangoGrotesque';
        src: url(${HeroHOne});
        }

    h1 {
        font-family: 'MangoGrotesque', sans-serif; 
        line-height: 66.0px;
        font-weight: 900;
        /* font-family: Mango Grotesque; */
        font-size: 58px;
        text-align: left;
        color: #fff;
    }
    img {
        max-width: 480px;
        /* max-height: 300px; */
        /* border: 1px solid red; */
        @media (max-width:767px){
        max-width: 380px;
    
    }
    }
`
const HeroText = styled.div`
    max-width: 530px;
    height: 330px;
    /* border: 1px solid red; */

    span {
        color: #FFA000;
    }
    p {
        font-family: 'Montserrat';
        font-size: 19px;
        color: #fff;

    }
`