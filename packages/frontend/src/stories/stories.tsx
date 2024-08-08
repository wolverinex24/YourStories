// import React, { useState } from 'react';
// import './stories.css'; 
// import Setting from "../assets/stories/Setting.png"
// import MyBook from '../components/book/book';


// // Hamburger component
// const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
//   return (
//     <div>
//         <div className="hamburger" onClick={onClick}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
        
//     </div>
    
//   </div>
    
//   );
// };

// // Sidebar component
// const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
//   return (
//     <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
//       <div className="sidebar-icons">
//         {/* Sidebar icons go here */}
        
//         <div className="icon_setting"><img width='20' src={Setting} alt="" /></div>
//         <div className="icon_taskbar"><a href="#">↻</a></div>
//         <div className="icon_taskbar"><a href="#">+</a></div>
        
//       </div>
//       <div className="sidebar-content">
//         {/* Expanded sidebar content */}
        
//       </div>
//     </div>
//   );
// };

// // Main Stories component
// const Stories: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);




//   return (
//     <div className="stories">
//       <Hamburger onClick={() => setIsOpen(!isOpen)} />

//       <Sidebar isOpen={isOpen} />
//       <div className='bookBody'>
//         <MyBook/>
//       </div>
//     </div>
//   );
// };

// export default Stories;

import React, { useState } from 'react';
import './stories.css'; 
import Setting from "W:/WEB/YourStories/packages/frontend/src/assets/stories/Setting.png";
import MyBook from '../components/book/book';
import Bookshelf from '../components/bookSelf/bookSelf';
import Book from '../components/bookSelf/singlebook';
import bookside from  '../assets/stories/bookside.png'


interface BookData {
  title: string;
  cover: string;
}

const books: BookData[] = [
  { title: "Book 1", cover: bookside },
  { title: "Book 2", cover: bookside },
  { title: "Book 3", cover: bookside },
  // Add more books as needed
];

// Hamburger component
const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div>
      <div className="hamburger" onClick={onClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
      <div className="sidebar-icons">
        <div className="icon_setting">
          <img width='20' src={Setting} alt="Settings" />
        </div>
      </div>
      <div className="sidebar-content">
        <Bookshelf>
          {books.map((book, index) => (
            <Book key={index} title={book.title} cover={book.cover} />
          ))}
        </Bookshelf>
      </div>
    </div>
  );
};

// Main Stories component
const Stories: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="yourstoriesBody">
       <div className="stories">
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
      <div className='bookBody'>
        <MyBook />
      </div>
    </div>
    </div>
   
  );
};

export default Stories;

