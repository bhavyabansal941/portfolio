'use client';

import React, { createContext, useContext, useState } from 'react';

interface PortfolioContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  activeCaseStudyId: string | null;
  openCaseStudy: (id: string) => void;
  closeCaseStudy: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => !prev);
  };

  const openCaseStudy = (id: string) => {
    setActiveCaseStudyId(id);
  };

  const closeCaseStudy = () => {
    setActiveCaseStudyId(null);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isRecruiterMode,
        toggleRecruiterMode,
        activeCaseStudyId,
        openCaseStudy,
        closeCaseStudy,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
