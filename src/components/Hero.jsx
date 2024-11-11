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
            <Button text='Get Started' style={{marginTop: '25px', backgroundColor: '#FFA000', border: 'none', width:'169px', height:'40px', borderRadius: '10px', color: '#fff'}}/>

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

    @media (max-width) {
        padding: 20px ;
    }    
    @media (max-width:767px){
        /* background-size: 100% 100%; */
        background-color: #161676;
        padding: 20px 20px;
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;

    }
    @media (max-width: 985px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 1px solid red; */
        gap: 10px;
        height: auto;
    }

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
        @media (max-width:450px){
            font-size: 50px;
            line-height: 52px;
            /* border: 1px solid red; */
        }
        @media (max-width: 767px) {
            /* border: 1px solid red; */
            max-width: 600px;
            text-align: center;
            margin-right: auto;
            margin-left: auto;
        }
        @media (max-width: 1230px) {
            font-size: 52px;
            
        }
        


    }
    img {
        max-width: 480px;
       
        @media (max-width:767px){
            max-width: 380px;
        }
        @media (max-width: 1230px) {
            max-width: 380px;
        }
        @media (max-width: 985px) {
            max-width: 320px;
            /* border: 1px solid red; */
        }


    }
`
const HeroText = styled.div`
    max-width: 530px;
    max-height: 330px;
    /* border: 1px solid red; */
    @media (max-width: 450px) {
        margin-bottom: 0px;

    }
    @media (max-width: 767px) {
            margin-right: auto;
            margin-left: auto;
        }

    @media (max-width: 1230px) {
        max-width: 480px;
    }
    @media (max-width: 1060px) {
        max-width: 400px;
    }
    @media (max-width: 985px) {
            max-width: 800px;
        }

    span {
        color: #FFA000;
    }
    p {
        font-family: 'Montserrat';
        font-size: 19px;
        color: #fff;

        @media (max-width: 450px) {
            font-size: 16px;
        }
        @media (max-width: 1230px) {
            font-size: 16px;
        }

    }
`