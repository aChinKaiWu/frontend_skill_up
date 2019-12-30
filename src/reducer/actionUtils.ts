export const actionCreator = <T>(type: string) => (data?: T) => ({ type, data })
