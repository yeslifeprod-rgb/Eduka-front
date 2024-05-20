import React from "react";
import  { formatToFrenchDate } from "../../utils/CalculRelative/FormatRelativeDate";

interface PersonalDataProfileInterface {
  avatar?: string;
  firstname?: string;
  lastname?: string;
  registerAtDate: string;
}
export default function PersonalDataProfile({
  avatar,
  firstname,
  lastname,
  registerAtDate,
}: PersonalDataProfileInterface) {
  

    return (
    <div className="grid grid-col items-center justify-center mt-20 vh-100">
      <img
        src={avatar}
        alt="photo"
        className="w-35 h-35 rounded-full mb-8 md:mb-0 my-4 md:my-0"
      />
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{formatToFrenchDate(registerAtDate)}</p>
    </div>
  );
}
