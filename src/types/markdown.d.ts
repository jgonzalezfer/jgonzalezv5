declare module '*.md' {
  const content: {
    date: string;
    title: string;
    company: string;
    location: string;
    range: string;
    url: string;
    description: string;
    technologies?: string[];
  };
  export default content;
}

declare module '*.md?raw' {
  const content: string;
  export default content;
} 