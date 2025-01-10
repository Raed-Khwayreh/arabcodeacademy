import Icon1 from "@/public/images/quizzSection/icon1.webp";
import Icon2 from "@/public/images/quizzSection/icon2.webp";
import Icon3 from "@/public/images/quizzSection/icon3.webp";
import styles from "../QuizzSection.module.css";
import ImgSourceOne from "@/public/images/quizzSection/team1.webp";
import ImgSourceTwo from "@/public/images/quizzSection/team2.webp";

export const imagesData = [
  {
    src: ImgSourceTwo,
    alt: "Team discussing",
    className: `${styles.image} ${styles.team2}`,
  },
  {
    src: ImgSourceOne,
    alt: "Team working",
    className: `${styles.image} ${styles.team1}`,
  },
];

export const quizzSectionsData = [
  {
    title: "اختبر قدراتك",
    description:
      "تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة . من خلال خدمة الامتحان البرمجي الإلكتروني",
    icon: Icon1,
  },
  {
    title: "قم بالاختيار",
    description:
      "يمكنك اخيار اللغة البرمجية التي تود اختبار معرفتك بها سواء كانت Python , Java , Javascript أو أي لغة أخرى من اللغات المتاحة",
    icon: Icon2,
  },
  {
    title: "اعرف ترتيبك",
    description:
      "تتيح لك لوحة الشرف معرفة ترتيبك بين اللاب الذين اجتازوا الامتحان . مما يمنحك فرصة مميزة للتميز والإشادة بإنجازك أمام المجتمع الأكاديمي وزملائك",
    icon: Icon3,
  },
];
