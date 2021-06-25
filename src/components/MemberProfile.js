import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const MemberProfile = ({
  memberInfo: { image, name, title, introduction },
}) => {
  return (
    <div className="columns is-multiline">
      <div
        style={{
          width: '240px',
          display: 'inline-block',
        }}
      >
        <PreviewCompatibleImage imageInfo={image} />
      </div>
      <div>{name}</div>
      <div>{title}</div>
      <div>
        {introduction.map((paragraph, i) => (
          <div key={i}>{paragraph}</div>
        ))}
      </div>
    </div>
  )
}

MemberProfile.propTypes = {
  memberInfo: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.string,
    title: PropTypes.string,
    introduction: PropTypes.array,
  }),
}

export default MemberProfile
