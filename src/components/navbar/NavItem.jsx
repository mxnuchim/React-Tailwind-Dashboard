import { useRecoilState } from 'recoil';
import { activeNavItemState } from '../../atoms/ActiveNavBarAtom';

export default function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  return (
    <div
      onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full text-sm flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-[#FF5403] border-l-4 border-transparent ${
         activeNav === link.id && 'border-[#FF5403] '
       } `}
    >
      <span
        className={`group-hover:text-[#FF5403] ${
          activeNav === link.id && 'text-[#FF5403]'
        }`}
      >
        {' '}
        {link.icon}
      </span>
      <h1
        className={`text-gray-600 group-hover:text-[#FF5403] xl:flex hidden ${
          activeNav === link.id && 'text-[#FF5403] '
        }} `}
      >
        {link.title}
      </h1>
    </div>
  );
}
