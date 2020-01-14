import React, { FormEvent, useState, ChangeEvent, useEffect, useRef } from 'react'
import { SensorRequestBody } from '../../../model/sensor'
import { apiReponse } from '../../../epics/utils'
import { Subscription } from 'rxjs'

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
  const [isLoading, setIsLoading] = useState(false)
  const subscription = useRef<Subscription | null>(null)

  useEffect(() => {
    subscription.current = apiReponse.subscribe({
      next: () => {
        setIsLoading(false)
      },
    })

    return () => {
      subscription.current!.unsubscribe()
    }
  }, [])

  const beforeSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    onSubmit(formData)
  }

  return (
    <form onSubmit={beforeSubmit}>
      <div>
        <label>Name:</label>
        <input
          disabled={isLoading}
          value={formData.display_name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, display_name: e.target.value })}
        />
      </div>
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
