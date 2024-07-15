import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleGroup, FaUmbrellaBeach } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const HomeSection = () => {
    return (
        <div className="home-container">
            {/* <div className="home-content">
                <p>Explore the world of digital media processing with our cutting-edge technologies.</p>
            </div> */}
            <Activity />
            <Attractions />
        </div>
    );
}

const Activity = () => {
    return (
        <div className="popular-pack no-bgpack container-fluid bg-gray-50 py-8">
            <div className="container mx-auto">
                <div className="session-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Kegiatan Desa</h2>
                    <p className="text-gray-600">
                        berikut kegiatan-kegiatan yang dilakukan di desa
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex space-x-4">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <div key={index} className="flex-shrink-0 w-80">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <span className="absolute top-2 left-2 text-white bg-tosca200 bg-opacity-75 px-2 py-1 rounded-full text-xs">Senin, {index + 1} juli 2024</span>
                                        <div className="bg-cover bg-center w-full h-48" style={{ backgroundImage: `url('https://picsum.photos/200/300?random=${index}')` }}></div>
                                    </div>
                                    <div className="revire flex justify-between items-center p-1">
                                        <ul className="rat flex space-x-1">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <li key={star}><i className="fa fa-star text-yellow-500"></i></li>
                                            ))}
                                        </ul>
                                        {/* <span className="pric text-lg font-bold text-gray-700">
                                            $750
                                        </span> */}
                                    </div>
                                    <div className="detail p-4">
                                        <h4 className="text-xl font-bold">Judul Heading Nomor {index + 1} dua baris</h4>
                                        <p className="text-gray-600">
                                            Deskripsi setiap kegiatan dijelaskan disini, ini contoh subjudul untuk tiga baris
                                        </p>
                                    </div>
                                    <div className="options p-4 bg-tosca justify-around">
                                        <ul className="flex justify-around">
                                            <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                <RiInstagramFill className="text-white" />
                                            </li>
                                            <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                <FaUmbrellaBeach className="text-white" />
                                            </li>
                                            <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                <FaPeopleGroup className="text-white" />
                                            </li>
                                            <li className="w-10 h-10 rounded-full bg-tosca200 flex justify-center items-center">
                                                <FaPeopleCarry className="text-white" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Attractions = () => {
    return (
        <div className="popular-pack container-fluid bg-gray-50 py-8">
            <div className="container mx-auto">
                <div className="session-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Objek Wisata</h2>
                    <p className="text-gray-600">
                        Berikut objek wisata yang ada di dekat desa
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex justify-around space-x-4">
                        {[1, 2].map((_, index) => (
                            <div key={index} className="flex-shrink-0 w-80">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="relative">
                                        <div className="bg-cover bg-center w-full h-48" style={{ backgroundImage: `url('https://picsum.photos/200/300?random=${index}')` }}></div>
                                    </div>
                                    <div className="revire flex justify-between items-center p-1">
                                        <ul className="rat flex space-x-1">
                                            {[1, 2].map(star => (
                                                <li key={star}><i className="fa fa-star text-yellow-500"></i></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="detail p-4">
                                        <h4 className="text-xl font-bold">{index === 0 ? 'Curug Koleangkak' : 'Wisata Lain'}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
