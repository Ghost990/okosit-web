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
      clients: "Monitored Devices",
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
      deviceRental: "IT equipment rental",
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
        value: "100%",
        label: "100% trust",
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
          "Our company was established in 2014 with the goal of providing the highest level of IT support for domestic micro and small businesses.",
      },
      firstNetwork: {
        title: "First Network Delivery",
        description:
          "We deliver our first network, which was completely designed and implemented by us.",
      },
      expansion: {
        title: "Service Expansion",
        description:
          "We expanded our service portfolio with web development and webshop creation.",
      },
      support: {
        title: "24/7 Server Monitoring",
        description:
          "More than 10 continuously operating servers are now under our supervision.",
      },
      present: {
        title: "Current Situation",
        description:
          "Today we have more than 500 satisfied clients and we continue to grow.",
      },
      endpoints250: {
        title: "250+ Managed IT Endpoints",
        description:
          "We reach the limit of our operational system, elevating the support system to a higher level.",
      },
      webshop: {
        title: "Webshop",
        description:
          "We launch our own webshop, where high-quality devices selected and prepared by us are available for purchase.",
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
    hero: {
      title: "Our Partners",
      subtitle: "Our Collaborations",
      description:
        "We work with reliable partners to provide the best service to our clients.",
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
      dataFlow: {
        name: "DataFlow Analytics Center",
        industry: "Data Analysis",
        services: ["Big Data solutions", "Data visualization"],
        testimonial:
          "OkosIT's experts were essential in building our data analytics platform, which now holds a leading position in the market.",
        partnership: "Since 2022",
      },
    },
    industries: {
      title: "Industries",
      subtitle: "Sectors we work in",
      description:
        "We have extensive experience in various industries.",
      healthcare: {
        name: "Healthcare",
        count: "25+ partners",
        icon: "H",
      },
      education: {
        name: "Construction",
        count: "30+ partners",
        icon: "C",
      },
      commerce: {
        name: "Commerce",
        count: "40+ partners",
        icon: "C",
      },
      services: {
        name: "Services",
        count: "35+ partners",
        icon: "S",
      },
      manufacturing: {
        name: "Manufacturing",
        count: "15+ partners",
        icon: "M",
      },
      tech: {
        name: "Technology",
        count: "20+ partners",
        icon: "T",
      },
      items: [
        {
          title: "Wholesale",
          description:
            "Supporting IT infrastructure for warehouses, suppliers, and wholesale companies.",
        },
        {
          title: "Logistics",
          description:
            "Operating systems for shipping companies and logistics providers.",
        },
        {
          title: "Construction",
          description:
            "IT solutions for construction companies, contractors, and building industry professionals.",
        },
      ],
    },
    benefits: {
      title: "Partnership Benefits",
      subtitle: "Why partner with us?",
      description:
        "Discover the advantages of collaborating with OkosIT.",
      longTerm: {
        title: "Long-term Collaboration",
        description:
          "We strive for long-term relationships with our partners to continuously support their business goals.",
      },
      quality: {
        title: "Outstanding Quality",
        description:
          "We follow the highest quality standards in every project to ensure our partners' satisfaction.",
      },
      personal: {
        title: "Personalized Solutions",
        description:
          "We apply an individual approach to each partner, taking into account their specific needs and goals.",
      },
      items: [
        {
          title: "Expertise",
          description: "Years of experience in various IT fields.",
        },
        {
          title: "Reliability",
          description: "We always deliver on our promises.",
        },
        {
          title: "Innovation",
          description: "We stay up-to-date with the latest technologies.",
        },
      ],
    },
    cta: {
      title: "Become our partner!",
      description:
        "Contact us to discuss partnership opportunities.",
      button: "Contact Us",
      customSolutions: "Contact us for custom industry solutions!",
    },
    featured: {
      title: "Featured Partners",
      subtitle: "Who we work with",
    },
    stats: {
      clients: {
        value: "100+",
        label: "Satisfied partners",
      },
      projects: {
        value: "250+",
        label: "Successful projects",
      },
      satisfaction: {
        value: "98%",
        label: "Satisfaction rate",
      },
      retention: {
        value: "95%",
        label: "Partner retention rate",
      },
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
      value: "+36703915000",
    },
    email: {
      label: "Email Address",
      value: "info@okosit.hu",
    },
    contact: {
      title: "Contact Us",
      description: "Have questions? Contact us in one of the following ways:",
      email: "info@okosit.hu",
      phone: "+36703915000",
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
        networkError: "A network error occurred. Please check your internet connection.",
        submitError: "An error occurred while submitting the form. Please try again."
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
    response: {
      title: "Response Time",
      description: "We typically respond to inquiries within the following timeframes.",
      emergency: "Emergency",
      emergencyTime: "Within 2 hours",
      email: "Email",
      emailTime: "1 business day",
      quote: "Quote Request",
      quoteTime: "2 business days",
      general: "PING",
      generalTime: "time<0.1ms TTL=64",
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
    },
    privacyPolicy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Introduction",
          content: [
            "OkosIT is committed to protecting the personal data of its users. This privacy policy aims to explain what data we collect about you when you use our website, and how we use, transfer, and protect this data.",
            "This policy is in accordance with the General Data Protection Regulation (GDPR) of the European Union and Hungarian data protection laws."
          ]
        },
        {
          heading: "2. Data Controller",
          content: [
            "Name: OkosIT",
            "Email: info@okosit.hu",
            "Website: www.okosit.hu"
          ]
        },
        {
          heading: "3. Scope of Data Processed",
          content: [
            "3.1 Data collected during website visits:",
            "When using our website, we collect the following data:",
            "- Time of visit",
            "- Pages visited",
            "- Type of device used",
            "- Type of browser used",
            "- IP address (in anonymized form)",
            "- Referrer",
            "This data is used exclusively for analytical purposes, to analyze the use of our website and to improve the user experience.",
            "3.2 Use of cookies:",
            "Our website uses cookies to enhance the user experience. Cookies are small data files stored by your browser on your device.",
            "We use the following types of cookies on our website:",
            "- Strictly necessary cookies: These are essential for the operation of the website.",
            "- Analytical cookies: These help us understand how visitors use the website and are only activated with your consent.",
            "The use of analytical cookies requires your explicit consent, which you can give or refuse using the cookie consent bar displayed on our website."
          ]
        },
        {
          heading: "4. Use of Google Analytics",
          content: [
            "Our website uses the Google Analytics service to analyze visitor traffic. Google Analytics places cookies on your device to collect data about how you use our website.",
            "The main data collected by Google Analytics:",
            "- Pages viewed",
            "- Time spent on the website",
            "- Where the visitor came from",
            "- What device and browser is used",
            "- Demographic data (gender, age) - only in anonymized, aggregated form",
            "It is important to note that Google Analytics:",
            "- Is only activated with your explicit consent",
            "- Operates with IP anonymization on our website",
            "- Your data is not linked to other personally identifiable information",
            "For more information about Google Analytics, please visit Google's privacy policy: https://policies.google.com/privacy"
          ]
        },
        {
          heading: "5. Legal Basis for Data Processing",
          content: [
            "The legal basis for data processing is your voluntary consent under Article 6(1)(a) of the GDPR, which you can provide via the cookie consent bar displayed on our website."
          ]
        },
        {
          heading: "6. Data Retention Period",
          content: [
            "Data collected for analytical purposes is stored for 26 months and then automatically deleted."
          ]
        },
        {
          heading: "7. Your Rights",
          content: [
            "Under the GDPR, you have the right to:",
            "- Request information about data processing",
            "- Access your stored personal data",
            "- Request correction or deletion of data",
            "- Request restriction of data processing",
            "- Object to data processing",
            "- Right to data portability",
            "- Right to withdraw consent at any time",
            "To exercise your rights or for any data protection related questions, please contact us at info@okosit.hu."
          ]
        },
        {
          heading: "8. Data Security",
          content: [
            "We take all reasonable and appropriate security measures to protect personal data against loss, misuse, or alteration."
          ]
        },
        {
          heading: "9. Contact",
          content: [
            "If you have any questions regarding data processing, please contact us at info@okosit.hu."
          ]
        },
        {
          heading: "10. Changes to the Privacy Policy",
          content: [
            "We reserve the right to modify this privacy policy at any time. Users will be informed of any changes on our website.",
            "Last updated: July 1, 2025."
          ]
        }
      ]
    }
  },

  // Support page
  support: {
    meta: {
      title: "Help - OkosIT",
      description: "IT support and assistance for businesses.",
    },
    hero: {
      title: "Help",
      subtitle: "Support and Information",
      description:
        "Find answers to common questions and get help with our services.",
    },
    options: {
      title: "Support Options",
      description: "Choose the support option that works best for you.",
      phone: {
        title: "Phone Support",
        description: "Call us for immediate assistance with your IT issues.",
        action: "Call Now",
        availability: "24/7, response within 24 hours",
      },
      email: {
        title: "Email Support",
        description: "Send us an email with your questions or issues.",
        action: "Send Email",
        availability: "Response within 24 hours",
      },
      remote: {
        title: "Remote Assistance",
        description: "We can solve problems remotely if needed.",
        action: "Start Take Control",
        availability: "By appointment",
      },
      onsite: {
        title: "Onsite Support",
        description: "For more serious issues, we provide onsite assistance.",
        action: "Schedule Appointment",
        availability: "Weekdays, by appointment",
      },
    },
    emergency: {
      title: "Emergency Help",
      description: "For critical IT issues, call our emergency line:",
      phone: "+36703915000",
      steps: [
        "Call the emergency line",
        "Provide your client code",
        "Briefly describe the problem",
        "Our expert will call you back within 30 minutes",
      ],
    },
    emergencySteps: {
      title: "Emergency Procedure",
      description: "Follow these steps in case of an urgent IT problem:",
      badge: "Urgent",
      callToAction: "Call the emergency line",
      steps: {
        urgent: {
          title: "Call the emergency line",
          description:
            "For critical IT issues, immediately call +36703915000.",
          action: "Call now",
        },
        describe: {
          title: "Describe the problem",
          description:
            "Briefly and accurately describe the error and its circumstances.",
          action: "Describe problem",
        },
        solution: {
          title: "Solution",
          description:
            "Our experts will solve the problem as soon as possible, using remote assistance or on-site support if necessary.",
          action: "More information",
        },
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "The most commonly asked questions and our answers.",
      categories: {
        general: {
          title: "General Questions",
          questions: {
            coverage: {
              question: "What services does OkosIT offer?",
              answer:
                "OkosIT offers a wide range of IT services including system operations, PC and laptop repair, web development, webshop creation, IT implementation, and device rental.",
            },
            response: {
              question: "How can I request a quote?",
              answer:
                "You can request a quote by filling out the contact form on our website, calling us directly, or sending us an email with details about your project or needs.",
            },
            payment: {
              question: "What areas do you serve?",
              answer:
                "We primarily serve businesses in Hungary, but we can also provide remote services to clients in other countries.",
            },
          },
        },
        technical: {
          title: "Technical Support",
          questions: {
            computer: {
              question: "How quickly can you respond to technical issues?",
              answer:
                "For our clients with service contracts, we respond to critical issues within 1-2 hours. For standard support requests, we typically respond within 24 hours.",
            },
            backup: {
              question: "Do you offer remote support?",
              answer:
                "Yes, we offer remote support for many technical issues, which allows us to resolve problems quickly without the need for an on-site visit.",
            },
            virus: {
              question: "What should I do if my computer won't start?",
              answer:
                "First, check that all cables are properly connected and that the power outlet is working. If the problem persists, contact our technical support team for assistance.",
            },
          },
        },
        services: {
          title: "Services",
          questions: {
            website: {
              question: "What does system operations service include?",
              answer:
                "Our system operations service includes 24/7 server monitoring, proactive maintenance, security backups, network infrastructure management, and server administration.",
            },
            urgent: {
              question: "How long does it take to develop a website?",
              answer:
                "The timeline for website development depends on the complexity of the project. A simple website can be completed in 2-3 weeks, while more complex projects may take 1-3 months.",
            },
            warranty: {
              question: "Do you offer website maintenance services?",
              answer:
                "Yes, we offer website maintenance services to ensure your website remains secure, up-to-date, and functioning properly.",
            },
          },
        },
      },
    },
    resources: {
      title: "Useful Resources",
      description:
        "Tutorials and guides to solve common problems.",
      userGuide: "User Manual",
      troubleshooting: "Troubleshooting Guide",
      securityGuide: "Security Guide",
      items: [
        {
          title: "IT Security Basics",
          description: "Guide to safe internet usage.",
          link: "/help/it-security",
        },
        {
          title: "Data Recovery Steps",
          description: "What to do if you've lost your data?",
          link: "/help/data-recovery",
        },
      ],
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
      privacy: "By submitting this form, I accept the privacy policy.",
      company: "Company Name (optional)",
      urgency: "Urgency",
      urgencyOptions: {
        low: "Not Urgent",
        medium: "Normal",
        high: "Urgent",
      },
    },
    contact: {
      title: "Contact Us",
      description:
        "If you can't find the answer to your question, please contact us.",
      button: "Contact Us",
    },
  },

  // Cookie consent
  cookieConsent: {
    title: "Cookie Settings",
    description: "To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this website. Not consenting or withdrawing consent, may adversely affect certain features and functions.",
    settingsDescription: "Choose what types of cookies to allow. You can change these settings at any time.",
    accept: "Accept",
    decline: "Decline",
    viewSettings: "View Settings",
    saveSettings: "Save Settings",
    back: "Back",
    privacyPolicy: "Privacy Policy",
    categories: {
      essential: {
        name: "Essential Cookies",
        description: "These cookies are necessary for the proper functioning of the website.",
        required: true
      },
      analytics: {
        name: "Analytics Cookies",
        description: "These cookies help us understand how you use the website so we can improve the user experience.",
        required: false
      },
      marketing: {
        name: "Marketing Cookies",
        description: "These cookies help us display targeted advertisements.",
        required: false
      }
    },
    required: "required"
  }
};
