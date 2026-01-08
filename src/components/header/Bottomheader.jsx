import { useEffect, useState } from "react";
import { IoMdMenu, IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Bottomheader() {
  const [categores, setCategores] = useState([]);
  const [categoresIsOpen, setCategoresIsOpen] = useState(false);
  
  const location = useLocation();

  //  get Category data
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategores(data));
  }, []);

  useEffect(() => {
    setCategoresIsOpen(false)
  }, [location]);

  const navLinks = [
    { title: "Home", Link: "/" },
    { title: "About", Link: "/about" },
    { title: "Accessories", Link: "/accessories" },
    { title: "Blog", Link: "/blog" },
    { title: "Contact", Link: "/contact" },
  ];

  return (
    <div className="btn-header bg-main">
      <div className="container flex items-center justify-between">
        <nav className="nav flex items-center gap-12.5 h-12.5">
          {/* Categores btn */}
          <div className="category-nav w-55 h-full relative">
            {/* category botton */}
            <div
              className="category-btn"
              onClick={() => setCategoresIsOpen((prev) => !prev)}
            >
              <IoMdMenu className="fill-white" />
              <p className="text-white text-sm font-semibold">
                Browse Category
              </p>
              {/* Arrow */}
              {categoresIsOpen ? (
                <IoMdArrowDropdown className="fill-white" />
              ) : (
                <IoMdArrowDropleft className="fill-white" />
              )}
            </div>
            {/* category list */}
            <div
              className={`category-nav-list z-10 ${
                categoresIsOpen && "active"
              }`}
            >
              {categores.map((category, i) => (
                <Link
                  key={i}
                  className="py-3.5 px-2.5 border-b border-border text-sm "
                  to={`category/${category.slug}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav_links flex h-full">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`h-full items-center flex py-0 px-6.5 ${
                  location.pathname == link.Link && "active"
                }`}
              >
                <Link className="text-white!" to={link.Link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sing-rege-icons flex gap-5">
          <Link to="/">
            <MdOutlineLogin />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
