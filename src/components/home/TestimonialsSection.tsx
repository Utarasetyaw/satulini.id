import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const TestimonialsSection: FC = () => {
  const { t } = useLanguage();

  const testimonialData = [
    { quote: t('testimonial1Quote'), author: { name: t('testimonial1AuthorName'), title: t('testimonial1AuthorTitle') } },
    { quote: t('testimonial2Quote'), author: { name: t('testimonial2AuthorName'), title: t('testimonial2AuthorTitle') } },
    { quote: t('testimonial3Quote'), author: { name: t('testimonial3AuthorName'), title: t('testimonial3AuthorTitle') } },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">{t('testimonialsTitle')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{t('testimonialsSubtitle')}</p>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="-m-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonialData.map((testimonial) => (
                <div key={testimonial.author.name} className="p-8 rounded-2xl bg-gray-50">
                  <figure className="flex flex-col h-full">
                    <blockquote className="flex-grow text-lg leading-7 text-gray-600">
                      <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-8">
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.author.title}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};