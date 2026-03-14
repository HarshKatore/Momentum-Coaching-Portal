import { useEffect } from 'react';
import { SEO, SITE } from '@/config/siteConfig.js';

export function usePageTitle(title?: string) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${SITE.instituteName}`;
    } else {
      document.title = SEO.defaultTitle;
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SEO.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = SEO.description;
      document.head.appendChild(meta);
    }
  }, [title]);
}
