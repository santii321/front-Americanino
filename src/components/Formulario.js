import rifle from "../assets/images/rifle.svg"
import american from "../assets/images/AmericanEagle_logo.png"
import chevi from "../assets/images/chevignon-logo___8aae6d13e43e148fb1c8ac7f3492d255.svg"
import esprit from "../assets/images/esprit-logo___99300a2b60c96335179ecc23322781ee.svg"
import americanino from "../assets/images/americanino.svg"
import nafnaf from "../assets/images/logo-black-nafnaf.png"
import { useState, useEffect } from "react"
import axios from "axios"
const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pais, setPais] = useState([]);
  const [departamento, setDepartamento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [marca, setMarca] = useState('');
  const [error,setError]=useState(false)
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/departamentos')
      .then(res => setDepartments(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const postData = async (e) => {
    if (nombre.length==0|| apellidos.length==0 || tipoIdentificacion.length==0  || numeroIdentificacion.length==0  || fechaNacimiento.length==0  || direccion.length==0 || pais.length==0  || departamento.length==0  || ciudad.length==0  || marca.length==0 ) {
      setError(true)
    }
    else{
    axios.post(`http://localhost:8080/api/cliente`, {
      nombre: nombre,
      apellidos: apellidos,
      tipoIdentificacion: tipoIdentificacion,
      numeroIdentificacion: numeroIdentificacion,
      fechaNacimiento: fechaNacimiento,
      direccion: direccion,
      pais: pais,
      departamento: departamento,
      ciudad: ciudad,
      marca: marca
    })
      .then(function (response) {
        alert("se creo correctamente el cliente")
        setNombre('')
        setApellidos('')
        setTipoIdentificacion('')
        setNumeroIdentificacion('')
        setFechaNacimiento('')
        setDireccion('')
        setPais('')
        setDepartamento('')
        setCiudad('')
        setMarca('')
        setError(false)
      })
  }
}

  return (
    <section className="formulario">
      <section className="alert alert-secondary text-center" role="alert">
        Pensando en mejorar la Experiencia de nuestros clientes, hemos creado este programa de fidelidad con la marca que mas te gusta. <b>REGISTRATE YA!</b>
      </section>
      {error==true &&
               <section className="alert alert-danger text-center">Por favor valide que todos los campos se encuntren correctamente</section>}
      <section className="row g-3">
        <section className="col-md-6">
          <label className="form-label">Nombre</label>
          <input type="text"  className={error&&nombre.length<=0?
               "form-control is-invalid":"form-control"} value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </section>
               
        <section className="col-md-6">
          <label className="form-label">Apellidos</label>
          <input type="text" className={error&&apellidos.length<=0?
               "form-control is-invalid":"form-control"} value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
        </section>
        <section className="col-md-6">
          <label className="form-label">Tipo de Identificación</label>
          <select id="inputState" className={error&&tipoIdentificacion.length<=0?
               "form-select is-invalid":"form-select"} onChange={(e) => setTipoIdentificacion(e.target.value)}>
            <option selected>Seleccione una opción</option>
            <option>Cedula</option>
            <option>Tarjeta de Identidad</option>
            <option>Cedula Extranjería</option>
          </select>
        </section>
        <section className="col-md-6">
          <label className="form-label">Numero de Identificación</label>
          <input type="text" className={error&&numeroIdentificacion.length<=0?
               "form-control is-invalid":"form-control"} value={numeroIdentificacion} onChange={(e) => setNumeroIdentificacion(e.target.value)} />
        </section>
        <section className="col-md-6">
          <label className="form-label">Fecha de Nacimiento</label>
          <input type="date"  className={error&&fechaNacimiento.length<=0?
               "form-control is-invalid":"form-control"} value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </section>
        <section className="col-md-6">
          <label className="form-label">Dirección</label>
          <input type="text"  className={error&&direccion.length<=0?
               "form-control is-invalid":"form-control"} value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </section>
        <section className="col-md-4">
          <label for="inputState" className="form-label">Pais</label>
          <select id="inputState"  className={error&&pais.length<=0?
               "form-select is-invalid":"form-select"} onChange={(e) => setPais(e.target.value)}>
            <option value="">~</option>
            <option value="Colombia">COLOMBIA</option>
          </select>
        </section>
        <section className="col-md-4">
          <label for="inputState" className="form-label">Departamento</label>
          <select id="inputState"  className={error&&departamento.length<=0?
               "form-select is-invalid":"form-select"} onChange={(e) => setDepartamento(e.target.value)}>
            {departments.map(department => (
          <option key={department.id} value={department.departamento}>
            {department.departamento}
          </option>
        ))}
          </select>
        </section>
        <section className="col-md-4">
          <label for="inputState" className="form-label">Ciudad</label>
          <select id="inputState"  className={error&&ciudad.length<=0?
               "form-select is-invalid":"form-select"} onChange={(e) => setCiudad(e.target.value)}>
            <option value="">~</option>
            <option value="Arauca">Arauca</option>
            <option value="Armenia">Armenia</option>
            <option value="Barranquilla">Barranquilla</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Bucaramanga">Bucaramanga</option>
            <option value="Cali">Cali</option>
            <option value="Cartagena">Cartagena</option>
            <option value="Cúcuta">Cúcuta</option>
            <option value="Florencia">Florencia</option>
            <option value="Ibagué">Ibagué</option>
            <option value="Leticia">Leticia</option>
            <option value="Manizales">Manizales</option>
            <option value="Medellín">Medellín</option>
            <option value="Mitú">Mitú</option>
            <option value="Mocoa">Mocoa</option>
            <option value="Montería">Montería</option>
            <option value="Neiva">Neiva</option>
            <option value="Pasto">Pasto</option>
            <option value="Pereira">Pereira</option>
            <option value="Popayán">Popayán</option>
            <option value="Puerto Carreño">Puerto Carreño</option>
            <option value="Puerto Inírida">Puerto Inírida</option>
            <option value="Quibdó">Quibdó</option>
            <option value="Riohacha">Riohacha</option>
            <option value="San Andrés">San Andrés</option>
            <option value="San José del Guaviare">San José del Guaviare</option>
            <option value="Santa Marta">Santa Marta</option>
            <option value="Sincelejo">Sincelejo</option>
            <option value="Tunja">Tunja</option>
            <option value="Valledupar">Valledupar</option>
            <option value="Villavicencio">Villavicencio</option>
            <option value="Yopal">Yopal</option>
          </select>
        </section>
        <section className="col-12">
          <section className="form-check form-check-inline">
            <input className={error&&marca.length<=0?
               "form-check-input is-invalid":"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Rifle" onChange={(e) => setMarca(e.target.value)} />
            <label className="form-check-label" for="inlineRadio1">
              <img className="imagenWeb imgColor" src={rifle}></img>
            </label>
          </section>
          <section className="form-check form-check-inline">
            <input className={error&&marca.length<=0?
               "form-check-input is-invalid":"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="American EAGLE" onChange={(e) => setMarca(e.target.value)} />
            <label className="form-check-label" for="inlineRadio2">
              <img className="imagenWeb" src={american}></img>
            </label>
          </section>
          <section className="form-check form-check-inline">
            <input className={error&&marca.length<=0?
               "form-check-input is-invalid":"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Americanino" onChange={(e) => setMarca(e.target.value)} />
            <label className="form-check-label" for="inlineRadio3">
              <img className="imagenWeb" src={americanino}></img>
            </label>
          </section>
          <section className="form-check form-check-inline">
            <input className={error&&marca.length<=0?
               "form-check-input is-invalid":"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Esprit" onChange={(e) => setMarca(e.target.value)} />
            <label className="form-check-label" for="inlineRadio4">
              <img className="imagenWeb" src={esprit}></img>
            </label>
          </section>
          <section className="form-check form-check-inline">
            <input className={error&&marca.length<=0?
               "form-check-input is-invalid":"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio5" value="Naf Naf" onChange={(e) => setMarca(e.target.value)} />
            <label className="form-check-label" for="inlineRadio5">
              <img className="imagenWeb" src={nafnaf}></img>
            </label>
          </section>
          <section className="form-check form-check-inline">
            <input className={error&&marca.length<=0?
               "form-check-input is-invalid":"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio6" value="Chevignon" onChange={(e) => setMarca(e.target.value)} />
            <label className="form-check-label" for="inlineRadio6">
              <img className="imagenWeb" src={chevi}></img>
            </label>
          </section>
        </section>
        <section className="col-12">
          <button onClick={postData} className="btn btn-dark">Registrarme!</button>
        </section>
      </section>
    </section>
  )

}
export default Formulario