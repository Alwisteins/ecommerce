import navMenu from "./navMenu";

export default function Navbar() {
  return (
  <nav className="block order-1 sm:static sm:order-none w-full sm:w-auto border-t border-slate-300 sm:border-none">
      <ul className="flex sm:space-x-10 w-full justify-around sm:justify-normal items-center">
        {navMenu.map((nav) => (
          <li key={nav.name} className={`${nav.name == "Shop" ? "mb-2" : ""} sm:mb-0 py-2`}>
            <a href={nav.path} className="flex flex-col items-center">
              <nav.icon
                className={`${
                  nav.name == "Shop" ? "w-7 h-7" : "w-5 h-5"
                } block sm:hidden text-green-500`}
              />
              <span className="text-sm sm:text-base font-medium sm:font-normal">
                {nav.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
