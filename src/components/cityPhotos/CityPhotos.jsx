import react from 'react';
import s from './CityPhotos.module.css';


let CityPhotos = () =>{
    return(
        <div className={s.gallery}>
            <img src="https://wikiway.com/upload/hl-photo/862/f20/krivoy-rog_47.jpg"
             alt="Лодочная станция"/>
            <img src="https://ua.igotoworld.com/frontend/webcontent/images/tours/158038_800x600_3dH8UhZb-lA311.jpg"
             alt="Колокольня"/>
            <img src="https://kr.informator.ua/wp-content/uploads/2020/09/119895214_659875794914006_3677673973177906367_o.jpg"
             alt="Козак Рог"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/%D0%A0%D0%B0%D0%B4%D1%83%D0%B3%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D0%B4%D0%BE%D0%B6%D0%B4%D1%8F.jpg/1200px-%D0%A0%D0%B0%D0%B4%D1%83%D0%B3%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D0%B4%D0%BE%D0%B6%D0%B4%D1%8F.jpg" 
            alt="Исторический центр"/>
            <img src="https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/9481_800x600_15052390.jpg" 
            alt="Цветочные часы"/>
            <img src="https://ki.ill.in.ua/m/670x450/24367558.jpg" alt="Завод1"/>
            <img src="https://www.liga.net/images/general/2019/08/26/20190826124446-2663.jpg" alt="Завод2"/>

            {/* https://lh3.googleusercontent.com/proxy/sjw3bBnZDEEQwKofXHlEmdvwY2gAAaFAn_C0M_xr1X2UAxwliJ369in3jPN0Fz-1O526Ri1hnOU6xbiAiy12LMkUxrkWn_IYEePg4Y0Rs5PfhLQsfmDASpTBwoIGJ0TtmvY */}
            <img src="http://girnyk.com.ua/sites/default/files/pictures/2017/04/06/spasskaya.jpg" alt="Собор"/>
            <img src="https://www.nezabarom.ua/img/cities/29697b95dc.jpg" alt="95й Квартал"/>
            <img src="https://yesyes.ua/uploads//users/946/portfolio/895508016e8473959e11a02cff7254e3_c1.jpg"
             alt="Затопленный карьер"/>
            <img src="https://kr.informator.ua/wp-content/uploads/2019/11/tramvaj.jpg" alt="Скоростной"/>
            <img src="https://photos.wikimapia.org/p/00/05/41/76/44_big.jpg" alt="Театр Шевченка"/>
        </div>
    )
}

export default CityPhotos