import React from 'react'

function useForm(initialState) {

  const [formdata, setFormdata] = React.useState(initialState)
   const [dateRequired, setDateRequired] = React.useState(false)

  const handleChange = event => {
    const value = event.target.value
     if (value === 'Incorrect Pay' || value === 'Missing Expense') {
       setDateRequired(true)
     }
    const nextState = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(nextState)
  }

  return {
    formdata,
    dateRequired,
    handleChange,
  }
}

export default useForm
