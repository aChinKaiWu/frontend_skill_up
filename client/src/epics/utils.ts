import { Subject } from 'rxjs'
import { AjaxError } from 'rxjs/ajax'

type subjectDataType = { type: string; data?: any; error?: AjaxError }

const subject = new Subject<subjectDataType>()

export const apiResponse = {
  success: (type: string, data?: any) => subject.next({ type, data }),
  error: (type: string, error: any) => subject.next({ type, error }),
  observe: () => subject.asObservable(),
  subscribe: (
    // Support single action in string format or multiple actions in array format
    actions: { nextAction: string[]; errorAction?: string[] },
    observer: { next?: (data: any, type?: string) => void; error?: (error: any, type?: string) => void },
  ) =>
    subject.subscribe({
      next: ({ type, data, error }: subjectDataType) => {
        // Observer subscribes next event
        if (observer.next) {
          if (actions.nextAction.includes(type)) {
            observer.next(data, type)
          }
        }
        // Observer subscribes error event
        if (observer.error) {
          if (actions.errorAction?.includes(type)) {
            observer.error(error, type)
          }
        }
      },
      // subject.error & subject.complete will terminate this data stream, so we should not use it
    }),
}
