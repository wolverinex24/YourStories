import React from 'react';
import './bookShelf.css';
import shelf from '../../assets/stories/bookshelffit.png';

interface BookshelfProps {
    children: React.ReactNode;
}

const Bookshelf: React.FC<BookshelfProps> = ({ children }) => {
    return (
        <div className="bookshelf">
            {children}
            <img className='shelf' src={shelf} alt="" />
        </div>
    );
};

export default Bookshelf;

