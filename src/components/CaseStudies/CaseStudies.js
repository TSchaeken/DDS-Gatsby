import React from "react"

import styles from "./CaseStudies.module.scss"
import denver1 from "../../images/denver-767050_640.jpg"
import denver2 from "../../images/denver-1043509_640.jpg"
import denver3 from "../../images/denver-1762084_640.jpg"
import denver4 from "../../images/larimer-2617495_640.jpg"

const CaseStudies = () => (
  <div className={styles.root}>
    <div className={styles.testImageWrapper1}>
      <div className={styles.textOverlay}>
        We do it all: Mobile Apps, Web Apps, APIs
      </div>
      <img src={denver1} alt="denver1" className={styles.anchorImage} />
    </div>

    <div className={styles.testImageWrapper2}>
      <div className={styles.textOverlay}>Rapid Prototyping</div>
      <img src={denver2} alt="denver2" className={styles.anchorImage} />
    </div>

    <div className={styles.testImageWrapper3}>
      <div className={styles.textOverlay}>UI/UX Design</div>
      <img src={denver3} alt="denver3" className={styles.anchorImage} />
    </div>

    <div className={styles.testImageWrapper4}>
      <div className={styles.textOverlay}>
        Blockchain Decentralized Applications
      </div>
      <img src={denver4} alt="denver4" className={styles.anchorImage} />
    </div>
  </div>
)

export default CaseStudies
