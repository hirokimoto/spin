import React from 'react'
import Select from 'react-select'
import _ from 'underscore'
import { Form } from 'components'

export default class Creatable extends React.Component {
  constructor() {
    super()

    this.state = {
      multi: true,
      multiValue: [],
      options: [
        { value: 'R', label: 'Red' },
        { value: 'G', label: 'Green' },
        { value: 'B', label: 'Blue' }
      ],
      value: undefined
    }
  }

  handleOnChange(value) {
    if (this.state.multi) {
      this.setState({ multiValue: value })
    } else {
      this.setState({ value })
    }
  }

  render() {
    const { multi, multiValue, value } = this.state

    return (
      <div>
        <Select.Creatable
          {..._.pick(this.state, ['value', 'options', 'multi'])}
          value={multi ? multiValue : value}
          onChange={(val) => this.handleOnChange(val)}
        />
        <div className="m-t-2">
          <Form.Check
            type="radio"
            checked={this.state.multi}
            onChange={() => this.setState({ multi: true })}
          >
            Multiselect
          </Form.Check>
          <Form.Check
            type="radio"
            checked={!this.state.multi}
            onChange={() => this.setState({ multi: false })}
          >
            Single Value
          </Form.Check>
        </div>
      </div>
    )
  }
}
