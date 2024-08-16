import SelectBox from "./select-box/SelectBox";
import SearchBox from "./search-box/SearchBox";
import ThemeButton from "./theme-button/ThemeButton";

const Header = () => {
  return (
    <header className="header-section dark:bg-slate-900 dark:text-white bg-slate-300 text-black py-5 px-3 shadow">
      <div className="container mx-auto flex items-center flex-col justify-center  md:flex-row">
        <div className="logo mb-5 md:me-auto md:mb-0">
          <a href="" className="dark:text-white text-3xl font-medium">
            <span className="text-blue-600">Note</span>App
          </a>
        </div>
        <div className="filter-boxes flex flex-col gap-5 w-2/3 md:2/3 md:flex-row xl:w-1/2">
          <SelectBox />
          <SearchBox />
        </div>
        <div className="theme-button md:ms-5 mt-5 md:mt-0">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
