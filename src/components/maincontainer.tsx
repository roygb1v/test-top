import styled from 'styled-components';

export default function MainContainer({ children }) {
  return <Wrapper>
   {children}
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-top: 1px solid lightgray;
  padding: 32px 0;
  max-width: 654px;
`