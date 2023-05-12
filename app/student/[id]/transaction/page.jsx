"use client";

import { useEffect, useState } from "react";
import TransactionList from "@/components/TransactionList";
import SkeletonLoader from "@/components/SkeletonLoader";

const StudentTransaction = ({ params }) => {
  const [studentTransaction, setStudentTransaction] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchPayments = async () => {
    const response = await fetch(`/api/student/${params?.id}/payments`);
    const data = await response.json();

    setStudentTransaction(data);
    setLoading(false);
  };

  useEffect(() => {
    if (params?.id) fetchPayments();
  }, [params?.id]);

  return (
    <div>
      <div className="mt-9"></div>
      <div className="container mb-6 mx-auto sm:p-4 w-full justify-center items-center flex cursor-pointer">
        <h1 className="text-xl">
          Data Pembayaran{" "}
          <span className="font-bold text-xl">
            {studentTransaction[0]?.creator?.studentName}
          </span>
        </h1>
      </div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <TransactionList transactions={studentTransaction} />
      )}
    </div>
  );
};

export default StudentTransaction;
