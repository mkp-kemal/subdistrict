import { useState } from 'react';
import CountUp from 'react-countup';

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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-28">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-4xl w-full">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Profil Desa Nagrak</h1>
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
            </div>
        </div>
    );
};

export default ProfileSection;
