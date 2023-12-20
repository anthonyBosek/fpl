import lthumb1 from "../assets/images/thumbs/thumb-01.jpg";
import lthumb2 from "../assets/images/thumbs/thumb-02.jpg";
import lthumb3 from "../assets/images/thumbs/thumb-09.jpg";
import lthumb4 from "../assets/images/thumbs/thumb-10.jpg";
import lthumb5 from "../assets/images/thumbs/thumb-11.jpg";
import lthumb6 from "../assets/images/thumbs/thumb-13.jpg";
import tthumb1 from "../assets/images/thumbs/thumb-03.jpg";
import tthumb2 from "../assets/images/thumbs/thumb-05.jpg";
import tthumb3 from "../assets/images/thumbs/thumb-08.jpg";
import tthumb4 from "../assets/images/thumbs/thumb-15.jpg";
import tthumb5 from "../assets/images/thumbs/thumb-16.jpg";

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const randomThumb = (img = null) => {
  const lthumbs = [lthumb1, lthumb2, lthumb3, lthumb4, lthumb5, lthumb6];
  const tthumbs = [tthumb1, tthumb2, tthumb3, tthumb4, tthumb5];
  return img === "league"
    ? lthumbs[Math.floor(Math.random() * 6)]
    : tthumbs[Math.floor(Math.random() * 5)];
};

export const LINEUP = {
  Goalkeeper: [],
  Defender: [],
  Midfielder: [],
  Attacker: [],
};

export const POSITIONS = [
  "Goalkeeper",
  "Defender",
  "Defender",
  "Defender",
  "Defender",
  "Midfielder",
  "Midfielder",
  "Midfielder",
  "Attacker",
  "Attacker",
  "Attacker",
];
