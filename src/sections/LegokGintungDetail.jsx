import { useNavigate } from 'react-router-dom';
import { Button, Divider, message } from 'antd';
import { FaCampground, FaShareAltSquare } from 'react-icons/fa';
import { Footer } from './HomeSection';
import { FaChildren } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';
import BgComponentLegokGintung from '../components/bg/BgComponentLegokGintung';

const AttractionDetailLegokGintung = () => {
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
      <div className="container mx-auto py-8 px-4 mt-32 fade-in">
        <Button onClick={handleBack}>Kembali</Button>
        <Button onClick={handleShare} style={{ marginLeft: '10px' }}>
          <FaShareAltSquare />
          Share Link
        </Button>
        <div className="bg-white shadow-md rounded-lg p-6">
          <BgComponentLegokGintung />
          <h1 className="text-3xl font-bold mb-2">Legok Gintung</h1>
          <div className="mb-4 flex justify-between">
            <span className="text-sm text-red-400 font-bold rounded-lg px-2">Update Informasi Agustus 2024</span>
            <p className="text-sm text-white font-semibold bg-tosca rounded-lg px-2">Surveyor: Tim KKN 415</p>
          </div>
          <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <p className="mb-4">
              Legok Gintung adalah salah satu destinasi wisata alam yang terletak di kawasan Ciater, Subang, Jawa Barat. Tempat ini dikenal dengan kolam alami yang dikelilingi oleh pepohonan rindang, menciptakan suasana yang sejuk dan damai.
              Wisata ini sangat cocok bagi mereka yang ingin menikmati alam dan merasakan ketenangan jauh dari hiruk-pikuk kota.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Lokasi:</strong> Legok Gintung terletak di Ciater, Subang, Jawa Barat, sekitar 32 km dari pusat kota Subang. Dengan lokasinya yang berada di dataran tinggi, udara di sekitar area ini sejuk dan menyegarkan.
              </li>
              <li>
                <strong>Aksesibilitas:</strong> Untuk mencapai Legok Gintung, pengunjung dapat menggunakan kendaraan pribadi atau angkutan umum. Jalan menuju lokasi relatif baik meskipun terdapat beberapa bagian jalan yang menanjak dan berkelok. Pengunjung perlu berjalan kaki sekitar 5-10 menit dari area parkir untuk mencapai lokasi utama.
              </li>
              <li>
                <strong>Keindahan Alam:</strong> Legok Gintung menawarkan pemandangan kolam alami yang jernih dan pepohonan yang rimbun di sekelilingnya. Suasana yang tenang dengan udara segar menjadikannya tempat yang ideal untuk relaksasi. Air di kolam ini sangat jernih dan segar, cocok untuk berenang atau bermain air.
              </li>
              <li>
                <strong>Aktivitas:</strong> Di Legok Gintung, pengunjung bisa berenang, bersantai, atau berfoto dengan latar belakang alam yang indah. Tempat ini juga sering digunakan sebagai titik kumpul bagi komunitas atau kelompok untuk melakukan berbagai kegiatan luar ruangan.
              </li>
              <li>
                <strong>Fasilitas:</strong> Fasilitas di Legok Gintung masih sederhana, namun tersedia area parkir, warung kecil yang menjual makanan dan minuman, serta toilet umum. Pengunjung diharapkan menjaga kebersihan selama berada di area ini untuk melestarikan keindahan alamnya.
              </li>
            </ul>
            <p className="mb-6">
              Legok Gintung di Ciater, Subang, adalah destinasi wisata yang menawarkan kedamaian dan keindahan alam, cocok untuk liburan singkat atau kegiatan bersama keluarga dan teman. Jangan lupa untuk menjaga kebersihan dan keasrian tempat ini agar tetap bisa dinikmati oleh pengunjung berikutnya.
            </p>
            <div className="map">
              <h2 className="text-2xl font-bold mb-4">Lokasi Legok Gintung</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.234918784044!2d107.6717838!3d-6.7411735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6921cd95ee11e3%3A0x2e4ff9e74ab6e1a5!2sLegok%20gintung%20Camp!5e0!3m2!1sen!2sid!4v1723777132363!5m2!1sen!2sid"
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
                <FaCampground className="text-white text-2xl" />
                <span className="text-xs text-white">Camping</span>
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
  );
};

export default AttractionDetailLegokGintung;
