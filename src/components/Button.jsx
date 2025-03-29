import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetchQuote, label = 'New Quote', className = 'quote-button' }) => {
  return (
    <button onClick={fetchQuote} className={className} aria-label={label}>
      {label}
    </button>
  );
};

Button.propTypes = {
  fetchQuote: PropTypes.func.isRequired, // Ensures fetchQuote is a function
  label: PropTypes.string, // Optional label for the button
  className: PropTypes.string, // Optional className for styling
};

export default Button;