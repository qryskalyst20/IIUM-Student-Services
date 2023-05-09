import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cafe',
  title: 'Cafe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Cafe name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Cafe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Cafe address',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
