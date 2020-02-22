import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Films from '../components/films/Films';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Films items={data.allFile.edges.map(x => x.node.childMarkdownRemark)} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "film" }, extension: { eq: "md" } }
      sort: { fields: [childMarkdownRemark___frontmatter___year], order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              title
              poster {
                childImageSharp {
                  resize(width: 250, height: 320, fit: COVER) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
