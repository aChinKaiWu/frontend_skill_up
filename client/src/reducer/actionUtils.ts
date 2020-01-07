export const actionCreator = <T>(type: string) => (payload: T | undefined) => ({ type, payload })
export const pureActionCreator = (type: string) => () => ({ type })
