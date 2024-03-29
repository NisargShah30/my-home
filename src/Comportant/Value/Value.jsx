import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'; // Css Library che //  
import { MdOutlineArrowDropDown } from 'react-icons/md' // icon che and MD ae Directory che //  MdOutlineArrowDropDown icon name che / /
import './Value.css'
import data from '../../Utils/accordion' // data Utils na Accordian Fille marhi aave che // 


const Value = () => {
    return (
        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-cointainer'>
                {/* left side  */}
                <div className='v-left'>
                    <div className='image-cointainer'>
                        <img src='./value.png' alt='' />
                    </div>
                </div>
                {/* right side  */}
                <div className='flexColStart v-right'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good blace to live can make your life better
                    </span>
                    <Accordion className='accordian'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {/* // ave retriving a data //  */}
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className='accrodianItem' key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accrodianButton'>

                                                {/* 
                                                <AccordionItemState>
                                                {({expanded})=> expanded ? setClassName("expanded"): setClassName("collapsed")}
                                                </AccordionItemState> */}
                                                {/* // expanded ae parameter che //  */}
                                                {/* ?(if) serClassName  expanded Hoy to expanded :(else, odherWise) serClassName is a collapsed..   */}



                                                <div className='flexCenter icon'>{item.icon}</div>
                                                <span className='primaryText'>
                                                    {item.heading}
                                                </span>
                                                <div className='flexCenter icon'>
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className='secondaryText'>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
