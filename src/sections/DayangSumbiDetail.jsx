import { useNavigate } from 'react-router-dom';
import { Button, Divider, message } from 'antd';
import { FaShareAltSquare, FaSwimmer } from 'react-icons/fa';
import { Footer } from './HomeSection';
import BgComponentKoleangkak from '../components/bg/BgComponentKoleangkak';
import { FaChildren } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';

const AttractionDetailDayangSumbi = () => {
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
            <BgComponentKoleangkak />
            <h1 className="text-3xl font-bold mb-2">Curug Dayang Sumbi</h1>
            <div className="mb-4 flex justify-between">
              <span className="text-sm text-red-400 font-bold rounded-lg px-2">Update Informasi Agustus 2024</span>
              <p className="text-sm text-white font-semibold bg-tosca rounded-lg px-2">Surveyor: Tim KKN 415</p>
            </div>
            <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
              <p className="mb-4">
                Curug Dayang Sumbi adalah salah satu destinasi wisata alam yang terletak di kawasan Ciater, Subang, Jawa Barat. Air terjun ini menawarkan pemandangan yang indah dan suasana yang sejuk, cocok untuk wisatawan yang ingin
                menikmati alam yang masih alami. Nama Curug Dayang Sumbi diambil dari legenda setempat yang menambah daya tarik tersendiri bagi pengunjung.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Lokasi:</strong> Curug Dayang Sumbi berada di Ciater, Subang, Jawa Barat, sekitar 30 km dari pusat kota Subang. Lokasinya yang berada di dataran tinggi membuat udara di sekitar curug ini sejuk dan segar, menjadikan
                  perjalanan menuju curug ini menyenangkan.
                </li>
                <li>
                  <strong>Aksesibilitas:</strong>Untuk mencapai Curug Dayang Sumbi, pengunjung dapat menggunakan kendaraan pribadi atau angkutan umum. Perjalanan dari pusat kota Subang menuju Curug Dayang Sumbi memakan waktu sekitar 1-2
                  jam. Jalan menuju lokasi cukup baik meskipun di beberapa bagian terdapat jalan yang berkelok dan menanjak. Pengunjung juga perlu berjalan kaki sekitar 10-15 menit dari area parkir untuk mencapai air terjun, melewati jalur
                  yang sudah disediakan.
                </li>
                <li>
                  <strong>Keindahan Alam:</strong> Curug Dayang Sumbi menawarkan pemandangan alam yang mempesona dengan air terjun yang mengalir deras dari ketinggian. Dikelilingi oleh pepohonan hijau dan bebatuan besar, air terjun ini
                  memberikan suasana alami dan tenang. Airnya yang jernih dan segar sangat menarik untuk berenang atau sekadar bermain air. Suara gemericik air yang jatuh dan udara yang sejuk membuat tempat ini sangat cocok untuk relaksasi.
                </li>
                <li>
                  <strong>Aktivitas:</strong> Di Curug Dayang Sumbi, pengunjung bisa melakukan berbagai aktivitas seperti berenang, bermain air, atau hanya bersantai menikmati pemandangan. Banyak juga yang datang untuk berfoto dengan latar
                  belakang air terjun yang indah. Trekking menuju air terjun juga menjadi salah satu kegiatan menarik bagi para pecinta alam dan petualangan. Area sekitar curug sering digunakan untuk piknik oleh keluarga atau kelompok
                  teman.
                </li>
                <li>
                  <strong>Fasilitas:</strong> Meskipun fasilitas di Curug Dayang Sumbi masih tergolong sederhana, namun cukup untuk memenuhi kebutuhan dasar pengunjung. Terdapat area parkir, warung yang menjual makanan dan minuman, serta
                  toilet umum. Pengunjung diharapkan untuk selalu menjaga kebersihan dan kelestarian alam selama berada di kawasan Curug Dayang Sumbi.
                </li>
              </ul>
              <p className="mb-6">
                Curug Dayang Sumbi di Ciater, Subang, adalah destinasi wisata yang menawarkan keindahan alam dan ketenangan, sangat cocok untuk melepas penat dari rutinitas sehari-hari. Dengan aksesibilitas yang cukup baik, pemandangan alam
                yang menakjubkan, dan berbagai aktivitas yang dapat dilakukan, Curug Dayang Sumbi menjadi pilihan ideal untuk rekreasi bersama keluarga atau teman. Selalu jaga kebersihan dan kelestarian alam agar keindahan Curug Dayang
                Sumbi tetap terjaga dan bisa dinikmati oleh generasi mendatang.
              </p>
              <div className="map">
                <h2 className="text-2xl font-bold mb-4">Lokasi Curug Dayang Sumbi</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2701570907757!2d107.66398887441723!3d-6.736861165870381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e691f8a373654e7%3A0x6d709e9a7e4a7083!2sCurug%20Koleangkak%20(Curug%20Biru)!5e0!3m2!1sid!2sid!4v1722914017916!5m2!1sid!2sid"
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

export default AttractionDetailDayangSumbi;
