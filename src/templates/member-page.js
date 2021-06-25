import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MemberProfile from '../components/MemberProfile'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const MemberPageTemplate = ({
  image,
  title,
  members,
  fellows,
  students,
  alumni,
}) => {
  console.log(members)
  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div>
              {members.map((member, i) => (
                <MemberProfile key={`member-${i}`} memberInfo={member} />
              ))}
            </div>
            <div>
              <h3>Research Fellows</h3>
              {fellows.map((fellow, i) => (
                <MemberProfile key={`fellow-${i}`} memberInfo={fellow} />
              ))}
            </div>
            <div>
              <h3>Students</h3>
              {students.map((student, i) => (
                <MemberProfile key={`student-${i}`} memberInfo={student} />
              ))}
            </div>
            <div>
              <h3>Alumni</h3>
              <div className="columns">
                <div className="column is-one-quarter">
                  <h4>Members</h4>
                  {alumni.members.map((member, i) => (
                    <div key={`past-member-${i}`}>{member}</div>
                  ))}
                </div>
                <div className="column is-one-quarter">
                  <h4>Research Fellows</h4>
                  {alumni.fellows.map((member, i) => (
                    <div key={`past-member-${i}`}>{member}</div>
                  ))}
                </div>
                <div className="column is-one-quarter">
                  <h4>Harvard Catalyst Stdents</h4>
                  {alumni.catalyst.map((member, i) => (
                    <div key={`past-member-${i}`}>{member}</div>
                  ))}
                </div>
                <div className="column is-one-quarter">
                  <h4>Students</h4>
                  {alumni.students.map((member, i) => (
                    <div key={`past-member-${i}`}>{member}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

MemberPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      title: PropTypes.string,
      introduction: PropTypes.array,
    })
  ),
  fellows: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      title: PropTypes.string,
      introduction: PropTypes.array,
    })
  ),
  students: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      title: PropTypes.string,
      introduction: PropTypes.array,
    })
  ),
  alumni: PropTypes.shape({
    members: PropTypes.array,
    fellows: PropTypes.array,
    catalyst: PropTypes.array,
    students: PropTypes.array,
  }),
}

const MemberPage = ({ data }) => {
  console.log(data)
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MemberPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        members={frontmatter.members}
        fellows={frontmatter.fellows}
        students={frontmatter.students}
        alumni={frontmatter.alumni}
      />
    </Layout>
  )
}

MemberPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MemberPage

export const memberPageQuery = graphql`
  query MemberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        members {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          title
          introduction
        }
        fellows {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          title
          introduction
        }
        students {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          title
          introduction
        }
        alumni {
          members
          fellows
          catalyst
          students
        }
      }
    }
  }
`
