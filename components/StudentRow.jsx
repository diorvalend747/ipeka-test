const StudentRow = ({
  student,
  index,
  studentPage,
  onClickNext = () => {},
}) => {
  return (
    <tr
      onClick={() => {
        onClickNext(student?._id);
      }}
      key={index}
      className="hover:bg-slate-100 p-9 cursor-pointer"
    >
      {studentPage && (
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
          {index + 1}.
        </td>
      )}
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {student?.studentName}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {student?.location}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        {student?.studentClass}
      </td>
      {studentPage && (
        <td className="cursor-pointer px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
          <div
            onClick={() => {
              onClickNext(student?._id);
            }}
            className="text-white hover:text-white hover:bg-gray-900 px-5 py-1 inline-flex text-s leading-5 font-semibold rounded-full bg-gray-700"
          >
            Detail Pembayaran
          </div>
        </td>
      )}
    </tr>
  );
};

export default StudentRow;
