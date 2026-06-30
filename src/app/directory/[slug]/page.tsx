export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Calendar,
  BadgeCheck,
  Building2,
  ArrowLeft,
  Star,
} from "lucide-react";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactDealerForm } from "@/components/dealers/contact-dealer-form";

interface DealerProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DealerProfilePageProps) {
  const { slug } = await params;
  const dealer = await prisma.dealer.findUnique({ where: { slug } });
  if (!dealer) return {};
  return {
    title: `${dealer.businessName} | FAIITA Dealer Profile`,
    description: dealer.description || `IT dealer in ${dealer.city}, ${dealer.state}`,
  };
}

export default async function DealerProfilePage({ params }: DealerProfilePageProps) {
  const { slug } = await params;
  const dealer = await prisma.dealer.findUnique({
    where: { slug, isActive: true },
    include: { reviews: { where: { isApproved: true }, orderBy: { createdAt: "desc" } } },
  });

  if (!dealer) {
    notFound();
  }

  const tierStyles: Record<string, string> = {
    BASIC: "bg-slate-100 text-slate-700",
    STATE: "bg-blue-100 text-blue-700",
    PREMIUM: "bg-amber-100 text-amber-700",
    NATIONAL: "bg-emerald-100 text-emerald-700",
  };

  const averageRating =
    dealer.reviews.length > 0
      ? (dealer.reviews.reduce((sum, r) => sum + r.rating, 0) / dealer.reviews.length).toFixed(1)
      : null;

  return (
    <div className="container mx-auto px-4 py-10 lg:px-8">
      <Link
        href="/directory"
        className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-[#0A2540]"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to directory
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#0A2540] text-xl font-bold text-white">
                    {dealer.businessName.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[#0A2540]">
                      {dealer.businessName}
                    </h1>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={tierStyles[dealer.membershipTier] ?? tierStyles.BASIC}
                      >
                        <Building2 className="mr-1 h-3 w-3" />
                        {dealer.membershipTier.charAt(0) +
                          dealer.membershipTier.slice(1).toLowerCase()}
                      </Badge>
                      {dealer.verificationStatus === "VERIFIED" && (
                        <Badge
                          variant="outline"
                          className="border-emerald-200 bg-emerald-50 text-emerald-700"
                        >
                          <BadgeCheck className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                      {dealer.yearsInBusiness && (
                        <Badge variant="outline" className="font-normal">
                          <Calendar className="mr-1 h-3 w-3" />
                          {dealer.yearsInBusiness} years in business
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                {averageRating && (
                  <div className="flex items-center gap-1 rounded-md bg-amber-50 px-3 py-1 text-amber-700">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{averageRating}</span>
                    <span className="text-sm">({dealer.reviews.length} reviews)</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      {dealer.address}
                      <br />
                      {dealer.city}, {dealer.state} - {dealer.pincode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{dealer.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{dealer.email}</p>
                  </div>
                </div>
                {dealer.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Website</p>
                      <a
                        href={dealer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#0A2540] hover:underline"
                      >
                        {dealer.website}
                      </a>
                    </div>
                  </div>
                )}
                {dealer.whatsapp && (
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">{dealer.whatsapp}</p>
                    </div>
                  </div>
                )}
              </div>

              <Separator />

              {dealer.description && (
                <div>
                  <h2 className="text-lg font-semibold text-[#0A2540]">About</h2>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {dealer.description}
                  </p>
                </div>
              )}

              <div>
                <h2 className="text-lg font-semibold text-[#0A2540]">Product Categories</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dealer.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#0A2540]">Brands</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {dealer.brands.map((brand) => (
                    <Badge key={brand} variant="outline">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>

              {dealer.reviews.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <h2 className="text-lg font-semibold text-[#0A2540]">Reviews</h2>
                    <div className="mt-4 space-y-4">
                      {dealer.reviews.map((review) => (
                        <div key={review.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{review.name}</p>
                            <div className="flex items-center gap-1 text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm font-medium">{review.rating}</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact Dealer</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactDealerForm dealerId={dealer.id} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <iframe
                  title={`${dealer.businessName} location`}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d!3d!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(
                    dealer.city
                  )}!5e0!3m2!1sen!2sin!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
