import exitoso from "../assets/images/registroExitoso.png"
const Modal = () => {

  return (

   <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <img className="registroExitoso" src={exitoso}></img>
            <p className="text-center">Sus datos se han registrado correctamente</p>
          </div>
        </div>
      </div>
    </div>


  )

}
export default Modal