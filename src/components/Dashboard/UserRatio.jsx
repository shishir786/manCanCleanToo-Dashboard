/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserRatio = () => {
  const userData = [
    { month: "Jan", users: 700 },
    { month: "Feb", users: 410 },
    { month: "Mar", users: 840 },
    { month: "Apr", users: 600 },
    { month: "May", users: 480 },
    { month: "June", users: 900 },
    { month: "July", users: 600 },
    { month: "Aug", users: 650 },
    { month: "Sep", users: 900 },
    { month: "Oct", users: 790 },
    { month: "Nov", users: 600 },
    { month: "Dec", users: 835 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { month, users } = payload[0].payload;
      return (
        <div className="bg-[#F88015] text-[#001C54] px-[19px] py-1 rounded shadow-[0_22px_24px_rgba(0,0,0,0.25)]">
          <p className="text-xs font-bold leading-[15px] mb-1">Users</p>
          <p className="text-sm font-normal leading-[17px]">{users}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          barGap={100}
          barCategoryGap={40}
        >
          <XAxis tickLine={false} dataKey="month" />
          <YAxis tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="users"
            fill="#001C54"
            barSize={18}
            radius={[30, 30, 0, 0]}
            name="Users"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRatio;
