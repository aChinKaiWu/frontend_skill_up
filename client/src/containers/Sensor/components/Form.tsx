import React, { FormEvent, useState, ChangeEvent, useEffect, useRef } from 'react'
import { SensorRequestBody } from '../../../model/sensor'
import { apiResponse } from '../../../epics/utils'
import { Subscription } from 'rxjs'
import { sensorActionTypes } from '../../../reducer/sensor/sensorActions'

interface FormErrors {
  display_name: string | null
}

interface Props {
  onSubmit: (data: SensorRequestBody) => void
}

export default function Form(props: Props) {
  const { onSubmit } = props
  const [formData, setFormData] = useState<SensorRequestBody>({
    display_name: '',
    type: 'A',
    extra: '',
  })
  const [errors, setErrors] = useState<FormErrors>({
    display_name: null,
  })
  const [isLoading, setIsLoading] = useState(false)
  const subscription = useRef<Subscription | null>(null)

  useEffect(() => {
    subscription.current = apiResponse.subscribe(
      { nextAction: [sensorActionTypes.CREATE_SENSOR_SUCCESS] },
      {
        next: () => {
          setIsLoading(false)
        },
      },
    )

    return () => {
      subscription.current!.unsubscribe()
    }
  }, [])

  const validate = (form: SensorRequestBody) => {
    const newErrors = {} as FormErrors

    if (form.display_name === '') {
      newErrors.display_name = 'Required'
    } else if (form.display_name.length > 6) {
      newErrors.display_name = 'Exceed maximum length'
    }

    return newErrors
  }

  const beforeSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errors = validate(formData)

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    setIsLoading(true)
    onSubmit(formData)
  }

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const display_name = e.target.value
    const errors = validate({ ...formData, display_name })

    setFormData({ ...formData, display_name })
    setErrors(errors)
  }

  const onBlurName = () => {
    if (formData.display_name === '') {
      setErrors({
        ...errors,
        display_name: 'Required',
      })
    }
  }

  return (
    <form onSubmit={beforeSubmit}>
      <div>
        <label>Name:</label>
        <input disabled={isLoading} value={formData.display_name} onChange={onChangeName} onBlur={onBlurName} />
      </div>
      {errors.display_name && <div style={{ color: 'red' }}>{errors.display_name}</div>}
      <br />
      <div>
        <label>Type:</label>
        <span>A</span>
      </div>
      <br />
      <div>
        <label>Extra:</label>
        <input
          disabled={isLoading}
          value={formData.extra}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, extra: e.target.value })}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
