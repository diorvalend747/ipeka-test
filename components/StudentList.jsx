import StudentRow from "./StudentRow";

const StudentList = ({ students, onClickNext = () => {}, studentPage }) => {
  return (
    <>
      <div className="container p-9 mx-auto sm:p-4 w-full justify-center items-center flex">
        <table className="min-w-full">
          <thead>
            <tr>
              {studentPage && (
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
              )}
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nama Murid
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Lokasi
              </th>
              <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Kelas
              </th>
              {studentPage && (
                <th className="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
              )}
            </tr>
          </thead>
          <tbody className="bg-white">
            {students.map((student, index) => {
              return (
                <StudentRow
                  student={student}
                  index={index}
                  onClickNext={() => onClickNext(student?._id)}
                  studentPage={studentPage}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
