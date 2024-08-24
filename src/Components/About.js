import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import about from "../Images/about.jpg"
import muzdalfa from "../Images/muzdalfa.jpg"
import ali from "../Images/image.png"

function About() {
  return (
    <>
      <NavBar/>
    <div className='about'>
      <div className='aboutTitle'>About us </div>
      <div className='mission'>
        <h3 className='aboutHeadings' >Our Mission</h3>
        <p>At Recipe Master, our mission is simple: to make cooking enjoyable and accessible for everyone. Whether you're a seasoned chef or a beginner in the kitchen, our goal is to provide you with easy-to-follow recipes that inspire creativity and bring delicious meals to your table.</p>
        <img src="https://images.unsplash.com/photo-1512058454905-6b841e7ad132?q=80&w=1395&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        {/* <img src={about}/> */}
        {/* <img src='https://media.istockphoto.com/id/2165303234/photo/top-view-of-hot-soup-with-lemon-slice-in-bowl-on-green-background-with-wooden-spoon.jpg?s=612x612&w=0&k=20&c=jEUfY1s64lFg2qNcvhn5n5be28hT4FoWp4sTq6hoLGU='/> */}
      </div>

      <div>
        <h3 className='aboutHeadings'>Our Story</h3>
        <p>
        Recipe Master was born out of a passion for food and a desire to share the joy of cooking with others. What started as a small collection of family recipes has grown into a comprehensive resource for home cooks everywhere. We believe that great food brings people together, and we're excited to be part of your culinary journey.</p>
      </div>
      <div >
        <h3 className='aboutHeadings'>Meet Our Team</h3>
        <p>
        Behind Recipe Master is a team of food enthusiasts, home cooks, and tech-savvy individuals who share a love for great food. We're dedicated to curating and creating recipes that not only taste amazing but are also easy to make. Our diverse backgrounds bring a variety of flavors and techniques to the table, ensuring there's something for everyone.
        </p>
        <div className='meetTeam'>

        <div className='team'>
          <div className='leftTeam'>
          <img src={ali}/>
          </div>
          <div className='rightTeam'>
            <h4>Ali Asad - Head Chef</h4>
            <p>Ali Asad leads the Recipe Master team with his creative culinary vision, bringing over his experience in Italian cuisine. Ali's favorite recipes are pizza and shawarma, dishes he loves sharing with the Recipe Master community.</p>
            <p> <span className='funConnect'>  Fun Fact: </span>Ali loves playing pubg.</p>
            <p> <span className='funConnect'>  Connect with him : </span>if you want to play pubg with him</p>            
          </div>
        </div>
        <div className='team'>
          <div className='leftTeam'>
          <img src={muzdalfa}/>
          </div>
        
          <div className='rightTeam'>
            <h4>Muzdalfa Zulfiqar -  Developer</h4>
            <p >Muzdalfa is the technical backbone of Recipe Master, ensuring that the site is not only functional but also innovative. With a strong background in web development, Muzdalfa specializes in creating seamless user experiences .From optimizing performance to developing new features, Muzdalfa’s expertise allows Recipe Master to stay ahead of the curve in the digital space.</p>
            <p> <span className='funConnect'>  Fun Fact: </span>Muzdalfa loves reading novels as her hobby</p>
            <p> <span className='funConnect'>  Connect with her : </span>to get novel recommendations and her help in coding bugs</p>            
          </div>
        </div>
        </div>
      </div>
      
    </div>
    <div
   
    >
    
    <Footer/>
    </div>
    </>
  )
}

export default About
