// @ts-nocheck

import styled from 'styled-components';
import { RiStarSFill } from "react-icons/ri";

const v = [0, 0, 0, 0, 0];

export default function Favourite({ stars = "5.0", reviews = 92}) {
  return <Wrapper>

    <Tag $primary>Most <br /> popular</Tag>
    <Text>One of the most popular hair stylist on <br />Booker, according to people</Text>
    <Container>
      <SubContainer>
        <Tag>{stars}</Tag>
        <StarsContainer>{v.map(elem => (<RiStarSFill />))}</StarsContainer>
      </SubContainer>
      <VerticalDivider />
      <SubContainer>
        <Tag>{reviews}</Tag>
        <Link href="/">Reviews</Link>
      </SubContainer>
    </Container>

  </Wrapper>

}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 654px;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 22px 26px;
`

const Tag = styled.p`
  font-size: ${props => props.$primary ? "18px" : "22px"};
  font-weight: 500;
  line-height: 1.2;
`

const Text = styled.span`
  font-size: 16px;
`

const Container = styled.div`
  display: flex;
`

const StarsContainer = styled.span`  
  font-size: 12px;
  margin: 2px 0 0 0;
`

const SubContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`

const VerticalDivider = styled.div`
  height: 40px;
  width: 1px;
  background: lightgray;
  margin: auto 16px;
`

const Link = styled.a`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: black;
`