import Layout from "../components/Layout";

const SkillsPage = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Frontend",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 75 },
      ]
    },
    {
      id: 2,
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "Next.js", level: 88 },
        { name: "Python/Django", level: 70 },
      ]
    },
    {
      id: 3,
      category: "Bases de Datos",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 78 },
        { name: "Firebase", level: 85 },
      ]
    },
    {
      id: 4,
      category: "Otras Tecnologías",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma/Adobe XD", level: 75 },
      ]
    }
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-4xl p-3 sm:p-4 md:p-6">
        <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Conocimientos</h1>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="rounded-lg border border-gray-200 bg-white p-3 sm:p-4 md:p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">{category.category}</h2>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs sm:text-sm md:text-base">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="mt-1 h-1.5 sm:h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 sm:h-2 rounded-full bg-blue-500 dark:bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
