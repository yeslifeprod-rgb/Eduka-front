import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import eventOnChangeInterface from "../../services/interfaces/eventOnChange";

interface CardEventOnChangePropsInterface {
  eventOnChange: eventOnChangeInterface;
}
export default function NotificationCard(
  props: CardEventOnChangePropsInterface
) {
  const { eventOnChange } = props;
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      textRef.current &&
      "webkitLineClamp" in document.documentElement.style
    ) {
      textRef.current.classList.add("line-clamp-3");
    }
  }, [textRef]);

  let notificationText = "";
  let svg_icon = "";

  if (eventOnChange.isCanceled) {
    notificationText = `${eventOnChange.title} a été annulé.`;
    svg_icon = "/public/cal_canceled.svg";
  }
  if (!eventOnChange.isParticipated) {
    notificationText = `L'auteur de ${eventOnChange.title} attend votre réponse.`;
    svg_icon = "/public/cal_question.svg";
  }
  if (eventOnChange.isValidated) {
    notificationText = `Votre participation à ${eventOnChange.title} a été validée par le professeur.`;
    svg_icon = "/public/cal_validated.svg";
  }
  if (
    eventOnChange.isParticipated &&
    dateDifferenceInDays(eventOnChange.date) <= 3
  ) {
    notificationText = `Votre événement ${eventOnChange.title} aura lieu dans moins de 3 jours.`;
    svg_icon = "/public/cal_exclamation.svg";
  }

  return (
    <Card variant="outlined" className="w-full max-w-xl shadow-md ">
      <CardContent className="flex gap-3">
        <img src={svg_icon} alt="svg_icon" />
        <Typography variant="subtitle1">{notificationText}</Typography>
      </CardContent>
    </Card>
  );
}
function dateDifferenceInDays(eventDate: string | number | Date) {
  const today = new Date();
  const eventDateTime = new Date(eventDate);
  const differenceInMilliseconds = eventDateTime.getTime() - today.getTime();
  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  return differenceInDays;
}
