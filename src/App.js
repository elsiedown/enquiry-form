
import React from 'react'
import { useForm } from 'react-hook-form'

function App() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className="main">
      <h1>Payroll Enquiry</h1>
      <p>Please use this form for any Payroll related enquiries.</p>
      <form className="column is-offset" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">What does your enquiry relate to?</label>
          <div className="select">
            <select name="type"
            {...register("type", { required: true })}
            >
              <option value="" ></option>
              <option value="Incorrect Pay">Incorrect Pay</option>
              <option value="Missing Expense">Missing Expense</option>
              <option value="Change of Bank Details">Change of Bank Details</option>
              <option value="Change of Address">Change of Address</option>
              <option value="other">Other</option>
            </select>
          </div>
          {errors.type && "Type is required"}
        </div>
        <div className="field">
          <label className="label"> Date of payslip being queried (if applicable)</label>
          <div className="control">
            <input
              type="date"
              name="date"
              {...register("date", { required: true })}
            />
          </div>
          {errors.date && "Date is required"}
        </div>
        <div className="is-fullwidth">
          <label className="label">Query</label>
          <div className="control is-fullwidth">
            <textarea
              className='input is-fullwidth'
              placeholder="Your Message"
              type="textarea"
              rows={4}
              name="query"
              {...register("query", { required: true })}
            />
          </div>
          {errors.query && "Query is required"}
        </div>
        <div className="field field-button">
          <button type="submit" className="button">Send</button>
        </div>
      </form>
    </div>




  )
}

export default App
