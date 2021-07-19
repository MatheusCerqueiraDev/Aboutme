import styled from 'styled-components';

export const Container = styled.header`
    background: var(--transparent);
    font-family: 'Lato', sans-serif;
    font-size: 28px;
    
    
    div{
        display: flex;
        justify-content:space-between;
        padding: 16px 28px;
    }

    a{
        color: var(--black);
        cursor:pointer;
        text-decoration: none;
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
        margin-right: 0 ;
    }

    a:hover{
        border-bottom: 4px solid var(--purple);
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
        height: 100%;
        max-width: 100%;
        object-fit: cover;
        position: fixed;
        z-index: -1;
    }

    button{
        border: none;
        border-radius: 48px;
        font-size: 28px;
        margin-left: 40rem;
        padding: 10px 55px;
    }

    a {
        color: var(--purple);
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        text-decoration: none;
  }
`

export const TypingContainer = styled.div`
    margin-top: 10rem;

    section {
        align-content: center;
        display: flex;

        color: var(--white);
        font-family: 'Lato', sans-serif;
        font-size: 2.3rem;
        height: 16rem;
        margin-left: 8rem;
        width: 34rem;
    }
    
    .text{
        color: var(--purple);
        font-size: 3rem;
        font-weight: 600;
        margin-left: -3px;
    }
   
`