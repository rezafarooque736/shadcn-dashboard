/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="w-12 h-12 p-1 bg-gray-100 rounded-full ">
          <img
            width={48}
            height={48}
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="whitespace-nowrap text-ellipsis overflow-hidden text-gray-400 w-[120px] sm:w-auto">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
}
