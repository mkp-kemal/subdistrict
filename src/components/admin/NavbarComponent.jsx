const NavbarComponent = () => {
    const userName = "Nama User"; // Ganti dengan nama pengguna sebenarnya
    const userImage = "https://via.placeholder.com/40"; // Ganti dengan URL gambar profil sebenarnya

    return (
        <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center fixed w-full top-0 z-10">
            <div className="text-lg font-semibold">KKN 415</div>
            <div className="flex items-center space-x-4">
                <span>{userName}</span>
                <img src={userImage} alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
        </nav>
    );
};

export default NavbarComponent;
