import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { RECIPE_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image'
import { Suspense } from 'react'

import markdownit from 'markdown-it';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    const post = await client.fetch(RECIPE_BY_ID_QUERY, { id });

    if (!post) return notFound();

    const parsedContent = md.render(post?.pitch || '');
    const markup = { __html: parsedContent }

    return (
        <>
            <section className="main_container !min-h-[230px]">
                <p className="tag">{formatDate(post?._createdAt)}</p>
                <h1 className="heading">{post.title}</h1>
                <p className="subheading !max-w-5xl">{post.description}</p>
            </section>

            <section className="section_container">
                <Image className="w-full h-[500px] object-cover rounded-xl" src={post.image} alt="Recipe Thumbnail" />

                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex-between gap-5">
                        <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                            <Image src={post.author.image} alt="Avatar" width={64} height={64} className='rounded-full drop-shadow-lg' />
                            <div>
                                <p className="text-20-medium">{post.author.name}</p>
                                <p className="text-16-medium !text-black-300">@{post.author.email.split("@")[0]}</p>
                            </div>
                        </Link>
                        <p className="category-tag">
                            {post.category}
                        </p>
                    </div>
                    <h3 className="text-30-bold">Recipe</h3>
                    {parsedContent ? (
                        <article className="prose max-w-4xl font-work-sans break-all"
                            dangerouslySetInnerHTML={markup}
                        />
                    ) : (
                        <p className="no-result">Recipe is not available</p>
                    )}
                </div>

                <hr className="divider" />

                <Suspense fallback={<Skeleton className='view-skeleton' />}>
                    <View id={id} />
                </Suspense>
            </section>

            <Footer />
        </>
    )
}

export default page