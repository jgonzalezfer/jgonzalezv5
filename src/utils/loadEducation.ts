export interface Education {
  date: string;
  title: string;
  institution: string;
  period: string;
  link: string;
  linkText: string;
  description: string;
  image?: string;
}

const loadEducation = async (): Promise<Education[]> => {
  try {
    // Importamos los archivos markdown directamente
    const frontendEssentials = await import('../content/education/FrontendEssentials/index.md?raw');
    const ecommerce = await import('../content/education/E-commerce/index.md?raw');
    const digitalMarketing = await import('../content/education/DigitalMarketingProfessional/index.md?raw');
    const cybersecurity = await import('../content/education/CybersecurityAwareness/index.md?raw');
    const scrumEssentials = await import('../content/education/ScrumEssentials/index.md?raw');

    // Función para parsear el contenido markdown
    const parseMarkdown = (content: string): Education => {
      const frontmatter = content.split('---')[1];
      const mainContent = content.split('---')[2];
      
      const metadata = frontmatter.split('\n').reduce((acc: any, line: string) => {
        const [key, value] = line.split(':').map(s => s.trim());
        if (key && value) {
          acc[key] = value.replace(/^['"]|['"]$/g, '');
        }
        return acc;
      }, {});

      return {
        date: metadata.date,
        title: metadata.title,
        institution: metadata.institution,
        period: metadata.period,
        link: metadata.link,
        linkText: metadata.linkText,
        description: mainContent.trim(),
        image: metadata.image
      };
    };

    const education: Education[] = [
      parseMarkdown(frontendEssentials.default),
      parseMarkdown(ecommerce.default),
      parseMarkdown(digitalMarketing.default),
      parseMarkdown(cybersecurity.default),
      parseMarkdown(scrumEssentials.default)
    ];

    return education.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading education:', error);
    return [];
  }
};

export default loadEducation; 