import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalConfirmacion = ({ activo, onCerrar, onSubmit }) => {
    if (!activo) return null

  return (
    <Modal show={activo} onHide={onCerrar} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que deseas realizar el pedido?
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-success mx-3' onClick={onSubmit}>Confirmar</Button>
        <Button className='btn-danger' onClick={onCerrar}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalConfirmacion