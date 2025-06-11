import React, { useState } from 'react';
export const ClaimAssessment = ({
  assessment
}) => {
  const [showCitations, setShowCitations] = useState(false);
  const [activeIngredient, setActiveIngredient] = useState(null);
  const [activeTab, setActiveTab] = useState({});
  const getComplianceStatus = status => {
    switch (status) {
      case 'Compliant':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
            <span className="mr-1 w-2 h-2 rounded-full bg-green-500"></span>
            Compliant
          </span>;
      case 'Non-Compliant':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
            <span className="mr-1 w-2 h-2 rounded-full bg-red-500"></span>
            Issues Found
          </span>;
      case 'Needs Revision':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-100">
            <span className="mr-1 w-2 h-2 rounded-full bg-yellow-500"></span>
            Under Review
          </span>;
      default:
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100">
            <span className="mr-1 w-2 h-2 rounded-full bg-gray-500"></span>
            {status}
          </span>;
    }
  };
  const getRiskIndicator = risk => {
    switch (risk) {
      case 'LOW':
        return <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>;
      case 'MEDIUM':
        return <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>;
      case 'HIGH':
        return <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>;
      default:
        return <span className="inline-block w-3 h-3 rounded-full bg-gray-500"></span>;
    }
  };
  const toggleCitations = () => {
    setShowCitations(!showCitations);
  };
  const toggleIngredient = ingredientName => {
    if (activeIngredient === ingredientName) {
      setActiveIngredient(null);
    } else {
      setActiveIngredient(ingredientName);
    }
  };
  const handleTabChange = (ingredient, tab) => {
    setActiveTab(prev => ({
      ...prev,
      [ingredient]: tab
    }));
  };
  // Get citations count for an ingredient
  const getIngredientCitationsCount = ingredientName => {
    return assessment.citations.filter(citation => citation.ingredient === ingredientName).length;
  };
  // Filter citations by ingredient if one is selected
  const filteredCitations = activeIngredient ? assessment.citations.filter(citation => citation.ingredient === activeIngredient) : assessment.citations;
  return <div className="mb-6 ml-11 max-w-3xl bg-white border rounded-lg overflow-hidden shadow-sm">
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium uppercase text-gray-500">
              Claim Assessment
            </h3>
            <div className="flex items-center gap-2">
              {getRiskIndicator(assessment.riskLevel)}
              <span className="text-sm font-medium">
                {assessment.riskLevel} RISK
              </span>
            </div>
          </div>
          {getComplianceStatus(assessment.complianceStatus)}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-1">"{assessment.claim}"</h2>
          <p className="text-sm text-gray-600">{assessment.issues}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase text-gray-500">
              Evidence Summary
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">
                  Supporting Studies
                </span>
                <span className="text-sm font-medium">
                  {assessment.supportingStudies}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Evidence Strength</span>
                <span className="text-sm font-medium">
                  {assessment.evidenceStrength}
                </span>
              </div>
            </div>
            <h4 className="text-sm font-medium uppercase text-gray-500">
              Key Ingredients
            </h4>
            <div className="space-y-1">
              {assessment.keyIngredients.map((ingredient, index) => <div key={index} className={`text-sm py-1 px-2 rounded-md cursor-pointer ${activeIngredient === ingredient ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'}`} onClick={() => toggleIngredient(ingredient)}>
                  {ingredient}
                </div>)}
              {activeIngredient && <button className="text-xs text-purple-600 mt-2 hover:underline" onClick={() => setActiveIngredient(null)}>
                  Clear filter
                </button>}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase text-gray-500">
              Regulatory Issues
            </h4>
            <div className="space-y-1">
              {assessment.regulatoryIssues.map((issue, index) => <div key={index} className="text-sm flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{issue}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {assessment.citations && <div className="border-t p-5">
          <div className="flex items-center justify-between w-full mb-3">
            <h4 className="text-sm font-medium uppercase text-gray-500">
              Citations {activeIngredient ? `for ${activeIngredient}` : ''} (
              {filteredCitations.length})
            </h4>
            <div className="flex items-center gap-2">
              <div className="relative">
                <select className="appearance-none bg-white border rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A36FC]" value={activeIngredient || ''} onChange={e => setActiveIngredient(e.target.value || null)}>
                  <option value="">All Ingredients</option>
                  {assessment.keyIngredients.map((ingredient, index) => <option key={index} value={ingredient}>
                      {ingredient}
                    </option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <button onClick={toggleCitations} className="p-1 rounded hover:bg-gray-100" aria-label={showCitations ? 'Hide citations' : 'Show citations'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${showCitations ? 'transform rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
          {showCitations && <div className="mt-3 space-y-3 max-h-[300px] overflow-y-auto">
              {filteredCitations.map((citation, index) => <div key={index} className="p-3 bg-gray-50 rounded-md border text-sm">
                  <div className="font-medium mb-1">
                    {citation.author} ({citation.year})
                  </div>
                  <div className="mb-2 italic">{citation.title}</div>
                  <div className="text-gray-600 mb-2">{citation.journal}</div>
                  <div className="flex items-center justify-between">
                    <a href={citation.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#6A36FC] hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2H2v10h10V2Z" />
                        <path d="M12 2h10v10H12V2Z" />
                        <path d="M22 22H2V12h20v10Z" />
                      </svg>
                      View PDF
                    </a>
                    <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                      {citation.ingredient}
                    </span>
                  </div>
                </div>)}
            </div>}
        </div>}
      <div className="border-t p-5">
        <h4 className="text-sm font-medium uppercase text-gray-500 mb-3">
          Recommended Claim Alternatives
        </h4>
        <div className="mb-3 p-3 bg-green-50 rounded-md border border-green-100">
          <div className="text-xs font-medium text-green-800 mb-1">
            LOW RISK VERSION
          </div>
          <p className="text-sm">"{assessment.recommendedClaim}"</p>
        </div>
        {assessment.enhancedClaim && <div className="p-3 bg-purple-50 rounded-md border border-purple-100">
            <div className="text-xs font-medium text-purple-800 mb-1">
              ENHANCED VERSION
            </div>
            <p className="text-sm">"{assessment.enhancedClaim}"</p>
          </div>}
      </div>
      <div className="border-t p-5">
        <h4 className="text-sm font-medium uppercase text-gray-500 mb-3">
          Evidence by Ingredient
        </h4>
        <div className="space-y-4">
          {assessment.ingredients.map((ingredient, index) => {
          const ingredientCitations = assessment.citations.filter(citation => citation.ingredient === ingredient.name);
          const citationsCount = ingredientCitations.length;
          const currentTab = activeTab[ingredient.name] || 'details';
          return <div key={index} className="rounded-md border overflow-hidden">
                <div className="bg-gray-50 p-3 font-medium">
                  {ingredient.name} ({ingredient.dosage})
                </div>
                <div className="flex border-b">
                  <button className={`flex-1 py-2 px-4 text-sm font-medium ${currentTab === 'details' ? 'bg-white text-[#6A36FC] border-b-2 border-[#6A36FC]' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabChange(ingredient.name, 'details')}>
                    Details
                  </button>
                  <button className={`flex-1 py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 ${currentTab === 'citations' ? 'bg-white text-[#6A36FC] border-b-2 border-[#6A36FC]' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`} onClick={() => handleTabChange(ingredient.name, 'citations')}>
                    Citations
                    {citationsCount > 0 && <span className={`inline-flex items-center justify-center w-5 h-5 text-xs rounded-full ${currentTab === 'citations' ? 'bg-[#6A36FC] text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {citationsCount}
                      </span>}
                  </button>
                </div>
                <div className="p-3 bg-white">
                  {currentTab === 'details' ? <div className="text-sm space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-start">
                          <span className="font-medium w-20">Evidence:</span>
                          <span>{ingredient.evidence}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-medium w-20">Role:</span>
                          <span>{ingredient.role}</span>
                        </div>
                      </div>
                      {ingredient.claims && ingredient.claims.length > 0 && <div>
                          <div className="text-xs font-medium text-gray-500 mb-2">
                            SUPPORTED CLAIMS
                          </div>
                          <div className="space-y-1">
                            {ingredient.claims.map((claim, claimIndex) => <div key={claimIndex} className="text-sm flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{claim}</span>
                              </div>)}
                          </div>
                        </div>}
                    </div> : <div className="space-y-3">
                      {ingredientCitations.length > 0 ? ingredientCitations.map((citation, citIndex) => <div key={citIndex} className="text-sm border-b pb-3 last:border-b-0 last:pb-0">
                            <div className="font-medium mb-1">
                              {citation.author} ({citation.year})
                            </div>
                            <div className="mb-2 italic text-sm">
                              {citation.title}
                            </div>
                            <div className="text-gray-600 text-sm mb-2">
                              {citation.journal}
                            </div>
                            <a href={citation.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-[#6A36FC] hover:underline">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2H2v10h10V2Z" />
                                <path d="M12 2h10v10H12V2Z" />
                                <path d="M22 22H2V12h20v10Z" />
                              </svg>
                              View PDF
                            </a>
                          </div>) : <div className="text-sm text-gray-500 italic">
                          No citations available
                        </div>}
                    </div>}
                </div>
              </div>;
        })}
        </div>
      </div>
    </div>;
};