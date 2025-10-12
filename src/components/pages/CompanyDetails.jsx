import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import building from '../../assets/building.png';
import documentsIllustration from '../../assets/OBJECTS.png';

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
        content: 'Starting a business in India often involves choosing a private limited company as the preferred business structure. This option provides limited liability protection for shareholders while maintaining specific ownership restrictions. Unlike an LLP where partners manage the business, a private limited company separates the roles of directors and shareholders.\n\nAt Oneasy, we offer cost-effective solutions for Private Limited Company registration, managing all legal formalities, and ensuring compliance with the Ministry of Corporate Affairs (MCA) regulations.'
    },
    {
      id: 'what-is',
      title: 'What is a Private Limited Company?',
      content: {
        introduction: 'A Private Limited Company in India is a privately held entity with limited liability. It is one of the most popular business structures due to the following advantages:',
        points: [
          { title: 'Limited Liability Protection', description: 'Shareholders are only liable for the amount of their shareholding, safeguarding personal assets from company liabilities' },
          { title: 'Separate Legal Entity', description: 'The company is considered a distinct legal entity, allowing it to own property, enter contracts, and initiate legal actions under its name' },
          { title: 'Minimum Shareholders', description: 'A minimum of two shareholders is required, with a maximum of 200' },
          { title: 'Minimum Directors', description: 'At least two directors are needed, with one being a resident Indian' },
          { title: 'Minimum Capital', description: 'The company must have a minimum paid-up capital of ₹1 lakh' },
          { title: 'Company Name', description: 'The name must end with "Private Limited."' },
          { title: 'Restricted Share Transfer', description: 'Shares can only be transferred with approval from the Board of Directors' },
          { title: 'No Public Invitation', description: 'The company cannot invite the public to subscribe to its shares or debentures' },
          { title: 'Compliance Requirements', description: 'Proper financial records must be maintained, annual general meetings must be held, and annual returns must be filed with the ROC' }
        ]
      }
    },
    {
      id: 'types',
      title: 'Types of Private Limited Companies',
      content: [
        { title: 'Company Limited by Shares', description: 'Shareholders\' liability is limited to the amount mentioned in the Memorandum of Association' },
        { title: 'Company Limited by Guarantee', description: 'Member liability is based on the guarantee specified in the Memorandum of Association' },
        { title: 'Unlimited Companies', description: 'Members have unlimited personal liability for the company\'s debts' }
      ]
    },
    {
      id: 'advantages',
      title: 'Advantages of a Private Limited Company',
      content: [
        { title: 'Limited Liability', description: 'Shareholders\' personal assets are protected from the company\'s financial liabilities' },
        { title: 'Distinct Legal Identity', description: 'The company has its own legal identity, separate from its owners' },
        { title: 'Continuity', description: 'The company remains operational regardless of changes in shareholders or directors' },
        { title: 'Ease of Fundraising', description: 'Private limited companies can raise capital through shares from investors or venture capitalists' },
        { title: 'Tax Benefits', description: 'Certain tax benefits and exemptions are available' },
        { title: 'Credibility', description: 'The "Private Limited" title adds credibility to the business' }
      ]
    },
    {
      id: 'disadvantages',
      title: 'Disadvantages of a Private Limited Company',
      content: [
        { title: 'Compliance Burden', description: 'Regulatory filings and audits can be time-consuming' },
        { title: 'Complex Setup', description: 'Registration and management costs are higher than simpler business structures' },
        { title: 'Restricted Share Transfer', description: 'Shares can\'t be easily transferred without approval' },
        { title: 'Public Disclosure', description: 'Financial information is publicly available' },
        { title: 'Complex Exit', description: 'Exiting the company can be complicated compared to other business structures' }
      ]
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
                  className="relative rounded-3xl p-6 transition-all duration-300 cursor-pointer group bg-white hover:bg-[#01334C] shadow-sm flex flex-col h-full"
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
                  <ul className="space-y-4 mb-8 flex-1">
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
                    className="w-full py-3 rounded-lg font-medium transition-all duration-300 bg-[#01334C] text-white group-hover:bg-white group-hover:text-[#01334C] mt-auto"
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
            <h2 className="text-2xl font-semibold mb-8" style={{ color: '#00486D' }}>Steps for Company Registration in India</h2>
            
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
                    {index === 0 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === 4 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === 5 && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
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
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#00486D' }}>Certificate of Incorporation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once the documents are verified, the MCA will issue the Certificate of Incorporation (COI) along with the Company Identification Number (CIN), Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN).
              </p>
            </div>

            {/* Post-Registration Compliance Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#00486D' }}>Post-Registration Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                After the company is registered, it's crucial to maintain compliance with annual filings and regulatory requirements to ensure smooth operations.
              </p>
            </div>

            {/* Register Your Company with Oneasy Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#00486D' }}>Register Your Company with Oneasy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At Oneasy, we provide expert support for Private Limited Company registration, ensuring a smooth and compliant process. We handle everything from document preparation to name reservation and compliance management, allowing you to focus on growing your business.
              </p>
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#00486D' }}>Documents Required</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8">
              <div className="flex-1 space-y-4 mb-8 md:mb-0">
                {[
                  'PAN Card of all Directors',
                  'Aadhaar Card of all Directors',
                  'Passport (only for Foreign Nationals)',
                  'Bank Statement of all Directors (Recent)',
                  'Photograph of all the Directors',
                  'Rental Agreement and NOC (Company)',
                  'Latest utility bill of the Company (Electricity Bill)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#01334C] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-base">{doc}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img src={documentsIllustration} alt="Documents Illustration" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        );

      case 'prerequisites':
        return (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#00486D' }}>Pre-requisites</h2>
            <div className="space-y-4">
              {prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#00486D] text-white rounded-full flex items-center justify-center mr-4 mt-0.5 text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-900">{prerequisite}</p>
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
                    <span className="font-medium" style={{ color: '#00486D' }}>{section.title}</span>
                    <span className={`transform transition-transform duration-200 ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  
                  {expandedSection === section.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      {section.content.introduction ? (
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">{section.content.introduction}</p>
                          <div className="space-y-4">
                            {section.content.points.map((item, index) => (
                              <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-[#00486D] text-white rounded-full flex items-center justify-center mr-4 mt-0.5 text-xs font-bold">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <span className="font-medium text-gray-900">{item.title}:</span>
                                  <span className="text-gray-900 ml-1">{item.description}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : Array.isArray(section.content) ? (
                        <div className="space-y-4">
                          {section.content.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <div className="flex-shrink-0 w-6 h-6 bg-[#00486D] text-white rounded-full flex items-center justify-center mr-4 mt-0.5 text-xs font-bold">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <span className="font-medium text-gray-900">{item.title}:</span>
                                <span className="text-gray-900 ml-1">{item.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {Array.isArray(section.content) ? (
                            section.content.map((paragraph, index) => (
                              <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
                            ))
                          ) : (
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#00486D' }}>FAQs</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'What is the minimum number of directors required to register a Private Limited Company?',
                  answer: 'A minimum of two directors is required, and at least one must be a resident Indian citizen.'
                },
                {
                  question: 'What is the maximum number of shareholders allowed in a Private Limited Company?',
                  answer: 'A Private Limited Company can have a maximum of 200 shareholders.'
                },
                {
                  question: 'Is there a minimum capital requirement for incorporating a Private Limited Company?',
                  answer: 'There is no minimum paid-up capital requirement, but the authorized capital must be at least Rs. 1 lakh.'
                },
                {
                  question: 'Can a foreign national be a director in a Private Limited Company in India?',
                  answer: 'Yes, a foreign national can be a director, but at least one director must be an Indian resident.'
                },
                {
                  question: 'How long does it take to register a Private Limited Company in India?',
                  answer: 'The registration process typically takes 10-15 business days, depending on the processing time of the MCA.'
                },
                {
                  question: 'What documents are needed for the incorporation of a Private Limited Company?',
                  answer: 'The required documents include ID proof (PAN, Aadhaar), address proof (bank statement, utility bill), and office address proof (rental agreement or sale deed, NOC from property owner).'
                },
                {
                  question: 'What are the compliance requirements after incorporation?',
                  answer: 'Post-registration, companies must comply with annual filings, maintain financial records, and conduct board and general meetings regularly.'
                },
                {
                  question: 'Can a Private Limited Company be converted into another business structure?',
                  answer: 'Yes, a Private Limited Company can be converted into an LLP, public company, or other business structures, subject to regulatory approvals.'
                },
                {
                  question: 'What is the role of a Director Identification Number (DIN)?',
                  answer: 'A DIN is a unique identification number required for every director, issued by the MCA, and is mandatory for company incorporation.'
                },
                {
                  question: 'Are there any restrictions on transferring shares in a Private Limited Company?',
                  answer: 'Yes, shares in a Private Limited Company can only be transferred with the approval of the Board of Directors as per the company\'s Articles of Association.'
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start">
                    <span className="font-bold text-gray-900 mr-2">{index + 1}.</span>
                    <p className="font-bold text-gray-900">{faq.question}</p>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
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
            {visibleTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-[#00486D] text-[#00486D]'
                    : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
}

export default CompanyDetails;
