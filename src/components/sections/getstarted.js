import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <GetStartedTitle>No Watermark, 100% Your Design</GetStartedTitle>
      <TryItButton
        onClick={() => {
          window.location.href = "https://gumroad.com/l/Dnxyh"
        }}
      >
        Upgrade to Flipbook Pro
      </TryItButton>
      <Subtitle>
        Upgrading to Flipbook Pro means that
        <br />
        you already support the creator
      </Subtitle>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  color: ${props => props.theme.color.white.regular};
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: black;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.white.regular};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.color.white.regular};
`
