export const actionCreator = <T>(type?: string) => (payload?: T | undefined) => ({ type, payload })
