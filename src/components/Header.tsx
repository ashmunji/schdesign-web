import { graphql, Link as GatsbyLink, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import NavLink from './NavLink';

import schdesignLogoSrc from '../assets/schdesign-logo.svg';

const Header = () => (
  <Box as="header" bg="darkgray" color="#13252f">
    <Flex
      as={Container}
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
      my={2}
    >
      <GatsbyLink to="/">
        <Image
          src={schdesignLogoSrc}
          alt="schdesign"
          height="2em"
          my={2}
          css="display: block;"
        />
      </GatsbyLink>

      <Box as="nav" my={2}>
        <List p={0} m={0}>
          <StaticQuery
            query={graphql`
              {
                allHeaderMenuItemsYaml {
                  edges {
                    node {
                      id
                      title
                      url
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allHeaderMenuItemsYaml.edges.map(
                ({ node }: any, i: number) => (
                  <ListItem
                    key={node.id}
                    m={-2}
                    ml={i !== 0 ? [4, 5] : null}
                    css="display: inline-block;"
                  >
                    <a style= {{padding: '0.3em', textDecoration: 'none', fontFamily: 'Montserrat', color: '#333333', textTransform: 'lowercase'}} href = {node.url}> {node.title}</a>
                  </ListItem>
                ),
              )
            }
          />
        </List>
      </Box>
    </Flex>
  </Box>
);

export default Header;
