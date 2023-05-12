"use client";

import React from "react";
import StudentList from "@/components/StudentList";
import useFetchStudent from "@/hooks/useFetchStudent";
import SkeletonLoader from "@/components/SkeletonLoader";
import { useRouter } from "next/navigation";

const StudentPage = () => {
  const [isLoadingStudent, students] = useFetchStudent();
  const router = useRouter();
  const handleClickStudent = (id) => {
    router.push(`/student/${id}/transaction`);
  };

  return (
    <>
      <div className="mt-9" />
      <div className="container mb-6 mx-auto sm:p-4 w-full justify-center items-center flex cursor-pointer">
        <h1 className="font-bold text-xl">Daftar Murid</h1>
      </div>
      <div>
        {isLoadingStudent ? (
          <SkeletonLoader />
        ) : (
          <StudentList
            students={students}
            onClickNext={handleClickStudent}
            studentPage
          />
        )}
      </div>
    </>
  );
};

export default StudentPage;
