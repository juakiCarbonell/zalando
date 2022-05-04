import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ReactComponent as Zalando } from 'assets/crown.svg'
import { UserContext } from 'contexts/userContext'
import { signOutUser } from '../../utils/firebase/firebase'

import './Navigation.scss'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log('currentuser', currentUser)
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Zalando className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}
