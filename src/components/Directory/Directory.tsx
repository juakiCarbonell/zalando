import { CategoryItem } from '../CategoryItem/CategoryItem';
import { Category } from 'models/Models';
import './Directory.scss';


interface Props {
    categories: Category[]
}

export const Directory = ({ categories }: Props) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

