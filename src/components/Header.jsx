import styled from 'styled-components'
import React from 'react'
import JupicLogo from '../assets/images/jupit.svg'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <div>
        <Wrapper>
            <Container>
                <img src={JupicLogo} alt="" />

                <LinksWrapper>
                    <NavLinks>
                        <a id='firstLink'href="">About us</a>
                        <a href="">Products</a>
                        <a href="">Resources</a>
                        <a href="">Contact</a>
                    </NavLinks>
                    <NavButtons>
                        <Button id='firstBtn' text='Sign In' style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}/>
                        <Button text='Sign In' style={{backgroundColor: '#FFA000', color: '#ffffff', border: 'none', width:'119px', height:'40px', borderRadius: '10px'}}/>
                    </NavButtons>
                </LinksWrapper>
                <Hamburger>
                    <GiHamburgerMenu/>
                </Hamburger>
            </Container>
        </Wrapper>
    </div>
  )
}

export default Header

const Hamburger = styled.div`
    display: none;

    @media (max-width:850px){
        display: block;
    
    }
`
const Wrapper = styled.div`
    background-color: #161676;
    padding: 0px 100px;
    color: #fff;

    @media (max-width:850px){
        padding: 0px 20px;
        /* border: 1px solid red; */
    }
    
    /* border: 1px solid red; */
`
const Container = styled.div`
    /* border: 1px solid red; */
    max-width: 1690px;
    height: 80px;
    padding-top: 20px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    
    @media (min-width: 1891px) {
        padding: 20px 100px 0px 100px;

    }
    @media (max-width: 850px) {
        padding: 20px 80px 0px 80px;
        /* border: 1px solid red; */
    }
    @media (max-width: 450px) {
        padding: 20px 10px 0px 10px ;
    }  

    img {
        width: 103px;
        height: 34px;
    }
    
`
const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 850px) {
        display: none;
        }
    
    a {
        margin-left: 60px;
        text-decoration: none;
        color: inherit;

        @media (max-width: 1062px) {
            margin-left: 20px;
        }
        
    }
    #firstLink {
        margin-left: 0px;
    }
`
const NavButtons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 70px;
    color: #ffffff;

    @media (max-width: 1062px) {
        margin-left: 20px;
    }
    @media (max-width: 850px) {
        display: none;
    }
    #firstBtn {
        margin-right: 30px;
        border: 1px solid red;
        
    }
`
const LinksWrapper = styled.div`
    display: flex;
    /* border: 1px solid red; */
    align-items: center;
    min-width: 300px;

    @media (max-width:767px){
        display: none;
    
    }
`