import { StaticImageData } from "next/image";
import { user1, user2, user3 } from "../Images";

interface Feedback {
  name: string;
  image: StaticImageData;
  rating: number;
  comment: string;
  date: string;
}

export const feedbackData: Feedback[] = [
  {
    name: "اسم المستخدم",
    image: user1,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    date: "2023, 11 نيسان",
  },

  {
    name: "اسم المستخدم",
    image: user2,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب.",
    date: "2023, 11 نيسان",
  },
  {
    name: "اسم المستخدم",
    image: user3,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    date: "2023, 11 نيسان",
  },
  {
    name: "اسم المستخدم",
    image: user1,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    date: "2023, 11 نيسان",
  },

  {
    name: "اسم المستخدم",
    image: user2,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب.",
    date: "2023, 11 نيسان",
  },
  {
    name: "اسم المستخدم",
    image: user3,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    date: "2023, 11 نيسان",
  },
];
