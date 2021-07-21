import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    width: 100vw;

    .navbar{
        background: var(--white);
        font-family: 'Lato', sans-serif;
        font-size: 28px;

        a{
        color: var(--black);
        cursor:pointer;
        text-decoration: none;
    }
    }

    .navbar.active{
        background: linear-gradient(
                90deg,
                rgb(66, 2, 194) 0%,
                rgb(0, 78, 194) 100%
                );
        transition: 0.8s ease-out;

    a{
        color: var(--white);
        cursor:pointer;
        text-decoration: none;
    }

    p{
        color: var(--white);
    }

    a:hover{
        color: var(--black);
        transition: all 0.2s ease-out;
    }

    }
    
    div{
        display: flex;
        justify-content:space-between;
        padding: 16px 28px;
    }


    nav{
        align-items:center;
        display: flex;
    }

    ul, li{
        display: inline-block;
        justify-content:space-between;

        font-weight: 600;
        list-style:none;
        margin-right: 48px;
    }

    ul, li:nth-child(5){
        margin-right: 20px;
    }

    a:hover{
        color: var(--purple);
        transition: all 0.2s ease-out;
    }

    @media screen and (max-width: 960px){
        li{
            position: relative;
        }

        ul{
            display: flex;
            flex-direction: column;
            height: 45vh;
            left: 100%;
            opacity: 1;
            position: absolute;
            top: 100px;
            transition: all 0.5s ease;
            width: 100%;
        }

        .navMenu.active {
            background: var(--purple);
            left: 0;
            opacity: 1;
            padding: 8px;
            transition: all 0.5s ease;
            text-align: center;
            z-index: 1;

            ul, li{
                margin-right: 0 ;
            }

            li, a{
                color: var(--white);
            }

            li, a:hover{
                color: var(--black);
            }
        }
    }

    @media screen and (max-width: 425px){
        div{
        padding: 18px 18px;
    }
    ul, li{
        font-size: 1rem;
    }
    }
`

export const Logo = styled.div`
    cursor: pointer;
    font-size:32px;

    p{
        color: var(--black);
        cursor:pointer;
        font-weight: 600;
    }

    span{
        color:#6D28D9;
    }

    @media screen and (max-width: 425px){
        font-size:28px;
    }
    @media screen and (max-width: 320px){
        font-size:22px;
    }
`

export const MobileMenu = styled.i`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
    }
`

export const Video = styled.div`
    display: flex;

    video{
        position: fixed;
        height:100vh;
        width: 100%;
        z-index: -1;
    }

    button{
        border: none;
        border-radius: 48px;
        font-size: 28px;
        margin-left: 28rem;
        padding: 10px 55px;
    }

    a{
        color: var(--purple);
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        text-decoration: none;
  }

    button:hover{
        background-color: var(--purple);
        transition: 0.4s ease-out;

        a{
            color:var(--white);
        }
  }

  @media screen and (max-width: 960px){
    button{
        margin-left: 25rem;
        padding: 10px 35px;
    }
  }
  @media screen and (max-width: 768px){
    button{
        font-size: 22px;
        margin-left: 25rem;
        padding: 10px 25px;
    }
  }
  @media screen and (max-width: 425px){
    button{
        font-size: 18px;
        margin-left: 8rem;
        padding: 10px 25px;
    }
  }
  @media screen and (max-width: 425px){
    button{
        font-size: 14px;
        margin-left: 6.4rem;
        padding: 7.8px 18px;
    }
  }
  
`

export const TypingContainer = styled.div`
    margin-top: 10rem;

    section {
        color: var(--white);
        font-family: 'Lato', sans-serif;
        font-size: 2.3rem;
        height: 16rem;
        margin-left: 3.6rem;
        width: 34rem;
    }
    
    .text{
        color: var(--purple);
        font-size: 3rem;
        font-weight: 600;
        margin-left: -3px;
    }

    @media screen and (max-width: 960px){
    section{
        font-size: 1.8rem;
        height: 13.4rem;
        margin-left: 4rem;
    }

    .text{
        font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 425px){
    section{
        font-size: 1rem;
        height: 8.5rem;
        margin-left: 2rem;
    }

    .text{
        font-size: 1.7rem;
    }
  }
   
  @media screen and (max-width: 320px){
    .text{
        font-size: 1.4rem;
    }
  }
`

export const AboutMe = styled.div`

    background-color: var(--white);
    margin-top:5rem;
    padding:1.8rem 0rem;
    width:100%;

span{
    color:var(--purple);
}
`

export const Title = styled.div`
    flex:1;
    align-items: center;
    justify-content: center;
`

export const TextBox = styled.div`
  display: flex;
p{
  font-family:'Poppins', sans-serif;
  margin-left:3rem;
  margin-top:1.5rem;
  max-width:800px;
}
a{
  color:var(--purple);
  font-family:'Poppins', sans-serif;
  font-weight: 700;
  text-decoration:none;
}
`

export const AboutBar = styled.div`
  background-color: var(--purple);
  border-radius: 10px;
  color: var(--purple);
  margin: 0 20px 0 20px;
  height: 5px;
  width: 50px;
`;