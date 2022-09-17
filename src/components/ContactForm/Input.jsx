import React from 'react'
import { InputSC, Error, FormControl } from './styled'
import { useField } from 'formik'

const Input = (props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormControl>
      <label>
        {/* <span>{props.name}</span> */}
        <InputSC {...field} {...props} />
      </label>
      {
        meta.touched && meta.error ? (
          <Error>{meta.error}</Error>
        ) : null
      }
    </FormControl>
  )
}

export default Input