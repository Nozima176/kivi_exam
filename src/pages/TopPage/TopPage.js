import React from 'react'
import Car4 from '../../Car4'
import Search from '../../components/SecondPage/Search'
import TopBody from '../../TopBody'
import Header from '../../containers/Header/Header'
import FooterTop from '../../components/FirstPage/Footer/FooterTop'
import FooterBottom from '../../components/FirstPage/Footer/FooterBottom'
import InputRange from '../../components/FirstPage/IntupRange'
import Drops from '../../components/FirstPage/Drops'
// import HeaderTop2 from '../../components/FirstPage/Header/HeaderTop2'
// import HeaderBottom2 from '../../components/FirstPage/Header/HeaderBottom2'
function TopPage() {
    return (
        <div>
            {/* <HeaderTop2/>
            <HeaderBottom2/> */}
            <Header/>
           <Search/>
           <InputRange/>
           <Drops/>
            <TopBody/>
            
            <Car4/>
            <FooterTop/>
            <FooterBottom/>

        </div>
    )
}

export default TopPage
