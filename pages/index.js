'use client'

import { Container, Box, Heading } from '@chakra-ui/react'

const page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        <div>Hello, I&apos;m a full-stack developer based in India</div>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            Nikhil Simon Toppo
          </Heading>

          <p>Digital Craftzman (Artist / Developer/ Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default page
