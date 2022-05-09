import { Outlet } from 'react-router-dom'
import { ReactComponent as Zalando } from 'assets/crown.svg'
import { signOutUser } from 'utils/firebase/firebase'
import { CartIcon } from 'components/CartIcon'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'store/user/user.selector'
import { selectIsCartOpen } from 'store/cart/cart.selector'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles'
import { CartDropdown } from 'components/CartDropdown'

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
