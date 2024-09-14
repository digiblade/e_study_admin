import React from "react";
import logo from "../assets/logo.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Drawer_item from "../molecule/drawer_item";
import { NotificationsOutlined, Person, Search } from "@mui/icons-material";
import Dropdown from "../custom_hooks/atoms/dropdown";

function Side_drawer({ label, children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  let drawerSections = [
    "Dashboard",
    "Users",
    "Courses",
    "Financial",
    "Content",
    "Settings",
    "Support",
  ];
  let drawerItems = [
    {
      sectionId: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      label: "Dashboard Admin",
      url: "/dashboard-admin",
    },
    {
      sectionId: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      label: "Dashboard Teacher",
      url: "/dashboard-teacher",
    },
    {
      sectionId: "Users",
      icon: <Person />,
      label: "Admins",
      url: "/dashboard-teacher",
    },
    {
      sectionId: "Users",
      icon: <Person />,
      label: "Students",
      url: "/dashboard-teacher",
    },
    {
      sectionId: "Courses",
      icon: <ArticleOutlinedIcon />,
      label: "Courses",
      url: "/Course",
    },
    {
      sectionId: "Courses",
      icon: <ArticleOutlinedIcon />,
      label: "Manage Courses",
      url: "/Course",
      options: [
        {
          label: "Category",
          url: "/courses/category",
        },
        {
          label: "Courses",
          url: "/courses/courses",
        },
        {
          label: "Course Reviews",
          url: "/courses/review",
        },
        {
          label: "Assignment",
          url: "/courses/assignments",
        },
        {
          label: "Refund",
          url: "/courses/refund",
        },
        {
          label: "Quiz",
          url: "/courses/quiz",
        },
        {
          label: "Report & Issues",
          url: "/courses/category",
        },
      ],
    },
    {
      sectionId: "Courses",
      icon: <ArticleOutlinedIcon />,
      label: "Certificates",
      url: "/Course",
    },
    {
      sectionId: "Financial",
      icon: <ArticleOutlinedIcon />,
      label: "Sales",
      url: "/Course",
    },
    {
      sectionId: "Settings",
      icon: <ShieldOutlinedIcon />,
      label: "Authentication",
      url: "/authentication",
    },
    {
      sectionId: "Settings",
      icon: <ReportGmailerrorredOutlinedIcon />,
      label: "Error",
      url: "/error",
    },
    {
      sectionId: "Settings",
      icon: <SettingsOutlinedIcon />,
      label: "Settings",
      url: "/settings",
    },
  ];

  return (
    <div className="flex h-screen  bg-gradient-to-br from-customGreenTrance  from-10% via-white via-40% to-90% to-customBlue bg-opacity-5 ">
      <aside className="w-3/12   p-4">
        <div className="bg-white shadow-lg rounded-2xl h-full flex flex-col items-center gap-2">
          <img
            src={logo}
            className="w-36 bg-customGreen rounded-lg my-2"
            alt=""
          />
          <div className="drawer-content text-left w-full overflow-auto">
            {drawerSections.map((section) => (
              <>
                <hr />
                <div className="font-bold text-sm p-2">{section}</div>
                {drawerItems
                  .filter((items) => items.sectionId === section)
                  .map((drawerItem) => (
                    <>
                      {drawerItem?.options ? (
                        <Dropdown
                        icon={drawerItem.icon}
                          label={drawerItem.label}
                          options={drawerItem.options}

                        />
                      ) : (
                        <Drawer_item
                          url={drawerItem.url || "/"}
                          icon={drawerItem.icon}
                          label={drawerItem.label}
                          currentLabel={label}
                        />
                      )}
                    </>
                  ))}
                <hr />
              </>
            ))}
          </div>
        </div>
      </aside>
      <main className="w-full p-4 h-screen overflow-auto">
        <nav className="flex justify-between">
          <div className="capitalize text-sm font-bold flex gap-4 items-center">
            {label}
            <div className="flex justify-center items-center">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Search></Search>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  // value={inputValue}
                  // onChange={(e) => setInputValue(e.target.value)}
                  className="border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <NotificationsOutlined className="text-gray-400"></NotificationsOutlined>{" "}
            <div className="h-8 w-8 rounded-full bg-gray-500"></div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-center w-full rounded-md  px-2 py-2  text-sm font-medium text-gray-700  "
                >
                  <div className="">Admin_usr</div>
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      License
                    </a>
                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
        <section className="max-h-full py-4 ">{children}</section>
      </main>
    </div>
  );
}

export default Side_drawer;
