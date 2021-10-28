import { Fragment, useEffect, useState } from "react";
import classes from "./Card.module.css";
import Information from "./Information";
const Card = (props) => {
  const [items, setitems] = useState([]);
  const [isloaded, setisloaded] = useState(false);
  const [click, setclick] = useState(false);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) =>
      res.json().then((items) => {
        setitems([...items]);
        setisloaded(true);
      })
    );
  }, []);
  const buttonHandler = (props) => {
    setclick(true);
  };

  // console.log(items);

  //console.log(items[0]);
  // console.log(items[0].score);
  // console.log(items[0].show.name);
  // console.log(items[0].show.id);
  // console.log(items[0].show.summary);

  return (
    <Fragment>
      {!click && (
        <ul className={classes.main}>
          {items.map((item) => (
            <li key={item.show.id}>
              <img src={item.show.image.medium} alt="images" />
              <div className={classes.name}>{item.show.name}</div>
              <div className={classes.language}>{item.show.language}</div>

              <button onClick={buttonHandler}>Info</button>
            </li>
          ))}
        </ul>
      )}
      {click && <Information />}
    </Fragment>
  );
};
export default Card;
