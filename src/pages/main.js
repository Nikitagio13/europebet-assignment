import React from 'react';
import "./main.css";
import prize from "../Assets/Photos/prize-en.png";
import banner from "../Assets/Photos/banner.jpg";
import tabactive from "../Assets/Photos/tab-active.png";
import tabdisabled from "../Assets/Photos/tab-disabled.png";
import lock from "../Assets/Photos/lock.png";
import plus from "../Assets/Photos/plus.png";
import arrow from "../Assets/Photos/arrow.png";
import line from "../Assets/Photos/line.png";
import arrowleft from "../Assets/Photos/arrowleft.png";
import arrowright from "../Assets/Photos/arrowright.png";
import Carousel from './slider';




function main() {
  return (
    <div>
       <div className="backgroundcolor">
        <div className="headerdiv"><p className="headertext">10 იანვრიდან - 12 მარტამდე</p></div>

        <div className='maindiv'>
          
            <img src={prize} alt="" className="prize-en" />
            <p className="pragmatic">PRAGMATIC-ის რჩეულ სლოტებში დიდი ფულადი პრიზები და ქეშდროფები გელოდება</p>
            <p className="pragmaticsml">52 კვირის განმავლობაში, მიიღე ფულადი პრიზები ყოველკვირეული საპრიზო ფონდიდან</p>
            <p className="slots">სლოტები</p>
            <img src={banner} alt="" className="banner"/>

           <div>
                <img src={tabactive} alt="" className="tabactive" />
                <h2 className="tabactive2m">2 000 000₾</h2>
                <p className="tabactive-p">1-4 კვირა</p>
            
                <div>
                    <img src={tabdisabled} alt="" className="tabdisabled1" />
                    <img src={tabdisabled} alt="" className="tabdisabled2" />
                    <h2 className="tabdisabled2m1">2 000 000₾</h2>
                    <h2 className="tabdisabled2m2">2 000 000₾</h2>
                    <p className="tabdisabled-p1">5-8 კვირა</p>
                    <p className="tabdisabled-p2">5-8 კვირა</p>
                </div>

                <img src={lock} alt="" className="lock" />
                <img src={lock} alt="" className="lock2" />

                <h2 className="weeks12txt">12 კვირის განმავლობაში, მიიღე ფულადი პრიზები ყოველკვირეული საპრიზო ფონდიდან</h2>

                <div className="container">
                    <div className="minibox1">
                        <p className="minibox1p">ადგილი</p>
                        <p className="minibox1p2">პრიზი</p>
                    </div>
                    <div className="minibox2">
                      <p className="minibox2p">რაოდენობა</p>
                      <p className="minibox1p2">პრიზი</p>
                    </div>
                    
                </div>
                
                <h1 className="title248k">ყოველდღიური 248 000₾</h1>
                <h1 className="top1500">TOP 1500</h1>

                <h1 className="title248k-2">ყოველდღიური 248 000₾</h1>
                <h1 className="top1500-2">1500 პრიზი</h1>

                <img src={plus} alt="" className="plus"/>

              <div className='boxtitle'>
                <p className="boxp1">ᲛᲝᲮᲕᲓᲘ ᲧᲝᲕᲔᲚᲙᲕᲘᲠᲔᲣᲚ ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ</p>
                    <p className="boxp2">ᲧᲝᲕᲔᲚᲓᲦᲔ ᲛᲘᲘᲦᲔ ᲨᲔᲛᲗᲮᲕᲔᲕᲘᲗᲘ ᲤᲣᲚᲐᲓᲘ ᲞᲠᲘᲖᲘ ᲜᲔᲑᲘᲡᲛᲘᲔᲠ ᲡᲞᲘᲜᲖᲔ</p>
                    <p className="boxp1txt">ერთ სპინზე დაფიქსირებული მოგების ყველაზე მაღალი კოეფიციენტი არის შენი ქულა ლიდერბორდში</p>
                    <p className="boxp2txt">ყოველდღიური, 36 000₾-ის ფულადი პრიზები</p>
                </div>
                
                <p className="prizes">*პრიზები დაირიცხება ავტომატურად მოგებისთანავე.</p>
                <p className="prizes2">*ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება ავტომატურად, მონაწილე თამაშების ფანჯარაში</p>
           
        
         <div className="blueminicontainer">

             <div className="minicontainer1">
               <p className="minicontainer1p">40 000₾</p>
               <p className="minicontainer1p2">1</p>
            </div>

             <div className="minicontainer2">
               <p className="minicontainer2p">20 000₾</p>
               <p className="minicontainer2p2">2</p>
             </div>

             <div className="minicontainer3">
               <p className="minicontainer3p">8 000₾</p>
               <p className="minicontainer3p2">3</p>
             </div>

             <div  className="minicontainer4">
               <p className="minicontainer4p">4 000₾</p>
               <p className="minicontainer4p2">4-10</p>
             </div>

             <div  className="minicontainer5">
               <p className="minicontainer5p">2 000₾</p>
               <p className="minicontainer5p2">11-20</p>
             </div>

             <div  className="minicontainer6">
               <p className="minicontainer6p">800₾</p>
               <p className="minicontainer6p2">21-50</p>
             </div>

          </div> 

          <div className="orangeminicontainer">

              <div className="orangecontainer1">
              <p className="ominicontainer1p">4 000₾</p>
               <p className="ominicontainer1p2">1</p>
              </div>

              <div className="orangecontainer2">
              <p className="ominicontainer2p">2 000₾</p>
               <p className="ominicontainer2p2">2</p>
              </div>

              <div className="orangecontainer3">
              <p className="ominicontainer3p">400₾</p>
               <p className="ominicontainer3p2">5</p>
              </div>

              <div className="orangecontainer4">
              <p className="ominicontainer4p">200₾</p>
               <p className="ominicontainer4p2">12</p>
              </div>

              <div className="orangecontainer5">
              <p className="ominicontainer5p">80₾</p>
               <p className="ominicontainer5p2">110</p>
              </div>

              <div className="orangecontainer6">
              <p className="ominicontainer6p">40₾</p>
               <p className="ominicontainer6p2">370</p>
              </div>

          </div>

          <div >
              <p className='date1'>2.07-29.07</p>
              <p className='date2'>2.07-29.07</p>
              <p className='date3'> 2.07-29.07</p>
              <p className='date4'>2.07-29.07</p>
          </div>

          <div className="spin">
              <h1 className="spinh1">დაატრიალე რჩეული სლოტები:</h1>
              <p className="spinp">სპინზე ფსონის მინ. რაოდენობა - 2₾</p>
          </div>


        <div>
           <p className="rules">წესები და პირობები</p>

           <div className="rulen">
              <p className="rulen1">როდის იწყება და რა ფორმატით გაიმართება აქცია</p>
              <p className="rulen2">როგორ მივიღო აქციაში მონაწილეობა?</p>
              <p className="rulen3">სხვადასვა</p>
           </div>


        <div>
              <img src={arrow} alt="" className="arrow1"/>
              <img src={arrow} alt="" className="arrow2"/>
              <img src={arrow} alt="" className="arrow3"/>
              <img src={line} alt="" className="line"/>
          </div>
        </div>


        <footer>
          <button className="bet">დადე ფსონი</button>
          <p className="next">ᲨᲔᲛᲓᲔᲒᲘ ᲐᲥᲪᲘᲐ</p>
          <p className="prev">ᲬᲘᲜᲐ ᲐᲥᲪᲘᲐ</p>
          <img src={arrowleft} alt="" className="arrowleft" />
          <img src={arrowright} alt="" className="arrowright" />
        </footer>

          <div>
            <Carousel />
          </div>

           </div> 
        </div>
       </div> 
    </div>
  )
}

export default main;