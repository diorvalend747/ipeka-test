const SkeletonLoader = () => {
  return (
    <div className="container p-9 mx-auto sm:p-4 w-full justify-center items-center flex">
      <table className="min-w-full">
        <thead>
          <tr className="animate-pulse">
            <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="h-4 bg-gray-300 rounded"></div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="h-4 bg-gray-300 rounded"></div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
              <div className="h-4 bg-gray-300 rounded"></div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
              <div className="h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <div className="h-4 bg-gray-300 rounded"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          {Array(1, 2, 3, 4, 5, 6, 7, 8).map((item, i) => {
            return (
              <tr key={i} className="animate-pulse">
                <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonLoader;
