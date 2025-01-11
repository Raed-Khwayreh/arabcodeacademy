export interface ProfileDataProps {
  userName: string;
  name: string;
  location: string;
  links: {
    site?: string;
    userName?: string;
    url?: string;
  }[];
  coursesData: {
    coursesNum: number;
    completedCourses: number;
    courses: {
      courseName: string;
      totalSteps: number;
      completionRate: number;
    }[];
  };
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
  coursesData: {
    coursesNum: 12,
    completedCourses: 2,
    courses: [],
  },
};
