import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

const app = document.getElementById("app");

const stringSplitter = (string) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 45,
  stringSplitter
});

typewriter
  .typeString("Hey There!, I'm Vinay Gawade.👋")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a Web developer.💻🚀👨‍💻")
  .pauseFor(1000)
  .deleteAll()
  .start();
