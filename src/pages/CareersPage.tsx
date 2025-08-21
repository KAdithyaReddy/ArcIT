import React from 'react';
import { Users, Heart, TrendingUp, Award, MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumBackground from '../components/PremiumBackground';
import InteractiveButton from '../components/InteractiveButton';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs to keep you and your family healthy."
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      description: "Continuous learning opportunities, certifications, conferences, and career advancement programs."
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries, performance bonuses, equity participation, and comprehensive benefits package."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, unlimited PTO, and family-friendly policies."
    }
  ];

 const openPositions = [
  {
    title: "Sr. GCP Data Engineer",
    department: "Data Engineering",
    location: "Sunnyvale, CA",
    type: "Full-time",
    client: "UST Walmart",
    experience: "10+ years (Data), 5+ years (GCP, PySpark, Scala)",
    description: "Design and develop big data applications using open source technologies and GCP. Mentor junior engineers, lead standups, design reviews, and act as the point of contact for assigned business domains.",
    mustHaveSkills: [
      "Data: 10+ Years",
      "GCP: 5+ Years",
      "PySpark: 5+ Years",
      "Scala: 5+ Years"
    ],
    responsibilities: [
      "Design and develop big data applications",
      "Work in offshore and managed outcome models",
      "Develop logical/physical data models",
      "Automate workflows with Airflow",
      "Build pipelines with Hive, Spark, Kafka",
      "Ongoing maintenance and on-call support",
      "Mentor junior engineers",
      "Lead standups, design reviews, backlog grooming"
    ],
    gcpExperience: [
      "4+ years recent GCP experience",
      "Experience building pipelines in GCP",
      "Dataproc, GCS & BigQuery"
    ],
    skillsRequired: [
      "10+ years data warehouse/product development",
      "6+ years Hadoop/Hive/Spark, Airflow",
      "5+ years schema modeling for lakes/RDBMS",
      "Python, Java, Scala",
      "Perl, Shell scripting",
      "Handling TB/PB scale data",
      "Agile/Scrum experience",
      "Excellent communication skills"
    ],
    preferred: [
      "Gitflow",
      "Atlassian (BitBucket, JIRA, Confluence)",
      "CI/CD tools (Bamboo, Jenkins, TFS)"
    ]
  },
  {
    title: "SailPoint IdentityIQ Upgrade & Optimization Specialist",
    department: "Security / Identity Management",
    location: "Richmond, VA (Local, In-person Interview)",
    type: "Full-time",
    client: "VDOT",
    experience: "10+ years",
    description: "Perform SailPoint IdentityIQ system upgrades, enhancements, bug fixes, workflow optimization, and compliance enablement.",
    responsibilities: [
      "Upgrade SailPoint 8.3 to 8.4/8.5",
      "Design new database for Access History",
      "Enable audit logging",
      "Fix bugs and inefficiencies",
      "Review and improve coding & business processes",
      "Customize notifications & workflows",
      "Manage supervisor and service accounts",
      "Develop multi-approver workflows",
      "Automate suspension/deprovisioning processes",
      "Document reports and develop analytics queries",
      "Review and enhance privileged account workflows"
    ],
    skillsRequired: [
      "SailPoint IdentityIQ implementation & upgrade",
      "Identity governance & workflow automation",
      "Database design for identity systems",
      "Audit logging and compliance reporting",
      "Beanshell/Java/XML configuration",
      "Integration with Active Directory",
      "Workflow and entitlement optimization",
      "Strong problem-solving & documentation skills"
    ],
    preferred: [
      "SailPoint certification",
      "Advanced analytics/reporting tools",
      "Experience in OT/regulatory environments"
    ]
  },
  {
    title: "Java Developer with AWS",
    department: "Engineering",
    location: "Richmond, VA (Onsite)",
    type: "Full-time (W2 Only)",
    experience: "6+ years",
    description: "Develop and deploy scalable Java applications using AWS services, Spring Boot, and Angular. Work on APIs, CI/CD pipelines, and best practices for cloud-based applications.",
    mustHaveSkills: [
      "Java 8 Streams API, Java 17",
      "Spring, Spring Boot",
      "AWS (ECS/EKS, EC2, RDS, S3, IAM, CloudWatch)",
      "JUnit testing",
      "Functional Interfaces",
      "CI/CD pipelines with Jenkins",
      "OAuth authentication"
    ],
    responsibilities: [
      "Develop APIs with Java and Spring Boot",
      "Deploy applications on AWS cloud",
      "Implement CI/CD pipelines and automation",
      "Work with Angular (RxJS, ngrx)",
      "Apply best practices for error handling and security"
    ],
    preferred: [
      "Angular experience (RxJS, ngrx)",
      "API collection development",
      "Experience with scalable cloud solutions"
    ]
  }
];


  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and provide resources to turn innovative ideas into reality."
    },
    {
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and foster an environment of mutual respect and support."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, certifications, and professional development."
    },
    {
      title: "Work-Life Integration",
      description: "We support flexible work arrangements that help our team members thrive both professionally and personally."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        <PremiumBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl p-4">
                  <img 
                    src="/image copy copy.png" 
                    alt="ARC IT LLC" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl opacity-20 blur-xl animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Join Our Team
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                Shape the Future of Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Be part of a dynamic team that's revolutionizing the IT industry. We're looking for passionate individuals who want to make a real impact.
            </p>
            <InteractiveButton size="large">
              <Briefcase className="w-5 h-5 mr-2" />
              View Open Positions
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose ARC IT LLC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our culture and drive our success as a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with us.
            </p>
          </div>

          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100 hover:border-cyan-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-800">{position.title}</h3>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Link to="/contact">
                      <InteractiveButton>
                        Apply Now
                      </InteractiveButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <p className="text-gray-600 mb-6">Don't see a position that fits? We're always looking for talented individuals.</p>
            <Link to="/contact">
              <InteractiveButton variant="outline" size="large">
                Send Us Your Resume
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Join a team that values innovation, collaboration, and personal growth. Let's build the future together.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                <Users className="w-5 h-5 mr-2" />
                Get in Touch
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;