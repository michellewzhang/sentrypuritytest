"use client";

import Image from "next/image";
import { CHECKLIST } from "./checklist";
import { useState } from "react";

export default function Home() {
  const [clickedItems, setClickedItems] = useState<Set<number>>(new Set());

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

  return (
  <div className="main-container">
    <div className="header">
      <Image className="header-img" src="/header.png" alt="sentry purity test header" width={3120} height={1075}/>
    </div>

    <div className="description">
       Welcome to the Sentry Purity Test. This is your official (not really) 
       employee guide to the rites of passage that make you a true Sentaur™.
       Whether you&apos;re a fresh-faced newbie still figuring out how to use Okta, 
       or a battle-scarred senior who&apos;s stolen enough protein bars to feed a small country,
       let&apos;s see how &quot;pure&quot; you really are.
       <br></br><br></br>
       Remember: there&apos;s no shame in admitting you&apos;ve done these things. 
       The shame is in pretending you haven&apos;t. 
       <br></br><br></br>
       <em>Disclaimer: This test may cause unsettling war flashbacks. 
        Whether to treat this as a bucket list is up to your poor judgment. </em>
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

    <button className="submit-button">Calculate my score</button>
   </div>
  );
}
