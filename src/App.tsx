// @ts-nocheck

import './App.css'

import styled from 'styled-components';

function App() {

  return <div>
  <Navigation>
    <span style={{ width: 32, height: 32, background: "purple", borderRadius: 100}}/>
    <div style={{ display: "flex", flexDirection: "column", gap: 6}}>
      <div style={{height: 2, width: 24, background: "black"}}></div>
      <div style={{height: 2, width: 24, background: "black"}}></div>
      <div style={{height: 2, width: 24, background: "black"}}></div>
    </div>
  </Navigation>
  
  <Container>
    <ProfilePicture />
    <Title>Roy Cheong</Title>
    <SubTitle>Paragon Mall, Singapore</SubTitle>
    <Description>Hairstylist at Salon</Description>
    <Button $primary>Book Now</Button>
    <HorizontalDivider />
    <Gallery>
      <Title>Gallery</Title>

      <ImagesContainer>
        <Image />
        <Image />
        <Image />
        <Image />
      </ImagesContainer>

    </Gallery>

    <HorizontalDivider />

    <Reviews>
      <Title>Reviews</Title>
      <ReviewsContainer>
        <Review title="I love the cuts and perm done by this guy! He is a very skilled person! Recommended!"/>
      </ReviewsContainer>
    </Reviews>

    <HorizontalDivider />

    <Prices>
      <Title>Prices</Title>

      <PricesContainer>
        <PriceBlock title="Services" rows={[
          {name: "Cut", cost: "$50" },
          {name: "Wash & Blow", cost: "$50" },
          {name: "Styling", cost: "$70" }
        ]}/>
        <PriceBlock title="Color"
        rows={[
          {name: "Color", cost: "$180" },
          {name: "Root Color", cost: "$108" },
          {name: "Highlight", cost: "$180" },
          {name: "Bleach", cost: "$180" }
        ]}
        />
        <PriceBlock title="Treatment"
        rows={[
          {name: "TOKIO 5 Step Treatment", cost: "$180" },
          {name: "MILBON Hair Scalp Treatment", cost: "$208" },
        ]}
        />
      </PricesContainer>
    </Prices>

    <OpeningHours>
          <Title style={{color: "#FFF", margin: "auto"}}>Opening Hours</Title>

          <div style={{display: "flex", flexDirection: "column", color: "#FFF", gap: 4, margin: "0 auto"}}>
            <p style={{fontWeight: 600}}>Weekdays:</p>
            <p style={{fontWeight: 400, marginLeft: 24}}>10am - 7pm</p>
          </div>


          <div style={{display: "flex", flexDirection: "column", color: "#FFF", gap: 4, margin: "0 auto"}}>
            <p style={{fontWeight: 600}}>Weekends:</p>
            <p style={{fontWeight: 400, marginLeft: 24}}>10am - 9pm</p>
          </div>

    </OpeningHours>

  </Container>
  </div>
}

function PriceBlock({title, rows=[]}) {
  return <Block style={{padding: "0 8px"}}>
          <span style={{fontWeight: 700}}>{title}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 16}}>
            {rows.map(row => (<PriceRow>
              <span>{row.name}</span>
              <span>{row.cost}</span>
            </PriceRow>))}
          </div>
        </Block>
}

function Review({ title="", description="", name="", imgURL=null}) {

  return <ReviewContainer>
   {title}
  </ReviewContainer>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0 0 0;
`

const ProfilePicture = styled.div`
  background: #d4d4d4;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`
const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #3D3D3D;
`
const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: gray;
  padding: 16px 0;
`

const Button = styled.button`
  padding: 8px 48px;
  background: ${props => props.$primary ? "#dc2626" : ""};
  color: #FFF;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ReviewContainer = styled.div`
  padding: 24px;
  background: #d4d4d4;
  margin-top: 16px;
  width: 316px;
`

const ImagesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  margin-top: 16px;
`

const ReviewsContainer = styled.div`
  display: flex;
  padding: 0 4px;
`

const Image = styled.img`
  width: 180px;
  height: 180px;
  background: #d4d4d4;
`

const HorizontalDivider = styled.div`
  width: 48px;
  height: 1px;
  background: gray;
  margin: 24px 0;
`

const Prices = styled.div`
  width: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  min-width: 100%;
`

const Block = styled.div`
  padding: 0 8px;
`

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const OpeningHours = styled.div`
  display: flex;
  flex-direction: column;
  background:#171717;
  width: 100%;
  gap: 16px;
  padding: 32px 0;
  margin-top: 64px;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;

`

export default App
