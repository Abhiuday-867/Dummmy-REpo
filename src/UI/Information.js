import { useState, useEffect, Fragment } from "react";
import classes from "./Information.module.css";

const Information = (props) => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) =>
      res.json().then((items) => {
        setitems([...items]);
      })
    );
  }, []);

  return (
    <Fragment>
      <ul className={classes.Information}>
        {items.map((item) => (
          <li key={item.show.id}>
            <div>{item.show.summary}</div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Information;
