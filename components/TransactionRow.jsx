import {
  formattedAmount,
  formatDateToMonthYear,
  formatCurrentDate,
} from "@/utils/helper";

const StudentRow = ({ transaction, index }) => {
  return (
    <tr key={index} className="hover:bg-slate-100 cursor-pointer p-9">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {index + 1}.
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {transaction?.creator?.studentName}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {formatDateToMonthYear(new Date(transaction?.period))}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {formattedAmount(transaction?.paymentAmount)}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {formatCurrentDate(new Date(transaction?.paymentDate))}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {transaction?.bankCode?.bankCode}
      </td>
    </tr>
  );
};

export default StudentRow;
