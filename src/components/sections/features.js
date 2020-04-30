import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <React.Fragment>
    <Section id="features">
      <StyledContainer>
        <Subtitle>Features</Subtitle>
        <SectionTitle>One-stop plugin to animate your design</SectionTitle>
        <FeaturesGrid>
          <FeatureItem>
            <FeatureTitle>Live Preview</FeatureTitle>
            <FeatureText>See your changes in real-time</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Speed Settings</FeatureTitle>
            <FeatureText>Tweak your animation speed easily</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Reversed Animation</FeatureTitle>
            <FeatureText>Reverse your animation backward</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Export to GIF/MP4</FeatureTitle>
            <FeatureText>
              Save your animation to a GIF/MP4 video file
            </FeatureText>
          </FeatureItem>
        </FeaturesGrid>
      </StyledContainer>
    </Section>
    <Section id="pricing">
      <StyledContainer>
        <Subtitle>
          Free for everyone and the Pro for these who want full feature
        </Subtitle>
        <SectionTitle>Simple Pricing</SectionTitle>
        <FeaturesGrid>
          <FeatureItem>
            <FeatureTitle>Free</FeatureTitle>
            <FeatureText>Unlimited Animate</FeatureText>
            <FeatureText>Live Preview</FeatureText>
            <FeatureText>Custom Speed</FeatureText>
            <FeatureText>Export to GIF</FeatureText>
            <FeatureText>Watermark</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Pro</FeatureTitle>
            <FeatureText>
              <div style={{ fontFamily: "HK Grotesk Bold" }}>
                14.44 USD <span style={{ color: "#999" }}>(20 SGD)</span>
                <br />
                one-time payment
              </div>
            </FeatureText>
            <FeatureText>Unlimited Animate</FeatureText>
            <FeatureText>Live Preview</FeatureText>
            <FeatureText>Custom Speed</FeatureText>
            <FeatureText>Export to GIF</FeatureText>
            <FeatureText>Export to MP4</FeatureText>
            <FeatureText>Pro Badge & Cleaner Menu</FeatureText>
            <FeatureText>Onion Skin</FeatureText>
            <FeatureText>No Watermark</FeatureText>
          </FeatureItem>
        </FeaturesGrid>
        <FeaturesGrid></FeaturesGrid>
      </StyledContainer>
    </Section>
  </React.Fragment>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
