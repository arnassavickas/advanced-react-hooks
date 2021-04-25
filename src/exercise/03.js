// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const Context = React.createContext()

function useCount() {
  const appContext = React.useContext(Context)
  if (!appContext) {
    throw new Error('useCount should be used in Context')
  }
  return appContext
}

const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]

  return <Context.Provider value={value}>{children}</Context.Provider>
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
