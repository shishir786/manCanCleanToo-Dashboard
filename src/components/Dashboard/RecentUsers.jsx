import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";


const RecentUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const showUserDetails = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };



  const dataSource = [
    {
      key: "1",
      sId: "S001",
      fullName: "DS",
      email: "ds@example.com",
      phoneNo: "123-456-7890",
      typeOfTest: "Blood Test",
      userType: "Admin",
      joinedDate: "2023-01-10",
    },
    {
      key: "2",
      sId: "S002",
      fullName: "Jane Doe",
      email: "janedoe@example.com",
      phoneNo: "234-567-8901",
      typeOfTest: "X-Ray",
      userType: "User",
      joinedDate: "2023-03-15",
    },
    {
      key: "3",
      sId: "S003",
      fullName: "John Smith",
      email: "johnsmith@example.com",
      phoneNo: "345-678-9012",
      typeOfTest: "MRI",
      userType: "User",
      joinedDate: "2023-05-22",
    },
    {
      key: "4",
      sId: "S004",
      fullName: "Alice Johnson",
      email: "alicej@example.com",
      phoneNo: "456-789-0123",
      typeOfTest: "ECG",
      userType: "Moderator",
      joinedDate: "2023-07-03",
    },
    {
      key: "5",
      sId: "S005",
      fullName: "Bob Brown",
      email: "bobb@example.com",
      phoneNo: "567-890-1234",
      typeOfTest: "Blood Pressure",
      userType: "User",
      joinedDate: "2023-09-18",
    },
  ];

  const columns = [
    { title: "S.ID", dataIndex: "sId", key: "sId" },
    {
      title: "Full Name",
      key: "fullName",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          {/* <img
            src={`https://avatar.iran.liara.run/public/${record.no}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          /> */}
          <span>{record.fullName}</span>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone No", dataIndex: "phoneNo", key: "phoneNo" },
    { title: "User Type", dataIndex: "userType", key: "userType" },
    {
      title: "Joined Date",
      dataIndex: "joinedDate",
      key: "joinedDate",
      render: (date) => new Date(date).toLocaleDateString("en-US"),
    },
    {
     title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <button
            onClick={showModal}
            className="  text-[#082513] rounded-lg p-2  hover:bg-teal-400 transition duration-200"
          >
            <MdBlockFlipped className="w-6 h-6 text-red-400 hover:text-black" />
          </button>
          <button
            onClick={() => showUserDetails(record)}
            className="  text-blue-500 rounded-lg p-2  hover:bg-blue-400 transition duration-200"
          >
            <FaEye className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#14803c",
            },
            Pagination: {
              colorPrimaryBorder: "rgb(19,194,194)",
              colorBorder: "rgb(82,196,26)",
              colorTextPlaceholder: "rgb(82,196,26)",
              colorTextDisabled: "rgb(82,196,26)",
              colorBgTextActive: "rgb(82,196,26)",
              itemActiveBgDisabled: "rgb(82,196,26)",
              itemActiveColorDisabled: "rgb(0,0,0)",
              itemBg: "rgb(82,196,26)",
              colorBgTextHover: "rgb(82,196,26)",
              colorPrimary: "rgb(82,196,26)",
              colorPrimaryHover: "rgb(82,196,26)",
            },
            Table: {
              headerBg: "#001c54",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#001c54",
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
        />

        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          {selectedUser ? (
            <div className="p-5 text-center">
              <img
                src={`https://avatar.iran.liara.run/public/${selectedUser.no}`}
                alt="Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                {selectedUser.userName}
              </h2>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phoneNumber}
              </p>
              <p>
                <strong>User ID:</strong> {selectedUser.key}
              </p>
              <button
                onClick={handleOk}
                className="mt-5 bg-[#14803c] text-white font-semibold w-full py-2 rounded transition duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="p-5 text-center">
              <h1 className="text-4xl text-[#0D0D0D]">
                Are you sure you want to block?
              </h1>
              <div className="text-center py-5">
                <button
                  onClick={handleOk}
                  className="bg-[#14803c] text-white font-semibold w-full py-2 rounded transition duration-200"
                >
                  Yes, Block
                </button>
              </div>
              <div className="text-center pb-5">
                <button
                  onClick={handleOk}
                  className="text-[#14803c] border-2 border-green-600 bg-white font-semibold w-full py-2 rounded transition duration-200"
                >
                  No, Don’t Block
                </button>
              </div>
            </div>
          )}
        </Modal>

      </ConfigProvider>
    </>
  );
};

export default RecentUsers;
