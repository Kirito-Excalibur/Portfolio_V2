'use client'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItems } from '../components/grid-item'
import thumbInkrop from '../public/images/works/inkdrop_01.png'
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
            thumbnail="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a6a27d183305525.653d40764de8c.png"
          >
            Life is wierd. So is Sakshi
          </WorkGridItems>
        </Section>

        <Section>
          <WorkGridItems
            src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
            title="Finance Club"
            thumbnail="https://mir-s3-cdn-cf.behance.net/projects/max_808/58d78f171117395.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.jpeg"
          >
            Life is wierd. So is Sakshi
          </WorkGridItems>
        </Section>

        <Section>
          <WorkGridItems
            src="https://www.behance.net/gallery/171117447/SupportLocalBusiness"
            title="Support Local Businesses"
            thumbnail="https://mir-s3-cdn-cf.behance.net/projects/max_808/87a3f9171117447.Y3JvcCw4OTksNzAzLDAsNDQ3.jpeg"
          >
            Life is wierd. So is Sakshi
          </WorkGridItems>
        </Section>

        <Section>
          <WorkGridItems
            src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
            title="LEAD 4.0"
            thumbnail="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a6a27d183305525.653d40764de8c.png"
          >
            Life is wierd. So is Sakshi
          </WorkGridItems>
        </Section>

        <Section>
          <WorkGridItems
            src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
            title="LEAD 4.0"
            thumbnail="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a6a27d183305525.653d40764de8c.png"
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
