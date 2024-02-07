import React from 'react'
import './Contect.css'
import { MdCall } from 'react-icons/md'; // aa icons md directory mathi aave che // 
import { BsFillChatDotsFill } from 'react-icons/bs'; // aa icons bs directory mathi aave che // 
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contect = () => {
    return (
        <section className='c-wraper'>
            <div className='paddings innerWidth flexCenter c-cointainer'>
                {/* left side  */}
                <div className='flexColStart c-left'>
                    <span className='orangeText'>Our Contects</span>
                    <span className='primaryText'>Easy to Contect Us</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <div className='flexColStart contectModes'>
                        {/* first Row  */}
                        <div className='flexCenter row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Call Now</div>
                            </div>

                            {/* second row  */}

                            <div className='flexCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Chat Now</div>
                            </div>

                              {/* Third Row  */}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Vidio Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Vidio Call Now</div>
                            </div>
  
                            {/* four row  */}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Meassage</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Meassage Now</div>
                            </div>




                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <div className='image-cointainer'>
                        <img src='./contact.jpg' alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contect
