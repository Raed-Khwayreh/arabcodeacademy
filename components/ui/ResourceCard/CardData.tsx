import React from "react";
import BookIcon from "./ResourceCardIcons/BookIcon";
import Glossary from "./ResourceCardIcons/Glossary";
import ACAButton from "../ACAButton/ACAButton";
import EllipsisCircleIcon from "../ACAButton/ACAButtonIcons/EllipsisCircleIcon";
import CartIcon from "../ACAButton/ACAButtonIcons/CartIcon";
import ChalkboardTeacher from "../ACAButton/ACAButtonIcons/ChalkboardTeacherIcon";
import ProfileCircleIcon from "../ACAButton/ACAButtonIcons/ProfileCircleIcon";
import CheckListIcon from "./ResourceCardIcons/CheckListIcon";

interface TitleWidth {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface CardDataItem {
  title: string;
  icon: React.ReactNode;
  button: React.ReactNode;
  titleWidth: TitleWidth;
}

const cardData: CardDataItem[] = [
  {
    title: "قاموس المصطلحات التقنية",
    icon: <Glossary />,
    button: <ACAButton text="...المزيد" variant="teal" size="medium" icon={<EllipsisCircleIcon/>} />,
    titleWidth: {
      desktop: "261px",
      tablet: "150px",
      mobile: "140px",
    },
  },
  {
    title: "بنك الأسئلة التقنية",
    icon: <CheckListIcon/>,
    button: <ACAButton text="...المزيد" variant="teal" size="medium" icon={<EllipsisCircleIcon/>} />,
    titleWidth: {
      desktop: "192px",
      tablet: "166px",
      mobile: "139px",
    },
  },
  {
    title: "دروس وأنماط الميدجورني",
    icon: <BookIcon />,
    button: <ACAButton text="...المزيد" variant="teal" size="medium" icon={<EllipsisCircleIcon/>} />,
    titleWidth: {
      desktop: "220px",
      tablet: "150px",
      mobile: "140px",
    },
  },

  {
    title: "لغة ضاد",
    icon: <CartIcon />,
    button: <ACAButton text="...المزيد" variant="teal" size="medium" icon={<EllipsisCircleIcon/>} />,
    titleWidth: {
      desktop: "220px",
      tablet: "150px",
      mobile: "140px",
    },
  },

  {
    title: "دليل أدوات الذكاء الاصطناعي",
    icon: <ChalkboardTeacher />,
    button: <ACAButton text="...المزيد" variant="teal" size="medium" icon={<EllipsisCircleIcon/>} />,
    titleWidth: {
      desktop: "220px",
      tablet: "166px",
      mobile: "140px",
    },
  },

  {
    title: "دروس الفيديو القصيرة",
    icon: <ProfileCircleIcon />,
    button: <ACAButton text="...المزيد" variant="teal" size="medium" icon={<EllipsisCircleIcon/>} />,
    titleWidth: {
      desktop: "220px",
      tablet: "166px",
      mobile: "140px",
    },
  },
];

export default cardData;
