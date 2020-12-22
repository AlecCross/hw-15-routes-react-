import react from 'react';
import { NavLink } from 'react-router-dom';
import photo_collage from '../cityPhotos/images/photos_collage.jpg';
import s from './NavBar.module.css';
import '../../App.css';

let NavBar = () => {
    return (
        <>
                <NavLink to="/">
                    <img className={s.imgSize}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_Arms_of_Kryvyi_Rih.svg/800px-Coat_of_Arms_of_Kryvyi_Rih.svg.png'
                        alt='герб'>
                    </img>
                </NavLink>
                <NavLink to="/photos">
                    <img className={s.imgCollage}
                        src={photo_collage}
                        alt='Коллаж'>
                    </img>
                </NavLink>
                <br />
                <div className="textSet">
                    <NavLink to="/info">
                    Информация о городе
                </NavLink>
                    <br />
                    <NavLink to="/photos">
                    Фото
                </NavLink>
                </div>
                <p className="textSet">Достопримечательности:</p>
                <div className="textSet">
                    <NavLink to="/famous-landmark">
                        Карьер
                </NavLink>
                    <br />
                    <NavLink to="/landmarks">
                        другие
                </NavLink>
                </div>

                {/* <img className={s.imgSize} src={require('../cityPhotos/images/photos_collage.jpg')} alt='герб'></img> */}
        </>
    )
}
export default NavBar