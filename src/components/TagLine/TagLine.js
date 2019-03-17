import React from "react"
import PropTypes from "prop-types"

import styles from "./TagLine.module.scss"

const TagLine = ({ scrollToRef, scrollY }) => {
  const style = {
    bottom: `${(scrollY - 64) / 4}px`,
  }
  return (
    <div className={styles.root}>
      <div style={style} className={styles.headline}>
        Startup team for hire
      </div>
      <div style={style} className={styles.followUp}>
        Lowest cost guaranteed.
      </div>
      <br />
      <div style={style} className={styles.quote}>
        <p>
          "A great experience working with highly motivated engineers." - Rob
        </p>
      </div>
      <div style={style} className={styles.buttonsWrapper}>
        <button onClick={scrollToRef} type="button">
          Meet the team!
        </button>
      </div>
    </div>
  )
}

TagLine.propTypes = {
  scrollToRef: PropTypes.func.isRequired,
  scrollY: PropTypes.number.isRequired,
}

export default TagLine
