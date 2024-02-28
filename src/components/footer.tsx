
import styled from 'styled-components';

export default function Footer() {

  return (<Wrapper>

  <Container>

      <SubContainer>
        <Title>Support</Title>
        <SubTitle>Accessibility</SubTitle>
        <SubTitle>How to earn</SubTitle>
        <SubTitle>Report listing</SubTitle>
        <SubTitle>Contact</SubTitle>
      </SubContainer>

      <SubContainer>
        <Title>Frequently asked questions</Title>
        <SubTitle>Request features</SubTitle>
        <SubTitle>Report bugs</SubTitle>
        <SubTitle>Refer a friend</SubTitle>
        <SubTitle>Speed up review</SubTitle>
      </SubContainer>

      <SubContainer>
        <Title>Contact us</Title>
        <SubTitle>Request features</SubTitle>
        <SubTitle>Report bugs</SubTitle>
        <SubTitle>Refer a friend</SubTitle>
        <SubTitle>Speed up review</SubTitle>
      </SubContainer>
  </Container>

  <StandardContainer>
    <SubTitle>2024 Superwork, Inc.</SubTitle>
    <FlexContainer>
    <SubTitle>Privacy</SubTitle>
    <SubTitle>Terms</SubTitle>
    <SubTitle>Sitemap</SubTitle>
    </FlexContainer>
  </StandardContainer>
  </Wrapper>)
}


const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #F7F7F7;
  border-top: 1px solid gray;
`

const Container = styled.div`
  min-width: 1120px;
  max-width: 1120px;
  margin: auto;
  padding: 48px 0;

  display: flex;
  justify-content: space-between;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StandardContainer = styled.div`
  display: flex;
  margin: auto;
  gap: 24px;
  min-width: 1120px;
  max-width: 1120px;
  padding: 24px 0;
`

const FlexContainer = styled(SubContainer)`
  flex-direction: row;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
`

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 300;
`

