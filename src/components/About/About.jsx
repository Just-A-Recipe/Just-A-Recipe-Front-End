import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import DorjeImg from '../../../public/assets/Dorje.jpg';
import CodyImg from '../../../public/assets/Cody.jpg';
import JamesImg from '../../../public/assets/James.jpg';
import AnastasiaImg from '../../../public/assets/Anastasia.jpg';
import SuriImg from '../../../public/assets/Suri.jpg';
import styles from './About.css';

// make components to prevent code duplication
const Developer = ({ name, linkedIn, github, description}) => (
  <div className={styles.card}>
    <img className={styles.profileImg} src={CodyImg} alt=''/>
    <h1>{name}</h1>
    <p className={styles.jobTitle}>Software Engineer</p>
    <p className={styles.about}>{description}</p>
    <a href={linkedIn} target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
    <a href={github} target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
  </div>
)


const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <div className={styles.container}>
        <h1 className={styles.heading}>The Chefs</h1>
        <div className={styles.cardWrapper}>
          <Developer
            name="Cody"
            description="Born in Oregon<br /> Speaks English & American Sign Language<br /> Favorite Food: Steak & Lobster"
            linkedIn="https://www.linkedin.com/in/codylylebrown/"
            github="https://github.com/cody2934" />
          {/* Do this for all other dev */}
          <div className={styles.card}>
            <img className={styles.profileImg} src={SuriImg} alt=''/>
            <h1>Suri</h1>
            <p className={styles.jobTitle}>Software Engineer</p>
            <p className={styles.about}>Born in Puerto Rico<br />Speaks Spanish & English<br /> Favorite Food: Grilled Chicken & Plantain</p>
            <a href="https://www.linkedin.com/in/surelis-segarra-bbbba3186/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/SuriSegarra" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>
          <div className={styles.card}>
            <img className={styles.profileImg} src={DorjeImg} alt=''/>
            <h1>Dorje</h1>
            <p className={styles.jobTitle}>Software Engineer</p>
            <p className={styles.about}> Born in New Mexico<br />Speaks a little Tibetan & English<br />Favorite Food: Spaghetti Carbonara</p>
            <a href="https://www.linkedin.com/in/dorjekirsten/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/dorjepadma" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>
          <div className={styles.card}>
            <img className={styles.profileImg} src={AnastasiaImg} alt=''/>
            <h1>Anastasia</h1>
            <p className={styles.jobTitle}>Software Engineer</p>
            <p className={styles.about}> Born in Russia <br />Speaks Russian, French & English <br />Favorite Food: Sushi & Sashimi </p>
            <a href="https://www.linkedin.com/in/morozova-anastasia/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/asiamorozova" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>
          <div className={styles.card}>
            <img className={styles.profileImg} src={JamesImg} alt=''/>
            <h1>James</h1>
            <p className={styles.jobTitle}>Software Engineer</p>
            <p className={styles.about}> Born in the Philippines<br />Speaks Tagalog & English <br />Favorite Food: Jasmine Rice</p>
            <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.socialIcon} /></a>
            <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.socialIcon} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
