import React from 'react';
import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { useLanguage, type Language } from '../../../context/LanguageContext';
import { ChevronDownIcon } from '../Icons';

// --- DATA DIIMPOR ---
// Impor data terpusat kita
import { mainNavLinks, solutionsMegaMenuContent } from '../navData';

interface VerticalMenuProps {
    closeMenu?: () => void;
}

export const VerticalMenu: FC<VerticalMenuProps> = ({ closeMenu = () => {} }) => {
    const { t, language, setLanguage } = useLanguage();
    const languages: { code: Language, name: string }[] = [
        { code: 'en', name: 'English' },
        { code: 'id', name: 'Indonesia' },
        { code: 'zh', name: '中文' },
    ];
    
    return (
        <div className="flex flex-col gap-y-2">
            {/* --- BAGIAN INI DIPERBARUI --- */}
            {/* Link dibuat secara dinamis dari navData.tsx */}
            {mainNavLinks.map(link => (
                // Jika link memiliki mega menu, buat menjadi accordion
                link.hasMegaMenu ? (
                    <Disclosure key={link.label} as="div" className="-mx-3">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {link.label}
                                    <ChevronDownIcon className={`h-5 w-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`} />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 -translate-y-2"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-2"
                                >
                                    <Disclosure.Panel className="mt-2 space-y-2 pl-6">
                                        {/* Menggabungkan semua fitur dari business & personal */}
                                        {[...solutionsMegaMenuContent.business.features, ...solutionsMegaMenuContent.personal.features].map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.to}
                                                onClick={closeMenu}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-gray-100"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                ) : (
                    // Jika link biasa, render seperti biasa
                    <NavLink
                        key={link.label}
                        to={link.to}
                        onClick={closeMenu}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        {t(link.label.toLowerCase() as any)}
                    </NavLink>
                )
            ))}

            {/* Language Switcher tetap ada */}
            <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center justify-between w-full rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            {t('language')}
                            <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-1 space-y-1 pl-6">
                             {languages.map((lang) => (
                                <button 
                                    key={lang.code} 
                                    onClick={() => setLanguage(lang.code)} 
                                    className={`w-full text-left flex items-center rounded-lg py-2 text-sm font-medium ${language === lang.code ? 'font-semibold text-purple-700' : 'text-gray-600 hover:text-gray-800'}`}
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