import { FC } from "react";
import styles from "./DropdownFilterItem.module.scss";
import classNames from "classnames/bind";

interface Props {
  value: string;
}

const DropdownFilterItem: FC<Props> = ({ value }) => {
  let cx = classNames.bind(styles);
  return (
    <div
      style={{ padding: "0 1.25rem" }}
      className={cx("dropdown-item", "mystyle")}
      onClick={() => console.log(value)}
    >
      <div className="form-check">
        <input
          className="form-check-input cursor"
          type="checkbox"
          id={value}
          name={value}
          value={value}
        />
        <label
          className="form-check-label cursor"
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
