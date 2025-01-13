export interface ProfileDataProps {
  userName: string;
  name: string;
  location: string;
  links: {
    site?: string;
    userName?: string;
    url?: string;
  }[];
  courses: {
    courseName: string;
    totalSteps: number;
    userSteps: number;
  }[];
}

export const profileData: ProfileDataProps = {
  userName: "Raedkh11",
  name: "Raed Khwayreh",
  location: "فلسطين",
  links: [
    {
      site: "linkedin",
      userName: "Ra'ed Khwayreh",
      url: "https://www.linkedin.com/in/raed-khwayreh",
    },
    {
      site: "facebook",
      userName: "Ra'ed Khwayerh ",
      url: "https://www.facebook.com/RaEDxkH",
    },
    {
      site: "github",
      userName: "Raed-Khwayreh",
      url: "https://github.com/Raed-Khwayreh",
    },
  ],
  courses: [
    {
      courseName: "مقدمة لمحرك الألعاب اليونيتي unity",
      userSteps: 5,
      totalSteps: 20,
    },
    {
      courseName: "تعلم الجت لإدارة البرمجيات من البداية للإحتراف ",
      userSteps: 8,
      totalSteps: 15,
    },
    {
      courseName: "التعلم الآلي والذكاء الاصطناعي",
      userSteps: 30,
      totalSteps: 30,
    },
    {
      courseName: "مقدمة للبرمجة باستخدام لغة الجافا سكربت java script",
      userSteps: 0,
      totalSteps: 30,
    },
    {
      courseName: "أساسيات Html و Css",
      userSteps: 43,
      totalSteps: 50,
    },
  ],
};
