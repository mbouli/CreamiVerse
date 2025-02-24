import SearchForm from '@/components/SearchForm';
import RecipeCard from '@/components/RecipeCard';
import { client } from '@/sanity/lib/client';
import { RECIPES_QUERY } from '@/sanity/lib/queries';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  const posts = await client.fetch(RECIPES_QUERY);

  return (
    <>
      <section className="main_container">
        <h1 className="heading">Find your new favorite recipe!</h1>
        <p className="sub-heading">Post your own recipes or try new ones!</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All recipes'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: RecipeCardType) => (
              <RecipeCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No recipes found</p>
          )}
        </ul>
      </section>
    </>
  );
}
