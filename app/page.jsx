"use client";

import useFetchStudent from "@/hooks/useFetchStudent";
import useFetchTransaction from "@/hooks/useFetchTransaction";
import useFetchBank from "@/hooks/useFetchBank";
import SkeletonLoader from "@/components/SkeletonLoader";
import ModalPayment from "@/components/ModalAddPayment";
import ModalStudent from "@/components/ModalStudent";
import { useState, useEffect } from "react";
import TransactionList from "@/components/TransactionList";

function Home() {
  const [isLoadingStudent, students] = useFetchStudent();
  const [isLoadingTransaction, transactions] = useFetchTransaction();
  const [isLoadingBank, banks] = useFetchBank();
  const [showModal, setShowModal] = useState({
    student: false,
    payment: false,
  });
  const [toStudent, setToStudent] = useState({});
  const [dataPayment, setDataPayment] = useState({
    date: "",
    period: new Date(),
    bankCode: "",
    amount: 0,
  });
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const filterStudent = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return students.filter(
      (item) =>
        regex.test(item?.studentName) ||
        regex.test(item?.studentClass) ||
        regex.test(item?.location)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterStudent(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  function getAmountPayment(studentClass) {
    if (studentClass.includes("7")) {
      return 400000;
    } else if (studentClass.includes("8")) {
      return 500000;
    } else {
      return 600000;
    }
  }

  const dataStudent = transactions.filter(
    (item) => item?.creator?._id === toStudent._id
  );

  function getNextMonthAfterLastMonth(data) {
    const lastMonth = data
      .map((item) => new Date(item.period).getMonth())
      .reduce((acc, cur) => Math.max(acc, cur), -1);
    const nextMonth = (lastMonth + 2) % 12; // add 2 to lastMonth to get the next month, modulo 12 to handle December
    return nextMonth;
  }

  function getPeriod() {
    if (dataStudent.length > 0) {
      const date = new Date();
      const nextMonth = getNextMonthAfterLastMonth(dataStudent);
      date.setMonth(nextMonth - 1);
      return new Date(date);
    }
    return new Date();
  }

  const _handleFormChange = (target, value) => {
    setDataPayment((prevState) => {
      return {
        ...prevState,
        [target]: value,
      };
    });
  };

  const periodPayment = getPeriod();

  const createTransaction = async (e) => {
    e.preventDefault();

    try {
      setIsSubmit(true);
      const response = await fetch("/api/payment/new", {
        method: "POST",
        body: JSON.stringify({
          creator: toStudent?._id,
          paymentAmount: dataPayment?.amount,
          period: dataPayment?.period,
          paymentDate: dataPayment?.date || new Date(),
          bankCode: dataPayment?.bankCode,
        }),
      });

      if (response.ok) {
        window.location.reload();
      }
      setIsSubmit(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (toStudent._id) {
      setDataPayment((prevState) => {
        return {
          ...prevState,
          amount: getAmountPayment(toStudent?.studentClass),
          period: periodPayment,
        };
      });
    }
  }, [toStudent?._id]);

  return (
    <>
      <div className="mt-9"></div>
      <div className="container mb-6 mx-auto sm:p-4 w-full justify-center items-center flex cursor-pointer">
        <h1 className="font-bold text-xl">
          Daftar Data Transaksi Pembayaran Sekolah Kristen IPEKA
        </h1>
      </div>

      <div className="container mb-6 mx-auto sm:p-4 w-full justify-center items-center flex cursor-pointer">
        <button
          onClick={() => {
            setShowModal({
              student: true,
            });
          }}
          className="text-white hover:text-white hover:bg-gray-900 px-5 py-2 inline-flex text-s leading-5 font-semibold rounded-full bg-gray-700"
        >
          Tambahkan Pembayaran
        </button>
      </div>

      <ModalPayment
        isOpen={showModal?.payment}
        onClickCancel={() => {
          setShowModal({
            payment: false,
            student: false,
          });
          setDataPayment({
            date: "",
            period: new Date(),
            bankCode: "",
            amount: 0,
          });
        }}
        toStudent={toStudent}
        setDataPayment={setDataPayment}
        createTransaction={createTransaction}
        dataPayment={dataPayment}
        handleFormChange={_handleFormChange}
        banks={banks}
        isSubmit={isSubmit}
      />

      <ModalStudent
        isOpen={showModal?.student}
        onClickCancel={() =>
          setShowModal({
            student: false,
          })
        }
        onClickNext={() => {
          setShowModal({
            student: false,
            payment: true,
          });
        }}
        students={students}
        setToStudent={setToStudent}
        setDataPayment={setDataPayment}
        getPeriod={getPeriod}
        getAmountPayment={getAmountPayment}
        handleFormChange={_handleFormChange}
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        searchedResults={searchedResults}
      />

      {isLoadingTransaction ? (
        <SkeletonLoader />
      ) : (
        <TransactionList transactions={transactions} />
      )}
    </>
  );
}

export default Home;
