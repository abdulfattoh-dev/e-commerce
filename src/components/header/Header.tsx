import { Link, NavLink } from 'react-router-dom'
import { AlignLeft, ChartNoAxesColumnIncreasing, Heart, Search, ShoppingCart } from 'lucide-react';
import noorlight from '../../assets/NORNLIGHT.svg'
import vector from '../../assets/Vector.svg'

const navTop = [
  { to: '/about', label: 'О компании' },
  { to: '/delivery', label: 'Доставка и оплата' },
  { to: '/returns', label: 'Возврат' },
  { to: '/warranty', label: 'Гарантии' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/blog', label: 'Блог' },
]

const categoryLinks = [
  'Светильники',
  'Люстры',
  'Лампы',
  'Настольные лампы',
  'Ночники',
  'Подсветка',
  'Уличное освещение',
  'Мебельные установки',
]

export default function Header() {
  return (
    <header >
      {/* Top bar */}
      <div className="container hidden md:flex items-center gap-6 h-10 text-sm">
        {navTop.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'text-gray-900' : 'link-muted'}>
            {item.label}
          </NavLink>
        ))}
        <div className="ml-auto text-right">
          <span className="text-[#454545] p-6">8 (800) 890-46-56</span>
          <Link to="/contacts" className="link-muted text-[#454545] ">Заказать звонок</Link>
        </div>
      </div>

      {/* Middle bar */}
      <div className="container flex items-center gap-4 py-3">
        <Link to="/" className="flex items-center gap-4">
          <div className="h-8 w-8 rounded bg-gray-600 text-white grid place-content-center"><img src={vector} alt="" /></div>
          <div className="text-2xl font-semibold tracking-wide"><img src={noorlight} alt="" /></div>
        </Link>

        <button className="inline-flex items-center gap-2 rounded-full bg-[#454545] text-white px-4 py-2 ml-2">
          <AlignLeft />
          <span>Каталог</span>
        </button>

        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            className="w-full rounded-full border border-b-gray-900 pl-6 pr-4 py-2 outline-none focus:border-gray-400"
            placeholder="Поиск по товарам"
          />
        </div>

        <Link to="/favorites" className="relative p-2 rounded-full hover:bg-gray-100">
          <Heart size={20} className='mx-auto text-[#454545]' />
          <div className="text-xs text-center mt-1 text-[#454545] ">Избранное</div>
        </Link>

        <Link to="/compare" className="relative p-2 rounded-full hover:bg-gray-100">
          <ChartNoAxesColumnIncreasing size={20} className='mx-auto text-[#454545]' />
          <div className="text-xs text-center mt-1 text-[#454545] ">Сравнение</div>
        </Link>

        <Link to="/cart" className=" relative p-2 rounded-full hover:bg-gray-100">
          <ShoppingCart size={20} className='mx-auto text-[#454545]' />
          <div className="text-xs text-center mt-1 text-[#454545]">Корзина</div>
        </Link>
      </div>


      {/* Categories bar */}
      <div className="container ">
        <div className="flex flex-wrap justify-between text-sm text-[#777] rounded-full bg-[#F2F2F2] py-2 p-8">
          {categoryLinks.map((label) => (
            <Link key={label} to={`/${encodeURIComponent(label)}`} className="hover:text-[#454545]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}