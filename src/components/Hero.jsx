import React from 'react'
import image1 from "../assets/png/image.png"

function Hero() {
    return (
        <div>
            <div className='bg_yellow'>
                <div className='container'>
                    <div className='dflex justify_content_between align_item_center flex_column'>
                        <div>
                            <p className='fs_40 fw_700 color_black pt_50'>It was popularised</p>
                            <p className='pt_24 fs_16 fw_400 color_black opacity_08 mw_350'>Have you heard? We’re hiring! We have 3,333 working positions to fill on the Solana blockchain. Once all positions are filled it’s crucial to stay on your toes because the corporate penguins are coming! Any penguins caught chilling on the floor when corporate arrives will be immediately fired and swept away! This makes SFFB a deflationary collection until we reach a maximum staff of 1,666 mcnoots in total.</p>
                            <button className='mt_48 pt_15 pb_15 pl_30 pr_30 fs_18 fw_500 color_white bg_button border_none cursor_pointer'>DISCOVER MORE</button>
                        </div>
                        <div>
                            <img src={
                                image1
                            } alt="image 1" className='w_100 h_100 pt_50 pb_50' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
