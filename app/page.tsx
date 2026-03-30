import Navbar from "@/app/components/magazine/Navbar";
import HeroFeature from "@/app/components/magazine/HeroFeature";
import FeaturedGrid from "@/app/components/magazine/FeaturedGrid";
import Categories from "@/app/components/magazine/categories";
import Recommendations from "@/app/components/magazine/Recommendations";
import AuthorInterviews from "@/app/components/magazine/AuthorInterviews";
import Newsletter from "@/app/components/magazine/newsletter";

export default function Home() {
  return (
    <main className="bg-[#faf8f3] text-black">
      <Navbar />
      <HeroFeature />
      {/* <FeaturedGrid /> */}
      <div id="categories">
        <Categories />
      </div>
      <div id="recommendations">
        <Recommendations />
      </div>
      <div id="authors">
        <AuthorInterviews />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
    </main>
  );
}