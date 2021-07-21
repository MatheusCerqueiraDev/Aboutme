import React, { useEffect, useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import MyPhoto from '../../assets/images/aboutMePhoto.jpg';
import Video from '../../assets/videos/video2.mp4';
import * as S from './style';

const words = [" Developer", " Freelancer", " Student"];

export function Main () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    const [navbar, setNavbar] = useState(false);
  
    // typeWriter
    useEffect(() => {
      if (index === words.length) return;
  
      if ( subIndex === words[index].length + 1 && 
          index !== words.length - 1 && !reverse ) {
        setReverse(true);
        return;
      }
  
      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => prev + 1);
        return;
      }
  
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                  150, parseInt(Math.random() * 350)));
  
      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
      }, [blink]);

      const changeBackground = () => {
        if (window.scrollY >= 80){
          setNavbar(true)
        }else{
          setNavbar(false)
        }
      }
    
      window.addEventListener('scroll', changeBackground);

    return(
        <>
        <S.Container>
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <div id="header">
                <S.Logo><p>About<span>.me</span></p></S.Logo>
                <nav>
                    <ul className={click ? 'navMenu active' : 'navMenu'}>
                        <li onClick={closeMobileMenu}><a href="header">.Me</a></li>
                        <li onClick={closeMobileMenu}><a>.Projects</a></li>
                        <li onClick={closeMobileMenu}><a>.Skills</a></li>
                        <li onClick={closeMobileMenu}><a>.Team</a></li>
                        <li onClick={closeMobileMenu}><a>.Contact</a></li>
                    </ul>
                <S.MobileMenu>
                    <div onClick={handleClick}>
                        {click ? <MdClose/> : <AiOutlineMenuFold/>}
                    </div>
                </S.MobileMenu>
                
                </nav>
            </div>
        </header>
        </S.Container>
        <body>
            <S.Video>
                <div>
                <video src={Video} autoPlay loop muted />
                <S.TypingContainer>
                <section>
                    <div >
                        <div>Hello World!! <br/><br/>My name is </div>
                        <div className="text">Matheus Cerqueira</div>
                        <div>and I am a  
                        {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
                        </div>
                                        
                    </div>
                </section>
                </S.TypingContainer>
                <button type="button">
                    <a href="/">Get started</a>
                </button>
                </div>
            </S.Video>
            
            <S.AboutMe>
              <S.Title>
                <h2>About<span>.me</span></h2>
                <S.AboutBar></S.AboutBar>
                  <h3>Who am I</h3>
                <S.AboutBar></S.AboutBar>
              </S.Title>
                          
            <S.TextBox>
            <img src={MyPhoto} alt="Matheus Cerqueira"/>
              <p>
                <h2>Hey! My name is Matheus</h2>
                Hello there good to see you here let me introduce myself to you.
                As you already know my name is Matheus Cerqueira and I am a web developer 
                I am 20 years old and study at UNIFACS, University of Salvador, and a Rocketseat Igniter as a
                front end student I use Javascript, ReactJs, TypeScript, Next.Js, HTML5 , CSS3 and other tools from these
                libraries as back end developer e use Node.js, Docker and Elixir.<br/>
                I am interested in studying AWS, Go, Machine Learning and Python.<br/>
                I born in Salvador, Bahia - Brazil, in 2009 I went to Switzerland where I lived for 7 years
                there I studied german and english and today I teach english and german classes get in
                touch with for social proofs.<br/>
                Whether it is studing spoken language or using programming language I strive to continuously
                improve all the skills of my trade. One way that I use achieve this is seeing the soft skills
                course <strong>Higher</strong> a soft skills course from Rocketseat.<br/>
                You can find me <a href="/" >here</a>.
                </p>
              
            </S.TextBox>
            </S.AboutMe>
            
        </body>
        </>
    )
}