import PropTypes from 'prop-types';

function WhySmallCards({ title, content, image }) {
  return (
    <div className="pt-12 flex flex-col items-center text-center px-2 h-fit lg:text-left lg:items-start overflow-hidden">
      <img src={image} alt={title} className="mb-6 lg:h-25" />
      <h4 className="text-2xl mb-4 lg:text-3xl lg:text-left">{title}</h4>
      <p className="text-gray-400 text-sm lg:text-xl">{content}</p>
    </div>
  );
}

WhySmallCards.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default WhySmallCards;
