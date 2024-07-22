import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const NavbarComponent = ({ user }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setUserData(user);
            setLoading(false);
        }
    }, [user]);

    const userName = userData?.username;
    const userImage = "https://i.ibb.co.com/Y25CX4R/Desain-tanpa-judul-1.png";

    return (
        <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center fixed w-full top-0 z-10">
            <div className="text-lg font-semibold">KKN 415</div>
            <div className="flex items-center space-x-4">
                {loading ? (
                    <div className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="2em" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3" /></circle><circle cx="12" cy="12" r="3" fill="white"><animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3" /></circle><circle cx="20" cy="12" r="3" fill="white"><animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3" /></circle></svg></div>
                ) : (
                    <>
                        <span>{userName}</span>
                        <img src={userImage} alt="Profile" className="w-10 h-10 rounded-full" />
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavbarComponent;
