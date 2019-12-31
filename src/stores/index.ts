import { createContext, useContext } from 'react'
import { ScenarioStore } from './scenarioStore'

const storeContext = createContext({
  scenarioStore: new ScenarioStore(),
})

export const useStores = () => useContext(storeContext)
