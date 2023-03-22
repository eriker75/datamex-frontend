export const searchHelper = (search: string, val: string) => {
    return search.toLocaleLowerCase() === ""
      ? val
      : val
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim()
          .includes(
            search
              .toLocaleLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .trim()
          )
      ? val
      : null;
  };