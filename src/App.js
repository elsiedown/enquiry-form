import React from 'react'
import useForm from './hooks/useForm'
import EnquiryForm from './components/EnquiryForm'

function App() {

  const { formdata, handleChange, dateRequired } = useForm({
    type: '',
    date: '',
    query: ''
  })

  const [enquirySent, setEnquirySent] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setEnquirySent(true)
    console.log(`New Enquiry: ${JSON.stringify(formdata, null, 2)}`)
  }

  return (
    <EnquiryForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formdata={formdata}
      enquirySent={enquirySent}
      dateRequired={dateRequired} />
  )
}

export default App