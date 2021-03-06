import React, {useState , useEffect} from 'react'
import PropTypes from 'prop-types'

import "./modal.scss"

const Modal = () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    }, [props.active])

    return (
        <div id={props.id} className={`modal ${active ? "active" : ''}`}>
            {props.children}
        </div>
    )
}

Modal.propTypes ={
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props =>{
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose()
    }
    return(
        <div ref={contentRef} className="modal__content" onClick={closeModal}>
            <i className="bx bx-x"></i>
        </div>
    )
}

ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal
