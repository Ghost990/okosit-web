/**
 * English translations for OkosIT website
 * This file contains all user-facing text to make translations easier
 */

export const translations = {
  // Common elements
  common: {
    company: "OkosIT",
    tagline: "Your OkosIT partner",
    description:
      "Flexible, reliable, and scalable IT solutions for businesses.",
    cta: {
      title: "Ready for the next step?",
      subtitle: "Contact us today!",
      description:
        "We'll help you find the perfect IT solution for your business.",
      whyChooseUs: "Why choose us?",
      highlight: "Let's start together!",
      contactInfo: "Contact information",
      benefits: [
        "Professional experience and expertise",
        "Customized solutions",
        "Fast and efficient service",
        "Competitive prices",
        "Reliable customer service",
      ],
    },
    contactUs: "Contact us",
    learnMore: "Learn more",
    or: "or",
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      theme: "Theme",
    },
    language: {
      switchToHungarian: "Switch to Hungarian",
      switchToEnglish: "Switch to English",
      language: "Language",
    },
  },

  // Navigation
  navigation: {
    home: "Home",
    services: "Services",
    about: "About",
    partners: "Partners",
    help: "Help",
    contact: "Contact",
  },

  // Header
  header: {
    freeConsultation: "Free Consultation",
  },

  // Footer
  footer: {
    quickLinks: "Quick Links",
    services: "Services",
    contactInfo: "Contact",
    copyright: (year: string) => `© ${year} OkosIT. All rights reserved.`,
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },

  // Testimonials section
  testimonials: {
    badge: "Testimonials",
    title: "What people say about us",
    subtitle: "Customer reviews",
    description: "See what our satisfied customers say about us.",
    items: [
      {
        name: "Peter Nagy",
        position: "IT Manager",
        company: "ABC Ltd.",
        text: "The OkosIT team did an excellent job optimizing our system operations. I recommend them to any business looking for a reliable IT partner.",
      },
      {
        name: "Anna Kiss",
        position: "Executive Director",
        company: "XYZ Inc.",
        text: "The website that the OkosIT team created for us perfectly reflects our company's values and services. It was a professional and efficient collaboration.",
      },
      {
        name: "John Kovacs",
        position: "Marketing Manager",
        company: "Delta Ltd.",
        text: "The webshop solution created by OkosIT significantly increased our online sales. They were flexible and helpful throughout every phase of the project.",
      },
    ],
  },

  // Home page
  home: {
    hero: {
      title: "OkosIT",
      subtitle: "Digitize your business with expert help",
      description:
        "OkosIT provides professional IT services that help your business grow and improve efficiency.",
      badge: "Professional IT",
      highlight: "solutions for businesses",
      featuresTitle: "Our Services",
      primaryCTA: "Free Consultation",
      secondaryCTA: "Services",
    },
    partners: {
      title: "Partners who trust us",
      logos: {
        title: "Partners who trust us",
      },
    },
    stats: {
      clients: "Satisfied Clients",
      support: "Server Monitoring",
      availability: "Availability",
      experience: "Years of Experience",
      satisfaction: "Client Satisfaction",
    },
  },

  // Services page
  services: {
    meta: {
      title: "Services - OkosIT",
      description:
        "We help solve your business's technological challenges with professional experience and a personalized approach.",
    },
    title: "Our Services",
    subtitle: "Technology Solutions",
    description:
      "Comprehensive IT services for businesses, from system operations to web development.",
    badge: "Professional Services",
    details: "Details",
    moreFeatures: "+ {count} more services",
    hero: {
      title: "Our Services",
      subtitle: "Technology Solutions",
      description:
        "Comprehensive IT services for businesses, from system operations to web development.",
    },
    categories: {
      systemOperation: "System Operations",
      pcRepair: "PC and Laptop Repair",
      webDevelopment: "Web Development",
      webshop: "Webshop Creation",
      itImplementation: "IT Implementation",
      deviceRental: "Device Rental",
      // Service IDs from services.json
      rendszeruzemeltetes: "System Operations",
      "pc-javitas": "PC and Laptop Repair",
      webfejlesztes: "Web Development",
      webshop: "Webshop Creation",
      "it-kivitelezes": "IT Implementation",
      eszkozberbeadas: "Device Rental",
    },
    descriptions: {
      rendszeruzemeltetes:
        "Comprehensive IT infrastructure management and monitoring services.",
      pcjavitas:
        "Fast and reliable computer repair services on-site or in our workshop.",
      webfejlesztes:
        "Development of modern, responsive websites and web applications.",
      webshop:
        "Comprehensive e-commerce solutions for small and medium-sized businesses.",
      itkivitelezes: "Design and implementation of complex IT projects.",
      eszkozberbeadas: "IT equipment rental with flexible terms.",
    },
    features: {
      rendszeruzemeltetes: [
        "24/7 server monitoring",
        "Proactive maintenance",
        "Security backups",
        "Network infrastructure management",
        "Server administration",
      ],
      pcjavitas: [
        "Hardware diagnostics and repair",
        "Software installation and configuration",
        "Virus removal and cleaning",
        "Data recovery and restoration",
        "Performance optimization",
      ],
      webfejlesztes: [
        "Custom website design",
        "Responsive design",
        "SEO optimization",
        "Content management systems",
        "E-commerce solutions",
      ],
      webshop: [
        "Custom webshop design",
        "Payment system integration",
        "Inventory management",
        "Order management system",
        "Marketing tools",
      ],
      itkivitelezes: [
        "Network setup",
        "Server installation",
        "Security systems",
        "Infrastructure planning",
        "Project management",
      ],
      eszkozberbeadas: [
        "Laptop and PC rental",
        "Server rental",
        "Network equipment",
        "Flexible rental periods",
        "Comprehensive support",
      ],
    },
    prices: {
      rendszeruzemeltetes: "Custom quote",
      pcjavitas: "From 15,000 HUF",
      webfejlesztes: "From 150,000 HUF",
      webshop: "From 250,000 HUF",
      itkivitelezes: "Custom quote",
      eszkozberbeadas: "From 5,000 HUF/month",
    },
    cta: {
      title: "Have specific needs?",
      description:
        "Contact us and we'll offer a customized solution for your business.",
      button: "Contact Us",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Transparent prices, flexible packages",
      basic: "Basic",
      standard: "Standard",
      premium: "Premium",
      custom: "Custom",
      perMonth: "/month",
      contactUs: "Request a quote",
    },
  },

  // About page
  about: {
    meta: {
      title: "About Us - OkosIT",
      description:
        "Meet the OkosIT team and our story. Over 10 years of professional experience in the IT sector.",
    },
    hero: {
      title: "About Us",
      subtitle: "Experienced IT Team",
      description:
        "Providing reliable IT services with over 10 years of professional experience.",
    },
    values: {
      title: "Our Values",
      subtitle: "What We Believe In",
      description:
        "OkosIT's core values that define our work and relationships.",
      reliability: {
        title: "Reliability",
        description: "We always keep our promises and deadlines.",
      },
      flexibility: {
        title: "Flexibility",
        description: "We adapt to the unique needs of our clients.",
      },
      transparency: {
        title: "Transparency",
        description: "Clear and straightforward communication in all situations.",
      },
      expertise: {
        title: "Expertise",
        description: "Up-to-date knowledge and years of professional experience.",
      },
      innovation: {
        title: "Innovation",
        description:
          "We continuously seek the latest technological solutions.",
      },
      customerFocus: {
        title: "Customer Focus",
        description: "Our clients' needs and satisfaction come first.",
      },
    },
    team: {
      title: "Our Team",
      subtitle: "Our Professionals",
      description:
        "Meet the OkosIT team who work behind the scenes to ensure your IT systems run perfectly.",
      expertiseLabel: "Areas of expertise:",
      founder: {
        name: "Sandor Tari",
        position: "Founder & CEO",
        description:
          "With over 15 years of experience in the IT sector. His professional knowledge and leadership skills ensure the company's success.",
        expertise: [
          "System Operations",
          "Project Management",
          "IT Strategy",
        ],
      },
    },
    stats: {
      clients: {
        value: "500+",
        label: "Satisfied clients",
      },
      availability: {
        value: "10+",
        label: "Years of experience",
      },
      support: {
        value: "24/7",
        label: "Server monitoring",
      },
      experience: {
        value: "10+",
        label: "Years of experience",
      },
    },
    timeline: {
      title: "Our Story",
      subtitle: "Important Milestones",
      description:
        "OkosIT's development and most important milestones from founding to the present day.",
      founding: {
        title: "OkosIT Founded",
        description:
          "Our company was established in 2020 with the goal of providing quality IT services to local businesses.",
      },
      clients50: {
        title: "50 Satisfied Clients",
        description:
          "Within a year, we reached the milestone of 50 clients, which confirmed the quality of our services.",
      },
      expansion: {
        title: "Service Expansion",
        description:
          "We expanded our service portfolio with web development and webshop creation.",
      },
      support: {
        title: "Introduction of 24/7 Server Monitoring",
        description:
          "We introduced non-stop customer service so our clients can count on us anytime.",
      },
      present: {
        title: "Current Situation",
        description:
          "Today we have more than 500 satisfied clients and we continue to grow.",
      },
      clients200: {
        title: "Reaching 200 Clients",
        description:
          "In 2024, we reached the milestone of 200 clients, which represents significant growth compared to the previous year.",
      },
    },
  },

  // Partners page
  partners: {
    meta: {
      title: "Partners - OkosIT",
      description:
        "Meet OkosIT's partners and collaborations. We work with reliable partners to provide the best service.",
    },
    logos: {
      title: "Partners who trust us",
    },
    companies: {
      profimed: {
        name: "ProfiMed Healthcare Provider",
        industry: "Healthcare",
        services: [
          "IT infrastructure",
          "System operations",
          "Security audit",
        ],
        testimonial:
          "With OkosIT's help, we successfully digitized our healthcare system, which significantly increased our efficiency.",
        partnership: "Since 2020",
      },
      visualPower: {
        name: "Visual Power Design Studio",
        industry: "Creative industry",
        services: ["User interface design", "Web development"],
        testimonial:
          "Collaborating with OkosIT has allowed us to focus on our design work while they provide the technical background.",
        partnership: "Since 2021",
      },
      shopBuilder: {
        name: "ShopBuilder E-commerce",
        industry: "Retail",
        services: ["Webshop development", "System integration"],
        testimonial:
          "OkosIT's professionals helped optimize our webshop's performance, resulting in a 40% increase in sales.",
        partnership: "Since 2022",
      },
      techStart: {
        name: "TechStart Innovation Center",
        industry: "Technology",
        services: ["Cloud services", "Database management"],
        testimonial:
          "Together with OkosIT, we developed an innovative cloud-based solution that now supports the success of multiple startups.",
        partnership: "Since 2021",
      },
      greenOffice: {
        name: "GreenOffice Sustainability Consultant",
        industry: "Environmental protection",
        services: ["Energy efficiency software", "Monitoring systems"],
        testimonial:
          "OkosIT helped us develop a monitoring system that allows our clients to track and optimize their energy consumption.",
        partnership: "Since 2023",
      },
    },
    industries: {
      title: "Industries",
      subtitle: "Sectors we work in",
      description:
        "We have extensive experience in various industries.",
    }
  },

  // Contact page
  contact: {
    meta: {
      title: "Contact - OkosIT",
      description:
        "Contact OkosIT for professional IT services. We're here to help with your business's technological needs.",
    },
    hero: {
      title: "Contact Us",
      subtitle: "We're here to help",
      description:
        "Have questions or need a quote? Contact us and we'll get back to you as soon as possible.",
    },
    phone: {
      label: "Phone Number",
      value: "+36 30 123 4567",
    },
    email: {
      label: "Email Address",
      value: "info@okosit.hu",
    },
    contact: {
      title: "Contact Us",
      description: "Have questions? Contact us in one of the following ways:",
      email: "info@okosit.hu",
      phone: "+36 30 123 4567",
      address: "1043 Budapest, Berda József utca 12",
    },
    hours: {
      title: "Business Hours",
      description: "Our availability during different days of the week.",
      label: "Business Hours",
      value: "Mon-Fri: 9:00-17:00",
      weekdays: "Weekdays",
      weekdaysHours: "9:00 - 17:00",
      weekdaysType: "Open",
      saturday: "Saturday",
      saturdayHours: "Closed",
      saturdayType: "Closed",
      sunday: "Sunday",
      sundayHours: "Closed",
      sundayType: "Closed",
      weekend: "Weekend",
    },
    callUs: "Call Us",
    form: {
      title: "Request a Quote",
      description: "Fill out the form below and our team will get back to you shortly.",
      cta: "Request a Quote",
      firstName: "First Name",
      lastName: "Last Name",
      company: "Company Name",
      name: "Name",
      email: "Email address",
      phone: "Phone number",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      submit: "Submit",
      sending: "Sending...",
      required: "Required field",
      invalidEmail: "Invalid email address",
      success: "Thank you! We've received your message and will respond shortly.",
      error: "There was an error sending your message. Please try again later.",
      privacy: "By submitting this form, I accept the privacy policy.",
      errors: {
        requiredFields: "Please fill in all required fields.",
        invalidEmail: "Please enter a valid email address.",
        termsRequired: "Please accept the privacy policy.",
        serverError: "A server error occurred. Please try again later.",
        networkError: "A network error occurred. Please check your internet connection."
      },
      validation: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        phone: "Please enter a valid phone number",
        subject: "Please enter a subject",
        message: "Please enter your message",
      },
    },
    methods: {
      title: "Contact Methods",
      description: "Choose the contact method that works best for you.",
      phone: {
        title: "Phone",
        primary: "+36 70 391 5000",
        secondary: "Weekdays 9:00-17:00",
        description: "Call us with any IT-related questions.",
      },
      email: {
        title: "Email",
        primary: "info@okosit.hu",
        secondary: "We typically respond within 24 hours",
        description: "Send us an email anytime, and we'll respond promptly.",
      },
      location: {
        title: "Address",
        primary: "1043 Budapest, Berda József utca 12",
        secondary: "Appointment required",
        description: "Visit our office by scheduling an appointment.",
      },
      remote: {
        title: "Remote Assistance",
        primary: "Take Control",
        secondary: "Fast and efficient",
        description: "We can help solve problems remotely.",
      },
    },
    info: {
      title: "Contact Information",
      address: "Address",
      email: "Email",
      phone: "Phone",
      hours: "Business Hours",
      weekdays: "Monday - Friday",
      weekdayHours: "9:00 - 17:00",
      weekend: "Saturday - Sunday",
      weekendHours: "Closed",
    },
    map: {
      title: "Find Us",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about our services.",
      viewAll: "View all FAQs",
    }
  },

  // Support page
  support: {
    hero: {
      title: "Help",
      subtitle: "Support and Information",
      description:
        "Find answers to common questions and get help with our services.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "The most commonly asked questions and our answers.",
      categories: {
        general: {
          title: "General Questions",
          items: [
            {
              question: "What services does OkosIT offer?",
              answer:
                "OkosIT offers a wide range of IT services including system operations, PC and laptop repair, web development, webshop creation, IT implementation, and device rental.",
            },
            {
              question: "How can I request a quote?",
              answer:
                "You can request a quote by filling out the contact form on our website, calling us directly, or sending us an email with details about your project or needs.",
            },
            {
              question: "What areas do you serve?",
              answer:
                "We primarily serve businesses in Hungary, but we can also provide remote services to clients in other countries.",
            },
          ],
        },
        technical: {
          title: "Technical Support",
          items: [
            {
              question: "How quickly can you respond to technical issues?",
              answer:
                "For our clients with service contracts, we respond to critical issues within 1-2 hours. For standard support requests, we typically respond within 24 hours.",
            },
            {
              question: "Do you offer remote support?",
              answer:
                "Yes, we offer remote support for many technical issues, which allows us to resolve problems quickly without the need for an on-site visit.",
            },
            {
              question: "What should I do if my computer won't start?",
              answer:
                "First, check that all cables are properly connected and that the power outlet is working. If the problem persists, contact our technical support team for assistance.",
            },
          ],
        },
        services: {
          title: "Services",
          items: [
            {
              question: "What does system operations service include?",
              answer:
                "Our system operations service includes 24/7 server monitoring, proactive maintenance, security backups, network infrastructure management, and server administration.",
            },
            {
              question: "How long does it take to develop a website?",
              answer:
                "The timeline for website development depends on the complexity of the project. A simple website can be completed in 2-3 weeks, while more complex projects may take 1-3 months.",
            },
            {
              question: "Do you offer website maintenance services?",
              answer:
                "Yes, we offer website maintenance services to ensure your website remains secure, up-to-date, and functioning properly.",
            },
          ],
        },
      },
    },
    contactForm: {
      title: "Contact Form",
      description:
        "Have a question? Fill out the form below and our team will get back to you shortly.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      submit: "Submit",
      success: "Your message has been sent successfully. We'll get back to you soon!",
      error: "There was an error sending your message. Please try again later.",
    },
  },
};
