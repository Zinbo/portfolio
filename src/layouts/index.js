import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import './style.scss'

import profileImage from '../assets/images/me-closer.jpg'
import favicon from '../assets/favicons/favicon.ico'

class TemplateWrapper extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteKeywords = get(this, 'props.data.site.siteMetadata.keywords')
    const siteURL = get(this, 'props.data.site.siteMetadata.url')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    const { children } = this.props

    return (
      <div className="template-wrapper">
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: siteKeywords },
            { property: 'og:url', content: siteURL },
            { property: 'og:image', content: profileImage },
            { property: 'og:title', content: siteTitle },
            { property: 'og:description', content: siteDescription },
          ]}
          link={[
            { rel: 'icon', type: 'image/ico', sizes: '32x32', href: favicon }
          ]}
        />
        <div className="template-wrapper-children">
          { children() }
        </div>
      </div>
    )
  }
}

export default TemplateWrapper

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        keywords
      }
    }
  }
`
