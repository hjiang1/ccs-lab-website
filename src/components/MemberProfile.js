import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const MemberProfile = ({
  memberInfo: { image, name, title, introduction },
}) => {
  return (
    <section className="section">
      <div className="columns is-multiline">
        <div
          style={{
            width: '240px',
            display: 'inline-block',
          }}
        >
          <PreviewCompatibleImage imageInfo={{ image }} />
        </div>
        <div>{name}</div>
        <div>{title}</div>
        <div>{introduction}</div>
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
