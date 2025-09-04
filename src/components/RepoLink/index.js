import React from 'react';

function RepoLink() {
  return (
    <div className="repo-link">
      <a 
        href="https://github.com/4chen500/4chen500" 
        target="_blank" 
        rel="noopener noreferrer"
        title="View source code"
      >
        <span className="repo-text">Source</span>
      </a>
    </div>
  );
}

export default RepoLink;
