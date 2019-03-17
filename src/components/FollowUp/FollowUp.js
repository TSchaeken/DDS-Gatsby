import React from "react"
// import PropTypes from 'prop-types';

import styles from "./FollowUp.module.scss"

const FollowUp = () => (
  <div className={styles.root}>
    <div className={styles.headline}>
      We're a Denver based team of innovative, creative, and passionate
      individuals who love to collaborate.
    </div>
    <div className={styles.followUpText}>
      You've got a great idea. We want to help you build it.
    </div>
  </div>
)

FollowUp.propTypes = {
  // toggleModal: PropTypes.func.isRequired,
}

export default FollowUp
