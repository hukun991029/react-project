import React, { useState } from 'react'
interface contextOption {
  name: string
}
export const defaultContext: contextOption = {
  name: '张三'
}
export const context = React.createContext<
  React.Dispatch<React.SetStateAction<contextOption>> | undefined
>(undefined)
const appProvider = () => {
  const [state, setState] = useState(defaultContext)
  return <context.Provider value={setState}></context.Provider>
}
