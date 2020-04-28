import React, { Component } from "react";
import "./styles.css";

class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showPostNavbar: false,
    // };
  }

  render() {
    console.log("instantiated Post render");
    // const { title, date, picture, excerpt, credit, instagram } = this.props;
    const { title, date, picture } = this.props;

    return (
      <div className="post">
        <ul className="post-top">
          <li>
            <img
              src={picture}
              className="post-pic"
              // onClick={() =>
              //   this.setState({ showPostNavbar: !this.state.showPostNavbar })
              // }
            />
            {/* {this.state.showPostNavbar ? (
              <PostNavbar instagram={instagram} soundcloud={soundcloud} />
            ) : null} */}
          </li>
        </ul>
        <div className="post-title">
          <li>{title}</li>
          <li>{date}</li>
        </div>
        {/* <div className="experience">
          <ExperienceButton
            instagram={instagram}
            soundcloud={soundcloud}
            hyperfollow={hyperfollow}
          />
        </div> */}
      </div>
    );
  }
}

export default Post;
