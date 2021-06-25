import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/ccsbwh-dark.png'
import hmslogo from '../img/hms-logo.svg'
import bwhlogo from '../img/bwh-logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light has-text-black-ter py-6 px-5">
        <div className="content has-background-light has-text-black-ter">
          <div className="container has-background-light has-text-black-terr">
            <div style={{ maxWidth: '100vw' }} className="columns ">
              <div className="column has-text-left">
                <div className="block">
                  <Link to="/">
                    <img
                      className="block"
                      src={logo}
                      alt="Center for Clinical Spectroscopy"
                      style={{ maxWidth: '14em' }}
                    />
                  </Link>
                </div>
                <div className="block">
                  <div>221 Longwood Avenue, BLI-236</div>
                  <div>Boston, MA 02115</div>
                </div>
                <div className="block">
                  <div>Phone: (617) 525-5086</div>
                  <div>Email: spectro@partners.org</div>
                </div>
              </div>
              <div className="column is-one-fifth">
                <div className="block has-text-weight-bold">Affiliates</div>
                <section className="menu">
                  <div className="block">
                    <a
                      className=""
                      href="https://www.brighamandwomens.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="block"
                        src={bwhlogo}
                        alt="Brigham and Women's Hospital"
                        style={{ maxWidth: '14em' }}
                      />
                    </a>
                  </div>
                  <div className="block">
                    <a
                      className=""
                      href="https://hms.harvard.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="block"
                        src={hmslogo}
                        alt="Harvard Medical School"
                        style={{ maxWidth: '14em' }}
                      />
                    </a>
                  </div>
                </section>
              </div>
              <div className="column is-one-fifth ">
                <div className="block has-text-weight-bold">
                  Community Links
                </div>
                <ul className="menu-list m-0 ">
                  <li>
                    <a
                      className="navbar-item"
                      href="https://brainspecmed.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BrainSpec
                    </a>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="https://openmrslab.readthedocs.io/en/latest/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OpenMRSLab
                    </a>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="http://enigma.ini.usc.edu/ongoing/enigma-tbi/enigma-mrs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ENIGMA
                    </a>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="https://www.ismrm.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ISMRM
                    </a>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="https://mrshub.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MRSHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column" />
              <div className="column is-one-fifth has-text-right-tablet">
                <section className="menu">
                  <div className="block has-text-weight-bold">
                    Site Navigation
                  </div>
                  <ul className="menu-list m-0 has-text-right-tablet">
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
                      <Link className="navbar-item" to="/projects">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/publications">
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
