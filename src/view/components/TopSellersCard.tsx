import { useEffect, useState } from "react";
import { Table } from "./Table";
import { httpClient } from "../../services/httpClient";

export interface DataItem {
  id: number;
  name: string;
  color: string;
}

export function TopSellersCard() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.get<DataItem[]>("/users");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="rounded-20 bg-white shadow-[0px_4px_20px_0px_rgba(238,238,238,0.50)]">
      <p className="text-primary-900 text-xl font-semibold leading-8 px-8 pt-6">Top Sellers</p>

      <Table data={data} />
    </div>
  )
}