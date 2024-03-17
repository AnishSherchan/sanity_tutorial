import {defineField, defineType} from 'sanity'
// ! Learn Refrenceing tomorrow
export const blog = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    //? Title of the Blog
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    // ? Content RichText
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what's on your page.`,
              // options: {
              //   isHighlighted: true,
              // },
            },
          ],
        },
      ],
    },
    // ? Meta data
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta description',
    },
    {
      name: 'releaseDate',
      type: 'datetime',
      title: 'Release date',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
    },
  ],
})
