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

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await fetchPersonalDataProfile();
        if (data) {
          console.log("🚀 ~ fetchProfileData ~ data:", data);

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
  console.log("🚀 ~ PersonalDataProfile ~ profile:", profile);
  return (
    <div className="flex gap-4 items-center justify-center pt-20 bg-white ">
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
