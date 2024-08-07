import { useNavigate } from 'react-router-dom';
import { Button, Divider, message } from 'antd';
import { FaPeopleCarry, FaShareAltSquare, FaSwimmer } from 'react-icons/fa';
import { Footer } from './HomeSection';
import BgComponentKoleangkak from '../components/bg/BgComponentKoleangkak';
import { FaChildren } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';

const AttractionDetailKoleangkak = () => {
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
            <h1 className="text-3xl font-bold mb-2">Curug Koleangkak</h1>
            <div className="mb-4 flex justify-between">
              <span className="text-sm text-red-400 font-bold rounded-lg px-2">Update Informasi Agustus 2024</span>
              <p className="text-sm text-white font-semibold bg-tosca rounded-lg px-2">Surveyor: Tim KKN 415</p>
            </div>
            <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
              <p className="mb-4">
                Curug Koleangkak adalah sebuah air terjun yang terletak di kawasan wisata Ciater, Subang, Jawa Barat. Air terjun ini dikenal dengan keindahan alamnya yang masih asri dan alami, serta suasana yang sejuk dan menyegarkan.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Lokasi:</strong> Terletak di Ciater, Subang, Jawa Barat, sekitar 2 jam perjalanan dari Bandung.
                </li>
                <li>
                  <strong>Aksesibilitas:</strong> Akses menuju Curug Koleangkak dapat dilakukan dengan kendaraan roda empat dan roda dua.
                </li>
                <li>
                  <strong>Keindahan Alam:</strong> Curug Koleangkak menawarkan pemandangan yang indah dengan aliran air yang jernih dan deras, serta lingkungan sekitar yang hijau dan rimbun.
                </li>
                <li>
                  <strong>Aktivitas:</strong> Wisatawan dapat menikmati berbagai aktivitas seperti berenang, bermain air, atau sekadar menikmati keindahan alam dan suasana tenang di sekitar air terjun.
                </li>
                <li>
                  <strong>Fasilitas:</strong> Fasilitas di sekitar Curug Koleangkak sudah cukup lengkap, tersedia makanan, minuman dan pakaian renang
                </li>
              </ul>
              <p className="mb-6">Curug Koleangkak menjadi destinasi yang ideal bagi para pecinta alam dan petualang yang ingin menikmati keindahan alam Jawa Barat yang masih alami dan jauh dari keramaian kota.</p>
              <div className="map">
                <h2 className="text-2xl font-bold mb-4">Lokasi Curug Koleangkak</h2>
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

export default AttractionDetailKoleangkak;
