import SearchForm from '@/components/SearchForm';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  return (
    <>
      <section className="main_container">
        <h1 className="heading">Find your new favorite recipe!</h1>
        <p className="sub-heading">Post your own recipes or try new ones!</p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
