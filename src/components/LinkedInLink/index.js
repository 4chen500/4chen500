import React from 'react';

function LinkedInLink({ href }) {
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://ssl.gstatic.com/atari/images/sociallinks/linkedin_white_44dp.png"
        alt="LinkedIn"
        width="44"
        height="44"
      />
    </a>
  );
}

export default LinkedInLink;
