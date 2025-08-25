import React from 'react';

// --- Data Dummy untuk Tim (Anda bisa menggantinya dengan data asli) ---
const teamData = [
  {
    name: "Andini Putri",
    role: "Founder & Chief Editor",
    bio: "Seorang pecinta botani yang percaya bahwa setiap rumah berhak memiliki sentuhan hijau. Andini memulai Portal Tanaman dari kecintaannya merawat koleksi pribadinya.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80"
  },
  {
    name: "Budi Santoso",
    role: "Content Writer & Plant Expert",
    bio: "Dengan latar belakang hortikultura, Budi menulis artikel-artikel mendalam untuk memastikan setiap informasi yang disajikan akurat dan mudah dipahami oleh pemula sekalipun.",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&q=80"
  },
  {
    name: "Citra Lestari",
    role: "Photographer & Social Media",
    bio: "Citra adalah mata di balik semua foto indah di website dan media sosial kami. Ia memiliki bakat untuk menangkap keindahan setiap helai daun.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
  }
];


// --- Komponen Utama Halaman About ---
const About: React.FC = () => {
  return (
    <div className="bg-stone-50">

      {/* --- Hero Section --- */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-green-800 text-sm font-bold uppercase tracking-widest">Tentang Kami</h1>
          <p className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Menyebarkan Kecintaan Pada Tanaman
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Portal Tanaman lahir dari sebuah ide sederhana: membuat dunia merawat tanaman lebih mudah diakses, menyenangkan, dan menjadi bagian dari gaya hidup modern.
          </p>
        </div>
      </div>

      {/* --- Meet the Team Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Bertemu Tim Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Orang-orang penuh semangat di balik layar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src={member.imageUrl}
                alt={`Foto ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto ring-4 ring-green-100 object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-base font-semibold text-green-700">{member.role}</p>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Our Values Section --- */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Nilai-Nilai Kami
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Edukasi</h3>
                    <p className="text-gray-600">Kami berkomitmen untuk menyediakan informasi yang akurat, teruji, dan mudah dipahami.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Komunitas</h3>
                    <p className="text-gray-600">Membangun ruang yang positif bagi para pecinta tanaman untuk berbagi dan belajar bersama.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Inspirasi</h3>
                    <p className="text-gray-600">Menyajikan ide-ide kreatif untuk mengintegrasikan keindahan tanaman dalam kehidupan sehari-hari.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;