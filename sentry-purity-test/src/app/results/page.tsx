"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Results() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  
  return (
    <div className="main-container results-container">
      <div className="header">
        <Image className="header-img" src="/header.png" alt="sentry purity test header" width={3120} height={1075}/>
      </div>

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
          onClick={() => {}}
        >
          <span className="button-text">
            Share results!
            <Image src="/logo.svg" alt="logo" width={25} height={25}/>
          </span>
        </button>
      </div>
    </div>
  );
}