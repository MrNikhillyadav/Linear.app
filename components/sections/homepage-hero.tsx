import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Linear 2022 Release – Built for scale</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-2rem]  w-full tracking-tighter animate-fade-in opacity-0 [--animation-delay:200ms]">
    Linear is a purpose-built tool for 
      <br className="hidden md:block" />planning and building products
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] tracking-normal animate-fade-in opacity-0 [--animation-delay:400ms]">
    Meet the system for modern software development.
      <br className="hidden md:block" /> Streamline issues, sprints, and product
      roadmaps.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem]  animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Start Building </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
