const DkmContent = () => {
    const border = 'border-gray-300';
    return (
        <>
            <h3 className="text-2xl font-bold">DKM</h3>
            <h4 className="text-xl font-bold mt-4">DEWAN KEMAKMURAN MASJID (DKM)</h4>
            <p>Dewan Kemakmuran Masjid (DKM) adalah lembaga yang bertanggung jawab atas pengelolaan dan pemakmuran masjid, meliputi kegiatan keagamaan, sosial, dan pendidikan bagi umat. DKM berperan penting dalam menjaga kebersihan, kenyamanan, dan ketersediaan sarana ibadah yang memadai bagi jamaah, serta menyelenggarakan berbagai kegiatan yang bermanfaat bagi masyarakat.</p>
            <h4 className="text-xl font-bold mt-4">Fungsi utama DKM, antara lain :</h4>
            <ul className="list-disc list-inside ml-4">
                <li>Mengatur dan mengelola kegiatan ibadah di masjid.</li>
                <li>Menyelenggarakan kegiatan keagamaan dan sosial.</li>
                <li>Memelihara fasilitas dan kebersihan masjid.</li>
                <li>Menggalang dana untuk kebutuhan operasional masjid.</li>
                <li>Mengkoordinasi kegiatan pendidikan agama bagi masyarakat.</li>
            </ul>
            <h4 className="text-xl font-bold mt-4">SUSUNAN PENGURUS DKM</h4>
            <p>“MASJID AL-HIKMAH”</p>
            <table className="min-w-full bg-white border border-gray-300 text-sm lg:text-base">
                <thead>
                    <tr className="bg-tosca text-white">
                        <th className={`py-2 px-4 text-left border-b ${border}`}>NO</th>
                        <th className={`py-2 px-4 text-left border-b ${border}`}>NAMA</th>
                        <th className={`py-2 px-4 text-left border-b ${border}`}>JABATAN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>1</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>DESA NAGRAK</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>PEMBINA</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>2</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>DESA NAGRAK</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>PENASEHAT</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>3</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>RW 03 & RW 04</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>PELINDUNG</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>4</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>TARMO</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>KETUA</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>5</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>SOLIHIN</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>SEKRETARIS</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>6</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>DIDI APIAT</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>BENDAHARA</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>7</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>AHMAD SADELI</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>BIDANG IDAROH (ADMINISTRASI MASJID)</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>8</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>ZAENAL ARIFIN & KARTIS</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>BIDANG IMAROH (AKTIVIS KEMAKMURAN MASJID)</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className={`py-2 px-4 text-left border-b ${border}`}>9</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>NANANG & DADANG</td>
                        <td className={`py-2 px-4 text-left border-b ${border}`}>BIDANG RI`AYAH (PEMELIHARAAN SARANA MASJID)</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default DkmContent;
