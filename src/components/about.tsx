import styled from 'styled-components';
import { RxAvatar } from "react-icons/rx";

export default function About({ title, description}) {
  return (<Wrapper>
    <Container>
      <RxAvatar  fontSize={40}/>
      <SubContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </SubContainer>
    </Container>
  </Wrapper>)
}

const Wrapper = styled.div`
  padding: 24px 0;
  max-width: 654px;
`

const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: green;
`

const Container = styled.div`
  display: flex;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
`