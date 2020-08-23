import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import { useRecoilState } from 'recoil'

import { customerInfoState } from '../states/atom'

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(2),
  },
}))

const CustomerInfo = () => {
  const classes = useStyles()
  const [customerInfo, setCustomerInfo] = useRecoilState(customerInfoState)
  const { name, address } = customerInfo
  const handleInputChange = (e) => {
    const { target } = e
    setCustomerInfo((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }
  return (
    <form noValidate autoComplete="off">
      <div className={classes.input}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.input}>
        <TextField
          name="address"
          label="Address"
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          value={address}
          onChange={handleInputChange}
        />
      </div>
    </form>
  )
}

export default CustomerInfo