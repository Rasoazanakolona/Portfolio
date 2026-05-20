import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DownloadCloud } from 'lucide-react';
import Menu from "./menu/Menu";
import Accueil from './Contenu/Accueil/Accueil';
import Projet from "./Contenu/Projets/Projet";
import Apropos from './Contenu/Apropos/Apropos';
import Competences from './Contenu/Competences/Competence';
import Contact from './Contenu/Contact/Contact';
import cv from "./Contenu/Accueil/CV.pdf"; 
import styles from './App.module.css';

function App() {
    const [position, setPosition] = useState({ x: window.innerWidth - 160, y: 25 });
    const [isDragging, setIsDragging] = useState(false);
    
    const dragRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0, totalMovement: 0 });

    const handleMouseDown = (e) => {
        if (e.button !== 0) return; 
        setIsDragging(true);

        dragRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            posX: position.x,
            posY: position.y,
            totalMovement: 0 
        };
        e.preventDefault();
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - dragRef.current.startX;
            const deltaY = e.clientY - dragRef.current.startY;
            
            dragRef.current.totalMovement = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            const newX = Math.max(10, Math.min(window.innerWidth - 150, dragRef.current.posX + deltaX));
            const newY = Math.max(10, Math.min(window.innerHeight - 60, dragRef.current.posY + deltaY));
            
            setPosition({ x: newX, y: newY });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const handleLinkClick = (e) => {

        if (dragRef.current.totalMovement > 5) {
            e.preventDefault();
        }
    };

    return (
        <Router>
            <div className={styles.corps}>
                <div className={styles.Menu}>
                    <Menu/>
                </div>
                <div className={styles.Contenue}>
                    
                    <a 
                        href={cv} 
                        download 
                        className={`${styles.floatingCV} ${isDragging ? styles.dragging : ''}`}
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                        onMouseDown={handleMouseDown}
                        onClick={handleLinkClick} 
                        title="Maintenez le clic gauche pour glisser, cliquez pour télécharger"
                    >
                        <DownloadCloud size={22} strokeWidth={1.5} />
                        <span>Mon CV</span>
                    </a>

                    <Routes>
                        <Route path='/' element={<Navigate to="/Accueil" replace />} />
                        <Route path='/Accueil' element={<Accueil/>}/>
                        <Route path='/Projet' element={<Projet/>}/>
                        <Route path='/Apropos' element={<Apropos/>}/>
                        <Route path='/Competence/*' element={<Competences/>}/>
                        <Route path='/Contact' element={<Contact/>}/>
                    </Routes>
                </div>
            </div>   
        </Router>  
    );
}

export default App;