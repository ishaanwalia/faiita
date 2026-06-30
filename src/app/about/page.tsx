import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FAIITA | Federation of All India IT Associations",
  description:
    "Learn about FAIITA's mission, vision, history, and leadership team uniting India's IT entrepreneurs.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
          About FAIITA
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The Federation of All India IT Associations (FAIITA) is the national
          umbrella body representing IT dealers, distributors, resellers, and
          solution providers across India.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#0A2540]">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To unite, represent, and empower the Indian IT trade community by
              fostering collaboration, advocating for favourable policies, and
              creating growth opportunities for every member.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2540]">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To be the most influential and trusted voice of India&apos;s IT
              entrepreneur ecosystem, driving innovation, employment, and
              digital inclusion across the nation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2540]">Leadership</h2>
            <p className="mt-3 text-muted-foreground">
              FAIITA is governed by a national executive committee comprising
              experienced IT entrepreneurs and leaders from state associations
              across India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
