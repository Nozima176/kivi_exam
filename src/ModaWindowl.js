// import zIndex from '@material-ui/core/styles/zIndex'
import React, {useState} from 'react'
import Car2 from './Car2'

import Modal from 'react-modal'
import CarTwo from './components/FirstPage/CarTwo/CarTwo'
import './Modal.scss'

function ModalWindow() {

    const [modalIsOpen, setIsModalOpen] = useState(false)
    return (
      <div>


        <button onClick={ () =>  setIsModalOpen(true) }>open</button>
        <Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setIsModalOpen(false)}
        style={
            {
                overlay: {
                    width:'100vw',
                    height: '100vh',
                    color: 'lightblue',
                    backgroundColor: 'rgba(255, 255, 255, 0.784618)',
                    zIndex: '20001'
                }
            }
        }>

            <Car2/>
           <div className="content">
                <h2>title</h2>
                <p>hghghghgf</p>
           </div>
            <div>
                <button onClick={() => setIsModalOpen(false)}>
                    close
                </button>
            </div>
        </Modal>
        </div>
    )
}

export default ModalWindow
