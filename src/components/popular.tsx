
import styled from 'styled-components'
import { FaWifi } from "react-icons/fa6";

const LEFT_IMG_SRC = "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png"
const RIGHT_IMG_SRC = "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png"

export default function Popular() {
  const ARRAY = [0,0,0,0,0,0]
  return (<Wrapper>
    <Container>
      <SubContainer>
        <LargeTitle>
          <img style={{width: 86, height: 132}} src={LEFT_IMG_SRC} />
            <span style={{marginBottom: 16}}>5.0</span>
          <img style={{width: 86, height: 132}} src={RIGHT_IMG_SRC} />
          </LargeTitle>
        <Title>Most popular</Title>
        <Description>One of the most popular on Superwork based on ratings, reviews and reliability</Description>
      </SubContainer>
    </Container>

    <GridContainer>
      <Box>
      <p>Overall rating</p>
      <div />
      <div style={{fontSize: 12, display: "flex", flexDirection: "column"}}>
      <div><span style={{marginRight: 8}}>5</span><progress style={{accentColor: "#000000"}} value={0.9}/></div>
      <div><span style={{marginRight: 8}}>4</span><progress style={{accentColor: "#000000"}} value={0.05}/></div>
      <div><span style={{marginRight: 8}}>3</span><progress style={{accentColor: "#000000"}} value={0.025}/></div>
      <div><span style={{marginRight: 8}}>2</span><progress style={{accentColor: "#000000"}} value={0.025}/></div>
      <div><span style={{marginRight: 8}}>1</span><progress style={{accentColor: "#000000"}} value={0}/></div>
      </div>
      </Box>

      {ARRAY.map(elem => (<Box key={elem}>
        <div>
          <p>Cleanliness</p>
          <SBoxFont>5.0</SBoxFont>
        </div>
        <FaWifi fontSize={32}/>
      </Box>))}

    </GridContainer>
  </Wrapper>)
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid lightgray;
  padding: 64px 0 40px 0;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 330px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 158px;
  height: 108px;
  border-right: 1px solid lightgray;
  padding: 0 24px 4px;
  font-size: 14px;
  font-weight: 500;
  color: #222222;

  &:first-child {
    padding: 0;
    justify-content: start;
  }

  &:last-child {
    border-right: none;
  }
`

const LargeTitle = styled.p`
  font-size: 100px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 8px;
`

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  color: #717171;
`

const SBoxFont = styled.p`
  font-size: 18px;
`