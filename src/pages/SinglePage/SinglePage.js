import React from 'react'
import Car3 from '../../Car3'

import Header from '../../containers/Header/Header'
import FooterTop from '../../components/FirstPage/Footer/FooterTop'
import FooterBottom from '../../components/FirstPage/Footer/FooterBottom'
import Links from '../../components/SecondPage/Links/Links'
import Modal from '../../components/SecondPage/Modals/Modal'
import Tabel from '../../components/SecondPage/Table/Table';
import Title from '../../components/SecondPage/Title/Title'
import SingleTable from '../../components/SecondPage/SingleTableComp'
import './SinglePage.scss'
function SinglePage() {
    return (
        <div>
            <Header/>
        <div className="singlePage-container">
            
            <Links/>
            <Title/>
           
            
            <div className="singlePage-body">
                <Modal/>
                <Tabel/>
            </div>
            <SingleTable/>
            <Car3/>

        </div>
            <FooterTop/>
            <FooterBottom/>

        </div>
    )
}

export default SinglePage
