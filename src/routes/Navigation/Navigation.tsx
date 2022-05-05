import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ReactComponent as Zalando } from 'assets/crown.svg'
import { UserContext } from 'contexts/userContext'
import { CartContext } from 'contexts/cartContext'
import { signOutUser } from '../../utils/firebase/firebase'
import { CartIcon } from 'components/CartIcon'

import './Navigation.scss'
import { CartDropdown } from 'components/CartDropdown'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}
