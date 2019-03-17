import React, { Component } from "react"
import PropTypes from "prop-types"

import ContactForm from "../ContactForm/ContactForm"
import styles from "./Footer.module.scss"
import bitcoinAccepted from "../../images/bitcoin_accepted.png"
import coCompany from "../../images/CO_Company.png"

const Branding = () => (
  <div className={styles.modalContactInfo}>
    <br />
    <img src={coCompany} alt="coCompany" />
    <br />
    <br />
    <h5>Location</h5>
    <p>Denver, CO USA</p>
    <p>Phone 720.588.3355</p>
    <br />
    <img src={bitcoinAccepted} alt="bitcoinAccepted" />
  </div>
)

class Footer extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    const { setRef } = this.props
    setRef(this.ref)
  }

  render() {
    return (
      <div className={styles.root} ref={this.ref}>
        <div className={styles.branding}>
          <Branding />
        </div>
        <div className={styles.contactFormWrapper}>
          <h2>Contact Us Today</h2>
          <p>You'll hear from us by tomorrow</p>
          <ContactForm />
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  setRef: PropTypes.func.isRequired,
}

export default Footer
