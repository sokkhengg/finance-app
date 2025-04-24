import { forwardRef } from "react"

export default forwardRef( function Label(props, ref) {
  return (
    <label ref={ref}{...props} className={`block text-gray-700 dark:text-gray-300 ${props.className}`}></label>
  )
})
