import { format, parseISO, formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

export function formatRelativeDate(date:  Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });
}

export function formatToFrenchDate (dateString: string) {
  if(dateString){
    try{
      const date = parseISO(dateString); // Convert to Date object
      const formatted = format(date, 'PPP', { locale: fr }); // Format with French locale
      return formatted;
    }catch(error){
      console.log("Error while formatting date in french:" +error);
    }

  }
  return '';
}

