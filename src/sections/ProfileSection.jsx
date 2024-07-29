import { useState } from 'react';
import CountUp from 'react-countup';
import { Footer } from './HomeSection';

// eslint-disable-next-line react/prop-types
const AnimatedCountUp = ({ end, duration }) => {
    const [isAnimating, setIsAnimating] = useState(true);

    return (
        <span
            className={`transition-all duration-1000 ${isAnimating ? 'animate-grow' : 'animate-shrink'}`}
            onAnimationEnd={() => setIsAnimating(false)}
        >
            <CountUp end={end} duration={duration} onStart={() => setIsAnimating(true)} />
        </span>
    );
};

const ProfileSection = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-28">
                <div className="bg-white shadow-2xl rounded-xl p-8 max-w-4xl w-full">
                    <div className="relative mb-6">
                        <img src="https://picsum.photos/1200/800?random=1" alt="" className='w-full h-56 object-cover rounded-xl hover:scale-105 duration-300 ' />
                        <img src="https://i.ibb.co.com/WBndm69/Lambang-Kabupaten-Subang-removebg-preview.png" alt="Logo" className="absolute top-0 left-0 h-11 w-10 m-2 bg-white rounded-md" />
                    </div>
                    <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">PROFILE DESA</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                        <div>
                            <p><span className="font-semibold">NAMA DESA:</span> NAGRAK</p>
                            <p><span className="font-semibold">KECAMATAN:</span> CIATER</p>
                            <p><span className="font-semibold">KABUPATEN:</span> SUBANG</p>
                            <p><span className="font-semibold">PROVINSI:</span> JAWA BARAT</p>
                            <p><span className="font-semibold">JABAR & NOMOR:</span> 32</p>
                            <p><span className="font-semibold">KODE POS:</span> 41281</p>
                            <p><span className="font-semibold">NAMA KADES:</span> AHMAD</p>
                            <p><span className="font-semibold">SURAT KEPUTUSAN (SK):</span> 141.1/KEP.18-PEM/2013</p>
                            <p><span className="font-semibold">PENERBITAN SK OLEH:</span> BUPATI</p>
                            <p><span className="font-semibold">BANGUNAN & KANTOR:</span> MILIK SENDIRI</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">JARAK KE PUSAT PEMERINTAHAN:</span> <AnimatedCountUp end={144} duration={2} /> KM</p>
                            <p><span className="font-semibold">JARAK KE PUSAT KABUPATEN:</span> <AnimatedCountUp end={27} duration={2} /> KM</p>
                            <p><span className="font-semibold">LUAS WILAYAH:</span> HA <AnimatedCountUp end={250} duration={2} /></p>
                            <p><span className="font-semibold">BATAS ADMINISTRASI WILAYAH:</span></p>
                            <ul className="list-disc pl-5 mb-4">
                                <li><span className="font-semibold">BARAT:</span> CIATER</li>
                                <li><span className="font-semibold">TIMUR:</span> -</li>
                                <li><span className="font-semibold">SELATAN:</span> -</li>
                                <li><span className="font-semibold">UTARA:</span> PALASARI</li>
                            </ul>
                            <p><span className="font-semibold">JUMLAH DUSUN:</span> 3</p>
                            <p><span className="font-semibold">TOPOGRAFI:</span> PEGUNUNGAN</p>
                            <p><span className="font-semibold">KLASIFIKASI DESA:</span> SWAKARYA</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="font-semibold text-xl">JUMLAH PENDUDUK:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li><span className="font-semibold">LAKI - LAKI:</span> <AnimatedCountUp end={593} duration={2} /></li>
                            <li><span className="font-semibold">PEREMPUAN:</span> <AnimatedCountUp end={117} duration={2} /></li>
                            <li><span className="font-semibold">JUMLAH:</span> <AnimatedCountUp end={718} duration={2} /></li>
                        </ul>
                        <p className="font-semibold text-xl">JUMLAH KEPALA KELUARGA:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li><span className="font-semibold">PRA KS:</span> <AnimatedCountUp end={84} duration={2} /></li>
                            <li><span className="font-semibold">KS1:</span> <AnimatedCountUp end={143} duration={2} /></li>
                            <li><span className="font-semibold">KS2:</span> <AnimatedCountUp end={104} duration={2} /></li>
                            <li><span className="font-semibold">KS3:</span> <AnimatedCountUp end={38} duration={2} /></li>
                        </ul>
                        <p className="font-semibold text-xl">PENANGGULANGAN PELAYANAN KEMISKINAN:</p>
                        <p>JUMLAH PENDUDUK 2234</p>
                        <p>NAMA PROGRAM TAHUN 2015 JUMLAH KELUARGA YANG KURANG MAMPU ….. NAMA PROGRAM TAHUN 2015.</p>
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
                        <p><span className="font-semibold">Letak:</span> Desa Nagrak terletak di Kecamatan Ciater, Kabupaten Subang, Provinsi Jawa Barat. Koordinat geografisnya adalah 6.730664 LS dan 107.550993 BT.</p>
                        <p><span className="font-semibold">Relief:</span> Desa ini memiliki topografi yang bervariasi dengan kontur berbukit dan ketinggian rata-rata sekitar 700 meter di atas permukaan laut.</p>
                        <p><span className="font-semibold">Iklim dan Cuaca:</span> Desa Nagrak beriklim tropis dengan dua musim utama, yaitu musim hujan dan musim kemarau. Suhu rata-rata berkisar antara 20-30°C.</p>
                        <p><span className="font-semibold">Jenis Tanah:</span> Tanah di Desa Nagrak sebagian besar adalah tanah vulkanik yang subur, cocok untuk pertanian dan perkebunan.</p>
                        <p><span className="font-semibold">Sumber Daya:</span> Sumber daya air yang melimpah dari mata air alami dan sungai. Terdapat juga sumber daya mineral seperti pasir dan batu yang digunakan untuk konstruksi.</p>
                        <p><span className="font-semibold">Flora dan Fauna:</span> Flora di desa ini terdiri dari berbagai jenis tanaman pertanian dan perkebunan, seperti padi, sayuran, dan teh. Fauna yang umum ditemui antara lain burung, serangga, dan hewan ternak.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfileSection;
