import { RxCross2 } from "react-icons/rx";
import { useNotification } from "../../context/NotificationContext";

const Notification = () => {
  const { notifications, setNotifications } = useNotification();

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="py-4 max-h-[86vh] overflow-y-auto mx-5">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className="relative p-3 bg-white border rounded-lg mb-0.5 shadow-sm"
          >
            <button
              onClick={() => handleDismiss(notification.id)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100"
              aria-label="Dismiss notification"
            >
              <RxCross2 className="w-4 h-4 text-gray-400" />
            </button>
            <div className="flex gap-10">
              <img
                src={notification.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {notification.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {notification.date} • {notification.time}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-10">No notifications.</p>
      )}
    </div>
  );
};

export default Notification;
