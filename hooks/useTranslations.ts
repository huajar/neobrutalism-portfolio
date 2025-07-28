"use client";

import { useTranslations as useNextIntlTranslations } from 'next-intl';

export function useTranslations(namespace?: string) {
  const t = useNextIntlTranslations(namespace);
  
  return (key: string, values?: Record<string, any>) => {
    try {
      return t(key, values);
    } catch (error) {
      // Return the key itself or a fallback if translation is missing
      console.warn(`Missing translation for key: ${namespace ? `${namespace}.` : ''}${key}`);
      return key.split('.').pop() || key; // Return the last part of the key as fallback
    }
  };
}
