




export const TablaEstudiante = ({ eliminar, listaEstudiantes }) => {

    const editar = () => {

    }


    return (
        <>

            <nav class="d-inline-flex p-2 bd-highlight" >
                <label htmlFor="filtroEstudiante">Filtro por Nombre:</label>
                <form class="form-inline">
                    <input
                        class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  />
                </form>
            </nav>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaEstudiantes.map((estudiante, index) => <tr key={index}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td> <button className="btn btn-info" onClick={editar}>Editar</button></td>
                            <button className="btn btn-info" onClick={() => eliminar(index)} id={estudiante.id}>Eliminar</button>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}