import { Link } from 'react-router-dom';
import imagenNoDisponible from '../assets/img/imagen_no_disponible.jpg';

interface EducationSectionProps {
    title: string;
    image: string;
    institution: string;
    period: string;
    link: string;
    linkText: string;
    description: string;
    duration?: string;
    views?: string;
}

const EducationSection = ({ 
    title, 
    image, 
    institution, 
    period, 
    link, 
    description,
    duration = "0:00",
    views = "0"
}: EducationSectionProps) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = imagenNoDisponible;
    };

    return (
        <div className="bg-white dark:bg-gray-800">
            <Link to={link} className="block">
                <div className="text-xs text-gray-500 dark:text-gray-400 px-2 pt-2">
                    www.youtube.com › watch
                </div>
                <div className="flex gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="relative flex-shrink-0">
                        <img
                            src={image}
                            alt={title}
                            className="w-40 h-24 object-cover rounded"
                            onError={handleImageError}
                        />
                        <div className="absolute bottom-1 right-1 bg-black/75 px-1 text-xs text-white rounded">
                            {duration}
                        </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <h2 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                            {title}
                        </h2>
                        
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                            {description}
                        </p>

                        <div className="flex flex-col mt-1 text-gray-600 dark:text-gray-400 text-xs">
                            <span className="hover:text-gray-900 dark:hover:text-white transition-colors">
                                {institution}
                            </span>
                            <div className="flex items-center gap-1">
                                <span>{views} visualizaciones</span>
                                <span>•</span>
                                <span>{period}</span>
                            </div>
                        </div>
                    </div>

                    <button className="self-start p-1.5 -mr-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default EducationSection; 