"use client";

import { useTranslations as useNextIntlTranslations } from 'next-intl';

export function useTranslations(namespace?: string) {
  const t = useNextIntlTranslations(namespace);
  
  return (key: string, values?: Record<string, any>) => {
    try {
      return t(key, values);
    } catch (error) {
      console.warn(`Missing translation for key: ${namespace ? `${namespace}.` : ''}${key}`);
      return key.split('.').pop() || key; 
    }
  };
}
