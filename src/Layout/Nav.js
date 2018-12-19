import { Nav as RSNav, NavItem, NavLink } from "reactstrap"
import PropTypes from "prop-types"
import React from "react"
import { NavLink as RRNavLink } from "react-router-dom"

const Nav = props => (
  <RSNav tabs fill>
    {props.pages.map((page, index) => (
      <NavItem key={index}>
        <NavLink
          exact={true}
          to={page == "About" ? "/" : `/${page}`}
          onClick={() => props.setPage(page)}
          activeClassName="active"
          tag={RRNavLink}
        >
          {page}
        </NavLink>
      </NavItem>
    ))}
  </RSNav>
)

Nav.propTypes = {
  pages: PropTypes.array,
  setPage: PropTypes.func
}

export default Nav
