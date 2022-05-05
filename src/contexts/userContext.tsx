import { createContext, useState, useEffect } from 'react'
import {
  onAuthStateChangedListener,
  createUseDocumentFormAuth,
} from '../utils/firebase/firebase'
import { Props, UserContextValues } from './contextModels'
import { UserCredential } from 'firebase/auth'



// As the actual value you want to access
export const UserContext = createContext<UserContextValues>({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<UserCredential | null>(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user: UserCredential) => {
      if (user) {
        createUseDocumentFormAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubcribe
  }, [])

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}
