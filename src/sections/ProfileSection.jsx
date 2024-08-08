import { useState } from 'react';
import CountUp from 'react-countup';
import { Footer } from './HomeSection';
import foto2 from './../assets/logo_nagrak.png';
import BgComponent from '../components/BgComponentProfile';


const OrganizationChart = () => {
  const structure = [
    { role: 'Kepala Desa', name: 'AHMAD' },
    { role: 'Sekretaris Desa', name: 'YAYAN SUGIANTO' },
    { role: 'Kasi Pemerintahan', name: 'YUDA RIFAN RIFALDI' },
    { role: 'Kasi Pelayanan', name: 'DADAR ROHIDIN' },
    { role: 'Kasi Kesra', name: 'EEP SAEPUDIN' },
    { role: 'Kaur Umum', name: 'AYI DARLIAH' },
    { role: 'Kaur Perencanaan', name: 'SACA GUNAWAN' },
    { role: 'Kaur Keuangan', name: 'YUNENGSIH' },
    { role: 'Kadus 1', name: 'SUHENDI' },
    { role: 'Kadus 2', name: 'MS. SAEPUDIN' },
    { role: 'Kadus 3', name: 'KAHDI' },
    { role: 'Staf Pelayanan', name: 'ATING' },
    { role: 'Staf Pemerintahan', name: 'DERI HIDAYAT' },
  ];

  return (
    <div className='mb-32'>
      <div className="text-lg">
        <h2 className="font-semibold text-md mb-4">Struktur Organisasi Desa Nagrak:</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="text-center mb-8">
            <div className="bg-tosca p-4 rounded-lg shadow-lg text-white">
              <div className="font-semibold">Kepala Desa</div>
              <div>AHMAD</div>
            </div>
            <div className="flex justify-center">
              <div className="border-l-2 border-gray-400 h-8"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {structure.slice(1, 8).map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 p-4 rounded-lg shadow-lg">
                  <div className="font-semibold">{item.role}</div>
                  <div>{item.name}</div>
                </div>
                {index < 6 && (
                  <div className="flex justify-center">
                    <div className="border-l-2 border-gray-400 h-8"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {structure.slice(8).map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
                  <div className="font-semibold">{item.role}</div>
                  <div>{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const AnimatedCountUp = ({ end, duration }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <span className={`transition-all duration-1000 ${isAnimating ? 'animate-grow' : 'animate-shrink'}`} onAnimationEnd={() => setIsAnimating(false)}>
      <CountUp end={end} duration={duration} onStart={() => setIsAnimating(true)} />
    </span>
  );
};

const jumLaki = 1139;
const jumPerem = 1121;

const ProfileSection = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-28">
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-4xl w-full">
          <div className="relative mb-6 fade-in">
            <BgComponent />
            <img src={foto2} alt="Logo" className="absolute top-0 left-0 h-11 w-10 m-2 rounded-md" />
          </div>
          <div style={{ marginTop: '-250px' }}>
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">PROFILE DESA</h1>
            <OrganizationChart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div>
                <p>
                  <span className="font-semibold">NAMA DESA:</span> NAGRAK
                </p>
                <p>
                  <span className="font-semibold">KECAMATAN:</span> CIATER
                </p>
                <p>
                  <span className="font-semibold">KODE KECAMATAN:</span> 321329
                </p>
                <p>
                  <span className="font-semibold">KABUPATEN:</span> SUBANG
                </p>
                <p>
                  <span className="font-semibold">PROVINSI:</span> JAWA BARAT
                </p>
                <p>
                  <span className="font-semibold">KODE PROVINSI:</span> 32
                </p>
                <p>
                  <span className="font-semibold">KODE DESA:</span> 3213292003
                </p>
                <p>
                  <span className="font-semibold">NAMA KADES:</span> AHMAD
                </p>
                <p>
                  <span className="font-semibold">SURAT KEPUTUSAN (SK):</span> 141.1/KEP.18-PEM/2013
                </p>
                <p>
                  <span className="font-semibold">PENERBITAN SK OLEH:</span> BUPATI
                </p>
                <p>
                  <span className="font-semibold">BANGUNAN & KANTOR:</span> MILIK SENDIRI
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">JARAK KE PUSAT PEMERINTAHAN:</span> <AnimatedCountUp end={112} duration={2} /> KM
                </p>
                <p>
                  <span className="font-semibold">JARAK KE PUSAT KABUPATEN:</span> <AnimatedCountUp end={21} duration={2} /> KM
                </p>
                <p>
                  <span className="font-semibold">LUAS WILAYAH:</span> HA <AnimatedCountUp end={1300} duration={2} />
                </p>
                <p>
                  <span className="font-semibold">BATAS ADMINISTRASI WILAYAH:</span>
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>
                    <span className="font-semibold">BARAT:</span> CIATER
                  </li>
                  <li>
                    <span className="font-semibold">TIMUR:</span> CIBITUNG
                  </li>
                  <li>
                    <span className="font-semibold">SELATAN:</span> CIBEUSI
                  </li>
                  <li>
                    <span className="font-semibold">UTARA:</span> PALASARI
                  </li>
                </ul>
                <p>
                  <span className="font-semibold">JUMLAH DUSUN:</span> 3
                </p>
                <p>
                  <span className="font-semibold">TOPOGRAFI:</span> PEGUNUNGAN
                </p>
                <p>
                  <span className="font-semibold">KLASIFIKASI DESA:</span> SWAKARYA
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-semibold text-xl">JUMLAH PENDUDUK:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  <span className="font-semibold">LAKI - LAKI (L):</span> <AnimatedCountUp end={1139} duration={2} />
                </li>
                <li>
                  <span className="font-semibold">PEREMPUAN (P):</span> <AnimatedCountUp end={1121} duration={2} />
                </li>
                <li>
                  <span className="font-semibold">JUMLAH L+P:</span> <AnimatedCountUp end={jumLaki + jumPerem} duration={2} />
                </li>
              </ul>
              <div>
                <p className="font-semibold text-xl">JUMLAH KEPALA KELUARGA:</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>
                    <span className="font-semibold">KEPALA KELUARGA LAKI-LAKI:</span> <AnimatedCountUp end={720} duration={2} />
                  </li>
                  <li>
                    <span className="font-semibold">KEPALA KELUARGA PEREMPUAN:</span> <AnimatedCountUp end={120} duration={2} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-xl mb-4">LOKASI DESA:</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126411.58782255615!2d107.55099348205198!3d-6.730664304237963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6909d2bc37d943%3A0x401e8f1fc28b140!2sNagrak%2C%20Ciater%2C%20Subang%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1624608113432!5m2!1sen!2sid&markers=color:red%7Clabel:K%7C-6.730664304237963,107.55099348205198"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-xl mb-4">INFORMASI TAMBAHAN:</h2>
              <p>
                <span className="font-semibold">Letak:</span> Desa Nagrak terletak di Kecamatan Ciater, Kabupaten Subang, Provinsi Jawa Barat. Koordinat geografisnya adalah 6.730664 LS dan 107.550993 BT.
              </p>
              <p>
                <span className="font-semibold">Relief:</span> Desa ini memiliki topografi yang bervariasi dengan kontur berbukit dan ketinggian rata-rata sekitar 700 meter di atas permukaan laut.
              </p>
              <p>
                <span className="font-semibold">Iklim dan Cuaca:</span> Desa Nagrak beriklim tropis dengan dua musim utama, yaitu musim hujan dan musim kemarau. Suhu rata-rata berkisar antara 20-30°C.
              </p>
              <p>
                <span className="font-semibold">Jenis Tanah:</span> Tanah di Desa Nagrak sebagian besar adalah tanah vulkanik yang subur, cocok untuk pertanian dan perkebunan.
              </p>
              <p>
                <span className="font-semibold">Sumber Daya:</span> Sumber daya air yang melimpah dari mata air alami dan sungai. Terdapat juga sumber daya mineral seperti pasir dan batu yang digunakan untuk konstruksi.
              </p>
              <p>
                <span className="font-semibold">Flora dan Fauna:</span> Flora di desa ini terdiri dari berbagai jenis tanaman pertanian dan perkebunan, seperti padi, sayuran, dan teh. Fauna yang umum ditemui antara lain burung, serangga,
                dan hewan ternak.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileSection;
