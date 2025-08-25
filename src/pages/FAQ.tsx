import React, { useState } from 'react';

// --- Data untuk Pertanyaan & Jawaban ---
const faqData = [
  {
    question: "Bagaimana cara merawat tanaman hias dalam ruangan?",
    answer: "Pastikan tanaman mendapatkan cahaya yang cukup sesuai jenisnya, siram hanya saat media tanam mulai kering, dan berikan pupuk secara berkala setiap 2-4 minggu sekali selama masa pertumbuhan."
  },
  {
    question: "Tanaman apa yang cocok untuk pemula?",
    answer: "Beberapa tanaman yang sangat direkomendasikan untuk pemula adalah Lidah Mertua (Sansevieria), Sirih Gading (Pothos), dan Spider Plant. Tanaman-tanaman ini sangat toleran terhadap berbagai kondisi."
  },
  {
    question: "Seberapa sering saya harus menyiram tanaman saya?",
    answer: "Frekuensi penyiraman sangat bergantung pada jenis tanaman, ukuran pot, dan kondisi lingkungan. Aturan terbaik adalah dengan memeriksa kelembapan tanah. Masukkan jari Anda sekitar 2-3 cm ke dalam tanah; jika terasa kering, saatnya untuk menyiram."
  },
  {
    question: "Apa tanda-tanda tanaman saya kelebihan air?",
    answer: "Tanda-tanda umum kelebihan air (overwatering) adalah daun menguning yang terasa lembek (bukan kering), ujung daun berwarna coklat, dan pertumbuhan yang terhambat. Akar yang busuk juga merupakan tanda pasti."
  },
  {
    question: "Apakah saya perlu mengganti pot tanaman secara rutin?",
    answer: "Anda hanya perlu mengganti pot (repotting) ketika tanaman sudah 'root-bound', yaitu ketika akarnya sudah memenuhi seluruh pot. Biasanya ini dilakukan setiap 1-2 tahun sekali, tergantung kecepatan pertumbuhan tanaman."
  }
];

// --- Komponen untuk setiap item akordeon ---
const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-semibold text-gray-800">
          {question}
        </span>
        {/* Ikon Chevron yang akan berputar */}
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Konten jawaban yang bisa expand/collapse */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};


// --- Komponen Utama Halaman FAQ ---
const FAQ: React.FC = () => {
  return (
    <div className="bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Halaman */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan? Kami punya jawabannya. Berikut adalah beberapa pertanyaan yang paling sering diajukan oleh para pecinta tanaman.
          </p>
        </div>

        {/* Daftar Akordeon */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {faqData.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;