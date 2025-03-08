import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Settings = () => {
  const { user, googlelogin } = useContext(AuthProvider);

  const handleGoogleConnect = async () => {
    try {
      await googlelogin();
      toast.success("Successfully connected Google account!");
    } catch (error) {
      console.error("Error connecting Google account:", error);
      toast.error("Failed to connect Google account. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

        <div className="space-y-4">
          {user ? (
            <div>
              <p className="text-gray-600 mb-2">Connected Google Account:</p>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{user.displayName}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">Connect your Google Account:</p>
              <button
                onClick={handleGoogleConnect}
                className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="text-[#4285F4]" />
                <span>Connect Google Account</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
