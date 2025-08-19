"use client";

import { CHECKLIST } from "./checklist";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./header";

export default function Home() {
  const [clickedItems, setClickedItems] = useState<Set<number>>(new Set());
  const router = useRouter();

  const handleItemClick = (idx: number) => {
    setClickedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    const score = 100 - clickedItems.size;
    router.push(`/results?score=${score}`);
  };

  return (
  <div className="main-container">
    <Header/>

    <div className="description">
       Welcome to the Sentry Purity Test. This is your official (not really) 
       employee guide to the rites of passage that make you a true Sentaur™.
       Whether you&apos;re a fresh-faced newbie still figuring out how to use Okta, 
       or a battle-scarred senior who&apos;s stolen enough sparkling water to feed a small country,
       let&apos;s see how &quot;pure&quot; you really are.
       <br></br><br></br>
       Remember: there&apos;s no shame in admitting you&apos;ve done these things. 
       The shame is in pretending you haven&apos;t. 
       <br></br><br></br>
       <em>Disclaimer: This test may cause unsettling war flashbacks. 
        Whether or not to treat this as a bucket list is up to your poor judgment. </em>
     </div>

    <div className="list-header">Have you ever...</div>
      <ol className="checklist">
      {CHECKLIST.map((item, idx) => (
        <li key={idx}>
            <button 
              className={`list-button ${clickedItems.has(idx) ? 'clicked' : ''}`}
              onClick={() => handleItemClick(idx)}
            >
              {item}
            </button>
        </li>
      ))}
      </ol>

    <button className="fancy-button" onClick={handleSubmit}>
      <span className="button-text">
        Calculate my score 🙈
      </span>
    </button>

    <div className="disclaimer">{`Created by Michelle^2 for Hackweek 2025. Vote for us in the Sentry AF category pls <3`}
      <br></br>{`Inspired but not affiliated with the Rice Purity Test 🤪 `}
    </div>
   </div>
  );
}
