import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'
import { HEADER_STYLE_SIMPLE, HEADER_STYLE_BREADCRUMBS } from 'layouts/DefaultLayout/modules/layout'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Breadcrumb } from 'react-bootstrap'
import { Grid } from 'components'

import ROUTES_STRUCTURE, { findActiveNodes } from 'routes/routesStructure'

import classes from './Header.scss'

const headers = {
  [HEADER_STYLE_SIMPLE]: (title, path, containerFluid, children) => (
    <div className="sub-navbar sub-navbar__header">
      <Grid fluid={containerFluid}>
        <Row>
          <Col lg={12}>
            <div className={classes.simpleHeaderWrap}>
              <Row>
                <Col xs={children ? 6 : 12}>
                  <div className={classes.headerPart}>
                    <h1>{title}</h1>
                  </div>
                </Col>
                {children && (
                  <Col xs={6}>
                    <div className={classes.headerPart}>{children}</div>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  ),
  [HEADER_STYLE_BREADCRUMBS]: (title, path, containerFluid, children) => (
    <div className="sub-navbar sub-navbar__header-breadcrumbs">
      <Grid fluid={containerFluid}>
        <Row>
          <Col xs={children ? 6 : 12} className="sub-navbar-column">
            <div className="sub-navbar-header">
              <h3>{title || 'Home'}</h3>
            </div>
            {path && path.length > 0 ? (
              <Breadcrumb className="navbar-text navbar-right no-bg">
                <LinkContainer to="/" onlyActiveOnIndex>
                  <Breadcrumb.Item active={false}>
                    <i className="fa fa-fw fa-home"></i>
                  </Breadcrumb.Item>
                </LinkContainer>
                {_.map(path.reverse(), (pathItem, index) => (
                  <Breadcrumb.Item
                    href="javascript:void(0)"
                    active={index === path.length - 1}
                    key={`header-breadcrumb-${index}`}
                  >
                    {pathItem.title}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            ) : null}
          </Col>
          {children && <Col xs={6}>{children}</Col>}
        </Row>
      </Grid>
    </div>
  )
}

const Header = (props) => {
  const path = findActiveNodes(ROUTES_STRUCTURE, props.currentUrl)
  const { title } = path && path.length > 0 ? path[0] : ''

  return headers[props.style](title, path, props.fluid, props.children)
}

Header.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  fluid: PropTypes.bool.isRequired,
  children: PropTypes.node
}

Header.defaultProps = {
  children: null
}

export default Header
