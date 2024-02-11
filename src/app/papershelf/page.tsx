import React from "react";
import styles from "../styles/Home.module.css";
import { Papershelf, getData } from "../lib/notion/papershelf";

const PaperShelf = async () => {
  const papershelf = await getData();
  // Group papers
  const groupedPapers = groupPapersByCategory(papershelf);

  return (
    <div className={styles.container}>
      <section className="s1">
        <h2>Papershelf</h2>
        {Object.entries(groupedPapers).map(([category, papers]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {papers.map((paper, index) => (
                <li key={index}>
                  {paper.url ? (
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    paper.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

const groupPapersByCategory = (papers: Papershelf[]) => {
  return papers.reduce((acc, paper) => {
    const { category } = paper;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(paper);
    return acc;
  }, {} as Record<string, Papershelf[]>);
};

export default PaperShelf;