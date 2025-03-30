export interface JobExperience {
  date: string;
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  description: string;
  technologies?: string[];
}

const loadExperiences = async (): Promise<JobExperience[]> => {
  try {
    // Importamos los archivos markdown directamente
    const jobs = await import('../content/jobs/Freelance/index.md?raw');
    const university = await import('../content/jobs/University/index.md?raw');
    const qanova = await import('../content/jobs/Qanova/index.md?raw');
    const miancafs = await import('../content/jobs/Miancafs/index.md?raw');

    // Función para parsear el contenido markdown
    const parseMarkdown = (content: string): JobExperience => {
      const frontmatter = content.split('---')[1];
      const mainContent = content.split('---')[2];
      
      const metadata = frontmatter.split('\n').reduce((acc: any, line: string) => {
        const [key, value] = line.split(':').map(s => s.trim());
        if (key && value) {
          if (key === 'technologies') {
            // Manejar el array de tecnologías
            acc[key] = value
              .replace(/^\[|\]$/g, '') // Eliminar corchetes
              .split(',')
              .map((tech: string) => tech.trim().replace(/^['"]|['"]$/g, '')); // Limpiar cada tecnología
          } else {
            acc[key] = value.replace(/^['"]|['"]$/g, '');
          }
        }
        return acc;
      }, {});

      return {
        date: metadata.date,
        title: metadata.title,
        company: metadata.company,
        location: metadata.location,
        range: metadata.range,
        url: metadata.url,
        description: mainContent.trim(),
        technologies: metadata.technologies || []
      };
    };

    const experiences: JobExperience[] = [
      parseMarkdown(jobs.default),
      parseMarkdown(university.default),
      parseMarkdown(qanova.default),
      parseMarkdown(miancafs.default)
    ];

    return experiences.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading experiences:', error);
    return [];
  }
};

export default loadExperiences; 