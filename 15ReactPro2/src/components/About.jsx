import React from 'react'
import aboutImg from "../assets/about.jpeg";
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
        <Title title="about" subTitle="us"/>

        <div className="section-center about-center">
            <div className="about-img">
                <img src={aboutImg} className='about-photo' alt="" />
            </div>
            <article className='about-info'>
                <h3>explore the difference</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum fugiat quasi officia blanditiis omnis cupiditate incidunt sapiente rerum doloribus, veniam itaque, unde ex obcaecati assumenda dolorem rem. Iusto, voluptatum ipsa.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem atque rerum commodi doloremque temporibus exercitationem blanditiis, quos nostrum asperiores, inventore recusandae culpa a repudiandae, libero delectus laboriosam voluptate consequuntur quibusdam?
                </p>
                <a href="#" className='btn'>Daha Fazla</a>
            </article>
        </div>
    </section>
  )
}

export default About