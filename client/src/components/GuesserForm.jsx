import React from 'react';

const GuesserForm = ({ onSubmit, questionKeyUp }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onKeyUp={questionKeyUp} placeholder="Ask away!" />
      <input type="submit" name="submit" value="Send Message" />
    </form>
  );
};

export default GuesserForm;
