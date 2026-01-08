import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  const [suggestions, setSuggesstions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim())
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    setSuggesstions([]);
  };

//   get search suggestion
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!search.trim()) {
        setSuggesstions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${search}`
        );
        const data = await res.json();
        setSuggesstions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Result Suggesstion Error : ", error);
      }
    };
    const debunce = setTimeout(() => {
      fetchSuggestions();
    }, 500);

    return () => clearTimeout(debunce);
  }, [search]);

//   clear suggetion to close search
  useEffect(() => {
    setSuggesstions([]);
  },[location])

  return (
    <div className="searchBox-conteiner relative">
      <form
        onSubmit={handleSubmit}
        action=""
        className="search-box w-125 flex items-center bg-bg rounded-4xl border border-main"
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Search for Product"
          autoComplete="off"
          className="h-11 w-110 py-1.5 pe-4 ps-5 bg-bg rounded-l-3xl"
        />
        <button className="h-11 w-15 ps-5 bg-main text-[10px] cursor-pointer rounded-e-4xl">
          <FaSearch className="fill-white text-xl" />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestion absolute border border-border rounded bg-white w-full z-40 py-2 px-5">
          {suggestions.map((item) => (
            <Link to={`/products/${item.id}`}>
              <li
                key={item.id}
                className="flex items-center cursor-pointer gap-5 px-1 py-1 border-b border-border"
              >
                <img src={item.images[0]} className="w-7.5!" alt={item.title} />
                <span className="text-sm ">{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
