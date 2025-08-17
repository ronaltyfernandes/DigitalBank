import PropTypes from 'prop-types';

function ButtonRoundedButton({ text = 'Request Invite', onClick }) {
  return (
    <button
      className="bg-linear-to-t from-lightBlue to-lightGreen text-white px-9 py-3 rounded-full 
      cursor-pointer lg:py-4 lg:text-xl hover:brightness-115"
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

ButtonRoundedButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonRoundedButton;
