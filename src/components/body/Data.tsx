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
    paragraph: "Ask any doubts related to your Preparation directly to the faculty. ",
    footer: "with engaging content",
  },
  {
    id: 2,
    img: Img2,
    heading: "Learn Anytime, Anywhere",
    paragraph: "Access the Premium quality content and turn any place into a Learning Room whenever you want.",
    footer: "content directly from app",
  },
  {
    id: 3,
    img: Img3,
    heading: "In-Depth Analytics",
    paragraph: "Evaluate your strengths and shortcomings with the help of performance graphs",
    footer: "evaluate your shortcomings",
  },
];
export default data;
