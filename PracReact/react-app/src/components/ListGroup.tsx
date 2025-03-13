import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //   let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List of Elements</h1>                //...Here Code Duplication Occured
  //         <p>No Item Found...</p>
  //       </>
  //     );

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Item Found...</p> : null}  */}
      {items.length === 0 && <p>No Item Found...</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //   onClick={(event) => console.log(event)}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
