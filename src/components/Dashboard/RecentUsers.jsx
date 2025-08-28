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
    {
      key: "6",
      sId: "S005",
      fullName: "Bob Brown",
      email: "bobb@example.com",
      phoneNo: "567-890-1234",
      typeOfTest: "Blood Pressure",
      userType: "User",
      joinedDate: "2023-09-18",
    },
    {
      key: "7",
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
          <img
            src={`https://avatar.iran.liara.run/public/${record.no}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
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
            className="text-[#013666] rounded-lg p-2 hover:bg-[#013666] hover:text-white transition duration-200"
          >
            <MdBlockFlipped className="w-6 h-6 text-red-400 hover:text-black" />
          </button>
          <button
            onClick={() => showUserDetails(record)}
            className="text-[#013666] rounded-lg p-2 hover:bg-[#013666] hover:text-white transition duration-200"
          >
            <FaEye className="w-6 h-6 text-[#013666]" />
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
              activeBorderColor: "#013666",
            },
            Pagination: {
              itemActiveBg: "#fffe",
              itemActiveColor: "#ffff",
              itemHoverBg: "#013666",
              itemHoverColor: "#ffff",
              colorBorder: "#013666",
              colorTextPlaceholder: "#013666",
              colorTextDisabled: "#013666",
              colorBgTextActive: "#ffff",
              itemActiveBgDisabled: "#013666",
              itemActiveColorDisabled: "#ffff",
              itemBg: "#ffff",
              colorBgTextHover: "#013666",
              colorPrimary: "#013666",
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
          pagination={{ pageSize: 5 }}
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
                className="mt-5 bg-[#013666] text-white font-semibold w-full py-2 rounded transition duration-200"
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
                  className="bg-[#013666] text-white font-semibold w-full py-2 rounded transition duration-200"
                >
                  Yes, Block
                </button>
              </div>
              <div className="text-center pb-5">
                <button
                  onClick={handleOk}
                  className="text-[#013666] border-2 border-[#013666] bg-white font-semibold w-full py-2 rounded transition duration-200"
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
