import { Link } from 'react-router-dom'
import noorlight from '../../assets/NORNLIGHT.svg'
import vector from '../../assets/Vector.svg'
import payment from '../../assets/image 1.svg'
import vk from '../../assets/vk-one.svg'


const buyers = [
  { to: '/about', label: 'О компании' },
  { to: '/delivery', label: 'Доставка и оплата' },
  { to: '/returns', label: 'Возврат' },
  { to: '/warranty', label: 'Гарантии' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/blog', label: 'Блог' },
]

const products = [
  'Люстры',
  'Светильники',
  'Бра',
  'Торшеры',
  'Комплектующие',
  'Настольные лампы',
  'Споты',
  'Трековые светильники',
  'Уличные светильники',
  'Технические светильники',
  'Светодиодные ленты',
]

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#F2F2F2]">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-27">
        {/* Logo and contact */}
        <div>
          <div className="flex items-center gap-4">
            <div className=" w-20 rounded grid place-content-center"><img src={vector} alt="" /></div>
            <div className=' w-100'><img src={noorlight} alt="" /></div>
          </div>
          <div className="mt-6 text-lg text-[#454545]">8 (800) 890-46-56</div>
          <div className="mt-6">
            <div />
            <img src={payment} alt="" />
          </div>
          <div className="mt-6 space-y-2 text-sm text-[#777]">
            <div className='mb-7'>
              <Link to="/privacy" className=" hover:text-[#454545] ">Политика конфиденциальности</Link>
            </div>
            <div>
              <Link to="/terms" className="hover:text-[#454545]">Пользовательское соглашение</Link>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <div>
              <img src={vk} alt="" />
            </div>
            <div>
              <img src={vk} alt="" />
            </div>
            <div>
              <img src={vk} alt="" />
            </div>
          </div>
        </div>

        {/* Buyers */}
        <div>
          <div className="text-lg font-semibold mb-4 text-[#454545]">Покупателям</div>
          <ul className="space-y-5 text-[#777]">
            {buyers.map((b) => (
              <li key={b.to}>
                <Link to={b.to} className="hover:text-[#454545]">{b.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products columns */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8 text-[#454545]">
          <div>
            <div className="text-lg font-semibold mb-4">Товары</div>
            <ul className="space-y-5 text-[#777]">
              {products.slice(0, 6).map((item) => (
                <li key={item}><Link to={`/${encodeURIComponent(item)}`} className="hover:text-[#454545]">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="pt-10">
            <ul className="space-y-5 text-[#777]">
              {products.slice(6).map((item) => (
                <li key={item}><Link to={`/${encodeURIComponent(item)}`} className="hover:text-[#454545]">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}