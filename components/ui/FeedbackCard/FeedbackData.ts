import user3Image from "@/components/ui/FeedbackCard/AvatarImages/user3.png";
import user2Image from "@/components/ui/FeedbackCard/AvatarImages/user2.png";
import user1Image from "@/components/ui/FeedbackCard/AvatarImages/user1.png"; 

import { StaticImageData } from "next/image";

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
    image: user1Image,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    date: "2023, 11 نيسان",
  },

  {
    name: "اسم المستخدم",
    image: user2Image,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب.",
    date: "2023, 11 نيسان",
  },
  {
    name: "اسم المستخدم",
    image: user3Image,
    rating: 4,
    comment:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    date: "2023, 11 نيسان",
  },
];
