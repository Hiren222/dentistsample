'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClinicInfo, DEFAULT_CLINIC } from './clinic-data';

interface ClinicContextType {
  clinic: ClinicInfo;
  updateClinic: (updates: Partial<ClinicInfo>) => void;
  resetClinic: () => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export function ClinicProvider({ children }: { children: React.ReactNode }) {
  const [clinic, setClinic] = useState<ClinicInfo>(DEFAULT_CLINIC);

  useEffect(() => {
    // Ensure clean light mode
    document.documentElement.classList.remove('dark');
  }, []);

  const updateClinic = (updates: Partial<ClinicInfo>) => {
    setClinic((prev) => ({ ...prev, ...updates }));
  };

  const resetClinic = () => {
    setClinic(DEFAULT_CLINIC);
  };

  return (
    <ClinicContext.Provider
      value={{
        clinic,
        updateClinic,
        resetClinic,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
}
