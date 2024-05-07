import { DataTable } from "@/components/data-table";
import React from "react";
import { columns } from "./columns";
import { users } from "./data";
import PageTitle from "@/components/page-title";

type Props = {};

export default function UsersPage({}: Props) {
  return (
    <div className="container flex flex-col gap-5">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={users} />
    </div>
  );
}
