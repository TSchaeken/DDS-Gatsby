import React, { Component } from "react"
import PropTypes from "prop-types"

import styles from "./Modal.module.scss"
import bitcoinAccepted from "../../images/bitcoin_accepted.png"
import coCompany from "../../images/CO_Company.png"

const ModalForm = ({ handleChange, sendEmail }) => (
  <div className={styles.modalForm}>
    <div className={styles.inlineInputWrapper}>
      <input
        placeholder="Your Name"
        onChange={e => handleChange("name", e.target.value)}
        type="text"
      />
      <input
        placeholder="Your Email"
        onChange={e => handleChange("address", e.target.value)}
        type="text"
      />
    </div>
    <input
      placeholder="Your Project Focus"
      onChange={e => handleChange("focus", e.target.value)}
      type="text"
    />
    <textarea
      onChange={e => handleChange("message", e.target.value)}
      placeholder="Your Message"
    />
    <button onClick={sendEmail} className={styles.submitButton} type="submit">
      Submit
    </button>
  </div>
)

const SuccessText = ({ toggleForm }) => (
  <div>
    <h4>Nice, we've got your info now!</h4>
    <h4>Noah's gonna put some content here eventually I'm sure!</h4>
    {/* eslint-disable-next-line */}
    <h4 onClick={toggleForm} className={styles.toggleFormLink}>
      Show me the form again
    </h4>
  </div>
)

class Modal extends Component {
  state = {
    address: "",
    focus: "",
    name: "",
    message: "",
    showForm: true,
  }

  handleChange = (name, value) => {
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  sendEmail = () => {
    const response = fetch("./sendEmail", {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
      body: JSON.stringify(this.state),
    })
    Promise.resolve(response).then(result => {
      if (result.ok) {
        console.log("email successfully sent!")
        this.setState({ showForm: false })
      } else {
        console.log("email failed to send")
      }
    })
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }))
  }

  render() {
    const { open, toggleContactModal } = this.props
    const { showForm } = this.state
    return (
      <div
        className={open ? [styles.root, styles.open].join(" ") : styles.root}
      >
        <div
          onClick={() => toggleContactModal(!open)}
          className={styles.backdrop}
          role="presentation"
        >
          <div
            role="presentation"
            onClick={e => e.stopPropagation()}
            className={styles.dialogBox}
          >
            <div className={styles.closeModalIcon}>
              {/* eslint-disable */}
              <span role="button" onClick={() => toggleContactModal(!open)}>
                X
              </span>
            </div>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Your email will be shared with a golden retriever.</h2>
                <h3>And then forgotten. She adheres to GDPR.</h3>
              </div>
              <div className={styles.modalBody}>
                {showForm ? (
                  <ModalForm
                    handleChange={this.handleChange}
                    sendEmail={this.sendEmail}
                  />
                ) : (
                  <SuccessText toggleForm={this.toggleForm} />
                )}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleContactModal: PropTypes.func.isRequired,
}

ModalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
}

SuccessText.propTypes = {
  toggleForm: PropTypes.func.isRequired,
}

export default Modal
