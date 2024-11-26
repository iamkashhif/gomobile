import React, { useEffect } from "react";
import PopupModal from "../Modal/Popup";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../rtk/orders/ordersThunks";
import CircularLoader from "../tables/Loader";

const OrderPopup = ({ isModalOpen, handleCloseModal, orderId }) => {
  const dispatch = useDispatch();
  const { orderData, orderloading } = useSelector((state) => state.orders);

  useEffect(() => {
    if (orderId) dispatch(getOrderById({ orderId }));
  }, [orderId]);

  return (
    <PopupModal id="example1" isOpen={isModalOpen} onClose={handleCloseModal}>
      {Object.keys(orderData || {}).length ? (
        <PurchaseOrder orderData={orderData} orderloading={orderloading} />
      ) : (
        <CircularLoader />
      )}
    </PopupModal>
  );
};

export default OrderPopup;

const PurchaseOrder = ({ orderData, orderloading }) => {
  if (orderloading) {
    return <CircularLoader />;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header */}
      
      {/* <div className="flex justify-between items-center mb-6">
        <div>
          <img src="/assets/carid.png" alt="logo" className="h-20" />
        </div>
        <div className="min-w-56">
          <h3 className="text-lg font-medium">Vendor</h3>
          <p>{orderData?.vendor?.name || "vendor 1"}</p>
          <p>{orderData?.vendor?.address || "vendor 2"}</p>
        </div>
      </div> */}

      {/* Order Details */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Purchase Order</h2>
          <p className="text-sm">{`P.O. ${
            orderData?.internalOrderId
          } Date: ${new Date(orderData.orderDate).toLocaleDateString()}`}</p>
          <div className="mb-6 mt-2">
            <h3 className="text-lg font-medium">Shipping Method</h3>
            <p>{orderData.shippingAddresses[0]?.shippingMethod}</p>
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h3 className="text-lg font-medium">Ship To</h3>
          <p>
            {orderData.shippingAddresses[0]?.firstName}{" "}
            {orderData.shippingAddresses[0]?.lastName}
          </p>
          <p>Phone: {orderData.shippingAddresses[0]?.phone}</p>
          <p className="line-clamp-3 w-56">
            {orderData.shippingAddresses[0]?.address1}
          </p>
        </div>
      </div>

      {/* Billing Address */}
      {/* <div className="mb-6">
        <h3 className="text-lg font-medium">Billing Address</h3>
        <p>
          {orderData.billingAddress[0]?.street},{" "}
          {orderData.billingAddress[0]?.city},{" "}
          {orderData.billingAddress[0]?.state}{" "}
          {orderData.billingAddress[0]?.zipCode}
        </p>
      </div> */}

      {/* Items Table */}
      <div className="overflow-x-auto min-h-56">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Items</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Product Items */}
            {orderData.productItem.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">
                  {item.caridSKU}
                </td>
                <td className="px-4 py-2 border text-center">
                  {item.orderQty}
                </td>
                <td className="px-4 py-2 border">{item.description}</td>
                <td className="px-4 py-2 border text-right">
                  ${parseFloat(item.price).toFixed(2)}
                </td>
                <td className="px-4 py-2 border text-right">
                  ${(parseFloat(item.price) * item.orderQty).toFixed(2)}
                </td>
              </tr>
            ))}

            {/* Service Items */}
            {orderData.serviceItem.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">
                  {item.cartIdSku}
                </td>
                <td className="px-4 py-2 border text-center">
                  {item.quantity}
                </td>
                <td className="px-4 py-2 border">{item.description}</td>
                <td className="px-4 py-2 border text-right">
                  ${parseFloat(item.price).toFixed(2)}
                </td>
                <td className="px-4 py-2 border text-right">
                  ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="px-4 py-2 border font-bold text-right">
                Total
              </td>
              <td className="px-4 py-2 border text-right font-bold">
                ${parseFloat(orderData.orderTotal).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
