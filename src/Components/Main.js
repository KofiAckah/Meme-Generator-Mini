import { useState, useEffect } from "react";
import React from "react";

function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemeImages(data.data.memes);
      });
  }, []);

  const [allMemeImages, setAllMemeImages] = useState([]);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    const randomMeme = allMemeImages[randomIndex].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImg: randomMeme,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main>
      <div>
        <div className="flex justify-evenly mt-2">
          <div className="flex flex-col">
            <label>Top Text</label>
            <input
              type="text"
              placeholder="Top Text"
              className="border border-black p-1 mt-2"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Bottom Text</label>
            <input
              type="text"
              placeholder="Bottom Text"
              className="border border-black p-1 mt-2"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className=" headColor p-2 w-10/12 text-white m-10 mx-16"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="mx-auto w-96 mb-5" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Main;
