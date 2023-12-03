'use client'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItems } from '../components/grid-item'
import Layout from '../components/layouts/article'
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="LEAD 4.0"
              thumbnail="/images/works/lead_4.0.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="Finance Club"
              thumbnail="/images/works/finance.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/171117447/SupportLocalBusiness"
              title="Support Local Businesses"
              thumbnail="/images/works/dark_knight.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="Blue Future"
              thumbnail="/images/works/blue_future.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="Rakhsha Bandhan"
              thumbnail="/images/works/Rakhi.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="Night Club Party"
              thumbnail="/images/works/night__club_party.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="Govardhan"
              thumbnail="/images/works/govardhan.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="Music Festival"
              thumbnail="/images/works/music_festival.png"
            >
              Life is wierd. So is Sakshi
            </WorkGridItems>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
