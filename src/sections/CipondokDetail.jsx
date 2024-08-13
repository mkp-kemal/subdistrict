import { useNavigate } from 'react-router-dom';
import { Button, Divider, message } from 'antd';
import { FaShareAltSquare, FaSwimmer } from 'react-icons/fa';
import { Footer } from './HomeSection';
import { FaChildren } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';
import BgComponentCipondok from '../components/bg/BgComponentCipondok';

const AttractionDetailCipondok = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        message.success('Link copied to clipboard!');
      })
      .catch((err) => {
        message.error('Failed to copy the link!');
        console.error('Error copying text: ', err);
      });
  };

  return (
    <>
      <>
        <div className="container mx-auto py-8 px-4 mt-32 fade-in">
          <Button onClick={handleBack}>Kembali</Button>
          <Button onClick={handleShare} style={{ marginLeft: '10px' }}>
            <FaShareAltSquare />
            Share Link
          </Button>
          <div className="bg-white shadow-md rounded-lg p-6">
            <BgComponentCipondok />
            <h1 className="text-3xl font-bold mb-2">Curug Cipondok</h1>
            <div className="mb-4 flex justify-between">
              <span className="text-sm text-red-400 font-bold rounded-lg px-2">Update Informasi Agustus 2024</span>
              <p className="text-sm text-white font-semibold bg-tosca rounded-lg px-2">Surveyor: Tim KKN 415</p>
            </div>
            <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
              <p className="mb-4">
                Curug Cipondok merupakan salah satu destinasi wisata alam yang terletak di daerah Subang, Jawa Barat. Curug ini menawarkan pemandangan air terjun yang indah serta suasana yang sejuk dan asri. Dengan ketinggian yang cukup
                menjulang, air terjun ini menjadi daya tarik utama bagi para pengunjung yang mencari tempat untuk melepas penat dan menikmati keindahan alam.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Lokasi:</strong> Curug Cipondok berada di kawasan Ciater, Subang, Jawa Barat. Lokasi ini dapat diakses melalui jalan utama yang menghubungkan Ciater dengan pusat kota Subang. Curug ini terletak di daerah pegunungan
                  yang dikelilingi oleh hutan tropis, menambah keasrian dan kesejukan tempat ini.
                </li>
                <li>
                  <strong>Aksesibilitas:</strong>Untuk mencapai Curug Cipondok, pengunjung bisa menggunakan kendaraan pribadi maupun angkutan umum. Dari pusat kota Subang, perjalanan menuju Curug Cipondok memakan waktu sekitar 1-2 jam
                  tergantung kondisi lalu lintas. Jalan menuju lokasi sudah cukup baik, namun di beberapa titik perlu berhati-hati karena jalanan yang berkelok dan menanjak. Pengunjung juga perlu berjalan kaki sekitar 15-20 menit dari area
                  parkir untuk mencapai air terjun, melalui jalur yang sudah disediakan.
                </li>
                <li>
                  <strong>Keindahan Alam:</strong> Curug Cipondok menawarkan pemandangan alam yang memukau dengan air terjun yang mengalir deras dari ketinggian. Di sekitarnya, terdapat bebatuan besar dan pepohonan hijau yang menambah
                  keindahan serta suasana alami tempat ini. Airnya yang jernih dan segar sangat cocok untuk mandi atau sekadar bermain air. Suara gemericik air dan udara yang sejuk menjadikan tempat ini sebagai lokasi yang sempurna untuk
                  relaksasi dan menikmati keindahan alam.
                </li>
                <li>
                  <strong>Aktivitas:</strong> Pengunjung Curug Cipondok dapat melakukan berbagai aktivitas seperti berenang, bermain air di kolam alami, atau sekadar bersantai menikmati pemandangan. Selain itu, banyak juga yang datang untuk
                  berfoto dengan latar belakang air terjun yang indah. Bagi pecinta alam dan petualangan, trekking menuju air terjun juga menjadi salah satu kegiatan yang menyenangkan. Tidak jarang juga ada yang melakukan piknik bersama
                  keluarga atau teman-teman di area sekitar air terjun.
                </li>
                <li>
                  <strong>Fasilitas:</strong> Curug Cipondok sudah dilengkapi dengan beberapa fasilitas pendukung untuk kenyamanan pengunjung. Di area parkir, terdapat warung-warung yang menjual makanan dan minuman. Selain itu, tersedia
                  juga toilet umum dan tempat istirahat. Meskipun fasilitasnya masih tergolong sederhana, namun cukup untuk memenuhi kebutuhan dasar para pengunjung. Penting bagi pengunjung untuk tetap menjaga kebersihan dan kelestarian
                  alam selama berada di Curug Cipondok.
                </li>
              </ul>
              <p className="mb-6">
                Curug Cipondok Subang merupakan destinasi wisata alam yang menawarkan keindahan dan ketenangan, cocok untuk melarikan diri sejenak dari hiruk pikuk kota. Dengan aksesibilitas yang cukup baik, keindahan alam yang memukau,
                serta berbagai aktivitas yang bisa dilakukan, Curug Cipondok menjadi pilihan tepat untuk rekreasi bersama keluarga atau teman. Meskipun fasilitas yang tersedia masih sederhana, suasana alami dan asri yang ditawarkan tempat
                ini menjadi daya tarik tersendiri. Jangan lupa untuk selalu menjaga kebersihan dan keasrian alam selama berkunjung, sehingga keindahan Curug Cipondok dapat dinikmati oleh generasi mendatang.
              </p>
              <div className="map">
                <h2 className="text-2xl font-bold mb-4">Lokasi Curug Cipondok</h2>
                <iframe
                  className="w-full h-96 rounded-lg shadow-md"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <Divider />
            <div className="options p-4 bg-tosca justify-around rounded-xl">
              <h2 className="text-sm font-semibold text-white">Wisata bisa untuk</h2>
              <ul className="flex justify-around">
                <li className="flex flex-col items-center">
                  <FaSwimmer className="text-white text-2xl" />
                  <span className="text-xs text-white">Berenang</span>
                </li>
                <li className="flex flex-col items-center">
                  <FaChildren className="text-white text-2xl" />
                  <span className="text-xs text-white">Anak-anak</span>
                </li>
                <li className="flex flex-col items-center">
                  <HiUserGroup className="text-white text-2xl" />
                  <span className="text-xs text-white">Titik Kumpul</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default AttractionDetailCipondok;
