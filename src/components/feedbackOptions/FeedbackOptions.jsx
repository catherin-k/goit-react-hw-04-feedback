import PropTypes from 'prop-types';
import { ButtonOption } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <ButtonOption
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </ButtonOption>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
