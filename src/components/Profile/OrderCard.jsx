import React from "react";

const OrderCard = () => {
  return (
    <div className="mx-auto my-4 p-4 bg-white shadow-md rounded-md">
      {/* Top section: Status and Order Info */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold text-blue-800">Completed</h2>
        <div className="text-right text-gray-600">
          <p className="text-sm">Order date: Jan 7, 2023</p>
          <p className="text-sm">Order ID: 3232932193201321091</p>
        </div>
      </div>

      {/* Main content: Product info and action buttons */}
      <div className="flex items-center justify-between px-5 py-2">
        {/* Product image */}
        <div className="flex items-center">
          <img
            className="w-20 h-20 object-cover mr-4"
            src="https://via.placeholder.com/80" // Placeholder image URL (use the actual image path)
            alt="Product"
          />
          <div>
            <h3 className="text-lg font-semibold">
              Cat Litter Lavender 10L Tela
            </h3>
            <p className="text-sm text-gray-600">Lavender</p>
            <p className="text-lg font-semibold mt-2">$100.00</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-end space-y-2 mr-10">
          <p className="text-lg font-semibold">Total: $100.00</p>
          <button className="px-6 py-2 bg-[#7EC537] text-white w-full rounded-full hover:bg-green-600">
            Add to Cart
          </button>
          <button className="px-6 py-2 border rounded-full w-full text-gray-700 hover:bg-gray-100">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
