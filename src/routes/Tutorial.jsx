import TutorialCard from "../components/TutorialCard";
import MenuHeader from "../components/MenuHeader";

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
        <MenuHeader pageTitle={"How to play"}/>

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
  