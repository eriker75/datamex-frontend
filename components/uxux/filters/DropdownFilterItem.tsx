import { FC } from "react";
import styles from "./DropdownFilterItem.module.scss";
import classNames from "classnames/bind";

interface Props {
  key: string;
  value: string;
}

const DropdownFilterItem: FC<Props> = ({ key, value }) => {
  let cx = classNames.bind(styles);
  return (
    <div
      key={key}
      className={cx("dropdown-item", "mystyle")}
      onClick={() => console.log(key)}
    >
      <div className="form-check">
        <input className="form-check-input cursor" type="checkbox" id={key} />
        <label
          className="form-check-label cursor"
          htmlFor={key}
          style={{ whiteSpace: "normal" }}
        >
          {value}
        </label>
      </div>
    </div>
  );
};

export default DropdownFilterItem;
