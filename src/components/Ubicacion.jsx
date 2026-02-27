import imagen from '../assets/merida.png' 

function Ubicacion() {
    return(
        <div className="location mt-5 row pb-5">
            <h1 className="h1-ubicacion mt-5 pb-3"><i className="fa-solid fa-location-dot"></i>Ubicación</h1>
            <div className="col-md-6">
                <h3 className='h1-ubicacion pb-2'>Envíos a toda Mérida, Yucatán</h3>
                <img src={imagen} alt="Merida" className='d-block mx-auto pb-1' style={{height:'350px'}} />
            </div>
            <div className="col-md-6">
                <h3 className="h1-ubicacion">Puntos de Entrega</h3>
                <h3 className="h1-ubicacion pb-3">Principales</h3>
                <ul className='center-li'>
                    <li className='p-3'><a target="_blank" href="https://maps.app.goo.gl/HfBh5qKDGkvzFsRt8" rel="noopener"><i className="fa-solid fa-map-pin"></i> Mérida, Yucatán: Calle 17B 101E Colonia Itzimná 97100</a></li>
                    <li className="p-3"><a target="_blank" href="https://maps.app.goo.gl/4xtU4vWwubEMWZRy6" rel="noopener"><i className="fa-solid fa-map-pin"></i> Campus De Ciencias Sociales, Económicas Administrativas y Humanidades UADY</a></li>
                    <li className='p-3'><a target="_blank" href="https://maps.app.goo.gl/Yma3gXH17pGQ74if8" rel="noopener"><i className="fa-solid fa-map-pin"></i> Plaza Las Américas</a></li>
                    <li className='p-3'><a target="_blank" href="https://maps.app.goo.gl/o3Tb2BFggA1f51G1A" rel="noopener"><i className="fa-solid fa-map-pin"></i> Plaza Altabrisa</a></li>
                    <li className='p-3'><a target="_blank" href="https://maps.app.goo.gl/KNDbsCEHoiP4m7T17" rel="noopener"><i className="fa-solid fa-map-pin"></i> Zona Centro</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Ubicacion