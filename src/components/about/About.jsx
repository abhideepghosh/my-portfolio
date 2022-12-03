import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiTrophyCup} from 'react-icons/gi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
	return (

		<section id="about">
			<h5>Get to know</h5>
		    <h2>About me</h2>
		    <div className="container about__container">
		        <div className="about__me">
		          <div className="about__me-image">
		            <img src={ME} alt="About me" />
		          </div>
		        </div>
		        <div className="about__content">
		          <div className="about__cards">
		            <article className="about__card">
		              <FaAward className='about__icon'/>
		              <h5>Experience</h5>
		              <small>Fresher</small>
		            </article>

		            <article className="about__card">
		              <GiTrophyCup className='about__icon'/>
		              <h5>Top Performer</h5>
		              <small>Consistently Ranked 1 In Newton Leaderboard</small>
		            </article>

		            <article className="about__card">
		              <VscFolderLibrary className='about__icon'/>
		              <h5>Projects</h5>
		              <small>5+ Completed</small>
		            </article>
		          </div>
		          <p>I am Abhideep Ghosh, a Full Stack Web Developer. The languages I love to code in are HTML, CSS, JS and Java. I've worked on many React projects and lead few team projects in Newton. I've also taught students while being one of the leaders of Super 50 group in Newton.</p>
		          <a href="#contact" className='btn btn-primary'>Let's talk</a>

		        </div>
	      	</div>
		</section>

		);
}

export default About;