import React from 'react'
import Cher from "../assets/noroot.jpg"

export default function HomePage() {
    return (
        <div>
            <div className="grid grid-cols-2 w-full min-h-screen">
                <div>
                    <div className=" size-[70%] text-center border rounded-[85%] ml-[150px]  mt-[50px]">
                        <h2 className={"text-[50px] mt-[110px]"}>ДИЗАЙН-БЮРО <span
                            className={"text-[#994843]  "}>CHERES</span></h2>
                        <p className={"w-[280px] text-[18px] ml-[120px]"}>разработка рабочей документации и визуализаций
                            к
                            дизайн-проектам</p>
                        <button
                            className="bg-[#994843] text-[20px] text-white w-[170px] h-[45px] rounded-[35px] mt-[30px] border border-[#994843] hover:bg-transparent hover:text-[#994843] transition duration-300"
                        >
                            услуги
                        </button>


                    </div>
                </div>
                <div>
                    <img src={Cher} alt="" className={"w-[75%] "}/>
                </div>


            </div>
            <div className={"container mx-auto w-full h-auto items-center justify-center text-left bg-[#F1F1F1]"}>
                <div className="flex items-center gap-4 px-8 pt-[50px]">
                    <span className="text-[#C3C3C3] text-[18px] pl-5">ПОЧЕМУ МЫ</span>
                    <h3 className="text-[25px] font-semibold text-black text-center  pl-[50px]">
                        МЫ ПОМОГАЕМ РЕАЛИЗОВАТЬ ВАШ ДИЗАЙН-ПРОЕКТ, РАЗРАБАТЫВАЯ ДЛЯ ЭТОГО
                    </h3>
                </div>
                <div className={" flex  items-center justify-center ml-12 p-8 "}>
                    <div className={" border-[#CDCDCD] border-l-2 pl-2 "}>
                        <p className={"w-[330px] text-[14px]"}> Все необходимые для стройки чертежи, спецификации и
                            развертки</p>

                    </div>
                    <div className={" border-[#CDCDCD] border-l-2 pl-2 "}>
                        <p className={"w-[350px] text-[14px] pl-3"}>Работаем в своем фирменном оформлении, которое
                            выделяется
                            и запоминается</p>

                    </div>
                    <div className={"  border-[#CDCDCD] border-l-2 pl-2 ml-4 "}>
                        <p className={"w-[380px] text-[14px]"}>Дополняем альбом узлами и 3д-фрагментами, чтобы у
                            строителей не оставалось вопросов в ходе
                            реализации</p>
                    </div>
                </div>
            </div>
            <div className={"container mx-auto w-full h-auto items-center justify-center text-left  p-12"}>
                <div className="flex items-center gap-4 px-8 pt-[50px]">
                    <span className="text-[#C3C3C3] text-[18px] pl-5">O CHERES.BURO</span>
                    <h3 className="text-[25px] font-semibold text-black text-center  pl-[50px]">
                        МЫ ПОМОГАЕМ РЕАЛИЗОВАТЬ ВАШ ДИЗАЙН-ПРОЕКТ, РАЗРАБАТЫВАЯ ДЛЯ ЭТОГО
                    </h3>
                </div>
                <div className={" flex  items-center justify-center ml-12 p-8 "}>
                    <div className={"  border-[#CDCDCD]  pl-2 "}>
                        <h2 className={"text-[#9A362F] text-[35px]"}>3+</h2>
                        <p className={"w-[120px] text-[14px] text-[#4C4C4C]"}> лет существует дизайн-бюро</p>

                    </div>
                    <div className={"  border-[#CDCDCD] border-l-2  pl-7 "}>
                        <h2 className={"text-[#9A362F] text-[35px]"}>8000+</h2>
                        <p className={"w-[150px] text-[14px] pl-3 text-[#4C4C4C]"}>м2 разработанной площади</p>


                        </div>
                    <div className={"   border-[#CDCDCD] border-l-2 pl-7 ml-4 "}>
                        <h2 className={"text-[#9A362F] text-[35px]"}>65+</h2>
                        <p className={"w-[180px] text-[14px] text-[#4C4C4C]"}>дизайнеров реализовали проекты с нами</p>
                    </div>
                    <div className={"   border-[#CDCDCD] border-l-2 pl-7 ml-4 "}>
                        <h2 className={"text-[#9A362F] text-[35px]"}>5</h2>
                        <p className={"w-[150px] text-[14px] text-[#4C4C4C]"}>лет общий опыт работы</p>
                    </div>
                    <div className={"   border-[#CDCDCD] border-l-2 pl-7 ml-4 "}>
                        <h2 className={"text-[#9A362F] text-[35px]"}>11</h2>
                        <p className={"w-[180px] text-[14px] text-[#4C4C4C]"}>реализованных объектов за пределами РФ</p>
                    </div>
                </div>
                <div className={"w-full "}>
                    <div className={"flex ml-[260px]  p-2 "}>
                        <div className={"size-3 border  rounded-[35px] border-[#994843]  mt-[20px] "}></div>
                        <p className={"w-[600px] text-[#555555] pl-3 text-[14px]"}>Над каждым проектом трудится практикующий
                            дизайнер-архитектор, соблюдающий строительные
                            нормы, а главное — возможность реализации! Мы знаем, что необходимо показать для того, чтобы
                            строители могли реализовать дизайн-проект</p>
                    </div>
                    <div className={"flex ml-[260px]  p-2"}>
                        <div className={"size-3 border  rounded-[35px] border-[#994843] "}></div>
                        <p className={"w-[700px] text-[#555555] pl-3  text-[14px]"}>Работа в BIM создается 3д-модель помещения, за
                            счет чего сразу же наглядно можно проверить
                            все открывания, примыкания и т. д. и в случае необходимости доработать их</p>
                    </div>
                    <div className={"flex ml-[260px]  p-2"}>
                        <div className={"size-3 border  rounded-[35px] border-[#994843] "}></div>
                        <p className={"text-[#555555] pl-3  text-[14px]"}>Перед сдачей на стройку альбом проходит 2 круга
                            проверок</p>
                    </div>
                    <div className={"float-end mt-[-175px]  mr-[40px]"}>
                        <div className={"flex  p-2"}>
                            <div className={"size-3 border  rounded-[35px] border-[#994843] mt-[20px] "}></div>
                            <p className={"w-[350px] text-[#555555] pl-3  text-[14px]"}>Большой опыт работы. Образование в сфере
                                дизайна и архитектуры</p>
                        </div>
                        <div className={"flex p-2 "}>
                            <div className={"size-3 border  rounded-[35px] border-[#994843]  mt-[20px]"}></div>
                            <p className={"w-[350px] text-[#555555] pl-3  text-[14px] "}>Закрытые и реализованные проекты как жилых,
                                так и коммерческих помещений</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
