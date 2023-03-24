import { FC } from "react";
import { useState } from "react";
import DropdownFilterItem from "./DropdownFilterItem";
import { searchHelper } from "@/helpers";


interface Props {
  options: string[];
  entity: string;
}

const DropdownFilter: FC<Props> = ({ options, entity }) => {
  const [search, setSearch] = useState<string>("");

  const searchFilter = (val: string) => searchHelper(search, val);

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
        {options.filter(searchFilter).map((option) => (
          <DropdownFilterItem key={option} value={option} entity={entity}/>
        ))}
      </div>
    </div>
  );
};

export { DropdownFilter };
