import { HomeHero } from "@/components/home/home-hero"
import { HomeBenefits } from "@/components/home/home-benefits"
import { BrandsMarquee } from "@/components/home/brands-marquee"
import { HomeIndustries } from "@/components/home/home-industries"
import { HomeProducts } from "@/components/home/home-products"
import { HomeTeam } from "@/components/home/home-team"
import { HomeDocCenter } from "@/components/home/home-doc-center"
import { HomeBlog } from "@/components/home/home-blog"
import { FinalCta } from "@/components/final-cta"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandsMarquee />
      <HomeBenefits />
      <HomeIndustries />
      <HomeProducts />
      <HomeTeam />
      <HomeDocCenter />
      <HomeBlog />
      <FinalCta />
    </>
  )
}
