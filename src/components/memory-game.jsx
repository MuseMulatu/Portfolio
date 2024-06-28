import React, { useState, useEffect } from "react";
import reactImg from "../assets/images/react.svg";
import nodeImg from "../assets/images/node.png";
import cssImg from "../assets/images/css.png";
import htmlImg from "../assets/images/html.png";
import "./memory-game.css";

const cardImages = [
  { src: reactImg, matched: false },
  { src: nodeImg, matched: false },
  { src: cssImg, matched: false },
  { src: htmlImg, matched: false },
  // Add more images as needed
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <div className="memory-game text-center p-5">
      <h2 className="text-2xl font-bold mb-5">Memory Game</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            className={`card w-24 h-24 relative cursor-pointer transform transition-transform duration-500 ${
              card === firstChoice || card === secondChoice || card.matched
                ? "rotate-y-180"
                : ""
            }`}
            key={card.id}
            onClick={() => !disabled && !card.matched && handleChoice(card)}
          >
            <div className="front absolute w-full h-full flex justify-center items-center">
              <img src={card.src} alt="card front" className="object-contain" />
            </div>
            <div className="back absolute w-full h-full flex justify-center items-center">
              {/* Add content for the back of the card if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
