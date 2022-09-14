import Img1 from "../images/content-image.png";
import Img2 from "../images/course-fmge.png";
import Img3 from "../images/analytics.png";

export interface CardDataType {
  id: number;
  img: string;
  heading: string;
  paragraph: string;
  footer: string;
}
const data: CardDataType[] = [
  {
    id: 1,
    img: Img1,
    heading: "Top Quality Content",
    paragraph: "Enrich your knowledge ",
    footer: "with engaging content",
  },
  {
    id: 2,
    img: Img2,
    heading: "Learn Anytime, Anywhere",
    paragraph: "Access the best quality",
    footer: "content directly from app",
  },
  {
    id: 3,
    img: Img3,
    heading: "In-Depth Analytics",
    paragraph: "Use performance graphs to ",
    footer: "evaluate your shortcomings",
  },
];
export default data;
