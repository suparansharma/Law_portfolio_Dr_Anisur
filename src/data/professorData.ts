export interface Publication {
  id: string;
  title: string;
  journal: string;
  details: string;
  year: string;
  category: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location?: string;
  achievement?: string;
}

export interface LeadershipRole {
  title: string;
  organization: string;
  description: string;
  category: "Governance" | "Legal Practice" | "Community & Youth" | "Campus Life";
}

export interface TrainingCourse {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const PROFESSOR_DATA = {
  name: "Dr. Anisur Rahman",
  banglaName: "প্রফেসর ড. মো. আনিসুর রহমান",
  title: "Professor of Law",
  institution: "Department of Law, Islamic University, Kushtia",
  email: "anisurlawiu2016@gmail.com",
  phone: "+880 1727-199182",
  location: "Kushtia-7003, Bangladesh",
  status: "Available for Consultations, Guest Lectures & Legal Research",
  
  aboutSummary: 
    "An accomplished and highly dedicated Professor of Law at Islamic University, Kushtia, Bangladesh, holding a Ph.D. in Law with extensive experience in legal education, academic research, curriculum development, and university administration. A committed defender of justice, the rule of law, and fundamental constitutional liberties.",

  aboutFull: [
    "Professor Dr. Anisur Rahman is a distinguished academician, legal researcher, and mentor with over 16 years of profound teaching and administrative leadership in higher legal education in Bangladesh. Having earned his Ph.D. in Law from Islamic University, Kushtia, he has dedicated his career to cultivating critical legal thinking, ethics, and judicial scholarship among students and future jurists.",
    "Throughout his distinguished career, he has rendered high-level service in university governance as a Syndicate Member (President's Nominee), Law Administrator, and Assistant Proctor. Beyond the academic podium, he is an enrolled Advocate at the Kushtia Bar Association, bridging statutory jurisprudence with real-world advocacy.",
    "His scholarly publications tackle crucial socio-legal dilemmas including human rights, constitutional scrutiny, public interest litigation (PIL), environmental conservation in the Gorai basin, food adulteration laws, and International Humanitarian Law (IHL). He remains deeply committed to advancing justice and societal welfare through evidence-based legal research and public discourse."
  ],

  stats: [
    { label: "Years of Academic Service", value: "16+", suffix: "Years" },
    { label: "Peer-Reviewed Publications", value: "10+", suffix: "Papers" },
    { label: "Graduated LL.B / LL.M Scholars", value: "2500+", suffix: "Students" },
    { label: "Key Institutional Leadership", value: "08+", suffix: "Offices" },
  ],

  researchAreas: [
    {
      title: "Human Rights & IHL",
      description: "Critical analysis of International Humanitarian Law, refugee protection, capital punishment reforms, and universal human rights compliance in South Asia.",
      icon: "ShieldAlert"
    },
    {
      title: "Constitutional Law & Judicial Review",
      description: "Constitutional amendment scrutinies, separation of powers, restraint of legislative irregularities, and constitutional supremacy.",
      icon: "Scale"
    },
    {
      title: "Environmental Law & Conservation",
      description: "Eco-jurisprudence in riverine regions, legal mechanisms for Gorai basin water preservation, and sustainable development frameworks.",
      icon: "Leaf"
    },
    {
      title: "Public Interest Litigation (PIL)",
      description: "Evolution, enforceability, and judicial activism empowering marginalized citizens through PIL mechanisms in Bangladesh courts.",
      icon: "Users"
    },
    {
      title: "Consumer Rights & Food Safety",
      description: "Statutory protections against food adulteration, consumer court accessibility, and policy reform for citizen health security.",
      icon: "ShoppingBag"
    },
    {
      title: "Islamic Jurisprudence & Social Justice",
      description: "Comparative studies on modern social security models, Zaqat frameworks, and ethical dimensions of socio-economic justice.",
      icon: "BookOpen"
    }
  ],

  experiences: [
    {
      role: "Professor",
      institution: "Department of Law, Islamic University",
      period: "10/2022 – Present",
      location: "Kushtia, Bangladesh",
      highlights: [
        "Spearheading advanced legal education, curriculum design, and postgraduate research supervision within the Department of Law.",
        "Actively participating in high-level institutional governance, policy formulation, and administrative decision-making as part of university leadership.",
        "Conducting high-impact lectures, guiding doctoral (Ph.D.) and Master's level research scholars, and evaluating complex legal dissertations.",
        "Collaborating with national and international legal bodies to organize academic seminars, workshops, and legal aid programs."
      ]
    },
    {
      role: "Associate Professor",
      institution: "Department of Law, Islamic University",
      period: "10/2019 – 10/2022",
      location: "Kushtia, Bangladesh",
      highlights: [
        "Delivered specialized lectures on constitutional law, jurisprudence, and human rights to undergraduate and postgraduate students.",
        "Supervised undergraduate research projects and contributed to departmental syllabus modernization and outcome-based education standards.",
        "Served in various administrative and disciplinary committees, ensuring smooth academic operations and student welfare.",
        "Authored peer-reviewed research papers in reputed academic journals focusing on contemporary legal and socio-political issues."
      ]
    },
    {
      role: "Assistant Professor",
      institution: "Department of Law, Islamic University",
      period: "2013 – 2019",
      location: "Kushtia, Bangladesh",
      highlights: [
        "Designed and executed comprehensive course outlines, lesson plans, and interactive tutorial sessions for law students.",
        "Assessed student performance through rigorous evaluations, continuous feedback, and mentorship programs.",
        "Guided students in moot court competitions, legal debating societies, and community legal awareness campaigns.",
        "Actively participated in faculty meetings, accreditation processes, and departmental development initiatives."
      ]
    },
    {
      role: "Lecturer",
      institution: "Department of Law, Islamic University",
      period: "09/2010 – 09/2013",
      location: "Kushtia, Bangladesh",
      highlights: [
        "Imparted foundational legal education, focusing on core legal statutes, civil/criminal procedures, and legal writing.",
        "Assisted senior faculty members in conducting examinations, lab sessions, and research documentation.",
        "Cultivated an engaging and supportive learning environment, providing academic counseling to emerging scholars."
      ]
    },
    {
      role: "Lecturer in Law",
      institution: "America Bangladesh University (AMBAN)",
      period: "11/2007 – 11/2008",
      location: "Khulna, Bangladesh",
      highlights: [
        "Delivered introductory law lectures and facilitated interactive classroom discussions to build strong legal reasoning skills.",
        "Managed student attendance, continuous assessment records, and semester evaluations efficiently.",
        "Contributed to campus-level academic coordination and student support services."
      ]
    }
  ],

  publications: [
    {
      id: "pub-1",
      title: "Constitutional Scrutiny to Restrain Legislative Irregularities: A Study on Constitutional Amendment Cases of Bangladesh",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 12, No. 1, 2018. Focuses on judicial review and constitutional scrutiny regarding landmark amendment cases in Bangladesh.",
      year: "2018",
      category: "Constitutional Law",
      featured: true
    },
    {
      id: "pub-2",
      title: "Prejudiced State Policy: Glimpses of Rohingya Crises",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 12, No. 2, 2018. Investigates state policies and international legal dimensions surrounding the Rohingya refugee crisis.",
      year: "2018",
      category: "Human Rights",
      featured: true
    },
    {
      id: "pub-3",
      title: "Political Dilemmas and Local Government in Bangladesh: A Critical Observation",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 12, No. 2, 2018. Offers a critical examination of the political complexities, administrative structures, and local government frameworks.",
      year: "2018",
      category: "General"
    },
    {
      id: "pub-4",
      title: "Possibility and Fact of Implementing International Humanitarian Law in Bangladesh",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 10, No. 2, 2017. Evaluates the practical possibilities and realities of implementing International Humanitarian Law frameworks in Bangladesh.",
      year: "2017",
      category: "Human Rights",
      featured: true
    },
    {
      id: "pub-5",
      title: "Problems & Prospects of Public Interest Litigation in Bangladesh: An Overview",
      journal: "The Journal of Faculty of Law & Shariah",
      details: "Vol. 10, No. 1, 2016. Analyzes the historical evolution, current challenges, and future prospects of Public Interest Litigation (PIL) as a tool for justice.",
      year: "2016",
      category: "Constitutional Law",
      featured: true
    },
    {
      id: "pub-6",
      title: "Food Adulteration, Consumer Rights and the Role of Laws in Bangladesh",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 10, No. 1, 2016. Examines the prevalence of food adulteration, the protection of consumer rights, and the enforcement mechanisms of relevant laws.",
      year: "2016",
      category: "Consumer & Social",
      featured: true
    },
    {
      id: "pub-7",
      title: "Water and Environment in Gorai Basin Area",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 10, No. 1, 2016. Discusses water management, environmental challenges, and legal implications within the Gorai Basin area.",
      year: "2016",
      category: "Environmental Law"
    },
    {
      id: "pub-8",
      title: "Legal System and Conservation of Environment in Bangladesh: An Overview",
      journal: "Journal of Islamic Education and Research",
      details: "Vol. 8, No. 2, 2012. Provides a comprehensive review of the existing legal framework and environmental conservation practices in Bangladesh.",
      year: "2012",
      category: "Environmental Law"
    },
    {
      id: "pub-9",
      title: "Capital Punishment: Human Rights and Legal Approach",
      journal: "Journal of Islamic Education and Research",
      details: "Vol. 6, No. 2, December 2010. Explores the legal framework, human rights perspectives, and judicial approaches regarding capital punishment.",
      year: "2010",
      category: "Human Rights"
    },
    {
      id: "pub-10",
      title: "Modern Social Security Actions and Zaqat: A Comparative Analysis",
      journal: "The Islamic University Studies, Faculty of Law & Shariah",
      details: "Vol. 7, No. 2, 2009-10 (Published in Bangla). Analyzes modern social security mechanisms in comparison with the principles of Zaqat.",
      year: "2010",
      category: "Consumer & Social"
    }
  ],

  education: [
    {
      degree: "Ph.D. in Law",
      institution: "Islamic University, Kushtia, Bangladesh",
      year: "2019",
      achievement: "Doctoral Dissertation on Advanced Legal Jurisprudence"
    },
    {
      degree: "LL.M. (Master of Laws)",
      institution: "Islamic University, Kushtia, Bangladesh",
      year: "2005",
      achievement: "First Class First Position (Academic Distinction)"
    },
    {
      degree: "LL.B. (Honours in Law)",
      institution: "Islamic University, Kushtia, Bangladesh",
      year: "2001 – 2004",
      achievement: "Second Class First Position"
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Khater Ali Degree College",
      year: "1999 – 2000",
      achievement: "First Division"
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Horinarayan Pur High School",
      year: "1994 – 1998",
      achievement: "First Division"
    }
  ],

  leadershipRoles: [
    {
      title: "Ex-Syndicate Member (President Nominee)",
      organization: "Islamic University, Kushtia",
      description: "Contributed to the highest executive policy-making and governing body of the university as the honourable President's nominee.",
      category: "Governance"
    },
    {
      title: "Ex-Law Administrator",
      organization: "Islamic University, Kushtia",
      description: "Supervised institutional legal disputes, contractual oversight, statutory interpretations, and formal university compliance.",
      category: "Governance"
    },
    {
      title: "Ex-Assistant Proctor",
      organization: "Islamic University, Kushtia",
      description: "Maintained campus discipline, student peace, examination integrity, and crisis resolution across university grounds.",
      category: "Campus Life"
    },
    {
      title: "Advocate",
      organization: "Kushtia Bar Association",
      description: "Enrolled advocate providing courtroom advocacy, legal counsel, and judicial advice in civil and criminal jurisprudence.",
      category: "Legal Practice"
    },
    {
      title: "House Tutor",
      organization: "Sheikh Rasel Hall, Islamic University",
      description: "Supervised residential hall administration, boarder welfare, and student communal development.",
      category: "Campus Life"
    },
    {
      title: "Member",
      organization: "Islamic University Law Alumni Association",
      description: "Active member fostering professional synergy, alumni mentorship, and legal research collaboration.",
      category: "Community & Youth"
    },
    {
      title: "Adviser",
      organization: "Tarunno (Non-political Voluntary Youth Organization)",
      description: "Providing strategic counseling and mentorship for youth empowerment, social justice, and humanitarian outreach.",
      category: "Community & Youth"
    },
    {
      title: "Adviser",
      organization: "Youth Consumer, Islamic University Chapter",
      description: "Empowering students through consumer rights literacy, marketplace accountability, and advocacy workshops.",
      category: "Community & Youth"
    }
  ],

  trainings: [
    {
      title: "Curriculum Development (HEQEP-UGC Sub-project: 3337)",
      organization: "Graduate Training Institute, Bangladesh Agricultural University, Mymensingh",
      period: "08/2015",
      description: "Intensive training on modern outcome-based curriculum design, modern assessment metrics, and university pedagogy standards under UGC-HEQEP."
    },
    {
      title: "Islamic Law and Humanitarian Law Integration",
      organization: "International Committee of the Red Cross (ICRC), Bangladesh",
      period: "Certificate Course",
      description: "Specialized training on international humanitarian standards, armed conflict ethics, and the convergence with Islamic legal jurisprudence."
    },
    {
      title: "International Humanitarian Law (IHL) Seminar",
      organization: "International Committee of the Red Cross (ICRC), Bangladesh",
      period: "07/2012",
      description: "High-level professional seminar on Geneva conventions, protection of non-combatants, and human rights in conflict scenarios."
    },
    {
      title: "Computer Applications in Legal Research",
      organization: "Department of Law, IU under HEQEP project of UGC",
      period: "11/2014",
      description: "Advanced ICT, legal informatics, database management, and digital repository curation for legal scholars."
    },
    {
      title: "Social Justice & Women's Legal Rights",
      organization: "The Asia Foundation",
      period: "04/2011",
      description: "Comprehensive symposium discussing gender equity, legal remedies for domestic abuse, and socio-legal frameworks for women's empowerment."
    }
  ],

  skillsCategorized: [
    {
      category: "Academic & Pedagogy",
      items: ["Curriculum & Syllabus Modernization", "Doctoral & Master's Thesis Supervision", "Outcome-Based Education (OBE)", "Moot Court & Debate Mentorship", "Student Legal Aid Counseling"]
    },
    {
      category: "Legal & Jurisprudence",
      items: ["Constitutional Law & Judicial Review", "Public Interest Litigation (PIL)", "International Humanitarian Law (IHL)", "Statutory Drafting & Legal Compliance", "Courtroom Advocacy & Trial Practice"]
    },
    {
      category: "Governance & Administration",
      items: ["University Syndicate Governance", "Institutional Law Administration", "Campus Proctorial & Security Oversight", "Committee Chairmanship & Policy Formulation", "Mediation & Dispute Settlement"]
    },
    {
      category: "Linguistic & Research",
      items: ["Bangla (Native - Elite Oratory & Literary Command)", "English (Professional Academic & Legal Drafting)", "Empirical Legal Research Methodology", "Archival & Case Precedent Analysis"]
    }
  ],

  legalQuotes: [
    {
      quote: "The rule of law is the bedrock of democratic society and the ultimate shield of human dignity.",
      author: "Prof. Dr. Anisur Rahman"
    },
    {
      quote: "Justice delayed is justice denied; justice without empathy is an empty decree.",
      author: "Legal Maxim"
    },
    {
      quote: "Law should not merely reflect societal power; it must actively protect the voiceless and rectify injustices.",
      author: "Jurisprudential Reflection"
    }
  ]
};
