import { FC } from "react";
import styles from "./DropdownFilterItem.module.scss";
import classNames from "classnames/bind";
import { useAppDispatch } from '@/hooks/redux';
import { toggleCity, toggleType } from "@/redux/slices/totalCounterSlice";

interface Props {
  value: string;
  entity: string;
}

const DropdownFilterItem: FC<Props> = ({ value, entity }) => {
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    if(entity==='cities')
      dispatch(toggleCity({city: value}))
    if(entity==='types')
      dispatch(toggleType({wbtype: value}))
  }
  
  let cx = classNames.bind(styles);
  return (
    <div
      style={{ padding: "0 1.25rem" }}
      className={cx("dropdown-item", "mystyle")}
    >
      <div className="form-check">
        <input
          className="form-check-input cursor"
          type="checkbox"
          id={value}
          name={value}
          value={value}
          onClick={handleFilter}
        />
        <label
          className="form-check-label cursor w-100"
          htmlFor={value}
          style={{ whiteSpace: "normal" }}
        >
          {value}
        </label>
      </div>
    </div>
  );
};

export default DropdownFilterItem;
