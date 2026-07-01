import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { formatDate } from "@/lib/utils";
import {
  Calendar,
  ArrowLeft,
  Share2,
  User,
  Tag,
  Clock,
  ChevronRight,
} from "lucide-react";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

const newsArticles = [
  {
    slug: "faiita-summit-2026",
    title: "FAIITA Summit 2026: Uniting IT Leaders Nationwide",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states to discuss Digital India initiatives.",
    content: `The FAIITA Summit 2026 is set to be the most impactful gathering of IT channel partners in India. Scheduled for August 15-17 at the India Habitat Centre in New Delhi, this year's summit will bring together over 200 delegates from 25 state associations.

The summit's theme, Digital India: The Role of Channel Partners, reflects the critical importance of IT dealers and distributors in India's digital transformation journey. With the government pushing for digital infrastructure across all sectors, channel partners are at the forefront of delivering technology solutions to businesses and consumers alike.

Key sessions will include:

Policy Advocacy Track
Senior representatives from the Ministry of Electronics and Information Technology will join FAIITA office bearers for closed-door discussions on pending policy matters. Topics include GST simplification for IT trade, import duty rationalization, and support for domestic manufacturing under the Production Linked Incentive (PLI) scheme.

Digital Transformation Workshop
A hands-on workshop designed to help channel partners transition their businesses for the digital era. Sessions will cover e-commerce integration, cloud services adoption, cybersecurity compliance, and emerging technology trends including AI and IoT.

Networking and Exhibition
The summit will feature an exhibition floor showcasing the latest products and solutions from leading IT brands. This provides an excellent opportunity for channel partners to explore new vendor relationships and product lines.

Awards and Recognition
The annual FAIITA Awards will recognize outstanding state associations, individual leaders, and innovative initiatives that have advanced the interests of India's IT channel partner community.

Registration is now open for all FAIITA member associations. Each state association is encouraged to send a delegation of 3-5 members including their president and secretary.`,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    category: "events",
    author: "FAIITA Secretariat",
    publishedAt: "2026-06-15",
    readTime: "5 min read",
  },
  {
    slug: "gst-compliance-update",
    title: "New GST Compliance Measures for IT Channel Partners",
    excerpt: "New GST compliance measures announced that will benefit over 50,000 IT channel partners across India.",
    content: `The GST Council has announced significant compliance simplifications specifically targeting the IT trade sector. These changes, effective from the next financial quarter, will reduce the compliance burden on over 50,000 IT channel partners represented by FAIITA.

Key Changes:

E-Invoicing Threshold Raised
The mandatory e-invoicing threshold has been raised from Rs. 5 crore to Rs. 10 crore annual turnover. This means smaller IT dealers and distributors who were struggling with e-invoicing implementation will now have more time to adapt their systems.

Simplified Return Filing
A new simplified quarterly return filing option has been introduced for businesses with turnover up to Rs. 5 crore. This reduces the filing frequency from monthly to quarterly for eligible IT channel partners.

Input Tax Credit Rules Relaxed
The government has relaxed documentation requirements for claiming input tax credit on IT goods. Dealers can now claim ITC with simplified purchase invoices, reducing paperwork and audit risks.

E-Way Bill Exemption
Intra-state movement of IT goods valued below Rs. 1 lakh is now exempt from e-way bill requirements. This is a major relief for IT dealers who frequently move inventory between warehouses and retail locations.

FAIITA's Advocacy Role
These changes are a direct result of FAIITA's sustained advocacy efforts before the GST Council and the Ministry of Finance. Over the past 18 months, FAIITA has submitted multiple representations, participated in stakeholder consultations, and provided data-driven arguments for these simplifications.

"This is a significant win for our community," said Navin Gupta, President of FAIITA. "We have been advocating for these changes for over a year, and the government has listened to our concerns. This will reduce compliance costs and allow our members to focus on growing their businesses."

Implementation Timeline
The new measures will be implemented starting July 1, 2026. FAIITA will be organizing state-level workshops to help members understand and adapt to these changes.`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    category: "policy",
    author: "FAIITA Policy Team",
    publishedAt: "2026-06-10",
    readTime: "4 min read",
  },
  {
    slug: "mou-upskilling",
    title: "Landmark MoU for Upskilling 10,000 IT Channel Partners",
    excerpt: "A landmark MoU signed to provide upskilling opportunities for 10,000 IT channel partners.",
    content: `FAIITA has signed a landmark Memorandum of Understanding (MoU) with the National Skill Development Corporation (NSDC) to provide upskilling opportunities for 10,000 IT channel partners across India. This initiative aims to bridge the skill gap in the IT trade sector and prepare channel partners for emerging technologies.

Program Overview:

The upskilling program will cover:
- Cloud computing and SaaS solutions
- Cybersecurity fundamentals
- AI and machine learning basics for business
- Digital marketing and e-commerce
- Financial management and GST compliance
- Customer relationship management

Training Delivery:
The program will be delivered through a hybrid model combining online modules, in-person workshops at state association offices, and hands-on lab sessions at partner training centers. Each participant will receive a certification upon completion.

Target Beneficiaries:
The program targets 10,000 IT channel partners over a 2-year period, with priority given to:
- Young entrepreneurs (under 35 years)
- Women-led IT businesses
- Tier-2 and Tier-3 city dealers
- Members of newly affiliated state associations

Funding:
The program is funded through a combination of NSDC grants, FAIITA member contributions, and corporate sponsorships from leading IT brands. Participants will pay a nominal registration fee of Rs. 500, with the remaining costs subsidized.

State Association Role:
Each state association will serve as a local coordinator, identifying eligible participants, organizing training sessions, and tracking progress. FAIITA will provide a digital dashboard for monitoring the program's implementation across all 25 states.

"This MoU represents a major step forward in professionalizing India's IT trade sector," said Amit Kumar, Secretary of FAIITA. "Our channel partners need to evolve from traditional hardware sellers to technology solution providers. This program will give them the skills they need."

Registration for the first batch opens on July 1, 2026. Interested members should contact their state association for enrollment details.`,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop",
    category: "news",
    author: "FAIITA Communications",
    publishedAt: "2026-06-05",
    readTime: "6 min read",
  },
  {
    slug: "cert-in-security-protocols",
    title: "CERT-In Releases Updated Security Protocols for IT Partners",
    excerpt: "CERT-In releases updated security protocols that all IT channel partners must implement.",
    content: `The Indian Computer Emergency Response Team (CERT-In) has released updated security protocols specifically addressing the IT supply chain. All IT channel partners are required to implement these protocols by September 30, 2026.

Key Requirements:

Incident Reporting
All IT channel partners must report cybersecurity incidents to CERT-In within 6 hours of detection. This includes ransomware attacks, data breaches, and supply chain compromises.

Vulnerability Management
Partners must maintain an inventory of all software and hardware products, track security advisories, and apply patches within 30 days of release.

Secure Configuration
All network devices, servers, and endpoints must be configured according to CERT-In's baseline security standards. This includes disabling unnecessary services, enforcing strong passwords, and enabling multi-factor authentication.

Data Protection
Customer data must be encrypted both at rest and in transit. Partners must also maintain backup copies of critical data with a recovery time objective of 24 hours.

Compliance Certification
By September 30, 2026, all IT channel partners must obtain a CERT-In compliance certificate. FAIITA is organizing workshops to help members understand and implement these requirements.

FAIITA will be conducting a series of compliance workshops across all 25 states starting July 2026. Members are encouraged to attend these sessions to ensure their businesses meet the new requirements.`,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    category: "policy",
    author: "FAIITA Security Team",
    publishedAt: "2026-05-28",
    readTime: "4 min read",
  },
  {
    slug: "industry-growth-report",
    title: "IT Trade Shows Strong Growth Across 25 States",
    excerpt: "Collective data from 25 state associations shows strong growth in IT hardware and services segments.",
    content: `FAIITA's annual industry growth report reveals strong performance across India's IT trade sector. Data collected from all 25 state associations shows double-digit growth in both hardware sales and IT services revenue.

Key Findings:

Hardware Sales Growth
The IT hardware segment grew by 18% year-over-year, driven by increased demand for laptops, desktops, and networking equipment. The government's push for digital infrastructure in education and healthcare has been a major contributor.

Services Revenue Surge
IT services revenue grew by 24%, with cloud services, cybersecurity, and managed IT services showing the highest growth rates. Channel partners are increasingly transitioning from product sales to service-based revenue models.

Regional Performance
South Indian states (Karnataka, Tamil Nadu, Kerala, Telangana, Andhra Pradesh) led the growth with a combined 22% increase. North Indian states followed closely at 19%, while East and West regions grew at 16% and 17% respectively.

Employment Impact
The sector now supports over 25 lakh direct and indirect jobs across India. FAIITA estimates that an additional 2 lakh jobs will be created in the next 12 months as the sector continues to expand.

Challenges
Despite the positive growth, the report identifies several challenges:
- Working capital constraints for small dealers
- Skill gaps in emerging technologies
- Increasing competition from e-commerce platforms
- Compliance burden from GST and cybersecurity regulations

FAIITA's Response
FAIITA is working on several initiatives to address these challenges, including:
- Negotiating better credit terms with vendors
- Expanding the upskilling program
- Advocating for e-commerce parity regulations
- Simplifying compliance requirements

The full report is available to FAIITA member associations upon request.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "news",
    author: "FAIITA Research Team",
    publishedAt: "2026-05-20",
    readTime: "5 min read",
  },
  {
    slug: "pli-scheme-expansion",
    title: "PLI Scheme Now Covers Laptops, Tablets and Servers",
    excerpt: "Production Linked Incentive scheme now covers laptops, tablets, and servers manufacturing in India.",
    content: `The government has expanded the Production Linked Incentive (PLI) scheme to include laptops, tablets, and servers manufacturing. This is a significant development for India's IT channel partner ecosystem.

Scheme Details:

The expanded PLI scheme offers incentives of 1-4% on incremental sales over the base year. The total outlay for the IT hardware segment is Rs. 7,320 crore over 4 years.

Eligible Products:
- Laptops and notebooks
- Tablets and hybrid devices
- Servers and data center equipment
- All-in-one PCs
- Ultra-small form factor devices

Manufacturing Requirements:
To qualify for incentives, manufacturers must:
- Produce goods in India with 50%+ local value addition
- Achieve minimum annual production targets
- Maintain quality standards as per BIS specifications
- Invest in local R&D and skill development

Impact on Channel Partners:
This expansion is expected to:
- Reduce import dependency for IT hardware
- Lower prices for domestically manufactured products
- Create new business opportunities for channel partners
- Generate employment in manufacturing and logistics

FAIITA's Role
FAIITA has been advocating for this expansion since 2024. The federation submitted detailed representations to the Ministry of Electronics and IT, highlighting the potential for job creation and import substitution.

"This is a game-changer for India's IT ecosystem," said Rajeev Chitkara, Vice President of FAIITA. "Our channel partners will benefit from more competitive pricing on locally manufactured products, and the entire supply chain will see new opportunities."

Timeline
Applications for the scheme open on August 1, 2026. Selected companies will be notified by October 2026, with production incentives applicable from January 2027.`,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    category: "policy",
    author: "FAIITA Policy Team",
    publishedAt: "2026-05-15",
    readTime: "5 min read",
  },
];

// REQUIRED for static export: generate all possible slugs at build time
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <ScrollAnimation animation="slide-up">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>
              <Badge className="bg-[#FF9933] text-white border-0 mb-4 capitalize">
                {article.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <ScrollAnimation animation="slide-up">
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-500 leading-relaxed mb-8 font-medium">
                  {article.excerpt}
                </p>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content}
                </div>
              </article>
            </ScrollAnimation>

            {/* Share */}
            <ScrollAnimation animation="slide-up">
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-500">Share this article:</span>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="sticky top-24">
                {/* Related Articles */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#FF9933]" />
                    Related Articles
                  </h3>
                  {relatedArticles.length > 0 ? (
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/news/${related.slug}`}
                          className="group block"
                        >
                          <div className="relative h-32 rounded-xl overflow-hidden mb-2">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
                          </div>
                          <p className="text-sm font-medium text-[#0A2540] group-hover:text-[#FF9933] transition-colors line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {formatDate(related.publishedAt)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">No related articles found.</p>
                  )}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-6 bg-[#0A2540] rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Get the latest news and updates delivered to your inbox.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-[#FF9933] hover:bg-[#e68a2e] text-white">
                      Subscribe to Updates
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
