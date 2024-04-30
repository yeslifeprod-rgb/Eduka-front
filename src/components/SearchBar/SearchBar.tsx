import { useEffect, useState } from "react";
interface SearchBarPropsInterface {
  handleSearch: (query: string) => void;
}

export default function SearchBar(props: SearchBarPropsInterface) {
  const { handleSearch } = props;
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [noResults] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={` text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6  border-gray-100 shadow-sm  ${
          isFixed ? "z-50  fixed top-0 left-0 right-0" : ""
        }`}
      >
        <form className="max-w-md mx-auto py-4 px-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm  font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue"
              placeholder="Rechercher un utilisateur..."
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
        </form>
        {noResults && (
          <p className="text-gray-500 text-sm text-center">
            Aucun utilisateur ne correspond à votre recherche.
          </p>
        )}
      </section>
    </>
  );
}
