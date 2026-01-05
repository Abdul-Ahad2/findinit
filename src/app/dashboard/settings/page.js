"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { PiToggleRight, PiToggleLeft, PiX } from "react-icons/pi";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [searchNotifications, setSearchNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveEmail = () => {
    setModalOpen(null);
    setNewEmail("");
  };

  const handleSavePassword = () => {
    setModalOpen(null);
    setNewPassword("");
  };

  return (
    <div className="w-full mt-20 text-white overflow-hidden  min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-200 h-200 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-6xl sm:text-8xl tracking-0 font-extrabold mb-6">
              <span className="text-white">SETTINGS</span>
            </h1>
            <p className="text-2xl text-blue-400">Manage your preferences</p>
          </div>

          {/* Account Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-8">
              ACCOUNT
            </h2>
            <div className="space-y-4">
              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Email Address
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    john@example.com
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen("email")}
                  className="px-8 py-4 border-5 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-semibold"
                >
                  CHANGE
                </button>
              </div>

              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Password
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    Last changed 3 months ago
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen("password")}
                  className="px-8 py-4 border-5 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-semibold"
                >
                  CHANGE
                </button>
              </div>

              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Two-Factor Authentication
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    Disabled • Recommended to enable
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen("2fa")}
                  className="px-8 py-4 border-5 border-green-600/50 hover:bg-green-600/20 transition text-green-400 font-semibold"
                >
                  ENABLE
                </button>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-8">
              NOTIFICATIONS
            </h2>
            <div className="space-y-4">
              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Email Notifications
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    Get updates about your account
                  </div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className="transition"
                >
                  {emailNotifications ? (
                    <PiToggleRight className="text-5xl text-blue-500 hover:text-blue-400" />
                  ) : (
                    <PiToggleLeft className="text-5xl text-gray-600 hover:text-gray-500" />
                  )}
                </button>
              </div>

              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Search Result Alerts
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    Notifications when new results match your queries
                  </div>
                </div>
                <button
                  onClick={() => setSearchNotifications(!searchNotifications)}
                  className="transition"
                >
                  {searchNotifications ? (
                    <PiToggleRight className="text-5xl text-blue-500 hover:text-blue-400" />
                  ) : (
                    <PiToggleLeft className="text-5xl text-gray-600 hover:text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-8">
              PREFERENCES
            </h2>
            <div className="space-y-4">
              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Dark Mode
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    Always enabled for your account
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="transition"
                >
                  {darkMode ? (
                    <PiToggleRight className="text-5xl text-blue-500 hover:text-blue-400" />
                  ) : (
                    <PiToggleLeft className="text-5xl text-gray-600 hover:text-gray-500" />
                  )}
                </button>
              </div>

              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Language
                  </div>
                  <div className="text-blue-400 text-sm mt-2">English</div>
                </div>
                <button className="px-8 py-4 border-5 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-semibold">
                  CHANGE
                </button>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-8">
              SUBSCRIPTION
            </h2>
            <div className="space-y-4">
              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Current Plan
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    FREE TRIAL • 11 days remaining
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen("upgrade")}
                  className="px-8 py-4 border-5 border-green-600/50 hover:bg-green-600/20 transition text-green-400 font-semibold"
                >
                  UPGRADE
                </button>
              </div>

              <div className="border-5 border-blue-600 p-8 bg-black/50 hover:bg-black/70 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Storage Usage
                  </div>
                  <div className="text-blue-400 text-sm mt-2">
                    2.4GB / 10GB used
                  </div>
                </div>
                <button className="px-8 py-4 border-5 border-blue-500 hover:bg-blue-500/20 transition text-blue-400 font-semibold">
                  MANAGE
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div>
            <h2 className="text-4xl font-extrabold text-red-500 mb-8">
              DANGER ZONE
            </h2>
            <div className="space-y-4">
              <div className="border-5 border-red-600/50 p-8 bg-red-950/20 hover:bg-red-950/30 transition flex items-center justify-between">
                <div>
                  <div className="text-lg font-extrabold text-white">
                    Delete Account
                  </div>
                  <div className="text-red-400/60 text-sm mt-2">
                    Permanently delete your account and all data
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen("delete")}
                  className="px-8 py-4 border-5 border-red-600/50 hover:bg-red-600/20 transition text-red-400 font-semibold"
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {modalOpen === "email" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-2xl">
            <div className="border-b border-blue-600/30 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-white">
                CHANGE EMAIL
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            <div className="p-8">
              <label className="text-lg text-blue-400 font-semibold mb-4 block">
                NEW EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="Enter your new email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-8 py-4 text-xl bg-black border-5 border-blue-500 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-400 transition mb-8"
              />

              <div className="flex gap-4">
                <button
                  onClick={handleSaveEmail}
                  className="flex-1 px-8 py-4 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold"
                >
                  SAVE
                </button>
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {modalOpen === "password" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-2xl">
            <div className="border-b border-blue-600/30 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-white">
                CHANGE PASSWORD
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            <div className="p-8">
              <label className="text-lg text-blue-400 font-semibold mb-4 block">
                NEW PASSWORD
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-8 py-4 text-xl bg-black border-5 border-blue-500 text-white placeholder-blue-400/40 focus:outline-none focus:border-blue-400 transition mb-8"
              />

              <div className="flex gap-4">
                <button
                  onClick={handleSavePassword}
                  className="flex-1 px-8 py-4 border-5 border-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition font-extrabold"
                >
                  SAVE
                </button>
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2FA Modal */}
      {modalOpen === "2fa" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-2xl">
            <div className="border-b border-blue-600/30 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-white">ENABLE 2FA</h2>
              <button
                onClick={() => setModalOpen(null)}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            <div className="p-8">
              <p className="text-white text-lg mb-8">
                Scan this QR code with your authenticator app to enable
                two-factor authentication.
              </p>
              <div className="bg-white p-6 mb-8 inline-block">
                <div className="w-48 h-48 bg-gray-200"></div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-green-600/50 bg-green-600/20 hover:bg-green-600/30 transition font-extrabold text-green-400"
                >
                  VERIFY
                </button>
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {modalOpen === "upgrade" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-blue-600 w-full max-w-2xl">
            <div className="border-b border-blue-600/30 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-white">
                UPGRADE PLAN
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className="p-3 hover:bg-blue-600/20 transition"
              >
                <PiX className="text-3xl text-blue-400" />
              </button>
            </div>

            <div className="p-8">
              <p className="text-white text-lg mb-4">
                Choose a plan that works for you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="border-5 border-blue-600 p-6 bg-black/50">
                  <div className="text-xl font-extrabold text-white mb-2">
                    Pro • $29/month
                  </div>
                  <div className="text-blue-400 text-sm">
                    100GB storage • Priority support
                  </div>
                </div>
                <div className="border-5 border-blue-600 p-6 bg-black/50">
                  <div className="text-xl font-extrabold text-white mb-2">
                    Business • $99/month
                  </div>
                  <div className="text-blue-400 text-sm">
                    1TB storage • Priority support • Team features
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-green-600/50 bg-green-600/20 hover:bg-green-600/30 transition font-extrabold text-green-400"
                >
                  UPGRADE
                </button>
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {modalOpen === "delete" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-black border-5 border-red-600 w-full max-w-2xl">
            <div className="border-b border-red-600/30 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-red-500">
                DELETE ACCOUNT
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className="p-3 hover:bg-red-600/20 transition"
              >
                <PiX className="text-3xl text-red-400" />
              </button>
            </div>

            <div className="p-8">
              <p className="text-white text-lg mb-8">
                Are you sure you want to delete your account? This action cannot
                be undone. All your documents and data will be permanently
                deleted.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-red-600/50 bg-red-600/20 hover:bg-red-600/30 transition font-extrabold text-red-400"
                >
                  DELETE PERMANENTLY
                </button>
                <button
                  onClick={() => setModalOpen(null)}
                  className="flex-1 px-8 py-4 border-5 border-gray-600 hover:bg-gray-600/20 transition font-extrabold text-gray-400"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
