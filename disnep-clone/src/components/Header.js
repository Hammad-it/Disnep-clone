import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
       <Logo src="/images/logo.svg" />
       <NavMenu>
          <a>
            <img src='/images/home-icon.svg' />
            <span>HOME</span>
          </a>
          <a>
            <img src='/images/search-icon.svg' />
            <span>SEARCH</span>
          </a>
          <a>
            <img src='/images/watchlist-icon.svg' />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src='/images/original-icon.svg' />
            <span>Orignals</span>
          </a>
          <a>
            <img src='/images/movie-icon.svg' />
            <span>MOVIES</span>
          </a>
          <a>
            <img src='/images/series-icon.svg' />
            <span>SERIES</span>
          </a>
       </NavMenu>
       <UserImg src='https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-6/318307547_1355583021863723_8310545155459634329_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFtXf8b9TNETefyMD-iU3O0czPnkhuu-a5zM-eSG675rtpHU2vHC4U2vvTsnR-7t-8_Sj3dy_neuh4TceT_GBVA&_nc_ohc=VveRGtRM7XAAX8mRqov&_nc_ht=scontent.flhe3-1.fna&oh=00_AfDxjZgEfGwAK9fqVlzwkRZw39JQXY6ShzotbTjPcdo1FQ&oe=63C97546'/>
    </Nav>
  )
}

export default Header


const Nav=styled.nav`
height:70px;
background-color:#090b13;
display:flex;
align-items:center;
padding:0 36px;
justify-content:space-between;
`

const Logo=styled.img`
width:80px;

`

const NavMenu=styled.div`
   display:flex;
   align-items:center;
a{
    display:flex;
    align-items:center;
    padding: 0 12px;
    cursor:pointer;
    img{
       height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
    }
}
`

const UserImg=styled.img`
   width:40px;
   height:40px;
   border-radius:50%;
`