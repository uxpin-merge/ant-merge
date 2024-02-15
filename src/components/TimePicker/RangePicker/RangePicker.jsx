import React from 'react'
import PropTypes from 'prop-types'
import { TimePicker as ANTComponent } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const timePickeronChange = (time, timeString) => {
  console.log(time, timeString)
  return time
}

/**
 * @uxpindocurl https://ant.design/components/TimePicker/
 * @uxpindescription To select/input a time.
 * @uxpinnamespace TimePicker
 */

const RangePicker = (props) => {
  // Component logic

  return (
    <div>
      <ANTComponent.RangePicker {...props} />
    </div>
  )
}

RangePicker.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,

  /** Allow start or end input leave empty */
  allowEmpty: PropTypes.arrayOf(PropTypes.bool),

  /** Custom rendering function for picker cells */
  cellRender: PropTypes.func,

  /** Custom rendering function for date cells, >= 5.4.0 use cellRender instead */
  dateRender: PropTypes.func,

  /** Default panel date, will be reset when panel open */
  defaultPickerValue: PropTypes.instanceOf(dayjs),

  /** To set default date */
  defaultValue: PropTypes.arrayOf(PropTypes.instanceOf(dayjs)),

  /** If disable start or end */
  disabled: PropTypes.arrayOf(PropTypes.bool),

  /** To specify the time that cannot be selected */
  disabledTime: PropTypes.func,

  /** To set the date format. refer to dayjs#format */
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /** Config input ids */
  id: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),

  /** Panel date. Used for controlled switching of panel date. Work with onPanelChange */
  pickerValue: PropTypes.instanceOf(dayjs),

  /** The preset ranges for quick selection */
  presets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(dayjs), PropTypes.func])),
    })
  ),

  /** Render extra footer in panel */
  renderExtraFooter: PropTypes.func,

  /** Set separator between inputs */
  separator: PropTypes.node,

  /** To provide an additional time selection */
  showTime: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  /** To set date */
  value: PropTypes.arrayOf(PropTypes.instanceOf(dayjs)),

  /** Callback function when the start time or the end time of the range is changing */
  onCalendarChange: PropTypes.func,

  /** Callback function when the selected time is changing */
  onChange: PropTypes.func,

  /** Trigger when get focus */
  onFocus: PropTypes.func,

  /** Trigger when lose focus */
  onBlur: PropTypes.func,
  /** Order start and end time	 */
  order: PropTypes.bool,
  /** Display as 12 hours format, with default format h:mm:ss a
   */
  use12Hours: PropTypes.bool,
}

RangePicker.defaultProps = {}

export default RangePicker
