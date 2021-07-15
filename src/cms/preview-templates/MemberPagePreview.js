import React from 'react'
import PropTypes from 'prop-types'
import { MemberPageTemplate } from '../../templates/member-page'

const MemberPagePreview = ({ entry, getAsset }) => {
  const entryMembers = entry.getIn(['data', 'members'])
  const members = entryMembers ? entryMembers.toJS() : []

  const entryFellows = entry.getIn(['data', 'fellows'])
  const fellows = entryFellows ? entryFellows.toJS() : []

  const entryStudents = entry.getIn(['data', 'students'])
  const students = entryStudents ? entryStudents.toJS() : []

  return (
    <MemberPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      members={members}
      fellows={fellows}
      students={students}
      alumni={{
        members: entry.getIn(['data', 'alumni', 'members']),
        fellows: entry.getIn(['data', 'alumni', 'fellows']),
        catalyst: entry.getIn(['data', 'alumni', 'catalyst']),
        students: entry.getIn(['data', 'alumni', 'students']),
      }}
    />
  )
}

MemberPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MemberPagePreview
