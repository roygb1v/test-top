import About from "./about"

import styled from 'styled-components';
import { RiStarSFill } from "react-icons/ri";

const v = [0, 0, 0, 0, 0];

const handleShowMore = (msg: string) => {
  alert(msg)
}

export default function Review({ timeAgo = "1 week ago", msg = ""}) {

  return (<Wrapper>
      <About 
      title="Roy Cheong"
      description="Singapore"
      />
      <Container>
      <StarsContainer>{v.map(elem => (<RiStarSFill key={elem}/>))}</StarsContainer>
      <p>{timeAgo}</p>
      </Container>

      <Comment>{msg}</Comment>
      {msg.length >= 150 ? <Button onClick={() => handleShowMore("Showing a lot more...")}>Show more</Button> : null }
  </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 458px;
`

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`

const StarsContainer = styled.span`  
  font-size: 12px;
  margin: 2px 8px 0 0;
`

const Comment = styled.p`
  max-height: 192px;
  font-weight: 300;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`

const Button = styled.a`
  text-decoration: underline;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

