import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';

export default function OrphanagesMap() {
  return (
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy" />

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita 😀</p>
            </header>
            <footer>
                <strong>Aguaí</strong>
                <span>São Paulo</span>
            </footer>
        </aside>

        <div></div>

        <Link to="#" className="">

        </Link>
    </div>
  );
}