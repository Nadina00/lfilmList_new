import { Link } from "react-router-dom";
import css from "./Header.module.css"


export const HeaderLibrary = () => {

  return (
    <div className={css.box}>
        <div className={css.headerBtn}>
        <div className={css.boxBtn}>
        <button className={css.btnLogo}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 2V22"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 2V22"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 12H22"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 7H7"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 17H7"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 17H22"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 7H22"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </button>
      <p className={css.logoFilm}>Filmoteka</p>
      </div>
      <div className={css.btnNav}>
        <Link to={'/'} className={css.btnNav}>Home</Link>
        <Link to={'/mylibrary'} className={css.btnNav}>my library</Link>
      </div>
      </div>
     <div className={css.boxLink}>
        <Link to={"/watched"} className={css.link}>Watched</Link>
        <Link to={"/mylibrary"} className={css.link}>queue</Link>
     </div>
    </div>
  );
};
