import GifLoader from "react-gif-loader";

class Loader extends Component {
  render() {
    return (
      <GifLoader
        loading={true}
        imageSrc="https://giphy.com/gifs/JsVlKMKAUUCwA9nZCj/html5"
        imageStyle={imageStyle}
        overlayBackground="rgba(0,0,0,0.5)"
      />
    );
  }
}

export default Loader;
