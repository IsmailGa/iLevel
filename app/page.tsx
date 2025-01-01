import Intro from "./sections/1/Intro";
import SectionTen from "./sections/10/SectionTen";
import SectionEleven from "./sections/11/SectionEleven";
import SectionTwo from "./sections/2/SectionTwo";
import SectionThree from "./sections/3/SectionThree";
import SectionFour from "./sections/4/SectionFour";
import SectionFive from "./sections/5/SectionFive";
import SectionSix from "./sections/6/SectionSix";
import SectionSeven from "./sections/7/SectionSeven";
import SectionEight from "./sections/8/SectionEight";
import SectionNine from "./sections/9/SectionNine";

export default function Home() {
  return (
    <div className="md:pt-[60px] pt-[45px] w-full">
      <Intro />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/*== CATALOG ==*/}
      <SectionSeven />
      {/*== CATALOG ==*/}
      <SectionEight />
      <SectionNine />
      <SectionTen />
      {/*== FORM ==*/}
      <SectionEleven />
      {/*== FORM ==*/}
    </div>
  );
}
