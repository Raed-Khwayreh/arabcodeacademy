import { CoruseProps } from "@/types/CourseProps";

const coursesData: CoruseProps[] = [
  {
    id: 1,
    name: "أساسيات HTML",
    price: 150,
    instructor: "أحمد علي",
    duration: {
      video: 20,
      hour: 10,
      min: 30,
    },
    image: "/images/courses/html.png",
    soon: false,
  },
  {
    id: 2,
    name: "أساسيات #C",
    price: 200,
    instructor: "سارة خالد",
    duration: {
      video: 18,
      hour: 12,
      min: 45,
    },
    soon: false,
    image: "/images/courses/csharp.png",
  },
  {
    id: 3,
    name: "كورس Bootsrap",
    price: 120,
    instructor: "محمد عمر",
    duration: {
      video: 15,
      hour: 8,
      min: 20,
    },
    soon: false,
    image: "/images/courses/bootstrap.png",
  },
  {
    id: 4,
    name: "أساسيات Java",
    price: 250,
    instructor: "خالد حسن",
    duration: {
      video: 25,
      hour: 15,
      min: 40,
    },
    soon: false,
    image: "/images/courses/java.png",
  },
  {
    id: 6,
    name: "كورس لغة Python",
    price: 210,
    instructor: "عمرو فهمي",
    duration: {
      video: 30,
      hour: 11,
      min: 35,
    },
    soon: true,
    image: "/images/courses/python.png",
  },
  {
    id: 5,
    name: "كورس Laravel",
    price: 180,
    instructor: "ريم يوسف",
    duration: {
      video: 22,
      hour: 9,
      min: 50,
    },
    soon: true,
    image: "/images/courses/laravel.png",
  },
  {
    id: 7,
    name: "Ruby Language",
    price: 190,
    instructor: "نادية حسن",
    duration: {
      video: 25,
      hour: 10,
      min: 0,
    },
    soon: true,
    image: "/images/courses/ruby.png",
  },
  {
    id: 8,
    name: "كورس PHP",
    price: 220,
    instructor: "علي رضا",
    duration: {
      video: 28,
      hour: 12,
      min: 15,
    },
    soon: true,
    image: "/images/courses/php.png",
  },
];

export default coursesData;
