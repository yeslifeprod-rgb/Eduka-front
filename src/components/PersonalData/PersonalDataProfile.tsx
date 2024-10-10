import { useEffect, useState } from "react";
import { fetchPersonalDataProfile } from "../../services/api/user";
import { formatToFrenchDate } from "../../utils/CalculRelative/FormatRelativeDate";

export default function PersonalDataProfile() {
  const [profile, setProfile] = useState({
    profile_picture: "",
    firstname: "",
    lastname: "",
    registerAtDate: "",
  });

  const [visible, setVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await fetchPersonalDataProfile();
        if (data) {
          setProfile({
            profile_picture: data.profil_picture,
            firstname: data.firstname,
            lastname: data.lastname,
            registerAtDate: data.created_at,
          });
        }
      } catch (error) {
        console.error("Error fetching personal data profile:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div
      className={`flex gap-4 items-center justify-center pt-10 bg-white  ${
        visible
          ? "transform translate-y-0 z-10"
          : "transform -translate-y-full z-0"
      }`}
    >
      <img
        src={profile.profile_picture}
        alt="photo"
        className="w-28 h-28 rounded-full "
      />
      <div>
        <h3 className="text-xl ">
          {profile.firstname} {profile.lastname}
        </h3>
        <p className="text-sm text-gray-800">
          date de création : {formatToFrenchDate(profile.registerAtDate)}
        </p>
      </div>
    </div>
  );
}
