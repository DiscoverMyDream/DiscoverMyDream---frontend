import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'DiscoverMyDream',
  description: 'We sell E-books and much more.',
  keywords: 'books, buy books, cheap ,e-books,sell books',
}

export default Meta