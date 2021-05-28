import { useState, useRef } from "react";
import TextList from "./components/TextList";
import Header from "./components/Header";
import Error from "./components/Error";

import { GiphyFetch } from "@giphy/js-fetch-api";

// any update to .env file needs dev server to restart
const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

function App() {
  const [gifs, setGifs] = useState([]);
  const [err, setErr] = useState(false);
  const tf = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = tf.current.value;
    if (!text) {
      setErr(true);
      return;
    }
    (async () => {
      const result = await giphy.animate(text, { limit: 18 });
      setGifs(result.data);
    })();
    tf.current.value = "";
    tf.current.focus();
    setErr(false);
  };
  return (
    <>
      <Header />
      <div className="">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label htmlFor="text">Enter text</label>
              <div>
                <input
                  type="text"
                  ref={tf}
                  id="text"
                  className="form-control"
                />
                <Error isError={err} text="Mandatory text" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
        <TextList gifs={gifs} />
      </div>
    </>
  );
}

export default App;
