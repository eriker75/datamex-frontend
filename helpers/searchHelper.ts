import { normalizeString } from './normalizeString';

export const searchHelper = (search: string, val: string) => {
  return search.toLocaleLowerCase().trim() === ""
    ? val
    : normalizeString(val).includes(normalizeString(search))
      ? val
      : null;
};