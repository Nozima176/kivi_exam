import React from 'react'
// import Chart from '../../Chart'
import HeaderTop2 from '../../components/FirstPage/Header/HeaderTop2';
import HeaderBottom2 from '../../components/FirstPage/Header/HeaderBottom2';
import FooterTop from '../../components/FirstPage/Footer/FooterTop'
import ChartTab from '../../components/FirstPage/ChatTab'

function ChartPage() {
    return (
        <div>
            <HeaderTop2/>
            <HeaderBottom2/>

            {/* <Chart/> */}
            <ChartTab/>
            <FooterTop/>
        </div>
    )
}

export default ChartPage
