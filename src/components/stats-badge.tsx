import React from "react";

interface statsProps {
    total: number,
    free: number,
    paid: number
}
const StatsBadge = ({ total, free, paid }: statsProps) => {
  return (
    <>
      <span className="font-semibold mr-2 text-lg">
        {total} +
      </span>
      <span className={` text-green-400 ${free === 0 && "hidden"} mr-2 py-1 px-2 rounded-full border `}>
        
        {free === total ? "All Free" : free === 0 ? "" : `${free} Free` }
      </span>
      <span className={`text-red-500  py-1 ${paid === 0 && "hidden"} px-2 rounded-full border`}>
        {paid === total ? "All Paid" : paid === 0 ? "" : `${paid} Paid`}
      </span>
    </>
  );
};

export default StatsBadge;
