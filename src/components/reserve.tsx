
import styled from 'styled-components';

export default function Reserve({ children }) {

  return (<Wrapper>
    {children}
  </Wrapper>)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 460px;
  width: 372px;
  border: 1px solid lightgray;
  border-radius: 12px;
  position: sticky;
  bottom: 634px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 116px 0 0 auto;
  padding: 32px 0 24px 0;

  button {
    width: 100%;
  }
`