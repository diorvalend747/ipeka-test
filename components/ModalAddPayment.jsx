import Modal from "./Modal";

import {
  formattedAmount,
  formatDateToMonthYear,
  formatCurrentDate,
} from "@/utils/helper";
import IPEKALOGO from "../public/ipeka_logo.png";
import { generateReceipt } from "@/utils/pdfGenerator";

const ModalPayment = ({
  isOpen = false,
  onClickSubmit = () => {},
  onClickCancel = () => {},
  setDataPayment = () => {},
  createTransaction = () => {},
  handleFormChange = () => {},
  toStudent,
  dataPayment,
  banks,
  isSubmit,
}) => {
  const bankCode = banks.find((item) => item._id === dataPayment.bankCode);

  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          width: "46rem",
          height: "42rem",
          maxHeight: "80rem",
        },
      }}
    >
      <section>
        <div className="flex justify-between">
          <h1 className="flex text-xl">
            Data Pembayaran{" "}
            <span className="font-bold ml-2">{toStudent?.studentName}</span>
          </h1>
          <button
            onClick={() => onClickCancel()}
            type="button"
            className="text-black-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="flex flex-col mt-10 gap-5">
          <div>
            <label
              for="period"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey"
            >
              Periode Pembayaran
            </label>
            <input
              type="string"
              readOnly
              // value={dataPayment?.period}
              name="period"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-white-600 dark:placeholder-black-900 placeholder:text-black dark:text-grey"
              placeholder={formatDateToMonthYear(dataPayment?.period)}
            />
          </div>
          <div>
            <label
              for="amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey"
            >
              Jumlah Tagihan
            </label>
            <input
              type="number"
              name="amount"
              value={dataPayment?.amount}
              readOnly
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-grey"
              placeholder="Rp. 1.200.000"
            />
          </div>
          <div>
            <label
              for="paymentDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey"
            >
              Tanggal Pembayaran
            </label>
            <input
              type="date"
              onChange={(e) => handleFormChange("date", e.target.value)}
              value={dataPayment?.date}
              name="paymentDate"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-grey"
              placeholder="Pilih Tanggal Pembayaran"
              required
              // value={(value) => formatCurrentDate(new Date(value))}
            />
          </div>

          <label className="block mt-4">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey">
              Kode Bank
            </span>
            <select
              onChange={(e) => handleFormChange("bankCode", e.target.value)}
              value={dataPayment?.bankCode}
              placeholder="Pilih Bank"
              defaultValue={""}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-grey"
            >
              <option value="" disabled defaultValue>
                Pilih Bank
              </option>
              {banks.map((bank, i) => {
                return (
                  <option
                    value={bank?._id}
                    key={i}
                  >{`${bank?.bankCode} - ${bank?.bankName}`}</option>
                );
              })}
            </select>
          </label>
        </div>

        <div className="container mb-6 mx-auto p-8 mr-2 w-full justify-end flex cursor-pointer bottom-0 fixed right-0">
          <button
            onClick={(e) => {
              createTransaction(e);
              generateReceipt(dataPayment, toStudent, bankCode);
            }}
            disabled={
              dataPayment?.date === "" ||
              dataPayment?.bankCode === "" ||
              isSubmit
            }
            className="disabled:bg-slate-300 text-white hover:text-white hover:bg-slate-600 px-5 py-2 inline-flex text-s leading-5 font-semibold rounded-full bg-slate-500"
          >
            {isSubmit ? "Simpan dan Cetak Struk..." : "Simpan dan Cetak Struk"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ModalPayment;
