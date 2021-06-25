import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you for getting in touch!</h1>
          <p>We will respond to your inquiry as soon as we can.</p>
          <Link to="/" className="button is-primary">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)
