import { DetailsList, IColumn } from "@fluentui/react";
import { useEffect, useMemo, useState } from "react";

const defaultData: Array<any> = new Array(100).fill(0).map((_, index) => {
  return {
    id: index,
    store: "Store " + index,
    storeId: index,
    status: index % 2 === 0 ? "Open" : "Closed",
  };
});

export const Table = () => {
  const [apiData, setApiData] = useState<Array<any>>([]);

  const [filterData, setFilterData] = useState<Array<any>>([]);

  const columns: IColumn[] = [
    {
      name: "Store name",
      fieldName: "store",
      key: "store",
      minWidth: 100,
      isSortedDescending: true,
      onColumnClick: (e, column) => {
        console.log(column);
      },
    },
    {
      name: "Store id",
      fieldName: "storeId",
      key: "storeId",
      minWidth: 100,
    },
    {
      name: "Status",
      fieldName: "status",
      key: "status",
      minWidth: 200,
    },
  ];
  useEffect(() => {
    setApiData(defaultData);
    setFilterData(defaultData);
  }, []);
  const sortData = () => {
    const newData = filterData?.filter((r) => r);

    setFilterData(newData);
  };
  return <DetailsList items={filterData} columns={columns}
    
  />;
};
