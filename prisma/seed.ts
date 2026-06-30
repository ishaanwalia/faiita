import { PrismaClient, MembershipTier, VerificationStatus } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const states = [
  "Maharashtra", "Karnataka", "Tamil Nadu", "Telangana", "Gujarat",
  "Delhi", "Uttar Pradesh", "West Bengal", "Rajasthan", "Kerala",
  "Madhya Pradesh", "Punjab", "Haryana", "Bihar", "Odisha",
  "Assam", "Chhattisgarh", "Jharkhand", "Uttarakhand", "Goa",
  "Himachal Pradesh", "Jammu and Kashmir", "Meghalaya", "Nagaland", "Sikkim",
];

const cities = ["Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad", "Ahmedabad", "New Delhi", "Lucknow", "Kolkata", "Jaipur"];
const categories = ["Laptops", "Desktops", "Servers", "Networking", "CCTV", "Printers", "Software", "Components", "Accessories", "Mobiles", "Tablets"];
const brands = ["Dell", "HP", "Lenovo", "Acer", "Asus", "Cisco", "Hikvision", "Dahua", "Epson", "Canon", "Samsung", "Apple"];

async function main() {
  await prisma.contactLead.deleteMany();
  await prisma.review.deleteMany();
  await prisma.eventRegistration.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.event.deleteMany();
  await prisma.newsArticle.deleteMany();
  await prisma.stateAssociation.deleteMany();
  await prisma.dealer.deleteMany();
  await prisma.user.deleteMany();

  const adminUser = await prisma.user.create({
    data: {
      name: "FAIITA Admin",
      email: "admin@faiita.co.in",
      password: await hash("admin123", 12),
      role: "ADMIN",
    },
  });

  for (let i = 0; i < 25; i++) {
    const state = states[i % states.length];
    const city = cities[i % cities.length];
    const dealerCategories = categories.sort(() => 0.5 - Math.random()).slice(0, 3);
    const dealerBrands = brands.sort(() => 0.5 - Math.random()).slice(0, 4);

    const user = await prisma.user.create({
      data: {
        name: `Dealer ${i + 1}`,
        email: `dealer${i + 1}@example.com`,
        password: await hash("password123", 12),
        role: "DEALER",
      },
    });

    await prisma.dealer.create({
      data: {
        slug: `dealer-${i + 1}`,
        userId: user.id,
        businessName: `IT Solutions ${i + 1}`,
        gstNumber: `27AABCU9603R1ZM${i}`,
        panNumber: `AABCU9603R${i}`,
        address: `${i + 1}, MG Road, ${city}`,
        city,
        state,
        pincode: "400001",
        phone: `+91 98765${String(i).padStart(5, "0")}`,
        email: user.email,
        website: `https://itsolutions${i + 1}.example.com`,
        whatsapp: `+91 98765${String(i).padStart(5, "0")}`,
        description: `Leading IT dealer in ${city} offering ${dealerCategories.join(", ")} from top brands.`,
        categories: dealerCategories,
        brands: dealerBrands,
        yearsInBusiness: 5 + (i % 20),
        showroomPhotos: [],
        socialLinks: {},
        verificationStatus: i % 3 === 0 ? VerificationStatus.PENDING : VerificationStatus.VERIFIED,
        membershipTier: i % 4 === 0 ? MembershipTier.PREMIUM : MembershipTier.BASIC,
        featured: i < 5,
      },
    });
  }

  await prisma.stateAssociation.createMany({
    data: states.slice(0, 10).map((state, i) => ({
      name: `${state} IT Association`,
      state,
      city: cities[i % cities.length],
      presidentName: `President ${i + 1}`,
      phone: `+91 98765${String(i + 10).padStart(5, "0")}`,
      email: `contact@${state.toLowerCase().replace(/\s+/g, "")}ita.org`,
      memberCount: 500 + i * 100,
    })),
  });

  await prisma.newsArticle.createMany({
    data: Array.from({ length: 6 }).map((_, i) => ({
      title: `Industry Update ${i + 1}: Growth in IT Sector`,
      slug: `industry-update-${i + 1}`,
      excerpt: `Latest trends and opportunities for IT dealers across India.`,
      content: `Detailed content about industry update ${i + 1}.`,
      category: i % 2 === 0 ? "news" : "policy",
      author: "FAIITA Editorial",
    })),
  });

  await prisma.event.createMany({
    data: Array.from({ length: 4 }).map((_, i) => ({
      title: `FAIITA National Summit ${2025 + i}`,
      slug: `faiita-national-summit-${2025 + i}`,
      description: `Annual gathering of IT entrepreneurs and dealers from across India.`,
      startDate: new Date(2025, i * 3, 15),
      location: cities[i % cities.length],
      status: "upcoming",
    })),
  });

  console.log("Seed completed successfully.");
  console.log(`Admin user: ${adminUser.email} / admin123`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
