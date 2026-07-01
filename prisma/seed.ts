import { PrismaClient, OfficeBearerRole, UserRole } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

// ─── 25 STATE ASSOCIATIONS DATA ────────────────────────

const stateAssociations = [
  {
    state: "Maharashtra",
    city: "Mumbai",
    associationName: "Federation of Information Technology Associations Maharashtra (FITAM)",
    presidentName: "Champak Raj Gurjar",
    memberCount: 5200,
    phone: "+91 98201 23456",
    email: "info@fitam.org",
    website: "https://fitam.org",
    description: "The apex IT association of Maharashtra representing over 5,000 channel partners across Mumbai, Pune, Nagpur and other cities.",
  },
  {
    state: "West Bengal",
    city: "Kolkata",
    associationName: "Confederation of Indian Information Technology Associations (CIITA)",
    presidentName: "Hari Balasubramanian",
    memberCount: 3200,
    phone: "+91 98300 12345",
    email: "info@ciita.org",
    website: "https://ciita.org",
    description: "Representing IT dealers and channel partners across West Bengal and Eastern India.",
  },
  {
    state: "Karnataka",
    city: "Bangalore",
    associationName: "Dealer's Association of Information Technology Mysore Karnataka (DEALiT)",
    presidentName: "Arun Nagaraja",
    memberCount: 4800,
    phone: "+91 99000 12345",
    email: "info@deait.org",
    website: "https://deait.org",
    description: "Leading IT association in Karnataka with strong presence in Bangalore, Mysore and Mangalore.",
  },
  {
    state: "Delhi",
    city: "New Delhi",
    associationName: "All Delhi Computer Traders Association (ADCTA)",
    presidentName: "Shyam Sunder Modi",
    memberCount: 3500,
    phone: "+91 98100 12345",
    email: "info@adcta.org",
    website: "https://adcta.org",
    description: "The premier IT traders association in the National Capital Region.",
  },
  {
    state: "Chhattisgarh",
    city: "Raipur",
    associationName: "Chhattisgarh Computer Media and Dealers Association (CCMDA)",
    presidentName: "Deepak Vidhani",
    memberCount: 800,
    phone: "+91 98271 12345",
    email: "info@ccmda.org",
    website: "https://ccmda.org",
    description: "Representing IT dealers across Raipur, Bilaspur and other cities of Chhattisgarh.",
  },
  {
    state: "Uttar Pradesh",
    city: "Allahabad",
    associationName: "Uttar Pradesh Computer Dealers Association (UPCDA)",
    presidentName: "Shiv Shankar Singh",
    memberCount: 2800,
    phone: "+91 98390 12345",
    email: "info@upcda.org",
    website: "https://upcda.org",
    description: "One of the largest state IT associations with members across Lucknow, Kanpur, Allahabad and Varanasi.",
  },
  {
    state: "Odisha",
    city: "Cuttack",
    associationName: "Information Technology Association of Orissa (ITAO)",
    presidentName: "Arun Kumar Dey",
    memberCount: 1200,
    phone: "+91 99370 12345",
    email: "info@itao.org",
    website: "https://itao.org",
    description: "Representing IT channel partners across Bhubaneswar, Cuttack and Odisha.",
  },
  {
    state: "Gujarat",
    city: "Gandhinagar",
    associationName: "Federation of Information Technology Associations Gujarat (FITAG)",
    presidentName: "Gaurang R Vyas",
    memberCount: 4200,
    phone: "+91 98250 12345",
    email: "info@fitag.org",
    website: "https://fitag.org",
    description: "The leading IT federation in Gujarat with strong presence in Ahmedabad, Surat and Vadodara.",
  },
  {
    state: "Kerala",
    city: "Thrissur",
    associationName: "All Kerala Information Technology Dealers Association (AKITDA)",
    presidentName: "Liju Raju P",
    memberCount: 2100,
    phone: "+91 98460 12345",
    email: "info@akitda.org",
    website: "https://akitda.org",
    description: "Representing IT dealers across Kochi, Thiruvananthapuram, Thrissur and Kerala.",
  },
  {
    state: "Punjab",
    city: "Chandigarh",
    associationName: "Punjab Association of Computer Dealers (PACT)",
    presidentName: "Sanjeev Walia",
    memberCount: 1500,
    phone: "+91 98150 12345",
    email: "info@pact.org",
    website: "https://pact.org",
    description: "Serving IT dealers in Punjab, Chandigarh and surrounding regions.",
  },
  {
    state: "Rajasthan",
    city: "Bhilwara",
    associationName: "Rajasthan Computer Traders Association (RCTA)",
    presidentName: "Sugriv Singh Ranawat",
    memberCount: 1800,
    phone: "+91 98280 12345",
    email: "info@rcta.org",
    website: "https://rcta.org",
    description: "Representing IT channel partners across Jaipur, Jodhpur, Udaipur and Rajasthan.",
  },
  {
    state: "Bihar",
    city: "Patna",
    associationName: "Bihar Information Technology Traders Association (BITA)",
    presidentName: "Navin Gupta",
    memberCount: 900,
    phone: "+91 93347 15522",
    email: "info@bita.org",
    website: "https://bita.org",
    description: "The leading IT traders association in Bihar with members across Patna and other cities.",
  },
  {
    state: "Goa",
    city: "Margao",
    associationName: "Goa Information Technology Business Association (GIBA)",
    presidentName: "Balkrishna Mohan Prabhudesai",
    memberCount: 400,
    phone: "+91 98220 12345",
    email: "info@giba.org",
    website: "https://giba.org",
    description: "Representing IT businesses across Goa.",
  },
  {
    state: "Andhra Pradesh",
    city: "Nellore",
    associationName: "Confederation of Andhra Pradesh Information Technology Associations (CAPITA)",
    presidentName: "BV Deepak Kumar",
    memberCount: 2500,
    phone: "+91 98480 12345",
    email: "info@capita.org",
    website: "https://capita.org",
    description: "The apex IT body in Andhra Pradesh representing dealers across Vijayawada, Visakhapatnam and other cities.",
  },
  {
    state: "Assam",
    city: "Guwahati",
    associationName: "Assam IT Forum",
    presidentName: "Himanta Sarma",
    memberCount: 600,
    phone: "+91 98640 12345",
    email: "info@assamitforum.org",
    website: "https://assamitforum.org",
    description: "Representing IT channel partners across Guwahati and Assam.",
  },
  {
    state: "Himachal Pradesh",
    city: "Shimla",
    associationName: "Himachal Pradesh Computer Dealers Association (HPCDA)",
    presidentName: "Rajesh Sharma",
    memberCount: 350,
    phone: "+91 98160 12345",
    email: "info@hpcda.org",
    website: "https://hpcda.org",
    description: "Serving IT dealers across Shimla, Dharamshala and Himachal Pradesh.",
  },
  {
    state: "Jammu and Kashmir",
    city: "Srinagar",
    associationName: "Jammu & Kashmir IT Dealers Association (JKITDA)",
    presidentName: "Farooq Ahmed",
    memberCount: 280,
    phone: "+91 99060 12345",
    email: "info@jkitda.org",
    website: "https://jkitda.org",
    description: "Representing IT businesses across Jammu, Srinagar and Kashmir valley.",
  },
  {
    state: "Jharkhand",
    city: "Ranchi",
    associationName: "Jharkhand Computer Dealers Association (JCDA)",
    presidentName: "Ramesh Kumar",
    memberCount: 550,
    phone: "+91 98350 12345",
    email: "info@jcda.org",
    website: "https://jcda.org",
    description: "The leading IT association in Jharkhand with members across Ranchi and Jamshedpur.",
  },
  {
    state: "Madhya Pradesh",
    city: "Bhopal",
    associationName: "Madhya Pradesh Computer Dealers Association (MPCDA)",
    presidentName: "Suresh Patel",
    memberCount: 1600,
    phone: "+91 98260 12345",
    email: "info@mpcda.org",
    website: "https://mpcda.org",
    description: "Representing IT channel partners across Bhopal, Indore, Gwalior and Madhya Pradesh.",
  },
  {
    state: "Meghalaya",
    city: "Shillong",
    associationName: "Meghalaya IT Dealers Association (MITDA)",
    presidentName: "James Lyngdoh",
    memberCount: 120,
    phone: "+91 98630 12345",
    email: "info@mitda.org",
    website: "https://mitda.org",
    description: "Serving IT dealers across Shillong and Meghalaya.",
  },
  {
    state: "Nagaland",
    city: "Kohima",
    associationName: "Nagaland Computer Traders Association (NCTA)",
    presidentName: "Kevichusa Angami",
    memberCount: 80,
    phone: "+91 98620 12345",
    email: "info@ncta.org",
    website: "https://ncta.org",
    description: "Representing IT businesses across Kohima and Nagaland.",
  },
  {
    state: "Sikkim",
    city: "Gangtok",
    associationName: "Sikkim IT Dealers Association (SITDA)",
    presidentName: "Pema Dorjee",
    memberCount: 90,
    phone: "+91 97330 12345",
    email: "info@sitda.org",
    website: "https://sitda.org",
    description: "The IT dealers association of Sikkim.",
  },
  {
    state: "Tamil Nadu",
    city: "Chennai",
    associationName: "Tamil Nadu Computer Dealers Association (TNCDA)",
    presidentName: "Karthikeyan R",
    memberCount: 3800,
    phone: "+91 98400 12345",
    email: "info@tncda.org",
    website: "https://tncda.org",
    description: "One of the largest IT associations in South India with members across Chennai, Coimbatore and Madurai.",
  },
  {
    state: "Telangana",
    city: "Hyderabad",
    associationName: "Telangana Information Technology Association (TITA)",
    presidentName: "Venkatesh Rao",
    memberCount: 2900,
    phone: "+91 98490 12345",
    email: "info@tita.org",
    website: "https://tita.org",
    description: "Representing IT channel partners across Hyderabad and Telangana.",
  },
  {
    state: "Uttarakhand",
    city: "Dehradun",
    associationName: "Uttarakhand Computer Dealers Association (UKCDA)",
    presidentName: "Anil Joshi",
    memberCount: 450,
    phone: "+91 98370 12345",
    email: "info@ukcda.org",
    website: "https://ukcda.org",
    description: "Serving IT dealers across Dehradun, Haridwar and Uttarakhand.",
  },
  {
    state: "Haryana",
    city: "Gurgaon",
    associationName: "Haryana Computer Dealers Association (HCDA)",
    presidentName: "Vijay Kumar",
    memberCount: 1100,
    phone: "+91 98120 12345",
    email: "info@hcda.org",
    website: "https://hcda.org",
    description: "Representing IT businesses across Gurgaon, Faridabad and Haryana.",
  },
];

// ─── OFFICE BEARERS DATA ───────────────────────────────

const officeBearers = [
  {
    role: OfficeBearerRole.PRESIDENT,
    name: "Navin Gupta",
    phone: "+91 93347 15522",
    email: "president@faiita.co.in",
    tenureStart: new Date("2024-04-01"),
    tenureEnd: new Date("2026-03-31"),
    sortOrder: 1,
  },
  {
    role: OfficeBearerRole.SR_VP,
    name: "Liju P. Raju",
    phone: "+91 93874 2552",
    email: "sr.vp@faiita.co.in",
    tenureStart: new Date("2024-04-01"),
    tenureEnd: new Date("2026-03-31"),
    sortOrder: 2,
  },
  {
    role: OfficeBearerRole.VP,
    name: "Rajeev Chitkara",
    phone: "+91 98100 12345",
    email: "vp@faiita.co.in",
    tenureStart: new Date("2024-04-01"),
    tenureEnd: new Date("2026-03-31"),
    sortOrder: 3,
  },
  {
    role: OfficeBearerRole.SECRETARY,
    name: "Amit Kumar",
    phone: "+91 98765 43210",
    email: "secretary@faiita.co.in",
    tenureStart: new Date("2024-04-01"),
    tenureEnd: new Date("2026-03-31"),
    sortOrder: 4,
  },
];

// ─── NEWS ARTICLES DATA ────────────────────────────────

const newsArticles = [
  {
    title: "FAIITA Announces National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states to discuss Digital India initiatives and channel partner growth strategies.",
    content: "FAIITA is proud to announce the National IT Summit 2026, scheduled to be held in New Delhi. This premier event will bring together over 500 IT entrepreneurs, dealers, and channel partners from across India. The summit will feature keynote addresses from industry leaders, panel discussions on emerging technologies, and networking sessions. Key topics include AI in IT distribution, cybersecurity for SMBs, and the future of channel partnerships in India.",
    category: "events",
    author: "FAIITA Editorial",
    publishedAt: new Date("2026-06-15"),
  },
  {
    title: "GST Council Recommends Simplified Filing for IT Dealers",
    slug: "gst-simplified-filing-it-dealers",
    excerpt: "New GST compliance measures announced that will benefit over 50,000 IT channel partners across India.",
    content: "In a significant development for the IT channel community, the GST Council has recommended simplified filing procedures for IT dealers. The new measures include quarterly filing options for dealers with turnover below ₹1.5 crore, reduced documentation requirements, and a dedicated helpdesk for IT sector queries. FAIITA has been actively engaging with the Finance Ministry to advocate for these changes.",
    category: "policy",
    author: "FAIITA Policy Team",
    publishedAt: new Date("2026-06-10"),
  },
  {
    title: "FAIITA Partners with NASSCOM for Skill Development",
    slug: "faiita-nasscom-skill-development",
    excerpt: "A landmark MoU signed to provide upskilling opportunities for 10,000 IT channel partners.",
    content: "FAIITA and NASSCOM have signed a Memorandum of Understanding to launch a comprehensive skill development program for IT channel partners. The program will cover emerging technologies including cloud computing, cybersecurity, IoT, and AI/ML basics. Training will be conducted through a hybrid model of online modules and in-person workshops across 10 cities.",
    category: "news",
    author: "FAIITA Communications",
    publishedAt: new Date("2026-06-05"),
  },
  {
    title: "New Cybersecurity Guidelines for IT Resellers",
    slug: "cybersecurity-guidelines-it-resellers",
    excerpt: "CERT-In releases updated security protocols that all IT channel partners must implement.",
    content: "The Indian Computer Emergency Response Team (CERT-In) has released updated cybersecurity guidelines specifically for IT resellers and channel partners. The guidelines cover data protection measures, secure supply chain practices, and incident reporting protocols. FAIITA will be conducting awareness workshops across all state associations to ensure compliance.",
    category: "policy",
    author: "FAIITA Security Committee",
    publishedAt: new Date("2026-05-28"),
  },
  {
    title: "FAIITA State Associations Report 15% Growth in Q1 2026",
    slug: "state-associations-growth-q1-2026",
    excerpt: "Collective data from 25 state associations shows strong growth in IT hardware and services segments.",
    content: "According to the quarterly report compiled by FAIITA, state associations have collectively reported a 15% year-over-year growth in Q1 2026. The hardware segment grew by 12% while IT services saw an 18% increase. States leading the growth include Maharashtra, Karnataka, Tamil Nadu, and Telangana. The report also highlights increasing adoption of cloud services among SMB clients.",
    category: "news",
    author: "FAIITA Research Team",
    publishedAt: new Date("2026-05-20"),
  },
  {
    title: "Government Extends PLI Scheme to IT Hardware",
    slug: "pli-scheme-it-hardware-extension",
    excerpt: "Production Linked Incentive scheme now covers laptops, tablets, and servers manufacturing in India.",
    content: "The Government of India has extended the Production Linked Incentive (PLI) scheme to include IT hardware manufacturing. This move is expected to boost domestic manufacturing of laptops, tablets, servers, and all-in-one PCs. FAIITA has welcomed this decision, noting that it will create new opportunities for channel partners in the assembly and distribution ecosystem.",
    category: "policy",
    author: "FAIITA Policy Team",
    publishedAt: new Date("2026-05-15"),
  },
];

// ─── EVENTS DATA ───────────────────────────────────────

const events = [
  {
    title: "FAIITA National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    description: "The annual flagship event bringing together IT leaders from all 25 states. Features keynote addresses, panel discussions, and extensive networking opportunities.",
    startDate: new Date("2026-08-15"),
    endDate: new Date("2026-08-17"),
    location: "New Delhi",
    isOnline: false,
    status: "upcoming",
  },
  {
    title: "Cybersecurity Workshop for IT Dealers",
    slug: "cybersecurity-workshop-it-dealers",
    description: "A comprehensive workshop on implementing CERT-In guidelines, securing customer data, and building resilient IT infrastructure.",
    startDate: new Date("2026-07-25"),
    endDate: new Date("2026-07-25"),
    location: "Mumbai",
    isOnline: false,
    status: "upcoming",
  },
  {
    title: "Digital India Webinar Series - Part 3",
    slug: "digital-india-webinar-series-3",
    description: "Online webinar exploring opportunities for IT channel partners in government digital transformation projects.",
    startDate: new Date("2026-07-10"),
    endDate: new Date("2026-07-10"),
    location: "Online",
    isOnline: true,
    meetingLink: "https://meet.faiita.co.in/digital-india-3",
    status: "upcoming",
  },
  {
    title: "FAIITA National IT Summit 2025",
    slug: "faiita-national-it-summit-2025",
    description: "Previous year's summit focused on post-pandemic recovery, digital transformation, and emerging technologies.",
    startDate: new Date("2025-08-10"),
    endDate: new Date("2025-08-12"),
    location: "Bangalore",
    isOnline: false,
    status: "past",
  },
  {
    title: "State Presidents Conclave 2025",
    slug: "state-presidents-conclave-2025",
    description: "Annual gathering of all state association presidents to discuss federation strategy and policy advocacy.",
    startDate: new Date("2025-12-05"),
    endDate: new Date("2025-12-06"),
    location: "Hyderabad",
    isOnline: false,
    status: "past",
  },
];

// ─── GOVERNING BODY MEMBERS (Sample from Constitution) ─

const governingBodyMembers = [
  { state: "Maharashtra", name: "Champak Raj Gurjar", associationName: "FITAM", phone: "+91 98201 23456", email: "gb.mh@faiita.co.in" },
  { state: "West Bengal", name: "Hari Balasubramanian", associationName: "CIITA", phone: "+91 98300 12345", email: "gb.wb@faiita.co.in" },
  { state: "Karnataka", name: "Arun Nagaraja", associationName: "DEALiT", phone: "+91 99000 12345", email: "gb.ka@faiita.co.in" },
  { state: "Delhi", name: "Shyam Sunder Modi", associationName: "ADCTA", phone: "+91 98100 12345", email: "gb.dl@faiita.co.in" },
  { state: "Chhattisgarh", name: "Deepak Vidhani", associationName: "CCMDA", phone: "+91 98271 12345", email: "gb.cg@faiita.co.in" },
  { state: "Uttar Pradesh", name: "Shiv Shankar Singh", associationName: "UPCDA", phone: "+91 98390 12345", email: "gb.up@faiita.co.in" },
  { state: "Odisha", name: "Arun Kumar Dey", associationName: "ITAO", phone: "+91 99370 12345", email: "gb.od@faiita.co.in" },
  { state: "Gujarat", name: "Gaurang R Vyas", associationName: "FITAG", phone: "+91 98250 12345", email: "gb.gj@faiita.co.in" },
  { state: "Kerala", name: "Liju Raju P", associationName: "AKITDA", phone: "+91 98460 12345", email: "gb.kl@faiita.co.in" },
  { state: "Punjab", name: "Sanjeev Walia", associationName: "PACT", phone: "+91 98150 12345", email: "gb.pb@faiita.co.in" },
  { state: "Rajasthan", name: "Sugriv Singh Ranawat", associationName: "RCTA", phone: "+91 98280 12345", email: "gb.rj@faiita.co.in" },
  { state: "Bihar", name: "Navin Gupta", associationName: "BITA", phone: "+91 93347 15522", email: "gb.br@faiita.co.in" },
  { state: "Goa", name: "Balkrishna Mohan Prabhudesai", associationName: "GIBA", phone: "+91 98220 12345", email: "gb.ga@faiita.co.in" },
  { state: "Andhra Pradesh", name: "BV Deepak Kumar", associationName: "CAPITA", phone: "+91 98480 12345", email: "gb.ap@faiita.co.in" },
  { state: "Assam", name: "Himanta Sarma", associationName: "Assam IT Forum", phone: "+91 98640 12345", email: "gb.as@faiita.co.in" },
  { state: "Himachal Pradesh", name: "Rajesh Sharma", associationName: "HPCDA", phone: "+91 98160 12345", email: "gb.hp@faiita.co.in" },
  { state: "Jammu and Kashmir", name: "Farooq Ahmed", associationName: "JKITDA", phone: "+91 99060 12345", email: "gb.jk@faiita.co.in" },
  { state: "Jharkhand", name: "Ramesh Kumar", associationName: "JCDA", phone: "+91 98350 12345", email: "gb.jh@faiita.co.in" },
  { state: "Madhya Pradesh", name: "Suresh Patel", associationName: "MPCDA", phone: "+91 98260 12345", email: "gb.mp@faiita.co.in" },
  { state: "Meghalaya", name: "James Lyngdoh", associationName: "MITDA", phone: "+91 98630 12345", email: "gb.ml@faiita.co.in" },
  { state: "Nagaland", name: "Kevichusa Angami", associationName: "NCTA", phone: "+91 98620 12345", email: "gb.nl@faiita.co.in" },
  { state: "Sikkim", name: "Pema Dorjee", associationName: "SITDA", phone: "+91 97330 12345", email: "gb.sk@faiita.co.in" },
  { state: "Tamil Nadu", name: "Karthikeyan R", associationName: "TNCDA", phone: "+91 98400 12345", email: "gb.tn@faiita.co.in" },
  { state: "Telangana", name: "Venkatesh Rao", associationName: "TITA", phone: "+91 98490 12345", email: "gb.tg@faiita.co.in" },
  { state: "Uttarakhand", name: "Anil Joshi", associationName: "UKCDA", phone: "+91 98370 12345", email: "gb.uk@faiita.co.in" },
  { state: "Haryana", name: "Vijay Kumar", associationName: "HCDA", phone: "+91 98120 12345", email: "gb.hr@faiita.co.in" },
];

async function main() {
  console.log("🌱 Starting FAIITA database seed...");

  // Clear existing data (respect foreign key order)
  await prisma.contactLead.deleteMany();
  await prisma.newsArticle.deleteMany();
  await prisma.event.deleteMany();
  await prisma.governingBodyMember.deleteMany();
  await prisma.officeBearer.deleteMany();
  await prisma.stateAssociation.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      name: "FAIITA Admin",
      email: "admin@faiita.co.in",
      password: await hash("admin123", 12),
      role: UserRole.ADMIN,
    },
  });
  console.log("✅ Admin user created:", adminUser.email);

  // Create office bearers
  for (const bearer of officeBearers) {
    await prisma.officeBearer.create({ data: bearer });
  }
  console.log("✅ Office bearers seeded:", officeBearers.length);

  // Create governing body members
  for (const member of governingBodyMembers) {
    await prisma.governingBodyMember.create({ data: member });
  }
  console.log("✅ Governing body members seeded:", governingBodyMembers.length);

  // Create state associations
  for (const state of stateAssociations) {
    await prisma.stateAssociation.create({ data: state });
  }
  console.log("✅ State associations seeded:", stateAssociations.length);

  // Create news articles
  for (const article of newsArticles) {
    await prisma.newsArticle.create({ data: article });
  }
  console.log("✅ News articles seeded:", newsArticles.length);

  // Create events
  for (const event of events) {
    await prisma.event.create({ data: event });
  }
  console.log("✅ Events seeded:", events.length);

  console.log("\n🎉 Seed completed successfully!");
  console.log("─────────────────────────────────────");
  console.log("Admin Login:");
  console.log("  Email:    admin@faiita.co.in");
  console.log("  Password: admin123");
  console.log("─────────────────────────────────────");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });