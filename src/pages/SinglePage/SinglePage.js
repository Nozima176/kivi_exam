import React from 'react'
import Car3 from '../../Car3'

// import NumberButton from '../../components/SecondPage/NumberButton/NumberButton';
// import BlueButtons from '../../components/SecondPage/BlueButtons/BlueButtons'
// import ModalWindow from '../../ModaWindowl'
import Links from '../../components/SecondPage/Links/Links'
import Modal from '../../components/SecondPage/Modals/Modal'
import Tabel from '../../components/SecondPage/Table/Table';
import Title from '../../components/SecondPage/Title/Title'
import SingleTable from '../../components/SecondPage/SingleTableComp'
import './SinglePage.scss'
function SinglePage() {
    return (
        <div className="singlePage-container">
            <Links/>
            <Title/>
            {/* <NumberButton/>
            <BlueButtons/> */}
            {/* <ModalWindow/> */}
            
            <div className="singlePage-body">
                <Modal/>
                <Tabel/>
            </div>
            <SingleTable/>
            <Car3/>

        </div>
    )
}

export default SinglePage
