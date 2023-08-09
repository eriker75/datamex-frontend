import { FC, useEffect, useState } from 'react';
import styles from "./DropdownFilterItem.module.scss";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { TOTAL_FILTERS } from "@/types";
import { 
  selectTotalCities,
  selectTotalTrades,
  selectTotalSizes,
  selectTotalStates,
  toggleTotal 
} from "@/redux/slices/totalCounterSlice";
interface Props {
  value: string;
  entity: TOTAL_FILTERS;
}

const DropdownFilterItem: FC<Props> = ({ value, entity }) => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(selectTotalCities);
  const trades = useAppSelector(selectTotalTrades);
  const sizes = useAppSelector(selectTotalSizes);
  const states = useAppSelector(selectTotalStates);
  const [filters, setFilters] = useState<string[]>([]);
  
  useEffect(()=>{
    if(entity===TOTAL_FILTERS.CITIES)
      setFilters(cities);
    if(entity===TOTAL_FILTERS.TRADES)
      setFilters(trades);
    if(entity===TOTAL_FILTERS.STATES)
      setFilters(states);
    if(entity===TOTAL_FILTERS.SIZES)
      setFilters(sizes);
  }, [entity, cities, trades, states, sizes]);

  const handleFilter = () => {
    dispatch(toggleTotal({filter: entity, toggle: [value]}));
    if( entity === TOTAL_FILTERS.STATES) {
      //Ad logic here!
      //dispatch(toggleTotal({filter: entity, toggle: [value]}));
    }
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
          checked={Boolean(filters.includes(value))}
          onChange={handleFilter}
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
