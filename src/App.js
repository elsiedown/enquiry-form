
import { useForm } from 'react-hook-form'
import React from 'react'
// import useHookForm from './hooks/useForm'

function App() {

  const { register, errors } = useForm();

  // const { formdata, handleChange } = useHookForm({
  //   type: '',
  //   date: '',
  //   query: '',
  // })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
    // console.log(`Query Recieved from ${JSON.stringify(formdata, null, 2)}`)
  }


  return (
    <div className="main">
      <h1>Payroll Enquiry</h1>
      <p>Please use this form for any Payroll related enquiries.</p>
      <form className="column is-offset" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">What does your enquiry relate to?</label>
          <div className="select">
            <select name="type"
            // onChange={handleChange} 
            // value={formdata.type}
            >
              <option value="" ></option>
              <option value="Incorrect Pay">Incorrect Pay</option>
              <option value="Missing Expense">Missing Expense</option>
              <option value="Change of Bank Details">Change of Bank Details</option>
              <option value="Change of Address">Change of Address</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label"> Date of payslip being queried (if applicable)</label>
          <div className="control">
            <input
              type="date"
              name="date"
            // value={formdata.date}
            // onChange={handleChange}
            // ref={register({
            //   required: { value: true, message: 'Please enter your name' },
            //   maxLength: {
            //     value: 30,
            //     message: 'Please use 30 characters or less'
            //   }
            // })}
            />
          </div>
        </div>
        <div className="is-fullwidth">
          <label className="label">Message *</label>
          <div className="control is-fullwidth">
            <textarea
              className='input is-fullwidth'
              placeholder="Your Message"
              type="textarea"
              rows={4}
              name="query"
              {...register("query", { required: true })}


            />
            {errors.query && <span>This field is required</span>}
          </div>
        </div>
        <div className="field field-button">
          <button type="submit" className="button"  >Send</button>
        </div>
      </form>

    </div>




  )
}

export default App
