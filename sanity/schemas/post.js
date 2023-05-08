import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cafe',
  title: 'Cafe',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Cafe name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Cafe',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Cafe address',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
