import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { ReactComponent as Zalando } from 'assets/crown.svg'
import { UserContext } from 'contexts/userContext'
import { CartContext } from 'contexts/cartContext'
import { signOutUser } from '../../utils/firebase/firebase'
import { CartIcon } from 'components/CartIcon'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles'
import { CartDropdown } from 'components/CartDropdown'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Zalando className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}
