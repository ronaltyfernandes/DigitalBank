import CardArticles from '../components/CardArticles';
import articlesContent from '../utils/articlesContent';

function Articles() {
  return (
    <section className="pt-16 px-6 lg:px-40 overflow-hidden lg:pb-20">
      <div className="flex flex-col items-center justify-center text-center px-6 lg:text-left lg:items-start lg:px-0">
        <h2 className="text-4xl pb-6 mb-10 lg:text-5xl lg:pb-12">Latest Articles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {articlesContent.map((article, index) => (
          <div key={index} className="w-full text-center lg:text-left">
            <CardArticles
              title={article.title}
              content={article.content}
              image={article.image}
              smallText={article.subtitle}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
