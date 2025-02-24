import SearchForm from '@/components/SearchForm';
import RecipeCard from '@/components/RecipeCard';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 2501,
    author: { _id: 1, name: 'Best Creamier' },
    _id: 1,
    description: 'Best recipe ever',
    image: 'https://icecreamfromscratch.com/wp-content/uploads/2022/03/Cookie-Monster-Ice-Cream-1.2-720x720.jpg',
    category: 'protein',
    title: 'Cookie Monster Creami'
  }]

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
