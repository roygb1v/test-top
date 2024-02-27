// @ts-nocheck

import './App.css'

import styled from 'styled-components';
import dayjs from "dayjs";
import Favourite from "./components/favourite";
import About from "./components/about";
import MainContainer from "./components/maincontainer";

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
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
    </PictureContainer>

    <div style={{position: "relative"}}>
    <MedContainer>
      <h2>Entire cabin in Walden, Colorado, United States</h2>
      <p>5 guests | 2 bedrooms | 3 beds | 1 bathroom</p>
    </MedContainer>

    <Favourite />
    <About/>

    <MainContainer>
    <FlexContainer>
    <div style={{width: 40, height: 40, borderRadius: 100, background: "green"}}/>
    <div>
      <p>Dedicated Workspace</p>
      <p>A common area with wifi that's well suited for the place.</p>
    </div>
    </FlexContainer>

    <FlexContainer>
      <div style={{width: 40, height: 40, borderRadius: 100, background: "green"}}/>
      <div>
        <p>Self check-in</p>
        <p>Check yourself in with the lockbox.</p>
      </div>
    </FlexContainer>

    <FlexContainer>
      <div style={{width: 40, height: 40, borderRadius: 100, background: "green"}}/>
      <div>
        <p>Roy is a Superhost</p>
        <p>Superhosts are experienced, highly rated hosts.</p>
      </div>
    </FlexContainer>
    </MainContainer>


    <MainContainer>
      <p>Modern cottage with nine beds and fantastic fjord views. Outside area with sun from morning to evening.
      Kitchen with all amenities. Dining table and seating for 9 people. Large living room with sofa, table and TV.
      Child friendly and quiet area with no traffic. Fire pit, trip stair chair, toys and games. The cabin is perfect for one or more families, or one or more couples. No partying or groups of people.
      </p>
    </MainContainer>


    <MainContainer>
    
    <p style={{fontWeight: 500, fontSize: 22}}>What this place offers</p>
    <TwoColumnGridContainer>
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />
      <GridElement />

      <Button>
        Show all 58 amenities
      </Button>
    </TwoColumnGridContainer>
    </MainContainer>

    <MainContainer>
    </MainContainer>

    <Reserve />
  </div>

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

const Reserve = styled.div`
  height: 460px;
  width: 372px;
  border: 1px solid lightgray;
  border-radius: 12px;
  position: sticky;
  bottom: 704px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 40px 0 0 auto;
`

const FlexContainer = styled.div`
  display: flex;

  div:first-child {
    margin-right: 44px;
  }

  p:first-child {
    font-size: 16px;
    font-weight: 500;
  }

  p:last-child {
    font-size: 14px;
    color: gray;
  }
`

const TwoColumnGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

const GridElement = styled.div`
  width: 266px;
  height: 40px;
  background: lightgray;

  &:last-child 
`

const Button = styled.button`
  background: white;
  border: 1px solid black;
  padding: 13px 23px;
  max-width: 208px;
  max-height: 48px;
  color: #3D3D3D;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 32px;

  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`

export default App
