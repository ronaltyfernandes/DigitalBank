import cardContent from '../utils/cardWhyContent';
import WhySmallCards from '../components/whySmallcards';

function WhyChose() {
  return (
    <section className="bg-gray-100 pt-16 px-6 lg:px-40 lg:py-40 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center px-6 lg:text-left lg:items-start lg:mb-16 lg:px-0">
        <h2 className="text-4xl pb-6 text-gray-700 lg:text-5xl xl:text-6xl lg:pb-10 lg:px-0">
          Why choose Digitalbank?
        </h2>
        <p className="text-sm text-gray-400 leading-[1] lg:text-lg xl:text-2xl lg:w-1/2">
          We leverage Open Banking to turn your bank account into your financial hub.Control your
          finances like never before.
        </p>
      </div>
      {
        //'aqui devemos colocar os cards com vantagens, é interessante fazer um map com os cards'
      }
      <div className="pb-16 lg:flex lg:justify-between lg:gap-8">
        {cardContent.map(item => (
          <WhySmallCards
            title={item.title}
            content={item.content}
            image={item.image}
            key={item.tile}
          />
        ))}
      </div>
    </section>
  );
}

WhyChose.propTypes = {};

export default WhyChose;
