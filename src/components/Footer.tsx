import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Image, Link, Text } from 'rebass';
import Container from './Container';

const Footer = () => (
  <Box as="footer" bg="darkgray" color="#959d9a" padding="5px">
    <Text id="footer_works"textAlign="center" pt={2} padding="5px">
      All rights reserved
    </Text>
  </Box>
);

export default Footer;
