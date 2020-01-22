import React from 'react'
import { Form, Field } from 'react-final-form'
import { SensorRequestBody } from '../../../model/sensor'
import { Button } from '@material-ui/core'

interface Props {
  onSubmit: (data: SensorRequestBody) => void
}

const required = (value: string) => (value ? '' : 'Required')
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function FinalForm(props: Props) {
  const { onSubmit } = props
  //   const [isLoading, setIsLoading] = useState(false)

  const beforeSubmit = async (values: SensorRequestBody) => {
    await sleep(2000)
    // setIsLoading(true)
    onSubmit(values)
  }

  return (
    <Form
      onSubmit={beforeSubmit}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="display_name" validate={required}>
              {({ input, meta }) => (
                <>
                  <div>
                    <label>Name:</label>
                    <input {...input} />
                  </div>
                  {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
                </>
              )}
            </Field>
            <Button type="submit" disabled={submitting} variant="outlined">
              Submit
            </Button>
          </form>
        )
      }}
    />
  )
}
