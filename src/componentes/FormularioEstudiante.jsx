import { useEffect, useState } from "react"






export const FormularioEstudiante = ({ agregar, datos, editar}) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [boton, setBoton] = useState("Registrar");

    const botonMostrar = (index)=>{
        if(index ==0){
            
                setBoton("Actualizar")
        }else{
                setBoton("Registrar")
        }   
    }

    useEffect(() => {
        if (datos) {
            setId(datos.id);
            setNombre(datos.nombre);
            setSemestre(datos.semestre);
            botonMostrar(0);

        }
    }, [datos]);

    const limpiar = ()=>{
        setId("");
        setNombre("");
        setSemestre("");
    }
    const guardarEstudiante = (valorBoton) => {
        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        }
        if(valorBoton == "Registrar"){
            agregar(estudiante)
            limpiar();
        }else{
            editar(estudiante)
            limpiar();
        }
        
    }

    return (
        <>
            <form>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} />
                </div>   
            </form>
            <button type="submit" className="btn btn-primary" onClick={() => {guardarEstudiante(boton); botonMostrar(1)}} >{boton}</button>
        </>
    )
}

// import { useEffect, useState } from "react"






// export const FormularioEstudiante = ({ agregar, datos }) => {
//     const [id, setId] = useState("");
//     const [nombre, setNombre] = useState("");
//     const [semestre, setSemestre] = useState("");
//     const [boton, setBoton] = useState(<button type="submit" className="btn btn-primary">Registrar</button>);

//     const botonMostrar = ()=>{
//         return(
//             <button type="submit" className="btn btn-primary">Actualizar</button>
//         );
//     }

//     useEffect(() => {
//         if (datos) {
//             setId(datos.id);
//             setNombre(datos.nombre);
//             setSemestre(datos.semestre);
//             botonMostrar();

//         }
//     }, [datos]);

//     const guardarEstudiante = (event) => {
//         event.preventDefault();

//         let estudiante = {
//             id: id,
//             nombre: nombre,
//             semestre: semestre
//         }
//         agregar(estudiante)
//         setId("");
//         setNombre("");
//         setSemestre("");
//     }

//     return (
//         <>
//             <form onSubmit={guardarEstudiante}>
//                 <div className="form-group ">
//                     <label htmlFor="id">ID Estudiante</label>
//                     <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="nombre">Nombre</label>
//                     <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="semestre">Semestre</label>
//                     <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} />
//                 </div>
//                 <botonMostrar/>
                
//             </form>
//         </>
//     )
// }