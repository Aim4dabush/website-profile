//gifs
import apiStoreGif from "../../assets/image/projects/gifs/api_store.mp4";
import introSignUpFormGif from "../../assets/image/projects/gifs/intro_sign_up_form.mp4";
import magicEightBallGif from "../../assets/image/projects/gifs/magic_eight_ball.mp4";
import warCardGameGif from "../../assets/image/projects/gifs/war_card_game.mp4";

//pics
import apiStoreImg from "../../assets/image/projects/pics/api_store.png";
import introSignUpFormImg from "../../assets/image/projects/pics/intro_sign_up_form.png";
import magicEightBallImg from "../../assets/image/projects/pics/magic_eight_ball_project.png";
import warCardGameImg from "../../assets/image/projects/pics/war_card_game.png";

export const data = [
  {
    id: "magic-eight-ball",
    title: "Magic Eight Ball",
    image: magicEightBallImg,
    gif: magicEightBallGif,
    description:
      "One of my first projects with javascript. It's the classic magic eight ball toy. You input a question and the magic eight ball will give you an answer.",
    github: "https://github.com/Aim4dabush/magic8ball",
    deploySite: "https://aim4dabush.github.io/magic8ball/",
    responsive: "any width",
    languages: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ],
  },
  {
    id: "api-store",
    title: "API Store",
    image: apiStoreImg,
    gif: apiStoreGif,
    description:
      "This is my first project using an api. The api is called fake store api. The mvp and stretch goals are in the readme file if you go to the repository.",
    github: "https://github.com/Aim4dabush/api-store",
    deploySite: "https://aim4dabush.github.io/api-store/",
    responsive: "no",
    languages: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ],
  },
  {
    id: "intro-sign-up-form",
    title: "Intro Sign Up Form",
    image: introSignUpFormImg,
    gif: introSignUpFormGif,
    description:
      "Project 5 of 16 from '16 front-end projects to help improve your coding skills'. We had to recreate the website as well as add form validation. It was one of our first projects so we did mobile only.",
    github: "https://github.com/Aim4dabush/intro-sign-up-form",
    deploySite: "https://aim4dabush.github.io/intro-sign-up-form/",
    responsive: "max-width: 375px",
    languages: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
    ],
  },
  {
    id: "war-card-game",
    title: "War Card Game",
    image: warCardGameImg,
    gif: warCardGameGif,
    description:
      "This is the war card game. I used the deck api for the cards but the rest I coded. For more details you can visit the repository.",
    github: "https://github.com/Aim4dabush/war-card-game",
    deploySite: "https://aim4dabush.github.io/war-card-game/",
    responsive: "no",
    languages: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 5,
      },
    ],
  },
];
