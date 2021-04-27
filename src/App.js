import React from 'react'
import { useForm } from 'react-hook-form'
import Blink from './images/blink-logo.png'

function App() {

  const { handleSubmit } = useForm();

  const [dateRequired, setDateRequired] = React.useState(false)

  const [enquiry, setEnquiry] = React.useState('')
  const [enquirySent, setEnquirySent] = React.useState(false)
  const [date, setDate] = React.useState('')
  const [query, setQuery] = React.useState('')

  const dateValidation = (event) => {
    const value = event.target.value
    setEnquiry(value)
    if (value === 'Incorrect Pay' || value === 'Missing Expense') {
      setDateRequired(true)
    } else {
      setDateRequired(false)
    }
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const onSubmit = () => {
    setEnquirySent(true)
    console.log(`Enquiry received relating to ${enquiry} - Date (if applicable): ${date} - Message: ${query}`)
  }




  return (
    <div className="main">
      <img src={Blink} alt="logo"></img>
      <div className="form-section">
        <h1>Payroll Enquiry</h1>
        {!enquirySent ?
          <>
            <p>Please use this form for any Payroll related enquiries.</p>
            <form className="column is-offset" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label className="label">What does your enquiry relate to? * </label>
                <div>
                  <select
                    className="select"
                    name="type"
                    id="type"
                    onChange={dateValidation}
                    required={true}
                  >
                    <option value=""></option>
                    <option value="Incorrect Pay">Incorrect Pay</option>
                    <option value="Missing Expense">Missing Expense</option>
                    <option value="Change of Bank Details">Change of Bank Details</option>
                    <option value="Change of Address">Change of Address</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {dateRequired &&
                <div className="field">
                  <label className="label"> Date of payslip being queried *</label>
                  <div className="control">
                    <input
                      type="date"
                      name="date"
                      required={true}
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
              }
              <div className="is-fullwidth">
                <label className="label">Query *</label>
                <div className="control is-fullwidth">
                  <textarea
                    className='input is-fullwidth textarea'
                    placeholder="Please give details of the Query"
                    name="query"
                    required={true}
                    onChange={handleQueryChange}
                  />
                </div>
              </div>
              <div className="field field-button">
                <button type="submit" className="button">Send</button>
              </div>
            </form>
          </>
          :
          <>
            <p>Enquiry Sent!</p>
            <p>Someone will get back to you as soon as possible.</p>
          </>
        }
      </div>
    </div>
  )
}

export default App