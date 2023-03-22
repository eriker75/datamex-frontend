import { wbtypes } from "@/contants/wbtypes";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import DropdownFilterItem from "./DropdownFilterItem";

const DropdownFilter = () => {
  const [search, setSearch] = useState<string>("");

  const searchFilter = (val: [string, string]) => {
    return search.toLocaleLowerCase() === ""
      ? val
      : val[1].toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ? val
      : null;
  };

  return (
    <div className="btn-group dropdown">
      <div
        className="btn btn-outline-secondary dropdown-toggle bg-white"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <input
          type="text"
          placeholder="giros de negocio"
          className="rounded"
          style={{ outline: "none", border: "none" }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div
        className="dropdown-menu my-1 cursor w-100"
        style={{ overflowY: "scroll", maxHeight: "200px" }}
        onClick={(event) => event.stopPropagation()}
      >
        {Object.entries(wbtypes)
          .filter(searchFilter)
          .map(([key, value]) => (
            <DropdownFilterItem key={key} value={value} />
          ))}
      </div>
    </div>
  );
};

export { DropdownFilter };
