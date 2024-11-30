import React, { useEffect } from "react";
import PopupModal from "../Modal/Popup";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../rtk/orders/ordersThunks";
import CircularLoader from "../tables/Loader";

const OrderInvoicePopup = ({ isModalOpen, handleCloseModal, data }) => {
  //   const dispatch = useDispatch();
  //   const { orderData, orderloading } = useSelector((state) => state.orders);

  //   useEffect(() => {
  //     if (orderId) dispatch(getOrderById({ orderId }));
  //   }, [orderId]);

  return (
    <PopupModal id="example1" isOpen={isModalOpen} onClose={handleCloseModal}>
      <div className="h-full w-full overflow-y-auto">
        <OrderInvoice data={data} />
      </div>
    </PopupModal>
  );
};

export default OrderInvoicePopup;

const OrderInvoice = ({ data, orderloading = "false" }) => {
  //   if (orderloading) {
  //     return <CircularLoader />;
  //   }

  console.log({ data });

  return (
    // <div className="max-w-4xl mx-auto p-8 border rounded-lg shadow-md scroll-auto">
    //   {/* Header Section */}
    //   <div className="flex justify-between items-center border-b pb-4 mb-6">
    //     <div>
    //       <h1 className="text-2xl font-bold">INVOICE</h1>
    //       <p>USA Gomobile</p>
    //       <p>163 SW Freeman Ave Ste D</p>
    //       <p>Hillsboro, OR 97123</p>
    //       <p>derek@usagomobile.com | +535019106</p>
    //     </div>
    //     <div className="text-right">
    //       <img
    //         src="https://via.placeholder.com/150"
    //         alt="Company Logo"
    //         className="h-16"
    //       />
    //     </div>
    //   </div>

    //   {/* Invoice Mapping */}
    //   {data.map((order, index) => (
    //     <div key={order.id} className="mb-8">
    //       {/* Invoice Details */}
    //       <div className="grid grid-cols-2 gap-4 mb-6">
    //         <div>
    //           <h2 className="font-semibold">Bill to</h2>
    //           <p>Customer ID: {order.item.customerId}</p>
    //           <p>Internal Order ID: {order.item.internalOrderId}</p>
    //         </div>
    //         <div>
    //           <h2 className="font-semibold">Order Details</h2>
    //           <p>
    //             <strong>Order Date:</strong>{" "}
    //             {new Date(order.item.orderDate).toLocaleDateString()}
    //           </p>
    //           <p>
    //             <strong>Status:</strong> {order.item.status}
    //           </p>
    //           <p>
    //             <strong>Order Total:</strong> ${order.item.orderTotal}
    //           </p>
    //         </div>
    //       </div>

    //       {/* Table Section */}
    //       <table className="w-full border-collapse border mb-6">
    //         <thead>
    //           <tr className="bg-gray-100">
    //             <th className="border px-4 py-2 text-left">#</th>
    //             <th className="border px-4 py-2 text-left">Order ID</th>
    //             <th className="border px-4 py-2 text-left">Customer Order Number</th>
    //             <th className="border px-4 py-2 text-left">Special Request</th>
    //             <th className="border px-4 py-2 text-right">Shipping Label</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td className="border px-4 py-2">{index + 1}</td>
    //             <td className="border px-4 py-2">{order.item.internalOrderId}</td>
    //             <td className="border px-4 py-2">{order.item.customerOrderNumber}</td>
    //             <td className="border px-4 py-2">{order.item.specialRequest}</td>
    //             <td className="border px-4 py-2 text-right">
    //               {order.item.requestedShippingLabel ? "Yes" : "No"}
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>

    //       {/* Shipping Label Details */}
    //       {order.item.shippingLabel && (
    //         <div className="mt-4">
    //           <h3 className="text-md font-medium">Shipping Label Details:</h3>
    //           <p>
    //             <strong>File Path:</strong>{" "}
    //             {order.item.shippingLabel.filePath || "Not available"}
    //           </p>
    //           <p>
    //             <strong>Request Comment:</strong>{" "}
    //             {order.item.shippingLabel.requestComment || "None"}
    //           </p>
    //         </div>
    //       )}
    //     </div>
    //   ))}

    //   {/* Footer Section */}
    //   <div className="text-center border-t pt-4">
    //     <h2 className="text-lg font-semibold">
    //       Total Orders: {data.length}
    //     </h2>
    //     <p className="text-sm">Thank you for your business!</p>
    //   </div>
    // </div>
    <div className="max-w-4xl mx-auto py-2 px-8 border rounded-lg shadow-md my-10  scroll-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold">INVOICE</h1>
          <p>USA Gomobile</p>
          <p>163 SW Freeman Ave Ste D</p>
          <p>Hillsboro, OR 97123</p>
        </div>
        <p className="flex flex-col">
          <a href="mailto:derek@usagomobile.com">derek@usagomobile.com</a>
          <a href="tel:+535019106">+535019106</a>
          <a
            href="https://www.usagomobile.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.usagomobile.com
          </a>
        </p>
        <div className="text-right">
          <img
            src="/assets/invoiceLogo.png"
            alt="Company Logo"
            className="h-16"
          />
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <h1>
            <strong>CARID:</strong>1097 FL-JAX
          </h1>
          <h2 className="font-semibold">Bill to</h2>
          <p>ID Auto</p>
          <p>1 Corporate Drive</p>
          <p>Suite C, Cranbury, NJ 08512 USA</p>
        </div>
        <div>
          <h2 className="font-semibold">Ship to</h2>
          <p>ID Auto</p>
          <p>1 Corporate Drive</p>
          <p>Suite C, Cranbury, NJ 08512 USA</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <h2 className="font-semibold">Invoice Details</h2>
          <p>
            <strong>Invoice no.:</strong> 1113
          </p>
          <p>
            <strong>Terms:</strong> Net 15
          </p>
          <p>
            <strong>Invoice date:</strong> 11/20/2024
          </p>
          <p>
            <strong>Due date:</strong> 12/05/2024
          </p>
        </div>
        <div className="text-right">
          <h2 className="font-semibold">Gomobile Installer</h2>
          <p>FL-JAX</p>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border mb-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">#</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Product or Service</th>
            <th className="border px-4 py-2 text-left">SKU</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-right">Qty</th>
            <th className="border px-4 py-2 text-right">Rate</th>
            <th className="border px-4 py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">11/20/2024</td>
            <td className="border px-4 py-2">MBS</td>
            <td className="border px-4 py-2">MBS01</td>
            <td className="border px-4 py-2">Mount Balance and Ship</td>
            <td className="border px-4 py-2 text-right">2</td>
            <td className="border px-4 py-2 text-right">$295.00</td>
            <td className="border px-4 py-2 text-right">$590.00</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
      {/* <p> */}
      <div className="flex">

            <strong>Ways to pay:</strong> <p className="bg-red-500 rounded-md px-2 ">{" "} Bank</p>
      </div>
          {/* </p> */}
        <h2 className="text-lg font-semibold">Total: $590.00</h2>
      </div>
      {/* Note to Customer */}
      <div className=" pt-2 ">
        <h2 className="font-semibold text-lg">Note to Customer</h2>
        <p>51575793</p>
        <p>51557566</p>
      </div>

      {/* Pay Button */}
      <div className="text-center mt-2">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Pay Invoice
        </button>
      </div>
    </div>
  );
};
