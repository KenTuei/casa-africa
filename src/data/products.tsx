import type { ReactNode } from 'react';
import {
    Activity,
    Search,
    Users,
    Wallet,
    Shirt,
    Car,
    Landmark,
    BotMessageSquare,
    ShieldCheck,
    Languages,
    MessageCircle,
    Megaphone,
    ShieldAlert,
    Building2,
    Hospital
} from 'lucide-react';

export interface Product {
    id: string;
    name: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    targetAudience?: string[];
    icon: ReactNode;
}

export const products: Product[] = [
    // --- Original 8 Products (from Concept Note) ---
    {
        id: 'immuno',
        name: 'Immunization Tracker',
        category: 'Healthcare',
        shortDescription: 'Digital health and immunization management platform.',
        fullDescription: 'A digital health and immunization management platform designed to support health facilities, NGOs, and governments in tracking immunization coverage, facility performance, and child health outcomes. The system enables data-driven decision-making and improved service delivery.',
        features: [
            'Track immunization coverage',
            'Monitor facility performance',
            'Child health outcome tracking',
            'Data-driven decision support'
        ],
        targetAudience: ['Health Facilities', 'NGOs', 'Governments'],
        icon: <Activity className="w-6 h-6" />,
    },
    {
        id: 'ai-disprover',
        name: 'AI Disprover',
        category: 'Productivity',
        shortDescription: 'Browser extension detecting AI-generated content.',
        fullDescription: 'A lightweight browser extension that detects, flags, and verifies AI-generated or manipulated content. The tool supports content authenticity, academic integrity, and trust in digital information, particularly for schools, institutions, and organizations.',
        features: [
            'Detect AI-generated content',
            'Flag manipulated media',
            'Verify content authenticity',
            'Browser extension integration'
        ],
        targetAudience: ['Schools', 'Institutions', 'Organizations'],
        icon: <Search className="w-6 h-6" />,
    },
    {
        id: 'seamless-hr',
        name: 'SeamlessHR',
        category: 'HR Management',
        shortDescription: 'Workforce management with records and payroll.',
        fullDescription: 'A workforce and human resource management system adapted for African SMEs and institutions. Features include employee records, payroll integration readiness, leave management, performance tracking, and compliance support.',
        features: [
            'Employee records management',
            'Payroll integration readiness',
            'Leave management',
            'Performance tracking',
            'Compliance support'
        ],
        targetAudience: ['SMEs', 'Institutions'],
        icon: <Users className="w-6 h-6" />,
    },
    {
        id: 'debt-collection',
        name: 'Debt Collection',
        category: 'Finance',
        shortDescription: 'Digital debt management for SACCOs and lenders.',
        fullDescription: 'A digital debt management and collection platform for SACCOs, lenders, and financial institutions. The system supports borrower tracking, automated reminders, reporting, and compliance workflows to improve recovery rates and operational efficiency.',
        features: [
            'Borrower tracking',
            'Automated reminders',
            'Reporting & Analytics',
            'Compliance workflows'
        ],
        targetAudience: ['SACCOs', 'Lenders', 'Financial Institutions'],
        icon: <Wallet className="w-6 h-6" />,
    },
    {
        id: 'robes',
        name: 'Robes',
        category: 'E-commerce',
        shortDescription: 'Smart fashion commerce with accurate sizing.',
        fullDescription: 'An e-commerce fashion platform that allows customers to shop using their exact body size. Robes leverages 3D modelling and customer photos to determine accurate sizing, reducing returns and improving the shopping experience.',
        features: [
            'Exact body sizing',
            '3D modelling',
            'Photo-based sizing',
            'Reduced return rates'
        ],
        targetAudience: ['Fashion Retailers', 'Apparel Buyers'],
        icon: <Shirt className="w-6 h-6" />,
    },
    {
        id: 'trot',
        name: 'Trot',
        category: 'Mobility',
        shortDescription: 'Car rental platform with image recognition.',
        fullDescription: 'A car rental management and customer-facing platform enhanced with image recognition. Trot supports vehicle condition checks, damage detection, booking management, and fraud reduction for car rental companies.',
        features: [
            'Vehicle condition checks',
            'AI damage detection',
            'Booking management',
            'Fraud reduction'
        ],
        targetAudience: ['Car Rental Companies'],
        icon: <Car className="w-6 h-6" />,
    },
    {
        id: 'blockchain-banking',
        name: 'Blockchain Banking',
        category: 'Fintech',
        shortDescription: 'Secure cross-branch banking with audit trails.',
        fullDescription: 'A blockchain-based MVP designed to support secure cross-branch banking operations. Enables branch staff to open accounts, reset PINs, replace cards, and update KYC information while maintaining an immutable audit trail on a permissioned blockchain.',
        features: [
            'Secure cross-branch operations',
            'Immutable audit trail',
            'Permissioned blockchain',
            'Real-time synchronization'
        ],
        targetAudience: ['Banks', 'Financial Institutions'],
        icon: <Landmark className="w-6 h-6" />,
    },
    {
        id: 'ai-chatbot',
        name: 'AI Chatbot',
        category: 'Customer Service',
        shortDescription: '24/7 AI-powered customer support.',
        fullDescription: 'An AI-powered, always-on chatbot that enables businesses to respond to customer inquiries 24/7 across websites, WhatsApp, and social platforms. Handles FAQs, lead qualification, bookings, and support automation.',
        features: [
            '24/7 Availability',
            'Multi-channel support (WhatsApp, Web)',
            'Lead qualification',
            'Automated booking'
        ],
        targetAudience: ['Businesses', 'Customer Support Teams'],
        icon: <BotMessageSquare className="w-6 h-6" />,
    },
    // --- New 5 Products (from Hackathon Report) ---
    {
        id: 'truthguard',
        name: 'TruthGuard',
        category: 'Media & AI',
        shortDescription: 'AI credibility analysis tool that scores text and screenshots for misinformation.',
        fullDescription: 'An AI-powered credibility and authenticity analysis platform that detects misinformation in text and screenshots. Uses OCR and NLP to analyze emotional triggers, exaggerated claims, and logical inconsistencies.',
        features: [
            'Credibility Score (0-100)',
            'Screenshot Analysis via OCR',
            'Manipulation Pattern Detection',
            'Analysis History Dashboard'
        ],
        targetAudience: ['General Public', 'Social Media Users'],
        icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
        id: 'commbridge-ai',
        name: 'CommBridge AI',
        category: 'Communication',
        shortDescription: 'Multilingual conversational AI with real-time translation.',
        fullDescription: 'An advanced communication platform leveraging AI and NLP to bridge language and cultural gaps. Features real-time translation, context understanding, summarization, and accessibility support (speech-to-text/text-to-speech).',
        features: [
            'Real-time translation',
            'Contextual understanding',
            'Auto-summarization',
            'Accessibility (speech-to-text)'
        ],
        targetAudience: ['Global Teams', 'Multilingual Support'],
        icon: <Languages className="w-6 h-6" />,
    },
    {
        id: 'insightke',
        name: 'InsightKE',
        category: 'Social CRM',
        shortDescription: 'AI-powered social CRM for Instagram, WhatsApp, and more.',
        fullDescription: 'An AI-powered Customer Relationship Management (CRM) system designed for social media. Centralizes interactions from Instagram, WhatsApp, Twitter/X, and Telegram. Features real-time monitoring, sentiment analysis, and intelligent automation.',
        features: [
            'Centralized Social Inbox',
            'Real-time engagement tools',
            'AI Sentiment Analysis',
            'Smart Scheduling'
        ],
        targetAudience: ['Businesses', 'Social Media Managers'],
        icon: <MessageCircle className="w-6 h-6" />,
    },
    {
        id: 'marketing-hack',
        name: 'Marketing Hack',
        category: 'Marketing',
        shortDescription: 'SME automation for WhatsApp & SMS campaigns.',
        fullDescription: 'A digital marketing platform and automation tool for SMEs. Enables personalized customer messages via WhatsApp and SMS using Twilio. Includes campaign templates, scheduling, and performance analytics.',
        features: [
            'WhatsApp & SMS Automation',
            'Campaign Templates',
            'Twilio Integration',
            'Performance Analytics'
        ],
        targetAudience: ['SMEs', 'Retailers', 'Salons'],
        icon: <Megaphone className="w-6 h-6" />,
    },
    {
        id: 'toxic-content-moderator',
        name: 'Toxic Content Moderator',
        category: 'Trust & Safety',
        shortDescription: 'AI moderation system with positive rewrite suggestions.',
        fullDescription: 'Production-ready AI system for automated detection and management of unsafe content. Uses a dual-model engine (BERT + LSTM) to classify toxic text and features a unique "Positive Rewrite" capability to suggest constructive alternatives.',
        features: [
            'Multi-label toxicity classification',
            'Dual-Model Engine (BERT + LSTM)',
            'Positive Rewrite suggestions',
            'Real-time action recommendations'
        ],
        targetAudience: ['Digital Platforms', 'Communities'],
        icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
        id: 'construction-manager-app',
        name: 'Construction Manager App',
        category: 'Construction',
        shortDescription: 'Smart project management solution for construction managers.',
        fullDescription: 'A smart project management solution designed for construction managers to streamline site operations, track project progress, manage budgets, and coordinate workers in real time. The app improves efficiency by centralizing task assignments, material tracking, reporting, and communication—reducing delays and enhancing accountability on construction projects.',
        features: [
            'Site operations management',
            'Real-time progress tracking',
            'Budget and material tracking',
            'Worker coordination and reporting'
        ],
        targetAudience: ['Construction Managers', 'Contractors', 'Project Teams'],
        icon: <Building2 className="w-6 h-6" />,
    },
    {
        id: 'hospital-stra-system',
        name: 'Hospital STRA System',
        category: 'Healthcare Operations',
        shortDescription: 'Digital hospital management system for patient flow and records.',
        fullDescription: 'A digital hospital management system built to simplify patient flow, record management, and operational tracking within healthcare facilities. The STRA system enhances efficiency by organizing patient data, supporting staff coordination, and improving service delivery through structured reporting and real-time information access.',
        features: [
            'Patient flow management',
            'Digital record organization',
            'Staff coordination support',
            'Structured reporting and tracking'
        ],
        targetAudience: ['Hospitals', 'Clinics', 'Healthcare Administrators'],
        icon: <Hospital className="w-6 h-6" />,
    },
    {
        id: 'afronative',
        name: 'Afronative',
        category: 'Education',
        shortDescription: 'Language learning application for African native languages.',
        fullDescription: 'A language learning application focused on African native languages. Afronative helps learners build vocabulary, practice pronunciation, and improve fluency through interactive and culturally relevant learning experiences.',
        features: [
            'African native language lessons',
            'Vocabulary and pronunciation practice',
            'Interactive learning paths',
            'Progress tracking'
        ],
        targetAudience: ['Students', 'Language Learners', 'Schools'],
        icon: <Languages className="w-6 h-6" />,
    },
];
