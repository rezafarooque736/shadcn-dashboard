import { DataTable } from "@/components/data-table";
import React from "react";
import { columns } from "./columns";
import PageTitle from "@/components/page-title";
import { data } from "./data";

type Props = {};

export default function UsersPage({}: Props) {
  return (
    <div className="container flex flex-col gap-5">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}