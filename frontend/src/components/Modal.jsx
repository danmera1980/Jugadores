import React, { useEffect } from 'react'

function Modal({title, body, footer, onClose, show}) {

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    }

    useEffect(()=>{
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    },[])

    if(!show){
        return null
    }
console.log(footer);
  return (
    <div className={`modal ${show?'show': ''}`} onClick={()=>onClose()}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2 className="modal-title">{title}</h2>
            </div>
            <div className="modal-body">
                {body}
            </div>
            <div className="modal-footer">
                {footer && footer?.find(element => element==='ok')?<button className='btn btn-success' onClick={()=>onClose()}>OK</button>:null}
                {footer && footer?.find(element => element==='save')?<button className='btn btn-success' onClick={()=>onClose()}>New</button>:null}
                {footer && footer?.find(element => element==='update')?<button className='btn btn-primary' onClick={()=>onClose()}>Update</button>:null}
                {footer && footer?.find(element => element==='cancel')?<button className='btn btn-danger' onClick={()=>onClose()}>Cancel</button>:null}
                {footer && footer?.find(element => element==='close')?<button className='btn btn-secondary' onClick={()=>onClose()}>Close</button>:null}
            </div>
        </div>
    </div>
  )
}

export default Modal