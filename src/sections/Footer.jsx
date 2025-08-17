import logo from '../images/logo-light.svg';
import ButtonRounded from '../components/ButtonRounded';
import footerLinks from '../utils/footerLinks';

function Footer() {
  return (
    <div className="bg-darkBlue text-white flex flex-col items-center justify-between p-8 pt-12 lg:flex-row lg:items-start lg:px-40">
      <div className="">
        <div className="">
          <img src={logo} alt="Logo" className="h-6 px-2 lg:h-8" />

          {/* <img src="/vite.svg" alt="Vite logo" /> */}
        </div>
        <div className="flex justify-center items-center gap-1.5 my-8 lg:mt-16">
          {footerLinks.map(link => (
            <img
              src={link.href}
              alt={`${link.text}`}
              className="px-2 lg:h-7 cursor-pointer"
              key={link.text}
            />
          ))}
        </div>
      </div>
      <nav className="flex flex-col items-center gap-4 mb-4 text-sm lg:text-lg lg:font-light">
        <a href="" className="cursor-pointer hover:text-lightGreen">
          About Us
        </a>
        <a href="" className="cursor-pointer hover:text-lightGreen">
          Contact
        </a>
        <a href="" className="cursor-pointer hover:text-lightGreen">
          Blog
        </a>
      </nav>
      <nav className="flex flex-col items-center gap-4 mb-8 text-sm lg:text-lg lg:font-light">
        <a href="" className="cursor-pointer hover:text-lightGreen">
          Carrers
        </a>
        <a href="" className="cursor-pointer hover:text-lightGreen">
          Support
        </a>
        <a href="" className="cursor-pointer hover:text-lightGreen">
          Privacy Policy
        </a>
      </nav>
      <div className="flex flex-col items-center justify-center lg:items-end lg:text-right lg:mt-0 lg:w-1/5">
        <ButtonRounded className="justify-center" />
        <p className="mt-6 text-sm text-gray-400 text-center lg:text-base lg:text-right">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGreen hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/ronaltyfernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGreen hover:underline lg:text-right"
          >
            Ronalty Fernandes
          </a>
          .
        </p>
        <p className="text-sm text-gray-400 mt-4 lg:text-base">
          © Digital Bank. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
