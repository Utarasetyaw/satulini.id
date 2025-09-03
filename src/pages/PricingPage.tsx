import { useState, Fragment } from 'react';
import type { FC, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// --- Icon Components ---
const CheckIcon: FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6 9 17l-5-5"/></svg>);
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );

// =================================================================================
// WAITING LIST MODAL COMPONENT
// =================================================================================
const WaitingListModal: FC<{isOpen: boolean, onClose: () => void, planType: 'business' | 'personal'}> = ({ isOpen, onClose, planType }) => {
    
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // IMPORTANT: Replace this URL with your Google Apps Script Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');
        const formData = new FormData(event.target as HTMLFormElement);

        fetch(SCRIPT_URL, { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            if(data.result === 'success') {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setTimeout(() => setStatus('idle'), 500); // Reset status after the modal is closed
                }, 2000); // Automatically close after 2 seconds
            } else {
                throw new Error(data.error || 'Unknown error occurred');
            }
        })
        .catch(err => {
            console.error('Error submitting form:', err);
            setStatus('error');
        });
    };
    
    const BusinessForm = () => (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input type="hidden" name="formType" value="Business" />
            <input name="email" type="email" placeholder="Email" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="fullName" type="text" placeholder="Full Name" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="activePhoneNumber" type="tel" placeholder="Active Phone Number" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="companyName" type="text" placeholder="Company Name" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="productUsed" type="text" placeholder="Product Used" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="socialMedia" type="text" placeholder="Social Media (Optional)" className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <SubmitButton />
        </form>
    );

    const PersonalForm = () => (
         <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input type="hidden" name="formType" value="Personal" />
            <input name="name" type="text" placeholder="Name" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="email" type="email" placeholder="Email" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <input name="phoneNumber" type="tel" placeholder="Phone Number" required className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500" />
            <SubmitButton />
        </form>
    );

    const SubmitButton = () => {
        let buttonText = 'Join Waiting List';
        if (status === 'loading') buttonText = 'Submitting...';
        if (status === 'success') buttonText = 'Success!';
        if (status === 'error') buttonText = 'Error, Try Again';

        return (
            <button type="submit" disabled={status === 'loading' || status === 'success'} className={`w-full rounded-md px-5 py-3 text-base font-semibold text-white transition-colors ${status === 'success' ? 'bg-green-500' : 'bg-purple-600 hover:bg-purple-700'} disabled:opacity-70 disabled:cursor-not-allowed`}>
                {buttonText}
            </button>
        );
    };
    
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 text-center">
                                    Join the Waiting List
                                </Dialog.Title>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500 text-center">
                                        Be the first to know when this plan is available. We'll notify you by email.
                                    </p>
                                    {planType === 'business' ? <BusinessForm /> : <PersonalForm />}
                                </div>
                                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                                    <span className="sr-only">Close</span>
                                    <CloseIcon />
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};


// --- Data for Pricing Plans ---
const businessPlans = [
    { name: 'Basic', priceMonthly: 100000, priceYearly: 1200000, description: 'To start and manage your business online.', features: ['Standard online store', 'Product management', 'Basic transactions'], popular: false, },
    { name: 'Pro', priceMonthly: 250000, priceYearly: 3000000, description: 'For growing businesses that need more insight.', features: ['All Basic features', 'Limited promotions', 'Basic analytics', 'Faster support'], popular: true, },
    { name: 'Enterprise', priceMonthly: 400000, priceYearly: 4800000, description: 'Complete solution for large-scale and custom needs.', features: ['All Pro features', 'API integration', 'Multi-admin', 'Custom features', 'Premium support'], popular: false, }
];

const personalPlans = [
    { name: 'Free', priceMonthly: 0, description: 'Start building your personal brand with no upfront cost.', features: ['Free forever', 'Commission per transaction'], isFree: true, },
    { name: 'Premium', priceMonthly: 80000, description: 'Maximize your online potential without limits.', features: ['Custom domain', 'No transaction fees', 'Integrated social media management'], isFree: false, }
];

// --- Main Pricing Page Component ---
const PricingPage: FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const [isWaitingListModalOpen, setWaitingListModalOpen] = useState(false);
    const [selectedPlanType, setSelectedPlanType] = useState<'business' | 'personal'>('business');

    const openWaitingListModal = (type: 'business' | 'personal') => {
        setSelectedPlanType(type);
        setWaitingListModalOpen(true);
    };
    const closeWaitingListModal = () => setWaitingListModalOpen(false);

    const formatPrice = (price: number) => {
        // Keeping the IDR format as it might be intentional
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
    };

    return (
        <>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    {/* Title & Toggle */}
                    <div className="sm:flex sm:flex-col sm:items-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center tracking-tight">
                            Pricing Plans
                        </h1>
                        <p className="mt-5 text-lg sm:text-xl text-gray-500 sm:text-center max-w-3xl">
                            Choose the plan that best suits your needs to grow with us, with transparent pricing and no hidden fees.
                        </p>
                        <div className="relative mt-8 bg-gray-100 rounded-full p-1 flex sm:mx-auto w-full max-w-xs sm:max-w-sm">
                            <button onClick={() => setBillingCycle('monthly')} type="button" className={`${billingCycle === 'monthly' ? 'bg-white shadow-md' : 'text-gray-500'} relative w-1/2 rounded-full py-2.5 text-sm font-semibold whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 transition-all`}>
                                Monthly
                            </button>
                            <button onClick={() => setBillingCycle('yearly')} type="button" className={`${billingCycle === 'yearly' ? 'bg-white shadow-md' : 'text-gray-500'} ml-1 relative w-1/2 rounded-full py-2.5 text-sm font-semibold whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 transition-all`}>
                                Yearly
                                <span className="ml-2 hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Save 20%</span>
                            </button>
                        </div>
                    </div>

                    {/* Business Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">For Business</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {businessPlans.map((plan) => (
                                <div key={plan.name} className={`relative p-8 lg:p-10 bg-white border rounded-2xl shadow-sm flex flex-col ${plan.popular ? 'border-purple-500 border-2' : 'border-gray-200'}`}>
                                    {plan.popular && (
                                        <div className="absolute top-0 -translate-y-1/2 px-4 py-1 text-sm font-semibold tracking-wide text-purple-600 uppercase bg-white border-2 border-purple-500 rounded-full shadow-sm">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                                    <p className="mt-4 text-gray-500 min-h-[4rem]">{plan.description}</p>
                                    <div className="mt-8">
                                        <p className="text-5xl font-extrabold text-gray-900">
                                            {formatPrice(billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly / 12)}
                                        </p>
                                        <p className="text-base font-medium text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'month'}</p>
                                    </div>
                                    <ul role="list" className="mt-8 space-y-5 flex-1">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex space-x-3 items-start">
                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-purple-500 mt-0.5" aria-hidden="true" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => openWaitingListModal('business')} className={`mt-10 block w-full py-4 px-8 border border-transparent rounded-md text-center font-medium text-lg ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'}`}>
                                        Choose {plan.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Personal Section */}
                    <div className="mt-24">
                         <h2 className="text-3xl font-extrabold text-gray-900 mb-10">For Personal</h2>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                            {personalPlans.map((plan) => (
                                <div key={plan.name} className="relative p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                                    <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                                    <p className="mt-4 text-gray-500 min-h-[4rem]">{plan.description}</p>
                                    <div className="mt-8">
                                        <p className="text-5xl font-extrabold text-gray-900">
                                            {plan.isFree ? 'Free' : formatPrice(plan.priceMonthly)}
                                        </p>
                                        {!plan.isFree && <p className="text-base font-medium text-gray-500">/month</p>}
                                    </div>
                                    <ul role="list" className="mt-8 space-y-5 flex-1">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex space-x-3 items-start">
                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-purple-500 mt-0.5" aria-hidden="true" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => openWaitingListModal('personal')} className={`mt-10 block w-full py-4 px-8 border border-transparent rounded-md text-center font-medium text-lg ${plan.isFree ? 'bg-gray-800 text-white hover:bg-gray-900' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                                        {plan.isFree ? 'Start for Free' : 'Get Premium'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Modal */}
            <WaitingListModal isOpen={isWaitingListModalOpen} onClose={closeWaitingListModal} planType={selectedPlanType} />
        </>
    );
};

export default PricingPage;