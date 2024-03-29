import React from 'react'
import PropTypes from 'prop-types'
import { forbidExtraProps } from 'airbnb-prop-types'
import omit from 'lodash/omit'

import DatePicker from 'react-date-picker'

import { HORIZONTAL_ORIENTATION } from './../../constants'

const propTypes = forbidExtraProps({
  // example props for the demo
  autoFocus: PropTypes.bool,
  initialDate: PropTypes.date,
  showInput: PropTypes.bool,

  keepOpenOnDateSelect: PropTypes.bool,
  minimumNights: PropTypes.number,
  isOutsideRange: PropTypes.func,
  isDayBlocked: PropTypes.func,
  isDayHighlighted: PropTypes.func,

  // DayPicker props
  enableOutsideDays: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  orientation: ScrollableOrientationShape,
  withPortal: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  renderCalendarInfo: PropTypes.func,

  navPrev: PropTypes.node,
  navNext: PropTypes.node,

  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onOutsideClick: PropTypes.func,
  renderDay: PropTypes.func,

  // i18n
  monthFormat: PropTypes.string,

  isRTL: PropTypes.bool
})

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  initialDate: null,
  showInput: false,

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,
  enableOutsideDays: false,

  // calendar presentation and interaction related props
  orientation: HORIZONTAL_ORIENTATION,
  withPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  onOutsideClick() {},
  keepOpenOnDateSelect: false,
  renderCalendarInfo: null,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // internationalization
  monthFormat: 'MMMM YYYY'
}

class DayPickerSingleDateControllerWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: true,
      date: props.initialDate
    }

    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDateChange(date) {
    this.setState({ date })
  }

  onFocusChange() {
    // Force the focused states to always be truthy so that date is always selectable
    this.setState({ focused: true })
  }

  render() {
    const { showInput } = this.props
    const { focused, date } = this.state

    const props = omit(this.props, ['autoFocus', 'initialDate', 'showInput'])

    const dateString = date && date.format('YYYY-MM-DD')

    return (
      <div>
        {showInput && (
          <div style={{ marginBottom: 16 }}>
            <input type="text" name="start date" value={dateString || ''} readOnly />
          </div>
        )}

        <DatePicker {...props} onChange={this.onDateChange} />
      </div>
    )
  }
}

DayPickerSingleDateControllerWrapper.propTypes = propTypes
DayPickerSingleDateControllerWrapper.defaultProps = defaultProps

export default DayPickerSingleDateControllerWrapper
