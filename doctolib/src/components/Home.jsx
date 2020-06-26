import React from "react";
import styles from "./Home.module.css";
import logo from "./img/logo.png";
import Signin from "./login/Signin";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "go",
    };
    this.afterAnimationHome = this.afterAnimationHome.bind(this);
  }
  componentDidMount() {
    this.afterAnimationHome();
  }
  afterAnimationHome() {
    setTimeout(() => {
      this.setState({ animation: "sign" });
    }, 2000);
  }
  render() {
    const { animation } = this.state;
    return (
      <div>
        {animation === "go" ? (
          <div className={styles.containerLogo}>
            <img src={logo} alt="logo app" className={styles.logo} />
            <p className={styles.title}>MediMe</p>
          </div>
        ) : animation === "sign" ? (
          <Signin />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
