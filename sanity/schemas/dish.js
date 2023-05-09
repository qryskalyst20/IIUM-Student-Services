import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Cafe name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Price of the dish',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
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

// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'dish',
//   title: 'Dish',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Cafe name',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'short_description',
//       type: 'string',
//       title: 'Short description',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Price of the dish',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'price',
//       type: 'string',
//       title: 'Cafe address',
//       validation: (Rule) => Rule.required(),
//     },
//   ],
//   preview: {
//     select: {
//       title: 'name',
//       media: 'image',
//     },
//   },
// })
