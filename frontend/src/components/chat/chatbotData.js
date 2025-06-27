// Chatbot predefined texts, responses, and suggestions for EduWorld (Indian context)

export const initialBotMessage = {
  id: 1,
  type: "bot",
  text: `Hello! 👋 Welcome to EduWorld. I'm here to help you with information about our courses, admissions, fees, and more. How can I assist you today?`,
  timestamp: new Date(),
  rating: null,
};

export const quickReplies = [
  "Tell me about courses",
  "How to apply?",
  "Scholarship information",
  "Campus facilities",
  "Contact details",
  "Admission requirements",
];

export const responses = {
  course: {
    text: `We offer a comprehensive range of courses including:\n\n🎓 **Undergraduate Programs:**\n• B.Tech (Computer Science & Engineering)\n• BBA (Business Administration)\n• B.E. (Mechanical Engineering)\n• B.A. (Arts & Literature)\n• B.Sc. (Sciences)\n\n🎓 **Postgraduate Programs:**\n• MBA\n• M.Tech\n• M.Sc\n• Ph.D Programmes\n\nEach programme combines practical skills with theoretical knowledge. Would you like details about any specific programme?`,
    suggestions: [
      "Computer Science details",
      "MBA programme",
      "Engineering courses",
      "Admission requirements",
    ],
  },
  apply: {
    text: `Here's how to apply to EduWorld:\n\n📝 **Application Process:**\n1. Fill out our online application form\n2. Submit required documents (marksheets, ID proof)\n3. Pay application fee (₹4,000)\n4. Attend virtual/in-person interview\n5. Receive admission decision\n\n⏰ **Timeline:** Usually 2-3 weeks after submission\n\nWould you like me to guide you through any specific step?`,
    suggestions: [
      "Required documents",
      "Application fee",
      "Interview process",
      "Deadlines",
    ],
  },
  fee: {
    text: `💰 **Tuition Fees Structure:**\n\n**Undergraduate Programmes:**\n• B.Tech (Computer Science): ₹2,00,000/year\n• BBA: ₹1,80,000/year\n• B.E. (Engineering): ₹2,20,000/year\n• B.A./B.Sc.: ₹1,50,000/year\n\n**Postgraduate Programmes:**\n• MBA: ₹3,50,000/year\n• M.Tech: ₹2,80,000/year\n• M.Sc: ₹2,50,000/year\n\n💡 **Good News:** We offer scholarships up to 70% fee waiver!\n\nWould you like to know about scholarship opportunities?`,
    suggestions: [
      "Scholarship information",
      "Payment plans",
      "Financial aid",
      "Fee breakdown",
    ],
  },
  contact: {
    text: `📞 **Get in Touch with EduWorld:**\n\n**Phone:** +91 9113504966 (WhatsApp available)\n**Email:** darshangowdaa223@gmail.com\n**Address:** Nagasandra, Bengaluru - 560073\n\n**Office Hours:**\n• Monday - Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 4:00 PM\n• Sunday: Closed\n\n🚀 **Quick Response:** WhatsApp is the fastest way to reach us!`,
    suggestions: [
      "WhatsApp contact",
      "Email support",
      "Visit campus",
      "Schedule meeting",
    ],
  },
  admission: {
    text: `🎯 **Admission Requirements:**\n\n**For Undergraduate:**\n• 10+2 (minimum 75%)\n• JEE/State CET scores (if applicable)\n• English proficiency (if required)\n• 2 recommendation letters\n• Personal statement\n\n**For Postgraduate:**\n• Bachelor's degree (minimum 60%)\n• GATE/CAT/MAT scores (if applicable)\n• Work experience (preferred)\n• 3 recommendation letters\n• Statement of purpose\n\n**International Students:** Additional visa documentation required.`,
    suggestions: [
      "English requirements",
      "Documents needed",
      "International admission",
      "Score requirements",
    ],
  },
  scholarship: {
    text: `🏆 **Scholarship Opportunities:**\n\n**Merit-Based Scholarships:**\n• Excellence Award: Up to 70% tuition waiver\n• Dean's List: Up to 50% tuition waiver\n• Academic Achievement: Up to 30% tuition waiver\n\n**Need-Based Scholarships:**\n• Financial Support: Up to 60% tuition waiver\n• Community Service: Up to 40% tuition waiver\n\n**Special Scholarships:**\n• Sports Excellence: Up to 50% tuition waiver\n• Arts & Culture: Up to 40% tuition waiver\n\n📝 **Application:** Separate scholarship application required.`,
    suggestions: [
      "Merit scholarship",
      "Need-based aid",
      "Sports scholarship",
      "How to apply",
    ],
  },
  campus: {
    text: `🏫 **Our Beautiful Campus:**\n\n**Academic Facilities:**\n• Modern classrooms with smart boards\n• State-of-the-art laboratories\n• Digital library with 1,00,000+ books\n• Research centres\n\n**Student Life:**\n• Sports complex with gym & pool\n• Student centre with cafeteria\n• Recreation areas & gaming zones\n• Beautiful gardens & study spaces\n\n**Accommodation:**\n• On-campus hostels (AC & non-AC)\n• Wi-Fi throughout campus\n• 24/7 security\n\n🎥 Would you like a virtual campus tour?`,
    suggestions: [
      "Virtual tour",
      "Hostel facilities",
      "Sports facilities",
      "Library access",
    ],
  },
  faculty: {
    text: `👨‍🏫 **Meet Our Faculty:**\n\n**Qualifications:**\n• 95% hold Ph.D degrees\n• Average 12+ years teaching experience\n• Industry professionals & researchers\n• Published authors & consultants\n\n**Teaching Approach:**\n• Interactive learning methods\n• Practical project-based learning\n• Individual mentoring\n• Industry case studies\n\n**Student Support:**\n• Regular office hours\n• Academic counselling\n• Research guidance\n• Career mentoring`,
    suggestions: [
      "Faculty profiles",
      "Research opportunities",
      "Mentoring programs",
      "Teaching methods",
    ],
  },
  deadline: {
    text: `📅 **Important Deadlines:**\n\n**Academic Year 2024-25:**\n• Early Decision: 1st November 2024\n• Regular Decision: 1st March 2025\n• Late Application: 15th May 2025 (limited seats)\n\n**Note:** Early applications get priority for scholarships!`,
    suggestions: [
      "Early decision benefits",
      "Late application",
      "Scholarship deadlines",
      "Document submission",
    ],
  },
  housing: {
    text: `🏠 **Housing Options:**\n\n**On-Campus Housing:**\n• Single rooms: ₹8,000/month\n• Shared rooms: ₹5,000/month\n• Apartment-style living: ₹10,000/month\n• All utilities included\n\n**Amenities:**\n• Wi-Fi & cable TV\n• Laundry facilities\n• Common areas & kitchens\n• 24/7 security\n\n**Off-Campus Assistance:**\n• Housing office support\n• Verified landlord database\n• Roommate matching service\n• Transportation info\n\n🔑 **Booking:** Housing applications open in March!`,
    suggestions: [
      "Room types",
      "Housing costs",
      "Off-campus options",
      "Booking process",
    ],
  },
  internship: {
    text: `💼 **Internship & Career Support:**\n\n**Industry Partners:**\n• 200+ companies for internships\n• Top MNCs: Infosys, TCS, Wipro, Google, Microsoft\n• Local startups & established firms\n• Government organisations\n\n**Career Services:**\n• Resume building workshops\n• Mock interview sessions\n• Networking events\n• Job fair participation\n\n**Success Rate:**\n• 95% students get internships\n• 85% receive job offers\n• Average salary: ₹4.5–6.5 LPA\n\n🎯 **Placement Support:** Dedicated career counsellors for each student!`,
    suggestions: [
      "Company partners",
      "Resume help",
      "Interview prep",
      "Salary expectations",
    ],
  },
  job: {
    text: `💼 **Career Opportunities & Placement:**\n\n**Placement Statistics:**\n• 92% placement rate\n• Average package: ₹5.5 LPA\n• Highest package: ₹12 LPA\n• 150+ recruiting companies\n\n**Top Recruiters:**\n• Technology: Infosys, TCS, Wipro, Google, Microsoft\n• Finance: HDFC, ICICI, SBI\n• Consulting: Deloitte, KPMG, EY\n• Healthcare: Apollo, Fortis\n\n**Career Support:**\n• Lifetime career services\n• Alumni network access\n• Professional development workshops\n• Industry mentorship programmes\n\n🚀 **Success Guarantee:** We're committed to your career success!`,
    suggestions: [
      "Top recruiters",
      "Salary packages",
      "Alumni network",
      "Career support",
    ],
  },
};
