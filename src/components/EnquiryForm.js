import React from 'react'
import Blink from '../images/blink-logo.png'


function EnquiryForm({ enquirySent, handleSubmit, handleChange, formdata, dateRequired }) {

  return (
    <div className="main">
      <img src={Blink} alt="logo"></img>
      <div className="form-section">
        <h1>Payroll Enquiry</h1>
        {!enquirySent ?
          <>
            <p>Please use this form for any Payroll related enquiries.</p>
            <form className="column is-offset" onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">What does your enquiry relate to? * </label>
                <div>
                  <select
                    className="select"
                    name="type"
                    id="type"
                    onChange={handleChange}
                    required={true}
                    value={formdata.type}
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
                      onChange={handleChange}
                      value={formdata.date}
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
                    onChange={handleChange}
                    value={formdata.query}
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

export default EnquiryForm