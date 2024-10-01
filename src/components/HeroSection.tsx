import HeroBackground from "../assets/HeroBackground.png";
import BlogSection from "./BlogSection";
export default function HeroSection() {
  return (
    <div className="w-[80%] mx-auto my-10">
      <div className="flex flex-col lg:flex-row lg:space-x-4 xl:space-x-0">
        <div className="lg:w-2/3">
          <img src={HeroBackground} alt="" />
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold my-1">Modern Agriculture</h1>
            <p className="text-md">
              Modern agriculture is an ever-changing approach to agricultural
              innovations and farming practices that helps farmers increase
              efficiency and reduce the amount of natural resources needed to
              meet the world’s food, fuel and fiber demands. Modern farming
              practices allow farmers to increase productivity while decreasing
              environmental impact.
            </p>
          </div>
        </div>

        <BlogSection />
      </div>
    </div>
  );
}
