import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import DorjeImg from '../../../public/assets/Dorje.jpg';
import CodyImg from '../../../public/assets/Cody.jpg';
import JamesImg from '../../../public/assets/James.jpg';
import AnastasiaImg from '../../../public/assets/Anastasia.jpg';
import SuriImg from '../../../public/assets/Suri.jpg';

import styles from './About.css';

const About = () => {
  return (
    
    <div className={styles.aboutDiv}>
      <div className={styles.container}>
        <h1 className={styles.heading}>The Chefs</h1>
        <div className={styles.cardWrapper}>

          <div className={styles.card}>
            <img className={styles.profileImg} src={CodyImg} alt=''/>
            <h1>Cody</h1>
            <p className={styles.jobTitle}>Software Engineer</p>
            <p className={styles.about}>Born in Portland, speaks English American Sign Language. Favorite Food: Steak and Lobster</p>
            <a href="https://www.linkedin.com/in/codylylebrown/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/cody2934" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a> 
          </div>

          <div className={styles.card}>
            <img className={styles.profileImg} src={SuriImg} alt=''/>
            <h1>Suri</h1>
            <p className={styles.jobTitle}>Software Developer</p>
            <p className={styles.about}>Born in Puerto Rico, speaks Spanish and English. Favorite Food: Grilled Chicken and Plantain</p>
            <a href="https://www.linkedin.com/in/surelis-segarra-bbbba3186/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/SuriSegarra" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>   
          
          <div className={styles.card}>
            <img className={styles.profileImg} src={DorjeImg} alt=''/>
            <h1>Dorje</h1>
            <p className={styles.jobTitle}>Software Developer</p>
            <p className={styles.about}> Born in Truchas NM, speaks a little Tibetan and English. Favorite Food: Spaghetti Carbonara</p>
            <a href="https://www.linkedin.com/in/dorjekirsten/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/dorjepadma" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>

          <div className={styles.card}>
            <img className={styles.profileImg} src={AnastasiaImg} alt=''/>
            <h1>Anastasia</h1>
            <p className={styles.jobTitle}>Software Developer</p>
            <p className={styles.about}> Born in Croatia, speaks Russian, French and English. Favorite Food: Sushi and Sashimi </p>
            <a href="https://www.linkedin.com/in/morozova-anastasia/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/asiamorozova" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>
        

          <div className={styles.card}>
            <img className={styles.profileImg} src={JamesImg} alt=''/>
            <h1>James</h1>
            <p className={styles.jobTitle}>Software Developer</p>
            <p className={styles.about}> Born in the Philippines, speaks Tagalog and English. Favorite Food: Jasmine Rice</p> 
            <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a> 
          </div>
        </div>
      </div>
    </div>
   
    
  );
};
export default About;
