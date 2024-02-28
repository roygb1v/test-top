// @ts-nocheck
import React, {useState, useEffect, useRef} from 'react';
import './App.css'
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import styled from 'styled-components';
import Favourite from "./components/favourite";
import About from "./components/about";
import Review from "./components/review";
import MainCalendar from "./components/calendar";
import Reserve from "./components/reserve";
import Footer from "./components/footer";
import MainContainer from "./components/maincontainer";
import { BsPersonCircle } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineCleanHands } from "react-icons/md";
import { LuCalendarX2 } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaWifi } from "react-icons/fa6";
import dayjs from "dayjs";

const DATE_FORMAT = "D/M/YYYY";

const AMENITIES = [
  {title: 'Kitchen', logo: <FaWifi />},
  {title: 'Wifi', logo: <FaWifi />},
  {title: 'Dedicated workspace', logo: <FaWifi />},
  {title: 'Free parking on premises', logo: <FaWifi />},
  {title: 'Private hot tub', logo: <FaWifi />},
  {title: 'TV', logo: <FaWifi />},
  {title: 'Free washing machine', logo: <FaWifi />},
  {title: 'Free dryer', logo: <FaWifi />},
  {title: 'Carbon monoxide alarm', logo: <FaWifi />},
  {title: 'Smoke alarm', logo: <FaWifi />}
]

function App() {
  const today = dayjs(new Date()).format(DATE_FORMAT)
  const [date, setDate] = useState(today);
  const [openModal, setOpenModal] = useState<boolean>(false)
  
  const handleReserve = () => {
    console.log('test')
  }

  const handleDateChange = (date) => {
    const day = dayjs(date).format(DATE_FORMAT)
    setDate(day)
  }
  
  return <RootAppWrapper>
  <Navigation />

  <BodyWrapper>

    <Container>
      <p style={{fontWeight: 500, fontSize: 26}}>Moose Haven Cabin @ 22 West</p>

      <LinkedList>
        <li><Link href="/">Share</Link></li>
        <li><Link href="/">Save</Link></li>
      </LinkedList>
    </Container>

    <PictureContainer>
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
      <Image></Image>
    </PictureContainer>

    <div style={{position: "relative", height: "min-content"}}>
    <MedContainer>
      <p style={{fontWeight: 500, fontSize:22}}>Entire cabin in Walden, Colorado, United States</p>
      <p style={{fontWeight: 400, fontSize: 16}}>5 guests | 2 bedrooms | 3 beds | 1 bathroom</p>
    </MedContainer>

    <Favourite />
    <About
      title="Serviced by Roy"
      description="Highly experienced with over 20+ years in the industry"
    />

    <MainContainer>
    <FlexContainer>
    <div style={{width: 40, height: 40, borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <SlLocationPin fontSize={32}/>
    </div>
    <div>
      <p>Great location</p>
      <p style={{fontWeight: 300, fontSize: 14}}>90% of recent guests gave the location a 5-star rating.</p>
    </div>
    </FlexContainer>

    <FlexContainer>
      <div style={{width: 40, height: 40, borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <MdOutlineCleanHands fontSize={32} />
      </div>
      <div>
        <p>Very clean</p>
        <p style={{fontWeight: 300, fontSize: 14}}> 90% of recent guests gave the cleanliness a 5-star rating.</p>
      </div>
    </FlexContainer>

    <FlexContainer>
      <div style={{width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <LuCalendarX2 fontSize={32} />
      </div>
      <div>
        <p>Free cancellation for 48 hours</p>
      </div>
    </FlexContainer>
    </MainContainer>


    <MainContainer>
      <p style={{fontSize: 16, lineHeight: 1.5, fontWeight: 300}}>Modern cottage with nine beds and fantastic fjord views. Outside area with sun from morning to evening.
      Kitchen with all amenities. Dining table and seating for 9 people. Large living room with sofa, table and TV.
      Child friendly and quiet area with no traffic. Fire pit, trip stair chair, toys and games. The cabin is perfect for one or more families, or one or more couples. No partying or groups of people.
      </p>
    </MainContainer>

    <MainContainer>
    
    <SubHeader>What this place offers</SubHeader>
    <TwoColumnGridContainer>
      {
        AMENITIES.map(amenity => (<GridElement>
          <div style={{width: 40, height: 40, display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}>
            {amenity.logo}
          </div>
          <p>{amenity.title}</p>
        </GridElement>))
      }
  
      <Button onClick={() => setOpenModal(true)}>
        Show all 58 amenities
      </Button>
    </TwoColumnGridContainer>
    {openModal && <Modal>
    <button onClick={() => setOpenModal(false)}>
    close
    </button>
    </Modal>}

    </MainContainer>

    <MainCalendar
      handleChange={handleDateChange}
     />

    <Reserve>
    <>
      <div style={{display: "flex", flexDirection: "column", padding: "0 24px" }}>
      <p style={{fontWeight: 300, fontSize: 14}}><span style={{fontSize: 24, fontWeight: 500}}>$50 SGD</span> total</p>
      <div style={{display: "flex", gap: 8, margin: "16px 0 8px 0"}}>
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid #3D3D3D", borderRadius: 8, width: "50%", padding: 8}}>
        <span style={{fontSize: 12, fontWeight: 500}}>DATE</span>
        <span style={{fontSize: 14, fontWeight: 300}}>{date?.toString()}</span>
      </div>
      <select style={{width: "50%", borderRadius: 8, fontSize: 14, fontWeight: 300, paddingLeft: 4}}>
        <option>12 pm</option>
        <option>1 pm</option>
        <option>2 pm</option>
        <option>3 pm</option>
        <option>4 pm</option>
        <option>5 pm</option>
        <option>6 pm</option>
      </select>
      </div>
      <select placeholder="Select a service" style={{width: "100%", borderRadius: 8, fontSize: 14, fontWeight: 300, minHeight: 48, paddingLeft: 4}}>
        <option>Cut</option>
        <option>Wash & Blow</option>
        <option>Perm</option>
        <option>Color</option>
        <option>Treatment</option>
        <option>Milbon Treatment</option>
      </select>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <Button $primary style={{margin: "16px auto"}}
      onClick={() => handleReserve()}
      >Reserve</Button>
      <span style={{fontSize: 14, fontWeight: 300, color: "#3D3D3D"}}>You won't be charged yet</span>
      </div>
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: 16}}>
      <div style={{padding: "0 24px", display: "flex", justifyContent: "space-between", fontWeight: 300}}>
        <Link>$50 SGD x Cut</Link>
        <p>$50 SGD</p>
      </div>
      <div style={{padding: "0 24px", display: "flex", justifyContent: "space-between", fontWeight: 300}}>
        <Link>Platform fee</Link>
        <p>$1 SGD</p>
      </div>
      </div>
    </>
      <HorizontalDivider />
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 24px",
      }}>
        <p>Total before GST</p>
        <p>$51 SGD</p>
      </div>
    </Reserve>
  </div>

  <ReviewsContainer>
  <TwoColumnGridContainer>
    <Review 
      timeAgo="2 days ago"
      msg="I had an incredible stay at Reena's Coconest Langkawi! The location is absolutely breathtaking, peaceful, and the home itself extremely comfortable with so much to do. I'd love to..."
    />
    <Review 
      timeAgo="2 days ago"
      msg="Amazing and unique place to try! Away from the hustle of the city. Please bring your own food and groceries like one full bag so you wont feel hungry while staying there like what we did..."
    />
    <Review 
      timeAgo="2 days ago"
      msg="What a romantic place. Enjoyed the silence and the starry sky in the evening. And from the sunset and ascension.
Breakfast wasn't that much. And we did the cooking ourselv..."
    />
    <Review 
      timeAgo="2 days ago"
      msg="Spectacular visit, worthy experience!"
    />
    <Review 
      timeAgo="2 days ago"
      msg="Very nice and original accommodation. The caretaker was very attentive with us, always available as well as our host.
      well appointed space perfect for couples..."
    />
    <Review 
      timeAgo="2 days ago"
      msg="I had a great time!"
    />

    <Button>
      Show all 86 reviews
    </Button>
  </TwoColumnGridContainer>
  </ReviewsContainer>

  <StandardVerticalContainer>
  <SubHeader>Things to Know</SubHeader>
  <div style={{display: "flex", justifyContent: "space-between", padding: "16px 0"}}>
  <SubContainer style={{fontWeight: 300}}>
    <p style={{fontSize: 16, fontWeight: 400}}>Rules</p>
    <p>Check-in: 2:00 pm – 7:00 pm</p>
    <p>Checkout before 11:00 am</p>
    <p>1 guests maximum</p>
    <Link href="/">Show more</Link>
  </SubContainer>

  <SubContainer style={{fontWeight: 300}}>
    <p style={{fontSize: 16, fontWeight: 400}}>Safety</p>
    <p>Check-in: 2:00 pm – 7:00 pm</p>
    <p>Checkout before 11:00 am</p>
    <p>1 guests maximum</p>
    <Link href="/">Show more</Link>
  </SubContainer>


  <SubContainer style={{fontWeight: 300}}>
    <p style={{fontSize: 16, fontWeight: 400}}>Cancellation policy</p>
    <p>Free cancellation for 48 hours.</p>
    <p style={{maxWidth: 400}}>Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
    <Link href="/">Show more</Link>
  </SubContainer>
  </div>
  </StandardVerticalContainer>
  </BodyWrapper>

  <Footer />
  </RootAppWrapper>
}

function Navigation() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  
  // [TODO] To understand this logic
  const modalEl = useRef();
  useEffect(() => {
  const handler = (event) => {
    if (!modalEl.current) {
      return;
    }
    // if click was not inside of the element. "!" means not
    // in other words, if click is outside the modal element
    if (!modalEl.current?.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  // the key is using the `true` option
  // `true` will enable the `capture` phase of event handling by browser
  document.addEventListener("click", handler, true);
  return () => {
    document.removeEventListener("click", handler);
  };
}, []);
  return <NavigationWrapper>
    <NavList>
      <li style={{display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
        <span><FiHome fontSize={22}/></span>
        <span style={{fontWeight: 600, fontSize: 18, color: "#000"}}>superwork</span>
      </li>
      <li style={{position: "absolute", right: 0, top: 16}}>
        <ProfileButton style={{position: "absolute", right: 0, display: "flex", alignItems: "center", justifyContent: "space-evenly"}} onClick={() => setShowDropdown((prev) => {
          console.log('prev', prev)
          return !prev
        })}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4}}>
            <span style={{width: 16, height: 2, background: "black"}}/>
            <span style={{width: 16, height: 2, background: "black"}}/>
            <span style={{width: 16, height: 2, background: "black"}}/>
          </div>
          <BsPersonCircle size={22}/>
        </ProfileButton>
        {showDropdown && <LoginModal ref={modalEl}>
          <SignedOut>
            <SignInButton mode="modal">
              <span>Sign up</span>
            </SignInButton>
          </SignedOut>

          <SignedOut>
            <SignInButton mode="modal">
              <span>Log in</span>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <SignOutButton signOutCallback={() => redirect('/')} />
          </SignedIn>
        </LoginModal>}
      </li>
    </NavList>
  </NavigationWrapper>
}

const Modal = styled.div`
  position: absolute;
  max-width: 1120px;
  min-width: 374px;
  max-height: 800px;
  min-height: 800px;
  background: salmon;
  // top: 20%;
  left: 0;
  right: 0;
  padding: 16px;
`

const RootAppWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BodyWrapper = styled.div`
  min-width: 1120px;
  max-width: 1120px;
  // border: 1px solid black;
  margin: 0 auto;

  @media(max-width: 768px) {
    max-width: 375px;
    background: red;
  }
`
const NavigationWrapper = styled.nav`
  position: relative;
  min-width: 1440px;
  height: 80px;
  background: lightgray;
  // border: 1px solid black;

  ul {
    max-width: 70rem;
    max-height: 79px;
    min-height: 78px;
    margin: 0 auto;
    list-style: none;
    background: #F7F7F7;
    // border-left: 1px solid black;
    // border-right: 1px solid black;
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
  position: relative;
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
  // border: 1px solid black;
`

const Image = styled.div`
  background: lightgray;

  &:first-child {
    background: #DDDDDD;
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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    margin-right: 24px;
  }

  p:first-child {
    font-size: 16px;
    font-weight: 500;
  }
`

const TwoColumnGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

const GridElement = styled.div`
  display: flex;
  align-items: center;
  width: 266px;
  height: 40px;

  p {
    margin-left: 16px;
  }
`

const Button = styled.button`
  background: ${props => props.$primary ? "#D03660" : "#FFFFFF"};
  border: ${props => props.$primary ? "none" : "1px solid black"};
  padding: 13px 23px;
  max-width: ${props => props.$primary ? "322px" : "208px"};
  max-height: 48px;
  color: ${props => props.$primary ? "#FFFFFF" : "#3D3D3D"};
  border-radius: 8px;
  font-weight: 400;
  font-size: ${props => props.$primary ? "16px" : "14px"};
  margin-top: 32px;

  &:hover {
    background: ${props => props.$primary ? "" : "lightgray"};
    cursor: pointer;
  }
`

const ReviewsContainer = styled.div`
  min-width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 32px 0;
`

const SubHeader = styled.p`
  width: fit-content;
  font-weight: 500;
  font-size: 22px;
`

const LinkedList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
`

const Link = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 400;
`

const StandardVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 0 48px 0;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ProfileButton = styled.button`
  background: #FFFFFF;

  min-width: 86px;
  max-width: 86px;
  min-height: 48px;
  max-height: 48px;

  border: 1px solid gray;
  border-radius: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
  width: 240px; 
  height: 200px;
  position: relative;
  top: 64px;
  background: #FFFFFF;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;

  span {
    padding: 16px 16px;
    font-weight: 300;
    font-size: 14px;
  }

  span:first-child {
    font-weight: 500;
  }

  span:hover {
    background: #F7F7F7;
    color: #3D3D3D;
    cursor: pointer;
  }
`

const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #cbd5e1;
`

export default App
