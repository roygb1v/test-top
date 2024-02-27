import styled from 'styled-components';

export default function About() {
  return (<Wrapper>
    <Container>
      <Picture />
      <SubContainer>
        <Title>Serviced by Roy</Title>
        <Description>Highly experienced. 20+ years of styling</Description>
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
  color: #3D3D3D;
`