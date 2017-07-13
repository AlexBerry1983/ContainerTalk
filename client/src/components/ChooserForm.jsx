import React from 'react';

const ChooserForm = ({ onSubmit, answerKeyUp, msg }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onKeyUp={answerKeyUp} placeholder="Yes or NO" />
      <input type="submit" name="submit" value="Send Message" />
    </form>
  );
};

export default ChooserForm;
