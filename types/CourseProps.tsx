export interface CoruseProps {
  id?: number;
  name?: string;
  price?: number;
  instructor?: string;
  duration?: {
    video: number;
    hour: number;
    min: number;
  };
  book?: string;
  soon?: boolean;
  image?: string;
}
