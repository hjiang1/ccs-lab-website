import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const MemberProfile = ({
  memberInfo: { image, name, title, introduction },
}) => {
  const introductionToHTML = introduction
    .split(`\n\n`)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`)
    .join(``)

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-one-quarter">
          <PreviewCompatibleImage imageInfo={{ image }} />
        </div>
        <div className="column">
          <div className="title">{name}</div>
          <div className="subtitle">{title}</div>
          <div dangerouslySetInnerHTML={{ __html: introductionToHTML }} />
        </div>
      </div>
    </section>
  )
}

MemberProfile.propTypes = {
  memberInfo: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.string,
    title: PropTypes.string,
    introduction: PropTypes.any,
  }),
}

export default MemberProfile
