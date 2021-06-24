import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/ccsbwh-light.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter py-6 px-5">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column has-text-left">
                <div className="block has-text-weight-bold">
                  Center for Clinical Spectroscopy
                </div>
                <img src={logo} alt="Kaldi" style={{ maxWidth: '14em' }} />
                <div className="block">
                  <div>221 Longwood Avenue, BLI-236</div>
                  <div>Boston, MA 02115</div>
                </div>
                <div className="block">
                  <div>Phone: (617) 525-5086</div>
                  <div>Email: spectro@partners.org</div>
                </div>
              </div>
              <div className="column" />
              <div className="column is-one-fifth">
                <div className="block has-text-weight-bold">Affiliations</div>
                <div className="block">Brigham and Women's Hospital</div>
                <div className="block">Harvard Medical School</div>
              </div>
              <div className="column is-one-fifth has-text-right-tablet has-text-left-mobile">
                <section className="menu">
                  <div className="block has-text-weight-bold">
                    Site Navigation
                  </div>
                  <ul className="menu-list m-0 has-text-right-tablet has-text-left-mobile">
                    <li>
                      <Link className="navbar-item" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Publications
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
