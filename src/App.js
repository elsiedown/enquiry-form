import React from 'react'
// import useHookForm from './hooks/useHookForm'
import { useForm } from 'react-hook-form'

function App() {

  const { register, formState: { errors }, handleSubmit } = useForm();



  // const [dateRequired, setDateRequired] = React.useState(false)
  // const [enquiryType, setEnquiryType] = React.useState('')

  // const handleChange = (event) => {
  //   console.log('fruit selected')
  //   setEnquiryType(event.target.value)
  //   if (enquiryType === "1" || enquiryType === "2") {
  //     return setDateRequired(!dateRequired)
  //   }
  //   console.log(event.target.value)
  // }

  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    <div className="main">
      <h1>Payroll Enquiry</h1>
      <p>Please use this form for any Payroll related enquiries.</p>
      <form className="column is-offset" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">What does your enquiry relate to? * </label>
          <div>
            <select
              className="select"
              name="selectBox"
              {...register("type", { required: true })}
            >
              <option value=""></option>
              <option value="1">Incorrect Pay</option>
              <option value="2">Missing Expense</option>
              <option value="3">Change of Bank Details</option>
              <option value="4">Change of Address</option>
              <option value="5">Other</option>
            </select>
          </div>
        </div>
        {errors.type && <p className="error-message">Please select an Option</p>}
        <div className="field">
          <label className="label"> Date of payslip being queried (if applicable)</label>
          <div className="control">
            <input
              type="date"
              name="date"
              {...register("date", { required: true })}
            />
          </div>
        </div>
        {errors.date && <p className="error-message">Please enter the Date</p>}
        <div className="is-fullwidth">
          <label className="label">Query *</label>
          <div className="control is-fullwidth">
            <textarea
              className='input is-fullwidth'
              placeholder="Your Query"
              name="query"
              {...register("query", { required: true })}
            />
          </div>
          {errors.query && <p className="error-message">Please enter your Query</p>}
        </div>
        
        <div className="field field-button">
          <button type="submit" className="button">Send</button>
        </div>
      </form>
    </div>
  )
}

export default App
