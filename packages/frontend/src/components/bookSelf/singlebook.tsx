import React, { useState, MouseEvent } from 'react';
import './singlebook.css';

interface BookProps {
    title: string;
    cover: string;
}

const Book: React.FC<BookProps> = ({ title, cover }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        // Show title hint on hover
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        // Hide title hint on hover
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            className={`book `} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onClick={handleClick}
        >
            <img className ="imagesinglebook"src={cover || 'W:/WEB/YourStories/packages/frontend/src/assets/stories/coverthumbnail.png'} alt={title} />
            <div className="hint">{title}</div>
            {isOpen && <div className="book-content">
                <h1>{title}</h1>
                <p>Book content goes here...</p>
            </div>}
        </div>
    );
};

export default Book;
