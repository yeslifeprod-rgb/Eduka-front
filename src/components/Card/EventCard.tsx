import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { FormattedEventCardInterface } from "../../services/interfaces/event";
import { formatRelativeDate } from "../../utils/CalculRelative/FormatRelativeDate";

interface CardEventPropsInterface {
  event: FormattedEventCardInterface;
}
export default function CardEvent(props: CardEventPropsInterface) {
  const { event } = props;
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      textRef.current &&
      "webkitLineClamp" in document.documentElement.style
    ) {
      textRef.current.classList.add("line-clamp-3");
    }
  }, [textRef]);

  return (
    <Card
      sx={{ maxWidth: 400 }}
      variant="outlined"
      className="relative shadow-md m-auto"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={event.event_picture}
          style={{ height: 300 }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <div className="flex justify-between py-2 text-sm text-gray-700">
            <p>
              <LocationOnIcon /> {event.city}
            </p>
            <p>{formatRelativeDate(event.start_date)}</p>
          </div>
          <p
            ref={textRef}
            className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-10 lg:h-20 "
          >
            {event.description}
          </p>

          <section className="flex justify-between items-center text-sm text-gray-700 py-2">
            <div className="flex items-center">
              <IconButton size="small">
                <Avatar
                  alt="Cindy Baker"
                  src={event.profil_picture}
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
              <p>de {event.firstname}</p>
            </div>
          </section>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          style={{ backgroundColor: "#0fa3b1", color: "#fff", fontSize: 12 }}
        >
          Voir
        </Button>
      </CardActions>
      <section className="absolute top-1/2 right-3 transform -translate-y-1/2 lg:hidden">
        <IconButton aria-label="delete" size="small">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </section>
    </Card>

    // <Card variant="outlined" className="relative shadow-md m-2 p-2">
    //   <section className="flex gap-3 pb-2">
    //     <img
    //       className="hidden lg:block w-32 h-32 object-cover rounded-lg shadow-md"
    //       src={event.image!}
    //       alt=""
    //     />
    //     <div className="flex flex-col gap-1">
    //       <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    //         {event.title}
    //       </h5>
    //       <p className="hidden lg:block text-sm text-gray-700 ">
    //         <LocationOnIcon /> {event.address}
    //       </p>
    //       <p
    //         ref={textRef}
    //         className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-10 lg:h-20 "
    //       >
    //         {event.description}
    //       </p>
    //     </div>
    //   </section>
    //   <section className="flex justify-between items-center text-sm text-gray-700">
    //     <div className="flex items-center">
    //       <IconButton aria-label="delete" size="small">
    //         <Avatar
    //           alt="Cindy Baker"
    //           src={event.photo_profil}
    //           sx={{ width: 24, height: 24 }}
    //         />
    //       </IconButton>
    //       <p>de {event.firstname_profil}</p>
    //     </div>
    //     <p>{formatRelativeDate(event.date)}</p>
    //     <div className="hidden lg:block">
    //       <Button
    //         variant="contained"
    //         style={{ backgroundColor: "#0fa3b1", color: "#fff", fontSize: 12 }}
    //       >
    //         Voir
    //       </Button>
    //     </div>
    //   </section>
    //   <section className="absolute top-1/2 right-3 transform -translate-y-1/2 lg:hidden">
    //     <IconButton aria-label="delete" size="small">
    //       <ArrowForwardIosIcon fontSize="inherit" />
    //     </IconButton>
    //   </section>
    // </Card>
  );
}
