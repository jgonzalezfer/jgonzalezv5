import { Link } from 'react-router-dom';
import imagenNoDisponible from '../assets/img/imagen_no_disponible.jpg';

interface AboutSectionProps {
    title: string;
    image: string;
    languages: string[];
    link: string;
    linkText: string;
    description: string;
}

const AboutSection = ({ title, image, languages, link, linkText, description }: AboutSectionProps) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = imagenNoDisponible;
    };

    return (
        <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <img
                src={image}
                alt={title}
                className="w-8 h-8 object-cover rounded-full"
                onError={handleImageError}
            />
            <div className="flex-1">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                            {title}
                        </h2>
                        <span className="text-gray-400 text-xl">⋮</span>
                    </div>

                    <div className="flex gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {languages.map((lang, index) => (
                            <span key={index}>
                                {lang}{index < languages.length - 1 ? "," : ""}
                            </span>
                        ))}
                    </div>

                    <Link
                        to={link}
                        className="mt-3 text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                        {linkText}
                    </Link>

                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection; 