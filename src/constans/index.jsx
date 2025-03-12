import { Link } from "react-router-dom";

export const MenuList=[
    {
        label:(className) => <Link to="/" className={className}>Главная</Link>,
        key: '/',
    },
    {
        label:(className) =><Link to="/chertezhi" className={className}> ЧЕРТЕЖИ</Link>,
        key: '/chertezhi',
        footer:true,
    },
    {
        label:(className) =><Link to="/interernaya-i-arhitekturnaya-vizualizacii" className={className}> ВИЗУАЛИЗАЦИЯ</Link>,
        key: '/interernaya-i-arhitekturnaya-vizualizacii',
        footer:true,
    },
    {
        label:(className) =><Link to="/planirovochnoe-reshenie" className={className}> Планировочное решение</Link>,
        key: '/planirovochnoe-reshenie',
        footer:true,
    },
    {
        label:(className) =><Link to="/info" className={className}> ИНФОПРОДУКТЫ</Link>,
        key: '/info',
    },
]
export const InfoProducts=[
    {
        label:'Штриховки ArchiCAD',
        key:"shtrihovki"
    },
    {
        label:'Инструкция «Наполнение чертежей»',
        key:"instrukciya"
    },
    {
        label:'Сложные профили 3в1',
        key:"profil"
    },
    {
        label:'Чек-лист "Проверка чертежей"',
        key:"chek-list"
    },
    {
        label:'ТТ канал',
        key:"tg"
    },
    {
        label:'Библиотеки для ArchiCAD',
        key:"biblioteca"
    }

]
export const Documents=[
    {
        label:'Политика конфиденциальности',
        key:"policy"
    },
    {
        label:'Договор оферты Инфопродукты',
        key:"oferta-info"
    },
    {
        label:'Договор оферты Чертежи',
        key:"https://disk.yandex.ru/d/UbGbwOOw9njnEw"
    }
]