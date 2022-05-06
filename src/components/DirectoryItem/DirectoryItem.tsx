import { useNavigate } from 'react-router-dom'
import { CategoryConfig } from 'models/Models'
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './DirectoryItem.styles'

interface Props {
  category: CategoryConfig
}

export const DirectoryItem = ({ category }: Props) => {
  const navigate = useNavigate()
  const { title, imageUrl, route } = category
  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
