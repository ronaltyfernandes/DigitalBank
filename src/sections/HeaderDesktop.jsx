import logo from '../images/logo-dark.svg';
import modalList from '../utils/headerList';
import ButtonRounded from '../components/ButtonRounded';

function HeaderDesktop() {
  return (
    <>
      <header className="place-content-around items-center relative z-50 hidden lg:flex bg-white-header h-26 shadow-xs overflow-hidden">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 px-2" />
        </div>
        <div className="flex items-center">
          {modalList.map(item => (
            <nav key={item} className="px-4">
              <ul className="flex space-x-8">
                <li
                  className="text-gray-400 text-lg cursor-pointer border-b-2 border-transparent 
                hover:border-green-500 transition-all duration-300 hover:text-black"
                >
                  {item}
                </li>
              </ul>
            </nav>
          ))}
        </div>
        <ButtonRounded text={'Request Invite'} />
      </header>
    </>
  );
}

export default HeaderDesktop;
