"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../header";
import { generateScoreImage } from "../../utils/imageGenerator";
import { Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  
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
      <div>maybe insert some ai generated description poking fun at you</div>

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