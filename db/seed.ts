import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Seed FAQs
    const faqsData = [
      {
        question: "What's included in the free website?",
        answer: "Our free website includes professional design, mobile responsiveness, core pages (home, about, services, contact), basic SEO optimization, and contact form functionality. It's a complete solution to establish your online presence quickly.",
        sortOrder: "1"
      },
      {
        question: "What happens after 30 days?",
        answer: "After your 30-day free trial ends, your hosting plan automatically continues at $97/month unless you cancel. Your website remains fully functional, and you'll continue to receive all the premium hosting features and support.",
        sortOrder: "2"
      },
      {
        question: "Can I upgrade later?",
        answer: "Yes, you can upgrade to our Growth or Pro plans at any time. Upgrading is seamless and doesn't require any website migration or downtime. You'll immediately get access to additional features and benefits.",
        sortOrder: "3"
      },
      {
        question: "Is there a setup fee or hidden charges?",
        answer: "No, there are absolutely no setup fees or hidden charges. The first 30 days are completely free, and after that, you pay only the advertised $97/month hosting fee. Everything included in the plan is clearly stated upfront.",
        sortOrder: "4"
      },
      {
        question: "Can I customize my website after it's built?",
        answer: "Yes, you'll have access to a user-friendly content management system where you can update text, images, and basic layout elements. For more advanced customizations, our support team can assist or provide quotes for additional development work.",
        sortOrder: "5"
      },
      {
        question: "How long does it take to build my website?",
        answer: "Typically, we complete website development within 7-10 business days after receiving your content and requirements. We'll provide a more specific timeline based on your project's complexity during our initial consultation.",
        sortOrder: "6"
      },
      {
        question: "What if I'm not satisfied with my website?",
        answer: "We offer unlimited revisions during the development process to ensure you're completely satisfied. After launch, we provide a 90-day money-back guarantee on the hosting service if you're not happy with the quality or performance.",
        sortOrder: "7"
      },
      {
        question: "Do I own my website and domain?",
        answer: "Yes, you own 100% of your website content and design. The domain name is registered in your name and is yours to keep. If you ever decide to move to another hosting provider, we'll help facilitate a smooth transition.",
        sortOrder: "8"
      },
      {
        question: "What kind of support is included?",
        answer: "We provide comprehensive support via live chat, email, and ticket system with response times typically under 2 hours during business hours. Our support covers technical issues, general questions, and basic website maintenance help.",
        sortOrder: "9"
      },
      {
        question: "Can I cancel at any time?",
        answer: "Yes, you can cancel your hosting service at any time without any cancellation fees or penalties. We'll provide you with your website files so you can move to another hosting provider if desired.",
        sortOrder: "10"
      }
    ];

    // Check if FAQs already exist
    const existingFaqs = await db.query.faqs.findMany();
    if (existingFaqs.length === 0) {
      console.log("Seeding FAQs data...");
      await db.insert(schema.faqs).values(faqsData);
    }

    // Seed Testimonials
    const testimonialsData = [
      {
        name: "Sarah Johnson",
        title: "Small Business Owner",
        content: "The website they built for me has been a game-changer for my business. The best part? I got it for free! The hosting is worth every penny with all the features and support I get. I've seen a 40% increase in leads since launching.",
        rating: "5",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "David Rodriguez",
        title: "Freelance Photographer",
        content: "I couldn't believe I got a professional website for free. The process was incredibly smooth! The hosting is reliable with 99.9% uptime as promised. Their support team is responsive and knowledgeable.",
        rating: "5",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Emily Chen",
        title: "E-commerce Entrepreneur",
        content: "I was skeptical about the 'free website' offer, but it exceeded all my expectations! The website looks professional and performs great. The hosting has all the features I need to run my online store.",
        rating: "5",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    ];

    // Check if testimonials already exist
    const existingTestimonials = await db.query.testimonials.findMany();
    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials data...");
      await db.insert(schema.testimonials).values(testimonialsData);
    }

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
