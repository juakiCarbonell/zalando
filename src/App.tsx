import { Routes, Route } from 'react-router-dom'
import { Home } from 'routes/Home'
import { Navigation } from 'routes/Navigation'
import { Shop } from 'routes/Shop'
import { Checkout } from 'routes/Checkout'
import { Authentication } from 'routes/Authentication'
import { useEffect } from 'react'
import {
  onAuthStateChangedListener,
  createUseDocumentFormAuth,
} from 'utils/firebase/firebase'
import { UserCredential } from 'firebase/auth'
import { setCurrentUser } from 'store/user/user.action'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user: UserCredential) => {
      if (user) {
        createUseDocumentFormAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubcribe
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
