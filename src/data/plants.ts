export interface Store {
  name: string;
  url: string;
}

export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  imageUrl: string;
  careLevel: 'Mudah' | 'Sedang' | 'Sulit';
  size: 'Kecil' | 'Sedang' | 'Besar';
  stores: Store[];
}

export const plants: Plant[] = [
  {
    id: 1,
    name: "Lidah Mertua",
    scientificName: "Sansevieria trifasciata",
    family: "Asparagaceae",
    description: "Tanaman sukulen yang sangat populer karena perawatannya yang mudah dan kemampuannya membersihkan udara. Tahan terhadap berbagai kondisi, menjadikannya pilihan ideal untuk pemula.",
    imageUrl: "https://gardening.id/wp-content/uploads/2019/02/lidah-mertua-2.jpg",
    careLevel: 'Mudah',
    size: 'Sedang',
    stores: [
      { name: 'Urban Gardening', url: 'https://gardening.id/' },
      { name: 'lucknow nursery', url: 'https://lucknownursery.com/product/excoecaria-bicolor-laila-majnu-plant/' },
    ]
  },
  {
    id: 2,
    name: "Sirih Gading",
    scientificName: "Epipremnum aureum",
    family: "Araceae",
    description: "Tanaman merambat yang kuat dan mudah diperbanyak, cocok untuk pemula dan bisa hidup di berbagai kondisi cahaya. Dapat ditanam di pot gantung atau dibiarkan merambat di dinding.",
    imageUrl: "https://thecontentedplant.com/wp-content/uploads/2021/03/Untitled-design-26-520x520.jpg",
    careLevel: 'Mudah',
    size: 'Sedang',
    stores: [
      { name: 'the contented plant', url: 'https://thecontentedplant.com/marble-queen-pothos-epipremnum-aureum/' },
    ]
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    family: "Araceae",
    description: "Ikon tanaman hias dengan daun terbelah yang khas. Memberikan nuansa tropis yang kental pada ruangan dan menjadi pusat perhatian.",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.h-TIxlmb4lUpkQvk33iRagHaFj?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    careLevel: 'Sedang',
    size: 'Besar',
    stores: [
      { name: 'liarock', url: 'https://www.bing.com/images/search?view=detailV2&ccid=h%2bTIxlmb&id=AEC9632DB2EBB36CF6C2DE28B32F38DCD2A15202&thid=OIP.h-TIxlmb4lUpkQvk33iRagHaFj&mediaurl=https%3a%2f%2fliarock.com%2fwp-content%2fuploads%2f2022%2f11%2fmonstera-deliciosa-2048x1536.jpeg&exph=1536&expw=2048&q=Monstera+Deliciosa&FORM=IRPRST&ck=585D50CF3BD4F23C054273F32EC4E994&selectedIndex=8&itb=0&mode=overlay' },
    ]
  },
  // Tambahkan tanaman lainnya di sini
];
