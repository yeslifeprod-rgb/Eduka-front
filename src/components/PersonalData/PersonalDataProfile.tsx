import React from 'react';

interface PersonalDataProfileInterface {
    avatar?: string, 
    firstname?: string,
    lastname?: string,
  }
export default function PersonalDataProfile ({avatar, firstname, lastname}:PersonalDataProfileInterface) {

  return (
    <div className="grid grid-col items-center justify-center mt-20 vh-100">
              <img
                src= {avatar}
                alt="Cindy Baker"
                className="w-35 h-35 rounded-full mb-8 md:mb-0 my-4 md:my-0"
              />
      <p>{firstname}</p>
      <p>{lastname}</p>
      {/* <p>{`Inscrite depuis ${dateJoined}`}</p> */}
    </div>
  );
  }
