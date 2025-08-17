import ButtonRounded from '../components/ButtonRounded';
import background from '../images/bg-intro-mobile.svg';
import backgroundDesktop from '../images/bg-intro-desktop.svg';
import imgMockups from '../images/image-mockups.png';

function Welcome() {
  return (
    <section className="w-full relative overflow-hidden mb-12 lg:mb-0 lg:h-screen lg:overflow-visible lg:pl-40">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:h-full">
        {/* Texto e botão */}
        <div
          className="flex flex-col items-center lg:items-start text-center lg:text-left px-8 lg:w-1/2 
        lg:px-10 lg:h-full justify-center lg:w-1/2 lg:-mt-40"
        >
          <h1 className="text-4xl mb-4 lg:text-6xl xl:text-7xl text-gray-700 leading-tight">
            Next generation digital banking
          </h1>
          <p className="text-sm lg:text-lg xl:text-xl lg:pt-4 text-gray-400 pb-6 leading-relaxed max-w-md lg:leading-[1.5]">
            Take your financial life online. Your Digitalbank account will be a one-stop-shop for
            spending, saving, budgeting, investing, and much more.
          </p>
          <ButtonRounded text={'Request Invite'} />
        </div>

        {/* Imagem */}
        <div className="relative lg:w-5/5 h-[450px] lg:h-full lg:overflow-visible flex items-center justify-center">
          {/* Background Mobile */}
          <img
            src={background}
            alt="background mobile"
            className="absolute inset-0 w-full h-full z-0 lg:hidden"
          />

          {/* Background Desktop */}
          <img
            src={backgroundDesktop}
            alt="background desktop"
            className="hidden lg:block absolute -top-60 -right-40 z-0 lg:w-[120%] lg:h-[120%] object-cover object-left-top"
          />

          {/* Mock ups */}
          <img
            src={imgMockups}
            alt="mockup images"
            className="relative z-10 mx-auto lg:mx-0 -mt-16 lg:-mb-70 lg:-mt-40 lg:-mr-135 lg:w-[80%] lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
