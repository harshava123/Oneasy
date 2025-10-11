import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import building from '../../assets/building.png';

function CompanyDetails() {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState('packages');
  const [expandedSection, setExpandedSection] = useState('');
  const [hidePackagesTab, setHidePackagesTab] = useState(false);

  const aboutSections = [
    {
      id: 'key-features',
      title: 'Key Features and Benefits of a Private Limited Company',
      content: [
        { title: 'Limited Liability', description: 'Shareholders are only liable for the company\'s debts to the extent of their shareholding.' },
        { title: 'Separate Legal Entity', description: 'The company has a distinct identity from its shareholders and directors.' },
        { title: 'Perpetual Succession', description: 'The company\'s existence remains unaffected by changes in ownership or the death of shareholders.' },
        { title: 'Transfer of Shares', description: 'Shares of a Private Limited Company can be easily transferred between individuals.' },
        { title: 'Compliance and Transparency', description: 'It operates under strict regulatory oversight, enhancing transparency and credibility.' },
        { title: 'Ease of Raising Funds', description: 'Private Limited Companies can attract investors and raise funds more easily compared to other business structures.' },
        { title: 'Tax Advantages', description: 'Various tax benefits are available, making it a tax-efficient business model.' },
        { title: 'Ownership Flexibility', description: 'Both individuals and entities can become shareholders in a Private Limited Company.' },
        { title: 'Employee Benefits', description: 'The structure enables ESOPs (Employee Stock Ownership Plans), attracting top talent.' },
        { title: 'Growth Potential', description: 'Private Limited Companies are ideal for scaling businesses and attracting venture capital or private equity.' }
      ]
    },
    {
      id: 'registration',
      title: 'Private Limited Company Registration in India',
      content: 'Starting a business in India often involves choosing a private limited company as the preferred business structure. This option provides limited liability protection for shareholders while maintaining specific ownership restrictions. Unlike an LLP where partners manage the business, a private limited company separates the roles of directors and shareholders.'
    },
    {
      id: 'what-is',
      title: 'What is a Private Limited Company?',
      content: 'A Private Limited Company is one of the most popular and trusted business structures in India, known for providing limited liability protection to its shareholders. It requires a minimum of two shareholders and two directors and allows easy ownership transferability while offering credibility in the business world. This structure is ideal for small to medium-sized businesses aiming for long-term growth.'
    },
    {
      id: 'types',
      title: 'Types of Private Limited Companies',
      content: 'Different types of private limited companies cater to various business needs and structures.'
    },
    {
      id: 'advantages',
      title: 'Advantages of a Private Limited Company',
      content: 'Multiple benefits including limited liability, professional image, and easier access to funding.'
    },
    {
      id: 'disadvantages',
      title: 'Disadvantages of a Private Limited Company',
      content: 'Considerations including compliance requirements and initial setup costs.'
    }
  ];

  const tabs = [
    { id: 'packages', label: 'Packages' },
    { id: 'process', label: 'Process' },
    { id: 'documents', label: 'Documents' },
    { id: 'prerequisites', label: 'Pre requisites' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
  ];

  // Filter out packages tab if it should be hidden
  const visibleTabs = hidePackagesTab ? tabs.filter(tab => tab.id !== 'packages') : tabs;

const packages = [
  {
    name: 'Starter',
    price: '4,999',
    period: 'Month',
    description: 'For solo entrepreneurs',
    icon: '★',
    features: [
      '2% 3rd-party payment providers',
      'Inventory tracking (7 markets)',
      '24/7 chat support',
      'Standard global selling (7 markets)',
      'Limited staff accounts'
    ],
    color: 'red'
  },
  {
    name: 'Growth',
    price: '9,999',
    period: 'Month',
    description: 'As your business scales',
    icon: '✢',
    features: [
      '1.9% 3rd-party payment providers',
      'Inventory tracking (15 markets)',
      '24/7 chat & phone support',
      'Advanced global selling (15 markets)',
      'Up to 15 staff accounts'
    ],
    color: 'red'
  },
  {
    name: 'Pro',
    price: '15,999',
    period: 'Month',
    description: 'For more complex businesses',
    icon: '✤',
    features: [
      'Competitive rates for high-volume merchants',
      'Custom reports and analytics',
      'Priority 24/7 phone support',
      'Unlimited global selling (20 markets)',
      'Unlimited staff accounts'
    ],
    isHighlighted: true
  }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Obtain a Digital Signature Certificate (DSC)',
      description: 'For each director and shareholder'
    },
    {
      step: 2,
      title: 'Obtain a Director Identification Number (DIN)',
      description: ''
    },
    {
      step: 3,
      title: 'Reserve the company name',
      description: 'By filing the SPICe+ Part A form'
    },
    {
      step: 4,
      title: 'Submit company details',
      description: 'Via the SPICe+ Part B form, including capital structure, registered office address, and director information'
    },
    {
      step: 5,
      title: 'Draft and submit the MOA and AOA',
      description: 'Memorandum of Association (MOA) and Articles of Association (AOA)'
    },
    {
      step: 6,
      title: 'File the AGILE-PRO-S form',
      description: 'To register for GST, EPFO, ESIC, and other necessary licenses'
    }
  ];

  const prerequisites = [
    'A minimum of two Directors is required, with at least one being a Resident Indian citizen.',
    'A maximum of 15 Directors is permitted.',
    'A minimum of 2 members and a maximum of 200 shareholders (members) are allowed.',
    'There is no minimum paid-up capital requirement, but the authorized capital must be at least Rs. 1 lakh.'
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'packages':
        return (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Choose your Package</h2>
            <p className="text-center text-gray-600 mb-8">
              Our carefully designed pricing plans take into consideration the needs of teams of various sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className="relative rounded-3xl p-6 transition-all duration-300 cursor-pointer group bg-white hover:bg-[#01334C] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-[#01334C] text-xl">
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-semibold text-gray-900 group-hover:text-white">₹{pkg.price}</span>
                    <div className="ml-2 flex flex-col">
                      <span className="text-sm text-gray-500 line-through group-hover:text-gray-400">₹{pkg.originalPrice}</span>
                      <span className="text-xs text-gray-500 group-hover:text-gray-300">/per month</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 group-hover:text-gray-300">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-[#01334C] group-hover:bg-white flex items-center justify-center">
                          <span className="text-white group-hover:text-[#01334C] text-[10px]">✓</span>
                        </div>
                        <span className="text-sm text-gray-500 group-hover:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                         <button 
                           onClick={() => {
                             setActiveTab('process');
                             setHidePackagesTab(true);
                             window.scrollTo({ top: 0, behavior: 'smooth' });
                           }}
                           className="w-full py-3 rounded-lg font-medium transition-all duration-300 bg-[#01334C] text-white group-hover:bg-white group-hover:text-[#01334C]"
                         >
                           Get Started
                         </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="mt-8 bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-8">Steps for Company Registration in India</h2>
            
            {/* Steps List */}
            <div className="space-y-6 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start relative">
                  {/* Vertical Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-gray-300"></div>
                  )}
                  
                  {/* Step Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-[#01334C] text-white rounded flex items-center justify-center mr-4 relative z-10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">
                      <span className="font-semibold">Step no {step.step}:</span> {step.title}
                      {step.description && (
                        <span className="text-gray-600"> {step.description}</span>
                      )}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificate of Incorporation Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certificate of Incorporation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once the documents are verified, the MCA will issue the Certificate of Incorporation (COI) along with the Company Identification Number (CIN), Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN).
              </p>
            </div>

            {/* Post-Registration Compliance Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Post-Registration Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                After the company is registered, it's crucial to maintain compliance with annual filings and regulatory requirements to ensure smooth operations.
              </p>
            </div>

            {/* Register Your Company with Oneasy Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Register Your Company with Oneasy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At Oneasy, we provide expert support for Private Limited Company registration, ensuring a smooth and compliant process. We handle everything from document preparation to name reservation and compliance management, allowing you to focus on growing your business.
              </p>
            </div>
          </div>
        );

      case 'prerequisites':
        return (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Pre-requisites</h2>
            <div className="space-y-4">
              {prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center mr-4 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{prerequisite}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="mt-8">
            <div className="rounded-lg p-8 mb-6 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #01334C, #00486D)' }}>
              <div className="relative z-10 max-w-[60%]">
                <h2 className="text-xl font-semibold text-white mb-4">About Private Limited Company</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A Private Limited Company is one of the most popular and trusted business structures in India, known for providing limited liability protection to its shareholders. It requires a minimum of two shareholders and two directors and allows easy ownership transferability while offering credibility in the business world. This structure is ideal for small to medium-sized businesses aiming for long-term growth.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-[45%] h-[110%]">
                <img 
                  src={building} 
                  alt="Building Illustration" 
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: 'brightness(1) contrast(1.1)',
                    mixBlendMode: 'soft-light'
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {aboutSections.map((section) => (
                <div key={section.id} className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">{section.title}</span>
                    <span className={`transform transition-transform duration-200 ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  
                  {expandedSection === section.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      {Array.isArray(section.content) ? (
                        <div className="space-y-4">
                          {section.content.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-slate-800 rounded-full"></div>
                              <div className="ml-4">
                                <h4 className="font-medium text-gray-900">{item.title}</h4>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">{section.content}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <nav className="-mb-px flex justify-between items-center px-6">
            <div className="flex space-x-12">
              {visibleTabs.slice(0, -1).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-slate-800 text-slate-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex">
              {visibleTabs.slice(-1).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-slate-800 text-slate-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
}

export default CompanyDetails;
