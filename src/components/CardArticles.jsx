import PropTypes from 'prop-types';

function CardArticles({ title, content, image, smallText }) {
  return (
    <div className="mb-1 rounded-lg flex flex-col shadow-xs bg-white-header">
      {/* Imagem ocupa metade da altura */}
      <div className="h-60 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-md" />
      </div>

      {/* Texto ocupa a outra metade */}
      <div className="h-fit flex flex-col justify-center px-8 pt-6 py-12">
        <p className="text-xs text-gray-400 mb-3 lg:text-sm">{smallText}</p>
        <h4 className="text-lg text-gray-700 leading-[1] mb-4 font-medium hover:text-lightGreen cursor-pointer">
          {title}
        </h4>
        <p className="text-md text-gray-400 font-normal lg:text-base">{content}</p>
      </div>
    </div>
  );
}

CardArticles.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
};

export default CardArticles;
