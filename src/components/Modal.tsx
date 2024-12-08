import { XCircleIcon } from '@heroicons/react/24/outline'
import React, { Children } from 'react'

function Modal({title, children, isOpen , onOpen}) {
  if (!isOpen) return null
  return (
    <div>
      <div className="backdrop" onClick={()=> onOpen(false)}></div>
      <div className="modal">
        <div className="modal__header">
          <h3 className="title">{title}</h3>
          <button onClick={()=> onOpen(false)} className="icon red">
            <XCircleIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
