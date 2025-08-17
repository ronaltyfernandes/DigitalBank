import PropTypes from 'prop-types';
import ButtonRoundedButton from './ButtonRoundedButton';

function ButtonRounded({ text = 'Request Invite' }) {
  // Função para abrir o link em nova aba
  const handleClick = () => {
    window.open('https://github.com/ronaltyfernandes', '_blank', 'noopener,noreferrer');
  };

  return <ButtonRoundedButton text={text} onClick={handleClick} />;
}

ButtonRounded.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonRounded;
