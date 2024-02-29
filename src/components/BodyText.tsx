import styled from 'styled-components'

export default function BodyText() {
  return (
    <Wrapper><Text>Modern cottage with nine beds and fantastic fjord views. Outside area with sun from morning to evening.
      Kitchen with all amenities. Dining table and seating for 9 people. Large living room with sofa, table and TV.
      Child friendly and quiet area with no traffic. Fire pit, trip stair chair, toys and games. The cabin is perfect for one or more families, or one or more couples. No partying or groups of people...
      </Text>

    <Link href="/">Show more</Link>
    </Wrapper>)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
`

const Link = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 400;
`