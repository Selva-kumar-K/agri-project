import { useEffect, useState } from "react";
import { lists } from "../utils/list";

export default function SearchComponent() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(lists);

 const ans = data.filter((d) => d.includes(search))


  return (
    <div>
      <input
        type="text"
        placeholder="Search Something.."
        className="border border-red-300 py-1 mx-10 outline-none"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }}
      />

      <div>
        {ans
        .map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </div>
    </div>
  );
}
