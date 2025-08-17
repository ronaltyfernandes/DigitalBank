import PropTypes from 'prop-types';

function Modal({ list }) {
  return (
    <nav className="bg-white shadow-lg rounded-md px-8 py-6 mx-6">
      <ul className="py-4 space-y-5">
        {list.map((item, index) => (
          <li key={index}>
            <a href="#" className="block text-center text-xl text-gray-700 hover:text-blue-500">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Modal.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Modal;
