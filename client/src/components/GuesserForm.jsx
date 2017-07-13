import React from 'react';

const GuesserForm = ({ onSubmit, guessKeyUp, msg }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onKeyUp={guessKeyUp} placeholder="Ask away!" />
      <input type="submit" name="submit" value="Send Message" />
    </form>
  );
};

export default GuesserForm;
