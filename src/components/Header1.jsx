import React from 'react';
import HeroImg from '../assets/hero.webp';
import './header.css';
const Header1 = () => {
  return (
    <div className='app__header gradient__bg'>
        <div className='app__header-container '>
        <h1 className='headtext'>
        ከብር ይልቅ <span className='span__golden'>ትምህርትን</span> ፥ከተፈተነ ወርቅም ይልቅ <span className='span__golden'>ዕውቀትን </span>ተቀበሉ::<br/> 
        </h1>
        <h2 style={{color: '#fff'}}> ምሳሌ 8፥10</h2>
        <p className='p__paragraph'>
        የማይጸልይ ሰው ቅፅር የሌላት ሀገርን ይመስላል ያንን ማንም 
        እየገባ እንዲዘርፈው እርሱም የተሰጠውን ፀጋ ያጣል"  ቅዱስ ማር ይስሀቅ
        </p>
        <div>
            <button className='custom__button'>Join for free</button>
        </div>
        </div>
        <div className='app__header-img'>
            <img src={HeroImg} alt="" />
            <div class="overlay"></div>
        </div>
    </div>
  )
}

export default Header1
