import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link';
import { Button } from './ui/button';
import { Author, Recipe } from '@/sanity/types';

export type RecipeCardType = Omit<Recipe, 'author'> & { author?: Author }

const RecipeCard = ({ post }: { post: RecipeCardType }) => {

    const { _createdAt, views, author, title, category, _id, description, image } = post;

    return (
        <li className='recipe-card group'>
            <div className="flex-between">
                <p className="recipe-card_date">
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">{author?.name}</p>
                    </Link>
                    <Link href={`/recipe/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
            </div>
            <Link href={`/recipe/${_id}`}>
                <p className="recipe-card_desc">
                    {description}
                </p>

                <img src={image as string} alt="placeholder" className='recipe-card_img' />
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className='recipe-card_btn' asChild>
                    <Link href={`/recipe/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default RecipeCard