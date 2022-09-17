import React from 'react'
import { InputSC, Error, FormControl } from './styled'
import { useField } from 'formik'

const Input = (props) => {
  const [field, meta, helpers] = useField(props);
  // const { dissabledChars } = props
  // const handleChange = (e) => {
  //   const result = dissabledChars ? e.target.value.replace(dissabledChars, '') : e.target.value;
  //   helpers.setValue(result)
  // }

  return (
    <FormControl>
      <label>
        {/* <span>{props.name}</span> */}
        {/* <InputSC {...field} {...props} onChange={(e) => handleChange(e)} /> */}
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