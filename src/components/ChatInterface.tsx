import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ClaimAssessment } from './ClaimAssessment';
export const ChatInterface = () => {
  const [messages, setMessages] = useState([{
    type: 'user',
    content: 'Analyze this claim: "Boosts immune function and prevents common colds"'
  }, {
    type: 'bot',
    content: "Here's the claim assessment:",
    assessment: {
      claim: 'Boosts immune function and prevents common colds',
      riskLevel: 'HIGH',
      issues: 'Disease claim (prevents colds), absolute statement',
      evidenceStrength: 'Moderate',
      supportingStudies: 6,
      keyIngredients: ['Vitamin C', 'Zinc', 'Echinacea'],
      complianceStatus: 'Non-Compliant',
      regulatoryIssues: ["Disease claim ('prevents common colds')", 'Absolute statement implying guaranteed effect'],
      recommendedClaim: 'Supports immune system health*',
      enhancedClaim: 'Supports immune system function and overall wellness*',
      ingredients: [{
        name: 'Vitamin C',
        dosage: '500-1000mg',
        evidence: '12 studies showing immune support',
        role: 'Antioxidant support for immune cells',
        claims: ['Supports immune cell function', 'Contributes to antioxidant defense']
      }, {
        name: 'Zinc',
        dosage: '15-30mg',
        evidence: '8 studies on immune function',
        role: 'Essential for immune cell development',
        claims: ['Supports immune system function', 'Contributes to normal immune response']
      }, {
        name: 'Echinacea',
        dosage: '300-500mg',
        evidence: '6 studies on immune support',
        role: 'Supports immune response during seasonal challenges',
        claims: ['Supports upper respiratory health', "Supports the body's natural defenses"]
      }],
      citations: [{
        author: 'Hemilä H, Chalker E',
        year: '2013',
        title: 'Vitamin C for preventing and treating the common cold',
        journal: 'Cochrane Database of Systematic Reviews',
        url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000980.pub4/full',
        ingredient: 'Vitamin C'
      }, {
        author: 'Singh M, Das RR',
        year: '2015',
        title: 'Zinc for the common cold',
        journal: 'Cochrane Database of Systematic Reviews',
        url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001364.pub5/full',
        ingredient: 'Zinc'
      }, {
        author: 'Karsch-Völk M, Barrett B, Kiefer D, et al.',
        year: '2014',
        title: 'Echinacea for preventing and treating the common cold',
        journal: 'Cochrane Database of Systematic Reviews',
        url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000530.pub3/full',
        ingredient: 'Echinacea'
      }, {
        author: 'Ran L, Zhao W, Wang J, et al.',
        year: '2018',
        title: 'Extra Dose of Vitamin C Based on a Daily Supplementation Shortens the Common Cold: A Meta-Analysis of 9 Randomized Controlled Trials',
        journal: 'BioMed Research International',
        url: 'https://www.hindawi.com/journals/bmri/2018/1837634/',
        ingredient: 'Vitamin C'
      }, {
        author: 'Shaik-Dasthagirisaheb YB, Varvara G, et al.',
        year: '2013',
        title: 'Role of vitamins D, E and C in immunity and inflammation',
        journal: 'Journal of Biological Regulators and Homeostatic Agents',
        url: 'https://pubmed.ncbi.nlm.nih.gov/23830380/',
        ingredient: 'Vitamin C'
      }, {
        author: 'Maggini S, Wintergerst ES, Beveridge S, Hornig DH',
        year: '2007',
        title: 'Selected vitamins and trace elements support immune function by strengthening epithelial barriers and cellular and humoral immune responses',
        journal: 'British Journal of Nutrition',
        url: 'https://pubmed.ncbi.nlm.nih.gov/17922955/',
        ingredient: 'Zinc'
      }]
    }
  }]);
  const handleSendMessage = message => {
    // Add user message
    setMessages([...messages, {
      type: 'user',
      content: message
    }]);
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      if (message.toLowerCase().includes('claim')) {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "Here's the claim assessment:",
          assessment: {
            claim: message.includes(':') ? message.split(':')[1].trim() : 'Sample claim for analysis',
            riskLevel: 'MEDIUM',
            issues: 'Moderate evidence, potentially aggressive language',
            evidenceStrength: 'Moderate',
            supportingStudies: 4,
            keyIngredients: ['Ashwagandha', 'Rhodiola', 'L-Theanine'],
            complianceStatus: 'Needs Revision',
            regulatoryIssues: ['Language is somewhat aggressive', 'Missing required FDA disclaimer'],
            recommendedClaim: 'Helps support a healthy stress response*',
            enhancedClaim: "Supports the body's adaptation to stress and promotes calm focus*",
            ingredients: [{
              name: 'Ashwagandha',
              dosage: '300-600mg',
              evidence: '7 clinical studies',
              role: 'Adaptogen for stress response',
              claims: ['Supports healthy stress response', 'Helps maintain emotional wellbeing']
            }, {
              name: 'Rhodiola',
              dosage: '200-400mg',
              evidence: '5 studies on fatigue and stress',
              role: 'Supports mental performance during stress',
              claims: ['Supports mental performance', 'Helps with temporary fatigue']
            }, {
              name: 'L-Theanine',
              dosage: '100-200mg',
              evidence: '4 studies on relaxation',
              role: 'Promotes relaxation without drowsiness',
              claims: ['Promotes relaxation', 'Supports focus and attention']
            }],
            citations: [{
              author: 'Chandrasekhar K, Kapoor J, Anishetty S',
              year: '2012',
              title: 'A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults',
              journal: 'Indian Journal of Psychological Medicine',
              url: 'https://pubmed.ncbi.nlm.nih.gov/23439798/',
              ingredient: 'Ashwagandha'
            }, {
              author: 'Olsson EM, von Schéele B, Panossian AG',
              year: '2009',
              title: 'A randomised, double-blind, placebo-controlled, parallel-group study of the standardised extract shr-5 of the roots of Rhodiola rosea in the treatment of subjects with stress-related fatigue',
              journal: 'Planta Medica',
              url: 'https://pubmed.ncbi.nlm.nih.gov/19016404/',
              ingredient: 'Rhodiola'
            }, {
              author: 'Kimura K, Ozeki M, Juneja LR, Ohira H',
              year: '2007',
              title: 'L-Theanine reduces psychological and physiological stress responses',
              journal: 'Biological Psychology',
              url: 'https://pubmed.ncbi.nlm.nih.gov/16930802/',
              ingredient: 'L-Theanine'
            }, {
              author: 'Darbinyan V, Kteyan A, Panossian A, et al.',
              year: '2000',
              title: 'Rhodiola rosea in stress induced fatigue—a double blind cross-over study of a standardized extract SHR-5 with a repeated low-dose regimen on the mental performance of healthy physicians during night duty',
              journal: 'Phytomedicine',
              url: 'https://pubmed.ncbi.nlm.nih.gov/11081987/',
              ingredient: 'Rhodiola'
            }]
          }
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: 'I can analyze supplement marketing claims for regulatory compliance and scientific evidence. Please provide a claim to analyze.'
        }]);
      }
    }, 1000);
  };
  return <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => <div key={index}>
            <ChatMessage type={message.type} content={message.content} />
            {message.assessment && <ClaimAssessment assessment={message.assessment} />}
          </div>)}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>;
};