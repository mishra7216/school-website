import { useEffect } from 'react';

/**
 * PageSEO - Sets unique page-level title, meta description, and JSON-LD structured data
 * for each page to maximize Google Images and Search ranking.
 */
const PageSEO = ({ title, description, keywords, jsonLd }) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // Set or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }

    // Set Open Graph title & description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Inject page-specific JSON-LD structured data
    let scriptTag = document.getElementById('page-jsonld');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }

    // Cleanup on unmount - restore defaults
    return () => {
      document.title = 'Little Kingdom Senior Secondary School, Baihar | Best School in Balaghat District';
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, [title, description, keywords, jsonLd]);

  return null; // This component renders nothing
};

export default PageSEO;
