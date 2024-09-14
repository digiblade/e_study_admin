import {
  BookmarkBorderOutlined,
  MoreHoriz,
  People,
  PsychologyAltOutlined,
  ViewCarouselOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import React from "react";
import Course_card from "../molecule/course_card";
import TableComponent from "../molecule/datatable";

function Course_page() {
  let courses = [
    {
      iconColor: "red",
      icon: <People />,
      title: "Hybrid and Electric Vehicles",
      author: "William joe",
      lessons: 12,
      hours: 40,
    },
    {
      iconColor: "green",
      icon: <ViewCarouselOutlined />,
      title: "AutoCAD",
      author: "William",
      lessons: 10,
      hours: 90,
    },
    {
      iconColor: "yellow",
      icon: <PsychologyAltOutlined />,
      title: "Data Science",
      author: "William",
      lessons: 4,
      hours: 10,
    },

    {
      iconColor: "emerald",
      icon: <People />,
      title: "Microsoft Azure",
      author: "William joe",
      lessons: 20,
      hours: 120,
    },
    {
      iconColor: "sky",
      icon: <ViewCarouselOutlined />,
      title: "AWS Certification",
      author: "William",
      lessons: 20,
      hours: 120,
    },
    {
      iconColor: "rose",
      icon: <PsychologyAltOutlined />,
      title: "GCP Cloud ",
      author: "William",
      lessons: 20,
      hours: 120,
    },
  ];
  const data = [
    {
      id: 1,
      courseName: "React Basics",
      instructor: "John Doe",
      duration: "3 hours",
      status: "Enrolled",
    },
    {
      id: 2,
      courseName: "Advanced CSS",
      instructor: "Jane Smith",
      duration: "2 hours",
      status: "Completed",
    },
    {
      id: 3,
      courseName: "JavaScript Fundamentals",
      instructor: "Sam Brown",
      duration: "5 hours",
      status: "Enrolled",
    },
    {
      id: 4,
      courseName: "Python for Beginners",
      instructor: "Sara Wilson",
      duration: "4 hours",
      status: "Pending",
    },
    {
      id: 5,
      courseName: "UX Design Principles",
      instructor: "Mike Johnson",
      duration: "6 hours",
      status: "Enrolled",
    },
    {
      id: 6,
      courseName: "Data Structures",
      instructor: "Chris Lee",
      duration: "7 hours",
      status: "Completed",
    },
    {
      id: 7,
      courseName: "Machine Learning",
      instructor: "Patricia Davis",
      duration: "10 hours",
      status: "Pending",
    },
    {
      id: 8,
      courseName: "Docker Essentials",
      instructor: "Robert Garcia",
      duration: "3 hours",
      status: "Enrolled",
    },
    {
      id: 9,
      courseName: "Cloud Computing",
      instructor: "Linda Martinez",
      duration: "8 hours",
      status: "Completed",
    },
    {
      id: 10,
      courseName: "Full-Stack Development",
      instructor: "James Rodriguez",
      duration: "12 hours",
      status: "Pending",
    },
    {
      id: 11,
      courseName: "React Basics",
      instructor: "John Doe",
      duration: "3 hours",
      status: "Enrolled",
    },
    {
      id: 12,
      courseName: "Advanced CSS",
      instructor: "Jane Smith",
      duration: "2 hours",
      status: "Completed",
    },
    {
      id: 13,
      courseName: "JavaScript Fundamentals",
      instructor: "Sam Brown",
      duration: "5 hours",
      status: "Enrolled",
    },
    {
      id: 14,
      courseName: "Python for Beginners",
      instructor: "Sara Wilson",
      duration: "4 hours",
      status: "Pending",
    },
    {
      id: 15,
      courseName: "UX Design Principles",
      instructor: "Mike Johnson",
      duration: "6 hours",
      status: "Enrolled",
    },
    {
      id: 16,
      courseName: "Data Structures",
      instructor: "Chris Lee",
      duration: "7 hours",
      status: "Completed",
    },
    {
      id: 17,
      courseName: "Machine Learning",
      instructor: "Patricia Davis",
      duration: "10 hours",
      status: "Pending",
    },
    {
      id: 18,
      courseName: "Docker Essentials",
      instructor: "Robert Garcia",
      duration: "3 hours",
      status: "Enrolled",
    },
    {
      id: 19,
      courseName: "Cloud Computing",
      instructor: "Linda Martinez",
      duration: "8 hours",
      status: "Completed",
    },
    {
      id: 20,
      courseName: "Full-Stack Development",
      instructor: "James Rodriguez",
      duration: "12 hours",
      status: "Pending",
    },
  ];
  const columns = [
    { header: "Course Name", accessor: "courseName" },
    { header: "Instructor", accessor: "instructor" },
    { header: "Duration", accessor: "duration" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <div className="h-full py-4 ">
      <div class="grid grid-cols-3  gap-4">
        {courses.map((course) => (
          <Course_card
            iconColor={course.iconColor}
            icon={course.icon}
            title={course.title}
            author={course.author}
            lessons={course.lessons}
            hours={course.hours}
          />
        ))}
      </div>
      <div className="p-4  col-span-3 rounded-lg bg-white mt-4">
        <div className="">Course Details</div>
        <TableComponent data={data} columns={columns} />
      </div>
    </div>
  );
}

export default Course_page;
