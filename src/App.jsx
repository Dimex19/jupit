import './App.css'
import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'

const App = ()=> {
  return (
    <Wrapper>
      <Header/>
      <Hero/>
      <SectionOne/>
    </Wrapper>
  )
}
export default App

const Wrapper = styled.div`
  

`