// src/data/sugarstack.js
// All data/information for the SugarStack Smart Cake Customization Kiosk proposal

// --- Project Specifics ---
const partnerName = 'Red Ribbon';
const partnerLocation = 'Calapan City, Oriental Mindoro';
const projectPartnerString = `${partnerName} ${partnerLocation}`;

export const siteConfig = {
  name: 'SugarStack', // The product name
  tagline: 'Smart Cake Customization Kiosk',
  location: partnerLocation,
  storeHours: 'Monday - Sunday: 8:00 AM - 9:00 PM',
  contactNumber: '(043) 123-4567',
  address: `${partnerName} ${partnerLocation}`,
  rating: 4.8,
  reviewCount: 500,
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.666666666667!2d121.1792829!3d13.4111361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8b64dd912ed%3A0xd3f0175fd96cbcb1!2sRed%20Ribbon!5e0!3m2!1sen!2sph!4v1234567890!5m2!1sen!2sph'
}

export const heroData = {
  title: 'Design Your Perfect',
  titleAccent: 'Cake',
  subtitle: `Introducing SugarStack at ${partnerName} ${partnerLocation}`,
  description: 'Experience the future of cake customization with our interactive smart kiosk. Create your dream cake in minutes on a touchscreen, choose from premium ingredients, customize every detail, and see a 3D preview before you order.',
  ctaPrimary: 'Start Designing',
  ctaSecondary: 'See How It Works',
  stats: [
    { value: '50%', label: 'Faster Ordering' },
    { value: '100%', label: 'Customizable' },
    { value: '500+', label: 'Happy Customers' }
  ],
  features: [
    { icon: 'mdi-touch', text: 'Interactive Touchscreen' },
    { icon: 'mdi-cake-variant', text: '3D Cake Preview' },
    { icon: 'mdi-clock-fast', text: 'Ready in 24 Hours' }
  ]
}

export const aboutData = {
  title: 'About',
  titleAccent: 'SugarStack',
  subtitle: `A digital innovation powering ${partnerName}'s cake experience`,
  description: `SugarStack is a cutting-edge self-service kiosk solution designed to transform how customers order customized cakes. Developed to meet the demands of modern, convenience-driven consumers, SugarStack addresses the limitations of traditional counter-service models—like long queues, miscommunication, and limited visualization. By partnering with a beloved Filipino brand like ${partnerName}, we are bringing this innovation to ${partnerLocation}, blending ${partnerName}'s heritage of quality baking with SugarStack's digital convenience.`,
  mission: 'To empower bakeries and delight customers by providing an intuitive, efficient, and engaging platform for creating personalized celebration cakes.',
  vision: 'To be the leading provider of digital customization solutions for the bakery industry in the Philippines, setting new standards for customer experience and operational efficiency.',
  history: [
    { year: '2023', event: 'SugarStack concept developed to address challenges in traditional cake ordering' },
    { year: '2023', event: `Pilot program launched in partnership with ${partnerName} in ${partnerLocation}` },
    { year: '2024', event: 'Data-driven refinements made based on customer feedback and business analytics' },
    { year: '2025', event: 'Expanding SugarStack to key locations across the region' }
  ],
  values: [
    { icon: 'mdi-lightbulb', title: 'Innovation First', description: 'Continuously improving the customization experience' },
    { icon: 'mdi-handshake', title: 'Partnership', description: 'Working closely with bakeries for mutual success' },
    { icon: 'mdi-star', title: 'User-Centric', description: 'Designing for ease, enjoyment, and confidence' },
    { icon: 'mdi-chart-line', title: 'Data-Driven', description: 'Using insights to optimize both experience and business' }
  ]
}

export const featuresData = {
  title: 'SugarStack',
  titleAccent: 'Features',
  subtitle: 'Transform your cake ordering experience with cutting-edge technology',
  features: [
    {
      icon: 'mdi-gesture-tap',
      title: 'Intuitive Touch Interface',
      description: 'Our user-friendly touchscreen interface guides customers through every step of customization with visual feedback and easy navigation, eliminating guesswork and reducing the need for staff assistance.',
      benefits: ['No training needed', 'Visual step-by-step guide', 'Accessible design for all ages']
    },
    {
      icon: 'mdi-cube-outline',
      title: 'Real-time 3D Preview',
      description: 'See your cake come to life as you customize. Rotate, zoom, and view your design from every angle before confirming, ensuring the final product matches your vision perfectly.',
      benefits: ['Live updates with each choice', '360° viewing angles', 'Photo-realistic representation']
    },
    {
      icon: 'mdi-content-cut',
      title: 'Endless Customization',
      description: 'Choose from a wide range of premium ingredients, designs, and messages to create a truly unique cake for any occasion, all presented through an easy-to-navigate digital menu.',
      benefits: ['Multiple flavors & fillings', 'Custom messages & fonts', 'Themed designs for events']
    },
    {
      icon: 'mdi-qrcode',
      title: 'Digital Ordering & Tracking',
      description: 'Customers receive a QR code for their order, which streamlines checkout at the counter. The system allows for order tracking and can send SMS notifications when the cake is ready for pickup.',
      benefits: ['No paper order slips', 'Accurate order transmission', 'Automated customer updates']
    },
    {
      icon: 'mdi-cash-plus',
      title: 'Smart Upselling Engine',
      description: 'The kiosk intelligently suggests relevant add-ons and upgrades based on the customer\'s selections, increasing average order value without feeling pushy.',
      benefits: ['Personalized suggestions', 'Promotes bundle deals', 'Highlights seasonal specials']
    },
    {
      icon: 'mdi-chart-line',
      title: 'Business Analytics Dashboard',
      description: 'For the bakery, SugarStack provides a backend dashboard to track popular designs, peak ordering times, and customer preferences, enabling data-driven decisions for inventory and marketing.',
      benefits: ['Identify popular trends', 'Gain inventory insights', 'Understand customer preferences']
    }
  ]
}

export const howItWorksData = {
  title: 'How SugarStack',
  titleAccent: 'Works',
  subtitle: 'Design your perfect cake in four simple steps',
  steps: [
    {
      icon: 'mdi-cake',
      title: 'Choose Your Base',
      description: 'Start by selecting your cake size (6" to 12"), flavor (chocolate, vanilla, red velvet, ube), and shape (round, square, heart).',
      details: [
        '4 sizes available',
        '6 premium flavors',
        '3 classic shapes'
      ]
    },
    {
      icon: 'mdi-palette',
      title: 'Customize Design',
      description: 'Get creative! Pick icing color, add decorations like sprinkles or edible images, and write your personal message with our easy-to-use digital tools.',
      details: [
        '20+ icing colors',
        '50+ decoration options',
        'Custom text & fonts'
      ]
    },
    {
      icon: 'mdi-cube-scan',
      title: 'Preview in 3D',
      description: 'Watch your design come to life. Rotate, zoom, and inspect every detail of your cake with our real-time 3D visualization.',
      details: [
        '360° rotation',
        'Zoom functionality',
        'Photo-realistic preview'
      ]
    },
    {
      icon: 'mdi-qrcode-scan',
      title: 'Order & Pickup',
      description: 'Review the final price, get your unique QR code, pay at the counter, and pick up your custom cake within 24 hours.',
      details: [
        'Instant QR code generation',
        'Guaranteed 24-hour pickup',
        'SMS ready notification'
      ]
    }
  ],
  demoVideo: {
    title: 'Watch how easy it is to design your cake with SugarStack',
    thumbnail: '/api/placeholder/800/400',
    duration: '1:30'
  }
}

export const businessModelData = {
  title: 'SugarStack',
  titleAccent: 'Business Model Canvas',
  subtitle: 'Strategic framework for sustainable innovation at the partner bakery',
  bmc: {
    customerSegments: [
      { icon: 'mdi-account-group', title: 'Event Planners', description: 'Seeking efficient, accurate orders for corporate events, weddings, parties' },
      { icon: 'mdi-cake-birthday', title: 'Celebrants', description: 'Individuals celebrating birthdays, anniversaries, graduations' },
      { icon: 'mdi-heart', title: 'Gift Buyers', description: 'Last-minute shoppers wanting a personalized, high-quality gift' },
      { icon: 'mdi-food', title: 'Food Enthusiasts', description: 'Customers interested in premium ingredients and unique flavor combos' }
    ],
    valuePropositions: [
      { icon: 'mdi-clock-fast', title: 'Time Efficiency', description: 'Up to 50% faster ordering process, reducing in-store wait time' },
      { icon: 'mdi-eye', title: 'Visual Confidence', description: 'Eliminates guesswork by showing a photorealistic 3D preview' },
      { icon: 'mdi-puzzle', title: 'Creative Control', description: 'Puts full design flexibility directly in the customer\'s hands' },
      { icon: 'mdi-cash-multiple', title: 'Smart Pricing', description: 'Automatic, transparent price updates as customizations are added' }
    ],
    channels: [
      'In-store Kiosk (Primary)',
      'Partner Bakery Staff',
      'Social Media Marketing',
      'In-store Signage'
    ],
    customerRelationships: [
      'Self-service interface',
      'Automated personalized recommendations',
      'QR-code based support',
      'Post-purchase digital feedback survey'
    ],
    revenueStreams: [
      { item: 'Premium for Custom Cakes', margin: '+30% vs. standard' },
      { item: 'Add-ons & Decorations', margin: '+25%' },
      { item: 'Express Order Fee', margin: '+20%' },
      { item: 'Seasonal/Themed Designs', margin: '+35%' }
    ],
    keyResources: [
      'SugarStack Kiosk Hardware',
      'SugarStack Proprietary Software',
      'Partner Bakery\'s Production Team',
      'Partner Bakery\'s Premium Ingredients'
    ],
    keyActivities: [
      'Software Maintenance & Updates',
      'Partner Bakery Training',
      'Quality Assurance Monitoring',
      'Technical Support'
    ],
    keyPartnerships: [
      partnerName, // The implementation partner
      'Kiosk Hardware Manufacturer',
      'Cloud Services Provider',
      'Local Ingredient Suppliers'
    ],
    costStructure: [
      'Kiosk Hardware (CAPEX)',
      'Software Licensing Fee',
      'Maintenance & Support',
      'Partner Staff Training',
      'In-store Marketing Materials'
    ]
  }
}

export const benefitsData = {
  title: 'SugarStack',
  titleAccent: 'Benefits',
  subtitle: 'Creating value for customers, staff, and the partner business',
  categories: [
    {
      title: 'For Customers',
      icon: 'mdi-account-heart',
      benefits: [
        'Design cakes anytime during store hours',
        'Avoid long lines at the counter',
        'See exactly what you\'re getting',
        'Transparent, consistent pricing',
        'Digital record of your design for re-ordering'
      ]
    },
    {
      title: 'For Bakery Staff',
      icon: 'mdi-account-tie',
      benefits: [
        'Reduced pressure during peak hours',
        'Clear, digitally-transmitted order specs',
        'More time to focus on cake preparation',
        'Fewer misunderstandings and order errors',
        'Built-in tool for suggesting upgrades'
      ]
    },
    {
      title: 'For the Business',
      icon: 'mdi-chart-bar',
      benefits: [
        'Increases average order value (+35% projected)',
        'Optimizes labor allocation',
        'Collects valuable data on customer trends',
        'Provides a modern, competitive advantage',
        'Easily scalable to multiple locations'
      ]
    }
  ]
}

export const ctaData = {
  title: 'Experience SugarStack',
  titleAccent: 'Today',
  subtitle: `Visit our partner location at ${partnerName} in ${partnerLocation}`,
  storeInfo: [
    { icon: 'mdi-map-marker', title: 'Address', description: `${partnerName}, ${partnerLocation}` },
    { icon: 'mdi-clock-outline', title: 'Store Hours', description: 'Monday - Sunday: 8:00 AM - 9:00 PM' },
    { icon: 'mdi-phone', title: 'Contact (Store)', description: '(043) 123-4567' },
    { icon: 'mdi-email', title: 'Email (Inquiries)', description: 'support@sugarstack.ph' }
  ],
  buttons: [
    { text: 'Get Directions', variant: 'primary', icon: 'mdi-directions' },
    { text: 'Learn More', variant: 'outline', icon: 'mdi-information' } // Changed from 'Call Now'
  ],
  socialProof: {
    rating: 4.8,
    reviewCount: 500,
    reviewText: '"The SugarStack kiosk made designing my daughter\'s birthday cake so easy! No more guessing how it will look, and the process was so fast."',
    reviewAuthor: 'Maria S., Calapan City'
  }
}

export const footerData = {
  about: {
    title: 'About SugarStack',
    description: `SugarStack is a smart kiosk solution powering the next generation of cake customization. In partnership with ${partnerName}, we are bringing an innovative, efficient, and delightful cake-buying experience to ${partnerLocation}.`
  },
  quickLinks: [
    { text: 'Home', link: '/', section: 'home' },
    { text: 'About SugarStack', link: '/about', section: 'about' },
    { text: 'Features', link: '/features', section: 'features' },
    { text: 'How It Works', link: '/how-it-works', section: 'how-it-works' },
    { text: 'Business Model', link: '/bmc', section: 'bmc' },
    { text: 'Visit Our Partner', link: '/visit', section: 'visit' }
  ],
  contactInfo: [
    { icon: 'mdi-map-marker', text: `${partnerName}, ${partnerLocation}` },
    { icon: 'mdi-phone', text: '(043) 123-4567' },
    { icon: 'mdi-email', text: 'support@sugarstack.ph' },
    { icon: 'mdi-clock', text: '8:00 AM - 9:00 PM Daily' }
  ],
  socialLinks: [
    { icon: 'mdi-facebook', link: '#' },
    { icon: 'mdi-instagram', link: '#' },
    { icon: 'mdi-twitter', link: '#' },
    { icon: 'mdi-youtube', link: '#' }
  ],
  copyright: `© 2026 SugarStack. In partnership with ${partnerName}. All rights reserved.`
}