import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'
import moment from 'moment'
import DatePicker from 'react-date-picker'

import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../../constants'

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: PropTypes.date,
  initialEndDate: PropTypes.date
}

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,

  // calendar presentation and interaction related props
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: () => moment(),
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: {
    closeDatePicker: 'Close',
    clearDates: 'Clear Dates'
  }
}

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props)

    let focusedInput = null
    if (props.autoFocus) {
      focusedInput = START_DATE
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    }

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate })
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput })
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state

    const props = _.omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate'
    ])

    return (
      <div>
        <DatePicker {...props} onChange={this.onDatesChange} />
      </div>
    )
  }
}

DateRangePickerWrapper.propTypes = propTypes
DateRangePickerWrapper.defaultProps = defaultProps

export default DateRangePickerWrapper
