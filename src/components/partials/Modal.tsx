import ReactDOM from 'react-dom'

import { IModalProps } from '../../utils/types'


const Modal = ({ isShow, closeModal, children, }: Partial<IModalProps>) => {

    return ReactDOM.createPortal(

        <div className={`h-auto inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center w-full z-50 transition ease-in-out delay-300 duration-300 ${isShow === true ? 'fixed': 'hidden'}`}>
            <div className={`absolute w-full inset-0 flex justify-center transition ease-in-out delay-150 duration-300 `}>
                {children}
            </div>
        </div>,
        document.querySelector('.modal-container')!

    )
}

export default Modal