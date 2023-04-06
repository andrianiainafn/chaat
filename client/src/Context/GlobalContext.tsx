import {createContext, PropsWithChildren}  from 'react'

const AuthContext = createContext({}); 
function GlobalContext({children}: PropsWithChildren) {
  return (
    <AuthContext.Provider value={{id: 'test'}}>
        {children}
    </AuthContext.Provider>
  )
}

export default GlobalContext