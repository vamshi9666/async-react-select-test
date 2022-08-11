import { Component, useEffect, useState } from "react";

import AsyncSelect from "react-select/async";

interface State {
  readonly inputValue: string;
}

type IOption = {
  label: string;
  value: string;
};

const formatOptions = (data: any[]) => {
  return data?.map(({ name }) => {
    return {
      label: name,
      value: name,
    };
  });
};

export const SelectExample = () => {
  const [allUsers, setAllUsers] = useState<IOption[]>([]);
  //   console.log("uses are ", allUsers);

  async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await resp.json();
    return formatOptions(data);
  }

  useEffect(() => {
    fetchUsers().then(setAllUsers);
    console.log("options api called in effect ");
  }, []);

  const loadOptions = async (inputValue: string) => {
    // const allUsers = await fetchUsers();
    console.log("options api called in promise ");

    if (inputValue?.length === 0) {
      return allUsers;
    }
    return allUsers?.filter((eachUser) => {
      return eachUser?.value?.toLowerCase().includes(inputValue?.toLowerCase());
    });
  };

  return (
    <AsyncSelect isMulti loadOptions={loadOptions} defaultOptions={allUsers} />
  );
};
