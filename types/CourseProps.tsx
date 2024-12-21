export interface CourseProps {
  id: number;
  title: string;
  imageURL: string;
  total_videos: number;
  total_duration: string;
  price: number;
  original_price: number;
  currency: string;
  status: "available" | "unavailable";
  trainers: Trainer[];
}

interface Trainer {
  id: number;
  first_name: string;
  last_name: string;
  leader: boolean;
}
