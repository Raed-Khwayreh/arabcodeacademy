import React from "react";
import {
  AiIcon,
  BookIcon,
  CheckListIcon,
  DhadIcon,
  Glossary,
  VideoLessonsIcon,
} from "../ResourceCardIcons";

interface CardDataItem {
  title: string;
  icon: React.ReactNode;
}

export const cardData: CardDataItem[] = [
  {
    title: "قاموس المصطلحات التقنية",
    icon: <Glossary />,
  },
  {
    title: "بنك الأسئلة  التقنية",
    icon: <CheckListIcon />,
  },
  {
    title: "دروس وأنماط الميدجورني",
    icon: <BookIcon />,
  },

  {
    title: "لغة ضاد",
    icon: <DhadIcon />,
  },

  {
    title: "دليل أدوات الذكاء الاصطناعي",
    icon: <AiIcon />,
  },

  {
    title: "دروس الفيديو القصيرة",
    icon: <VideoLessonsIcon />,
  },
];

export default cardData;
