import HeroFeature from "@/app/components/magazine/HeroFeature";
import FeaturedGrid from "@/app/components/magazine/FeaturedGrid";
import Categories from "@/app/components/magazine/categories";
import Recommendations from "@/app/components/magazine/Recommendations";
import AuthorInterviews from "@/app/components/magazine/AuthorInterviews";
import Newsletter from "@/app/components/magazine/newsletter";

export default function Home() {
  return (
    <main>
      <HeroFeature />
      {/* <FeaturedGrid /> */}
      <Categories />
      <Recommendations />
      <AuthorInterviews />
      <Newsletter />
    </main>
  );
}