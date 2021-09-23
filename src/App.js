import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "❤️‍🔥": "Heart on Fire",
  "😂": "Face with Tears of Joy",
  "🤐": "Zipper-Mouth Face",
  "🥵": " Hot Face",
  "😥": "Sad but Relieved Face",

  "😡": "Pouting angry Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth in anger",
  "😈": "Smiling Face with Horns"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outputtt!</h1>
      <input onChange={emojiInputHandler} />
      <h2 style={{ fontWeight: "Bold", fontSize: "large" }}> {meaning} </h2>

      <h3>What's your mood?. Click on the emoji and know the meaning </h3>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
