import React from 'react'
import FactorySVG from './FactorySVG'
import '../../styles/pages/aboutus/information.scss'

export default function Information() {
    return (
        <div className="information">
            <div className="container">
                <div className="cos-left">
                    <p>- Industry Applications Society is one of 39 societies of IEEE. It is a source of professional power to its nearly 10,000 worldwide members.</p>
                    <p>- IAS enriches both its individual members and the industry as a whole through the sharing of specific industry-related solutions.</p>
                </div>
                <div className="cos-center">
                    <FactorySVG/>
                </div>
                <div className="cos-right">
                    <p>- Through a network of over 100 chapters globally, regional events and national and international conferences, the society keeps members abreast of current developments in the area of technology in electricity and electronics.</p>
                    <p>- "If your engineering interests are the needs of the industrial or commercial sector, the Industry Applications Society (IAS) will be a valuable professional connection."(ias.ieee.org)</p>
                </div>
            </div>
        </div>
    )
}
