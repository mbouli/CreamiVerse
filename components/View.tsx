import { client } from '@/sanity/lib/client'
import { RECIPE_VIEWS_QUERY } from '@/sanity/lib/queries';
import { writeClient } from '@/sanity/lib/write-client';
import React from 'react'

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(RECIPE_VIEWS_QUERY, { id });

        await writeClient
        .patch(id)
        .set({ views: totalViews + 1})
        .commit();


    return (
        <div className="view-container">
            <p className="view-text">
                <span className="font-black">{totalViews} {totalViews > 1 ? 'views' : 'view'}</span>
            </p>
        </div>
    )
}

export default View