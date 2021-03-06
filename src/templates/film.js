import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/Layout';
import Map from '../components/locations/Map';
import Staff from '../components/staff/Staff';
import Meta from '../components/Meta';
import SEO from '../components/SEO';
import Container from '../components/Container';

const Film = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.title}</h2>
        <Meta frontmatter={frontmatter} />

        <Img
          fixed={frontmatter.poster.childImageSharp.fixed}
          objectFit={'cover'}
          objectPosition={'50% 50%'}
          alt={frontmatter.title}
          style={{ marginBottom: '1rem' }}
        />

        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      {frontmatter.directors && frontmatter.directors.length > 0 && (
        <Container>
          <h3>Directors</h3>
          <Staff size={'small'} items={frontmatter.directors} />
        </Container>
      )}

      {frontmatter.actors && frontmatter.actors.length > 0 && (
        <Container>
          <h3>Actors</h3>
          <Staff size={'small'} items={frontmatter.actors} />
        </Container>
      )}

      {frontmatter.locations && frontmatter.locations.length > 0 && (
        <>
          <Container>
            <h3>Locations</h3>
          </Container>
          <Map markers={frontmatter.locations} />
        </>
      )}
    </Layout>
  );
};

Film.propTypes = {
  data: PropTypes.object,
};

export default Film;

export const query = graphql`
  query($id: String!) {
    file(childMarkdownRemark: { frontmatter: { id: { eq: $id } } }) {
      childMarkdownRemark {
        frontmatter {
          id
          title
          imdb
          spotify
          runtime
          year
          poster {
            childImageSharp {
              fixed(width: 210, height: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          locations {
            frontmatter {
              id
              name
              lat
              lon
            }
            html
          }
          directors {
            frontmatter {
              id
              name
              picture {
                childImageSharp {
                  fixed(width: 150, height: 220) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          actors {
            frontmatter {
              id
              name
              picture {
                childImageSharp {
                  fixed(width: 150, height: 220) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
        html
      }
    }
  }
`;
