import React, { Component } from "react"
import styles from "../styles/main.module.scss"
import Main from "../Components/Main/Main"
import NavBar from "../components/NavBar/NavBar"

class IndexPage extends Component {
  state = {
    scrollY: 0,
    ref: null,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.setScrollY)
  }

  setScrollY = () => {
    this.setState(() => ({
      scrollY: window.scrollY,
    }))
  }

  setRef = ref => {
    this.setState({ ref })
  }

  scrollToRef = () => {
    const { ref } = this.state
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    })
  }

  render() {
    const { contactModalOpen, scrollY } = this.state
    return (
      <div className={contactModalOpen ? styles.modalOpen : null}>
        <NavBar scrolled={scrollY >= 64} scrollToRef={this.scrollToRef} />
        <Main
          scrollY={scrollY}
          setRef={this.setRef}
          scrollToRef={this.scrollToRef}
        />
      </div>
    )
  }
}

export default IndexPage
