import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Table as ReactBootstrapTable } from 'react-bootstrap'

import classes from './Table.scss'

const Table = (props) => {
  const { className, children, standard, ...otherProps } = props

  const tableClass = classNames(className, {
    [`${classes.table}`]: !standard
  })

  return (
    <ReactBootstrapTable className={tableClass} {...otherProps}>
      {children}
    </ReactBootstrapTable>
  )
}

Table.propTypes = {
  standard: PropTypes.bool
}

Table.defaultProps = {
  standard: false
}

export default Table
