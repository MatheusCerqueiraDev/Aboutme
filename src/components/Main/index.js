import React, { useEffect, useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
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

    return(
        <>
        <S.Container>
        <header>
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
        <main>
            <S.Video>
                <div className='bodyContainer'>
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
                <button className="pdfBtn">
                    <a href="/">Get started</a>
                </button>
                </div>
            </S.Video>
        </main>
        </>
    )
}