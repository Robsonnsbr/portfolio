import { useState, KeyboardEvent, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import css from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  //TODO: remover nome do input após busca
  const [userName, setUsername] = useState("");

  useEffect(() => {
    loadUser("robsonnsbr");
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
      setUsername("");
    }
  };
  const handleButtonClick = () => {
    loadUser(userName);
    setUsername("");
  };

  return (
    <div className={css.search}>
      <div className={css.search_container}>
        <label htmlFor="Search">Search on Github</label>
        <div className={css.search_content}>
          <div>
            <input
              type="text"
              name="Search"
              id="Search"
              placeholder="Search User"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button onClick={handleButtonClick}>
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
