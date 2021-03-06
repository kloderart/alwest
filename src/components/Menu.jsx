import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 16px;

    a {
      text-decoration: none;
    }
    a.active {
      font-weight: bold;
    }
  }
`;

const Menu = () => (
  <StyledMenu>
    <li>
      <Link to="/film" activeClassName={'active'} partiallyActive={true}>
        Films
      </Link>
    </li>
    <li>
      <Link to="/location" activeClassName={'active'} partiallyActive={true}>
        Locations
      </Link>
    </li>
    <li>
      <Link to="/staff" activeClassName={'active'} partiallyActive={true}>
        Staff
      </Link>
    </li>
  </StyledMenu>
);

export default Menu;
