import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Send as SendIcon, InsertDriveFile as InsertDriveFileIcon, EmojiEmotions as EmojiEmotionsIcon } from "@mui/icons-material";
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getReceivedMessagesChatData} from "../../utils/Axios/axios";
import { MessageChatInterface } from "../../utils/Interface/MessageChatInterface";

export const Chat: React.FC = () => {
  // 'message' est utilisé pour stocker le message saisi par l'utilisateur
  const [message, setMessage] = useState<string>("");
  // 'messages' est utilisé pour stocker les messages envoyés par l'utilisateur
  const [messages, setMessages] = useState<{ text: string; timestamp: Date }[]>([]);
  // 'receivedMessages' state est utilisé pour stocker les messages reçus depuis le serveur
  const [receivedMessages, setReceivedMessages] = useState<MessageChatInterface[]>([]);

  // 'useEffect' est utilisé pour récupérer les messages reçus depuis le serveur lors du chargement du composant
  useEffect(() => {
    const fetchReceivedMessages = async () => {
      try {

        const data = await getReceivedMessagesChatData();
        if (data) {
          // Mise à jour de l'état 'receivedMessages' avec les données reçues depuis le serveur
          setReceivedMessages(data.datas);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchReceivedMessages();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendButtonClick = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        timestamp: new Date()
      };
      // Ajout du nouveau message à la liste des messages envoyés
      setMessages([...messages, newMessage]);
      // Réinitialisation du champ de saisie de message après l'envoi
      setMessage("");
    }
  };

  // La fonction est appelée lorsque l'utilisateur clique sur le bouton de smiley
  const SmileyButton = () => {
    console.log("Ouvrir la liste de smileys");
  };

  // La fonction est appelée lorsque l'utilisateur clique sur le bouton d'ajout de fichier
  const AttachmentButton = () => {
    console.log("Ouvrir la fenêtre d'ajout de fichier");
  };

  // La fonction calcule la différence de temps entre l'heure actuelle et l'heure du message
  const getTimeDifference = (timestamp: Date) => {
    return formatDistanceToNow(timestamp, { addSuffix: true, locale: fr });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendButtonClick();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-11/12 lg:w-3/5">
        <div className="flex flex-col justify-center h-[90vh]">
          <section>
            {/* Affichage des messages reçus depuis le serveur */}
            {receivedMessages.map((message, index) => (
              <div key={index} className="flex mb-2 justify-start mt-10">
                <div className="text-white rounded-t-lg rounded-br-lg w-64 bg bg-custom-orange p-2 mr-2 relative">
                  <p className="italic text-white text-xs mt-1">{message.firstName}</p>
                  <p>{message.message}</p>
                  {/* Calcul de la différence de temps */}
                  <p className="flex justify-end text-white text-xs mt-1">{getTimeDifference(message.date)}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="flex-1 mb-4">
            {/* Affichage des messages envoyés par l'utilisateur */}
            {messages.map((message, index) => (
              <div key={index} className="flex mb-2 justify-end">
                <div className="text-white rounded-t-lg rounded-bl-lg w-64 bg bg-custom-blue p-2 mr-2 relative">
                  {/* <p className="italic text-white text-xs mt-1">{message.firstName}</p> */}
                  <p>{message.text}</p>
                  {/* Calcul de la différence de temps */}
                  <p className="flex justify-end text-white text-xs mt-1">{getTimeDifference(message.timestamp)}</p>
                </div>
              </div>
            ))}
          </section>
          <form onSubmit={handleSubmit} className="flex justify-between items-center bg-gray-300 p-2 rounded-lg">
            <IconButton onClick={SmileyButton}>
              <EmojiEmotionsIcon />
            </IconButton>
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Saisissez votre message..."
              className="flex-1 bg-white border border-gray-300 rounded-md px-4 py-2  focus:ring-custom-blue focus:border-custom-blue"/>
            <IconButton onClick={AttachmentButton}>
              <InsertDriveFileIcon />
            </IconButton>
            <IconButton
              style={{ color: message.trim() === "" ? '#5c5e60' : '#0FA3B1' }}
              type="submit"
              disabled={message.trim() === ""}>
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};