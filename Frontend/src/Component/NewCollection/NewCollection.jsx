import React, { useEffect, useState } from "react";

import Item from "../Item/Item";

const NewCollection = () => {
  const Url = "http://localhost:4000";
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch(`${Url}/newcollection`)
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);

  return (
    <div className="py-10 lg:px-20 px-5 justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-zinc-800 font-bold text-center lg:my-8 uppercase">
          New Collections
        </h1>
        <hr className=" lg:w-[10%] w-[30%] mt-2 h-1 bg-black lg:-mt-5 mb-8 rounded-full"></hr>
      </div>
      <div className="lg:flex lg:flex-wrap gap-4">
        {newCollection.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
