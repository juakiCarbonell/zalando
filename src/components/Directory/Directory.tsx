import { DirectoryItem } from '../DirectoryItem/DirectoryItem'
import { Category } from 'models/Models'
import { DirectoryContianer } from './Directory.styles'

interface Props {
  categories: Category[]
}

export const Directory = ({ categories }: Props) => {
  return (
    <DirectoryContianer>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContianer>
  )
}
