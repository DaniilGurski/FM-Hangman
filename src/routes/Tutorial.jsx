import { Link } from "react-router-dom";
import iconBackUrl from "/images/icon-back.svg"
import RoundButton from "../components/RoundButton";
import TutorialCard from "../components/TutorialCard";

const cardContent = [
  {
    number: "01",
    heading: "Choose a category",
    body: 
    "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
  },
  {
    number: "02",
    heading: "Guess letters",
    body: 
    "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses."
  },
  {
    number: "03",
    heading: "Win or lose",
    body: 
    "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
  },
]

export default function Tutorial() {
    return (
      <div className="tutorial-page backdrop">
        <header className="menu-header | flex"> 
          <RoundButton className="round-button" to="/" iconUrl={iconBackUrl} ariaText={"go back to menu"}/>

          <h1> How to Play </h1>
        </header>

        <ul className="tutorial-cards">
          {
            cardContent.map(card => {
              const {number, heading, body} = card;
              return (
                <li key={number}> 
                  <TutorialCard number={number} heading={heading} body={body}/> 
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  