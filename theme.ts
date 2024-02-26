import styled from "styled-components"

const shades = {
  white: {
    hex: "#FFFFFF"
  },
  black: {
    hex: "#222222"
  }
  lightGray: {
    hex: "#222222",
    opacity: 0.05
  },
  darkGray: {
    hex: "#222222",
    opacity: 0.3
  }
}

const neutrals = {
  gray_one: {
    hex: "#F7F7F7"
  },
  gray_two: {
    hex: "EBEBEB"
  },
  gray_three: {
    hex: "#DDDDDD"
  },
  gray_four: {
    hex: "D3D3D3"
  },
  gray_five: {
    hex: "#C2C2C2"
  },
  gray_five: {
    hex: "#B0B0B0"
  },
  gray_five: {
    hex: "#717171"
  },
  gray_five: {
    hex: "#5E5E5E"
  }
}

const primary = {
  first: {
    hex: "#F6475F"
  },
  second: {
    hex: "#FF385C"
  }
}

const error = {
  first: {
    hex: "#FEF8F6"
  },
  second: {
    hex: "#C13515"
  }
}

const accents = {
  first: {
    hex: "#F6D7DF"
  },
  second: {
    hex: "#D03660"
  },
  discount: {
    hex: "#008A05"
  },
  link: {
    hex: "#004CC4"
  }
}

const Header = styled.h1`
  font-size: 22px;
  font-weight: 400;
`

const BoldHeader = styled.h1`
  font-size: 22px;
  font-weight: 600;
`

const RegularText = styled.p`
  font-size: 18px;
`

const RegularTextUnderline = styled(RegularText)`
  text-decoration: underline;
`

const RegularTextBold = styled(RegularText)`
  font-weight: 600;
`

const SemiRegularText = styled.p`
  font-size: 16px;
`

const SemiRegularTextUnderline = styled(SemiRegularText)`
  text-decoration: underline;
`

const SemiRegularTextBold = styled(SemiRegularText)`
  font-weight: 600;
`

const SmallText = styled.p`
  font-size: 12px;
`

const SmallTextUnderline = styled(SmallText)`
  text-decoration: underline;
`

const SmallTextBold = styled(SmallText)`
  font-weight: 600;
`