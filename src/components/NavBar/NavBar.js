import React from "react"
import PropTypes from "prop-types"
import styles from "./NavBar.module.scss"

const NavBar = ({ scrolled, scrollToRef }) => (
  <div
    className={
      scrolled ? [styles.root, styles.scrolled].join(" ") : styles.root
    }
  >
    <div className={styles.logo}>
      <div className={styles.logoText}>Denver Devshop</div>
      <div className={styles.animatedLogo}>
        <div className={styles.square} />
        <div className={styles.leftBracket} />
        <div className={styles.rightBracket} />
      </div>
    </div>
    <div className={styles.buttonsWrapper}>
      <button type="button" className={styles.navButton} onClick={scrollToRef}>
        CONTACT US
      </button>
    </div>
  </div>
)

NavBar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  scrollToRef: PropTypes.func.isRequired,
}

export default NavBar
