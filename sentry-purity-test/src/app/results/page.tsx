"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../header";
import { generateScoreImage } from "../../utils/imageGenerator";
import { Suspense } from "react";

function ScoreToDescription(score: number) {
  switch (true) {
    case score >= 90:
      return "you are a baby. a little cinnamon roll too pure for this world."
    case score >= 80:
      return "dippin your toes in the water"
    case score >= 70:
      return "you've been around the block"
    case score >= 60:
      return "getting comfortable"
    case score >= 50:
      return "you are very cool"
    case score >= 40:
      return "you are legendary"
    case score >= 30:
      return "you're my hero"
    case score >= 20:
      return "people are perceiving you"
    case score >= 10:
      return "everyone has a story about you"
    case score >= 0:
      return "are you david cramer?"
    default:
      return "um idk how this happens lol"
  }
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const description = ScoreToDescription(Number(score));
  
  const handleShare = async () => {
    try {
      await generateScoreImage(score);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="main-container results-container">
      <Header/>

      <h1 className="results-header">Your score:</h1>
      <div className="results-score">{score}</div>
      <div>{description}</div>

      <div className="action-buttons">
        <button 
          className="fancy-button take-again-button"
          onClick={() => window.history.back()}
        >
          <span className="button-text">
            Take the test again 🥴
          </span>
        </button>

        <button 
          className="fancy-button take-again-button"
          onClick={handleShare}
        >
          <span className="button-text">
            Save results!
            <Image src="/logo.svg" alt="logo" width={25} height={25}/>
          </span>
        </button>
      </div> 
    </div>
  );
}

export default function Results() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}