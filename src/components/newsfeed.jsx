import React, { Component } from "react";
import { getPosts } from "../services/fakePostsService";
class NewsFeed extends Component {
  state = {
    posts: [],
    postList: [],
    counter: 0
  };

  async componentDidMount() {
    // console.log(getPosts());

    const posts = getPosts();

    //just for genrate fake post copy

    await this.setState({ posts });

    console.log(this.state.posts);

    window.addEventListener("scroll", this.onScroll, false);
    await this.onPaginatedSearch();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onPaginatedSearch = () => {
    const counter = this.state.counter + 1;
    this.setState({ counter });
    //console.log(counter);
    const Li = this.state.posts;
    var postList;
    if (counter < 6) {
      postList = Li.slice(0, 10);
    } else {
      if (counter % 4 == 0) {
        postList = Li.slice(0, this.state.counter + 10);
      } else postList = this.state.postList;
    }

    this.setState({ postList });
  };
  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.state.posts.length
    ) {
      this.onPaginatedSearch();
    }
  };
  render() {
    var styleProfileImg = {
      maxWidth: "10%",
      marginRight: "3%",
      marginTop: "1%",
      marginBottom: "1%"
    };
    const stylePost = {
      fontSize: "2vh"
    };
    return (
      <div className=" mt-4 ml-4 ">
        {this.state.postList.map(post => (
          <div className="row" key={post._id}>
            <div className="col border" style={stylePost}>
              <h4>
                <img style={styleProfileImg} src={post.profileImg} />
                Posted by: {post.byUser} {post.date}{" "}
              </h4>
            </div>

            <div className="w-100" />

            <div className="col border mb-4 p-4" style={stylePost}>
              {post.content}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsFeed;
