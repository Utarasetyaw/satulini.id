// src/components/Navbar/components/VerticalMenu.tsx
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { useLanguage } from '../../../context/LanguageContext';
import type { Language } from '../../../context/LanguageContext';
import { ChevronDownIcon } from '../Icons';

interface VerticalMenuProps {
    closeMenu?: () => void;
}

export const VerticalMenu: FC<VerticalMenuProps> = ({ closeMenu }) => {
    const { t, language, setLanguage } = useLanguage();
    const languages: { code: Language, name: string }[] = [
        { code: 'en', name: 'English' },
        { code: 'id', name: 'Indonesia' },
        { code: 'zh', name: '中文' },
    ];

    const handleClose = () => {
        if (closeMenu) {
            closeMenu();
        }
    };
    
    return (
        <div className="flex flex-col gap-y-1">
            <NavLink to="/" onClick={handleClose} className="block rounded-lg py-2 px-3 text-base font-medium text-gray-700 hover:bg-black/5">
                {t('home')}
            </NavLink>
            <NavLink to="/pricing" onClick={handleClose} className="block rounded-lg py-2 px-3 text-base font-medium text-gray-700 hover:bg-black/5">
                {t('pricing')}
            </NavLink>
            <NavLink to="/whitepaper" onClick={handleClose} className="block rounded-lg py-2 px-3 text-base font-medium text-gray-700 hover:bg-black/5">
                {t('whitepaper')}
            </NavLink>
            <Disclosure as="div">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center justify-between w-full rounded-lg py-2 px-3 text-base font-medium text-gray-700 hover:bg-black/5">
                            {t('language')}
                            <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-1 space-y-1 pl-6">
                             {languages.map((lang) => (
                                <button 
                                    key={lang.code} 
                                    onClick={() => setLanguage(lang.code)} 
                                    className={`w-full text-left flex items-center rounded-lg py-2 text-sm font-medium ${language === lang.code ? 'text-gray-900' : 'text-gray-600 hover:text-gray-800'}`}
                                >
                                    {lang.name}
                                </button>
                             ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}