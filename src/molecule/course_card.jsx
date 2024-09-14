import React from "react";
import {
  BookmarkBorderOutlined,
  MoreHoriz,
  People,
  WatchLaterOutlined,
} from "@mui/icons-material";
function Course_card({ iconColor, title, icon, author,lessons, hours }) {
  
  return (
    <div className="bg-white  shadow-sm rounded-lg p-2 flex flex-col gap-4  px-4">
      <div className="flex justify-between items-center gap-4">
        <div
          className={`h-12 w-12 bg-gradient-to-tr from-${iconColor}-500 to-${iconColor}-100 rounded-full bg-opacity-50 flex justify-center items-center text-${iconColor}-700`}
        >
          {icon}
        </div>
        <MoreHoriz className="text-gray-400"></MoreHoriz>
      </div>
      <div className="text-xs font-bold">{title}</div>
      <div className="text-xs font-bold text-gray-400 flex items-center gap-2">
        <div className="rounded-full h-8 w-8 bg-gray-400"></div> {author}
      </div>
      <div className="flex items-center text-gray-400 gap-4">
        <div className="flex gap-2 items-center text-sm ">
          <BookmarkBorderOutlined fontSize="small" />
          {lessons} Lesson
        </div>
        <div className="flex gap-2 items-center text-sm ">
          <WatchLaterOutlined fontSize="small" />
          {hours}Hours
        </div>
      </div>
    </div>
  );
}

export default Course_card;
