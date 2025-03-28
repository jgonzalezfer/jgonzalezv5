import { Link } from 'react-router-dom';
import imagenNoDisponible from '../assets/img/imagen_no_disponible.jpg';

interface ProjectSectionProps {
    title: string;
    image: string;
    description: string;
    timestamp: string;
    source: {
        name: string;
        icon?: string;
    };
}

const ProjectSection = ({ 
    title, 
    image, 
    description,
    timestamp,
    source
}: ProjectSectionProps) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = imagenNoDisponible;
    };

    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
                {source.icon && (
                    <img 
                        src={source.icon} 
                        alt={source.name}
                        className="w-6 h-6 rounded"
                    />
                )}
                <span className="text-sm text-gray-600 dark:text-gray-300">{source.name}</span>
            </div>
            
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                        {title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        {description}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {timestamp}
                    </span>
                </div>
                
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                    onError={handleImageError}
                />
            </div>
        </div>
    );
};

export default ProjectSection; 