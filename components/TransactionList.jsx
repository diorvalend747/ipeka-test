import TransactionRow from "./TransactionRow";

const StudentList = ({ transactions }) => {
  return (
    <>
      <div className="container p-9 mx-auto sm:p-4 w-full justify-center items-center flex">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nama Murid
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Periode
              </th>
              <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Jumlah Pembayaran
              </th>
              <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Pembayaran
              </th>
              <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Kode Bank
              </th>
              {/* <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" /> */}
            </tr>
          </thead>
          <tbody className="bg-white">
            {transactions.map((transaction, index) => {
              return <TransactionRow transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
