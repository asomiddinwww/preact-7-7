import { Button, Input, Table, Space, message } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useReduxSelector, useReduxDispatch } from "../../hooks/useRedux";
import { decrement, increment, removeItem } from "../../redux/card-slice";
// Redux slice-dan kerakli action-larni import qilamiz

const Shop = () => {
  // Redux-dan cart state-ni olamiz
  const dispatch = useReduxDispatch();
  // State xatosidan himoyalanish:
  const cart = useReduxSelector((state: any) => state.cart || state.card);
  const cartItems = cart?.cartItems || [];

  const subtotal = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.count,
    0,
  );
  const shipping = 16.0;

  const columns = [
    {
      title: "Products",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <Space size="middle">
          <img
            src={record.image}
            alt={text}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <div className="font-bold text-[#3D3D3D]">{text}</div>
            <div className="text-gray-400 text-[10px]">SKU: {record.id}</div>
          </div>
        </Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => (
        <span className="text-[#727272]">${price.toFixed(2)}</span>
      ),
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (record: any) => (
        <div className="flex items-center gap-3">
          <Button
            onClick={() => dispatch(decrement(record.id))} // Kamaytirish
            shape="circle"
            size="small"
            icon={<MinusOutlined />}
            className="bg-[#46A358] text-white border-none flex items-center justify-center"
          />
          <span className="font-medium w-4 text-center">{record.count}</span>
          <Button
            onClick={() => dispatch(increment(record.id))} // Ko'paytirish
            shape="circle"
            size="small"
            icon={<PlusOutlined />}
            className="bg-[#46A358] text-white border-none flex items-center justify-center"
          />
        </div>
      ),
    },
    {
      title: "Total",
      key: "total",
      render: (record: any) => (
        <span className="font-bold text-[#46A358]">
          ${(record.price * record.count).toFixed(2)}
        </span>
      ),
    },
    {
      title: "",
      key: "action",
      render: (record: any) => (
        <DeleteOutlined
          onClick={() => {
            dispatch(removeItem(record.id)); // O'chirish
            message.warning("Mahsulot savatdan olib tashlandi");
          }}
          className="text-gray-400 hover:text-red-500 cursor-pointer text-lg"
        />
      ),
    },
  ];

  return (
    <div className="w-[90%] m-auto pt-10 pb-20 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 overflow-x-auto">
        <Table
          columns={columns}
          dataSource={cartItems}
          pagination={false}
          rowKey="id"
          locale={{ emptyText: "Savat bo'sh" }}
        />
      </div>

      <div className="w-full lg:w-[350px]">
        <h3 className="text-xl font-bold border-b pb-2 mb-5">Cart Total</h3>
        <div className="space-y-4">
          <p className="text-sm">Coupon Code</p>
          <div className="flex">
            <Input
              placeholder="Enter coupon code..."
              className="rounded-l-md rounded-r-none border-[#46A358]"
            />
            <Button className="bg-[#46A358] text-white h-[40px] rounded-r-md rounded-l-none border-none">
              Apply
            </Button>
          </div>
          <div className="pt-6 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-bold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#46A358] text-lg font-bold pt-4 border-t">
              <span>Total</span>
              <span>${(subtotal + shipping).toFixed(2)}</span>
            </div>
          </div>
          <Button
            disabled={cartItems?.length === 0}
            className="w-full bg-[#46A358] text-white h-12 font-bold rounded-md border-none mt-6 hover:!bg-[#3d8d4c]"
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
