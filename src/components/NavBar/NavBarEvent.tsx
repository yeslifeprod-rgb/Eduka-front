import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getFakeEventData } from "../../utils/Axios/axios";
import { FakeEventInterface } from "../../utils/Interface/FakeEvent";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const NavBarEvent = () => {
  const [fakeEvent, setFakeEvent] = useState<FakeEventInterface[]>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getFakeEventData();
        if (data) {
          setFakeEvent(data.datas);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div className="flex justify-between items-center py-5 px-4 border-b-2">
      <NavLink to="/home_page_parent">
        <IconButton aria-label="delete" size="large">
          <CloseIcon />
        </IconButton>
      </NavLink>
      <div className="flex flex-col items-center justify-center text-center">
        {fakeEvent.map((event, index) => (
          <div className="mr-14" key={index}>
            <p className="text-2xl">{event.title}</p>
            <p className="">{format(event.createdAt,"EEEE dd MMMM yyyy 'à' HH:mm", { locale: fr })}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};