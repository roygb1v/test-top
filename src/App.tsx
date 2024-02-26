// @ts-nocheck

import './App.css'

import styled from 'styled-components';
import dayjs from "dayjs";

function App() {
  return <RootAppWrapper>
  <Navigation />

  <BodyWrapper>

    <Container>
      <h1>Moose Haven Cabin @ 22 West</h1>

      <ul>
        <li>Share</li>
        <li>Save</li>
      </ul>
    </Container>

    <PictureContainer>
      <Image>Test</Image>
      <Image>Test</Image>
      <Image>Test</Image>
      <Image>Test</Image>
      <Image>Test</Image>
    </PictureContainer>

    <MedContainer>
      <h2>Entire cabin in Walden, Colorado, United States</h2>
      <p>5 guests | 2 bedrooms | 3 beds | 1 bathroom</p>

    </MedContainer>

  </BodyWrapper>
  </RootAppWrapper>
}

function Navigation() {

  return <NavigationWrapper>
    <NavList>
      <li>Logo</li>
      <li>Login</li>
    </NavList>
  </NavigationWrapper>
}

const RootAppWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BodyWrapper = styled.div`
  min-width: 1120px;
  max-width: 1120px;

  min-height: 100vh;
  border: 1px solid black;
  margin: 0 auto;

  @media(max-width: 768px) {
    max-width: 375px;
    background: red;
  }
`
const NavigationWrapper = styled.nav`
  min-width: 1440px;
  height: 80px;
  background: pink;
  border: 1px solid gray;

  ul {
    max-width: 70rem;
    min-height: 80px;
    margin: 0 auto;
    list-style: none;
    background: green;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  // @media(max-width: 1440px) {
  //   max-width: 1120px;
  //   ul {
  //     max-width: 1120px;
  //     background: orange;
  //   }
  // }
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

const MedContainer = styled(Container)`
  padding: 32px 0;
  display: block;
`

const PictureContainer = styled.section`
  display: grid;
  grid-template-columns: 140px 140px 140px 140px;
  grid-template-rows: 210px 210px;
  grid-auto-flow: column;
  gap: 8px;
  border: 1px solid black;
`

const Image = styled.div`
  background: salmon;

  &:first-child {
    background: green;
    grid-column: 1 / 5;
    grid-row: 1 / 3;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:nth-child(4) {
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-right-radius: 12px;
  }
`

export default App
