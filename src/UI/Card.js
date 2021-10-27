import { Fragment, useEffect, useState } from "react";

const Card = (props) => {
  const [items, setitems] = useState([]);
  const [isloaded, setisloaded] = useState(false);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) =>
      res.json().then((items) => {
        //console.log(...items);

        setitems([...items]);
        setisloaded(true);
      })
    );
  }, []);
  console.log(items);
  console.log(items[0]);

  return (
    <Fragment>
      <ul>
        {items.map((item) => (
          <li key={item.id}></li>
        ))}
      </ul>
    </Fragment>
  );
};
export default Card;
