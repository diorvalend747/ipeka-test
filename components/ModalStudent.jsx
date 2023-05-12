import Modal from "./Modal";
import StudentList from "./StudentList";
import Search from "./Search";

const ModalStudent = ({
  isOpen = false,
  onClickNext = () => {},
  onClickCancel = () => {},
  setDataPayment = () => {},
  setToStudent = () => {},
  handleFormChange = () => {},
  handleSearchChange = () => {},
  searchText,
  searchedResults,
  students,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClickCancel()}
      style={{
        content: {
          width: "46rem",
          height: "42.5rem",
          maxHeight: "80rem",
        },
      }}
      className="w-1"
    >
      <section>
        <div className="flex flex-col gap-0 scroll-rounded">
          <div className="sticky top-0 bg-white z-10 pt-5 pb-4">
            <div className="relative w-full">
              <div className="flex justify-between mb-5">
                <h1 className="flex font-bold text-xl">
                  Silahkan pilih nama murid
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
            </div>
            <div className="flex items-center">
              <Search
                searchText={searchText}
                handleSearchChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="flex flex-col mt-3">
            {searchText ? (
              <StudentList
                students={searchedResults}
                setToStudent={setToStudent}
                onClickNext={onClickNext}
                handleFormChange={handleFormChange}
              />
            ) : (
              <StudentList
                students={students}
                setToStudent={setToStudent}
                onClickNext={onClickNext}
                handleFormChange={handleFormChange}
              />
            )}
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ModalStudent;
