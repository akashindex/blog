import React from "react";

const FeaturedProducts: React.FC = () => {

  const tableData = [
    { label: "App Name", value: "Teen Patti Gold" },
    { label: "Version", value: "v1.629 (New Version)" },
    { label: "Size", value: "45.7 MB" },
    { label: "Developer", value: "pkteenpattigold.com" },
    { label: "Platforms", value: "Android" },
    { label: "Price", value: "Free" },
    { label: "Country", value: "Pakistan" },
  ];

  return (
    <div className="flex items-center justify-center mx-auto bg-gray-100 pt-[30px] pb-[30px]">
      <table className="table-auto w-[70%] border-collapse border border-gray-300 bg-white shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300 text-left">Label</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-gray-300">{row.label}</td>
              <td className="px-4 py-2 border border-gray-300">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedProducts;
