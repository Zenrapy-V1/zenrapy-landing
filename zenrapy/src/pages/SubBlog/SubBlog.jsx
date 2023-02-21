import React, { useState } from 'react'
import "./index.scss"
import {FaCircle } from 'react-icons/fa'
import AboutUsImage1 from "../../assets/aboutUsImage1.png"

const featuresData = [
    {
      title: '2. Deep Tissue Massage :',
      text: 'Deep tissue massages are used to break up scar tissue and break down muscle adhesions (the “knots” that we feel in our muscles are muscle adhesions, which are bands of rigid and painful muscle tissue). These knots can inhibit our circulation and cause pain and inflammation. The therapist gradually works his/her way through the layers of muscle fibers and fascia to release knots or trigger points and adhesions. The fascia is gently manipulated and stretched to the point that it becomes more fluid. The therapist continues through each layer of tissue by separating muscle fiber and applying pressure to knots and trigger points gradually. In deep tissue a deeper pressure can be used however the experienced therapist knows how to gradually increase their pressure with little to no discomfort. While an experienced therapist can perform deep tissue with little to no discomfort to the client there are deep tissue modalities such as Rolfing which is extremely uncomfortable and causes pain which can last for days. Finally deep pressure, often erroneously called deep tissue, is simply the therapist using deep pressure on the client. The therapist combines his/her body weight and leverage to apply pressure to knots and trigger points with the intent of releasing them. The therapist often employs the use of their elbows, fists, forearms and sometimes knees to accomplish this purpose. Again, the experienced therapist knows how to accomplish this with minimal discomfort to the client. Unfortunately, more often than not, deep pressure is called deep tissue and therapists begin applying the pressure right off the bat without warming the tissue or applying pressure gradually. This results in pain and discomfort.',
    },
    {
      title: '3. Sports massage :',
      text: 'Sports massage is proven to release and reduce tension in muscles, improve circulation and encourage the removal of waste products such as lactic acid during high intensity activity and can help to relax the body Sports massage can help enormously with the treatment of shin splints by improving the flexibility of the muscle in the lower leg. However, it is important that the therapist avoids the inflamed areas along the tibia (shin bone) which are often painful. Ice your shin. This will help ease pain and swelling. Ice your shin for 20-30 minutes every three to four hours for two to three days, or until the pain is gone. Sports massage is proven to release and reduce tension in muscles, improve circulation and encourage the removal of waste products such as lactic acid during high intensity activity and can help to relax the body. All of this helps promote recovery and reduces the chance of muscle injury. Those who are prone to overuse injuries often benefit from sports massage in between training sessions, as the muscles are allowed to relax and recover fully before the next session. In addition to the physical benefits, sports massage can help an athlete to mentally prepare for their activity or competition.',
    },
    {
      title: "4. Couples massage :",
      text: "If you’ve never had a couple’s massage, you have been missing out on one of the most delightful and memorable relaxation experiences available. Sharing such a relaxing and memorable occasion provides opportunities for connecting and bonding with your loved one in a unique and meaningful way. A couple’s massage is just like any other massage service, but you and your partner receive the massage at the same time, on separate tables, and by two different massage therapists. The massage is generally offered in a private room on side-by-side massage tables. Many couple’s massage treatments may offer special amenities such as champagne, chocolates, and fruit. Before any massage treatments can begin, a consultation with the massage therapist is usually required to discuss your goals and answer any questions you may have. You and your massage partner will disrobe and lie down on the massage tables with sheets covering them. The therapist will leave the room after a short time. Women can introduce their significant other to the benefits of massage therapy through a couple's massage. Most people who If they don't have to do it alone, people who are unfamiliar with massage can be convinced to give it a try. Both massages will end at the same time. When the session is over, they leave the room while you dress.",
    },
    {
      title: '5. Trigger Point massage',
      text: 'Trigger points are sore, painful spots—also called knots—found in muscles. These knots are sensitive and when pressure is applied, it produces pain in a different part of your body. A trigger point massage helps work out those knots and reduce the pain associated with them. A trigger point is also known as a knot. A trigger point is irritated and inflamed soft tissue. (muscle, tendon and ligament.) trigger points are mainly found in muscle. Trigger point therapy is putting pressure on the trigger point and holding the pressure until the muscle relaxes. Some clients/patients fall asleep during this therapy. Yes elbows can be used, but in moderation, usually in larger muscle groups such as the glutrus muscles. This is very very effective for pain relief especially when combined with deep tissue massage. You might feel like you over exercised the next day or two but not feel like you were hit by a bus.',
    },
  ]

const SubBlog = () => {

    return (  
        <div className='about-page'>
           <div className='about-section'>
                <h2>Types of massage services zenrapy<br/> offers</h2>
                <div className='sub-paragraph'>
                    <p>
                        There are various types of massage services for health and wellness but we will 
                        be talking about the top popular ones among clients and patients 
                    </p>
                </div>
                <div className='about'>
                    <img src={AboutUsImage1} />
                </div>
           </div>
           
           <div className="about-paragraphs">
                <p className='description'>1. Swedish/Relaxation Massage :</p>
                <div className='sub-paragraph'>
                    <p>
                        Swedish massage is the most well-known and widely practiced sort of therapeutic massage. Swedish massage focuses on muscle relaxation, targeting superficial muscles and increasing blood circulation. In general, swedish massage as a modality is used for relaxation and to warm and prepare the tissue for deeper, more specific work. 
                        Check out a number of the advantages below to find out why a Swedish massage could be an excellent choice for you.
                    </p>
                    <p>
                       <FaCircle style={{width: "10px", height: "10px"}} /><strong> Pain management.</strong> Swedish massages are often an efficient method for managing that pain in a natural way. Notify your massage therapist about your pain points, he or she will target those areas and use a stroking motion to enhance local circulation and reduce muscle tension.
                    </p>      
                    <p>
                       <FaCircle style={{width: "10px", height: "10px"}} /><strong> Increased blood flow.</strong>   Your Swedish massage Therapist should use effleurage – an extended, stroking motion within the direction of blood flow towards the guts – so as to open up your blood vessels and increase your blood flow. With increased blood flow you can deliver more nutrients and oxygen to your muscles and help your body in removing toxins more efficiently. Rehabilitation for muscle injuries. Your Therapist should also believe in kneading and friction to deal with any existing injuries, like adhesions. Many of us say that this system, which relaxes layers of muscle, makes it feel as if the Massage Therapist is “working out the kinks.”
                    </p>      
                    <p>
                       <FaCircle style={{width: "10px", height: "10px"}} /><strong> Increased flexibility.</strong>  When your muscles are more relaxed, you’re ready to experience a wider range of motion. Mixing Swedish massage with stretching is a good way to debar workout-related injuries and obtain the foremost out of their periods of exercise. Reduced stress. Swedish massages are meant to maximize relaxation. The mixture of the massage and the environment should help you get relaxed while lowering the extent of the strain hormone cortisol in your body. Swedish massage may be a good way to treat yourself—but it’s also quite that. The physical and psychological state benefits of a Swedish massage make it an excellent option for those new massagers or someone looking to possess an entire massage experience.
                    </p>      
                </div>

                <div>
                    <div className="">
                        {featuresData.map((item, index) => (
                        // <Feature key={item.title + index}/>
                            <div key={item.title + index}>
                               <p className='description'>{item.title}</p>
                                <div className="sub-paragraph">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           </div>
        </div>
    );
}
 
export default SubBlog;