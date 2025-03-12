import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Logo from "../assets/Logo.png"
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Documents, InfoProducts, MenuList } from "../constans";
const Footer = () => {
  return (
    <footer className="bg-[var(--color-black-2)] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-5">
          <Link to={"/"} className="flex flex-col">
            <img
                alt="Logo"
                src={Logo}
                className=" h-[70px]"
            />
          </Link>
          <div className="flex gap-4 mt-4">
            <div className=" bg-gray-50 size-6 p-[0.4rem] rounded-4xl cursor-pointer hover:text-gray-400">
                <FaPhoneVolume className=" size-full text-[var(--color-black-2)]" />
            </div>
            <div className=" bg-gray-50 size-6 p-[0.3rem] rounded-4xl cursor-pointer hover:text-gray-400">
                <RiWhatsappFill className=" size-full text-[var(--color-black-2)]" />
            </div>
            <div className=" bg-gray-50 size-6 p-[0.3rem] rounded-4xl cursor-pointer hover:text-gray-400">
                <FaTelegramPlane className=" size-full text-[var(--color-black-2)]" />
            </div>
            <div className=" bg-gray-50 size-6 p-[0.3rem] rounded-4xl cursor-pointer hover:text-gray-400">
                <RiInstagramFill className=" size-full text-[var(--color-black-2)]" />
            </div>
          </div>
          <p className="text-xs mt-2 opacity-70 text-[var(--color-black-3)]">
            * Instagram — организация, запрещённая на территории РФ
          </p>
          <Link to="https://st-malugina.ru/" className="text-xs mt-2 !text-[var(--color-black-4)]">разработка сайта: st_malugina</Link>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-black-3)] mb-2">УСЛУГИ</h3>
          <ul className="space-y-3 text-sm">
            {
                MenuList?.filter(menu=>menu.footer).map((menu,indx)=>(
                    <li key={indx} className="cursor-pointer">
                        {menu.label("!text-[var(--color-white)]")}
                    </li>
                ))
            }
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-black-3)] mb-2">ИНФОПРОДУКТЫ</h3>
          <ul className="space-y-3 text-sm">
            {
                InfoProducts?.map((infoProduct,indx)=>(
                    <li  key={indx} className="hover:text-gray-400 cursor-pointer">
                        <Link to={infoProduct?.key} className="!text-[var(--color-white)]">{infoProduct?.label}</Link>
                    </li>
                ))
            }
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-black-3)] mb-2">ДОКУМЕНТЫ</h3>
          <ul className="space-y-3 text-sm">
            {
                Documents?.map((document,indx)=>(
                    <li key={indx} className="hover:text-gray-400 cursor-pointer">
                        <Link to={document?.key} className="!text-[var(--color-white)]">{document?.label}</Link>
                    </li>
                ))
            }
          </ul>
          <p className="text-sm mt-3 text-[var(--color-black-3)]">
            ИП Голдобина Екатерина Сергеевна <br />
            ИНН 665602344669 <br />
            ОГРН 324665800007999
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
