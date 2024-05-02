import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Send as SendIcon, InsertDriveFile as InsertDriveFileIcon, EmojiEmotions as EmojiEmotionsIcon } from "@mui/icons-material";
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getReceivedMessagesChatData } from "../../utils/Axios/axios";
import { MessageChatInterface } from "../../utils/Interface/MessageChatInterface";

export const Chat: React.FC = () => {

  const [message, setMessage] = useState<string>("");// 'message' est utilisé pour stocker le message saisi par l'utilisateur
  const [messages, setMessages] = useState<{ text: string; timestamp: Date; file: File | null; filePreview: string | null }[]>([]);// 'messages' est utilisé pour stocker les messages envoyés par l'utilisateur
  const [receivedMessages, setReceivedMessages] = useState<MessageChatInterface[]>([]);// 'receivedMessages' state est utilisé pour stocker les messages reçus depuis le serveur
  const [selectedFile, setSelectedFile] = useState<File | null>(null);// 'selectedFile' state est utilisé pour stocker le fichier sélectionné par l'utilisateur
  const fileInputRef = useRef<HTMLInputElement>(null);// Référence vers l'input file
  const [smileyIcon, setSmileyIcon] = useState<null | HTMLElement>(null);// SmileyIcon pour le menu des smileys
  const smileyArray: string[] = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇']


  useEffect(() => {
    const fetchReceivedMessages = async () => {
      try {
        const data = await getReceivedMessagesChatData();
        if (data) {
          setReceivedMessages(data.datas);// Mise à jour de l'état 'receivedMessages' avec les données reçues depuis le serveur
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchReceivedMessages();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value); // je "lis" le message écrit dans le champs
  };

  const SendButton = () => {
    if (message.trim() !== "" || selectedFile) {
      const newMessage = {
        text: message,
        timestamp: new Date(),
        file: selectedFile,
        filePreview: selectedFile ? URL.createObjectURL(selectedFile) : null
      };
      setMessages([...messages, newMessage]);// Ajout du nouveau message à la liste des messages envoyés
      setMessage("");// Réinitialisation du champ de saisie de message après l'envoi
      setSelectedFile(null);// Réinitialisation du fichier sélectionné
    }
  };

  // Fonction pour ouvrir le menu des smileys
  const SmileyButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSmileyIcon(event.currentTarget);
  };

  // Fonction pour sélectionner un smiley
  const SmileySelect = (smiley: string) => {
    setMessage(message + smiley);
    setSmileyIcon(null);
  };

  // Fonction pour fermer le menu des smileys
  const SmileyMenuClose = () => {
    setSmileyIcon(null);
  };

  // Fonction qui est appelée lorsque l'utilisateur clique sur le bouton d'ajout de fichier
  const AttachmentButton = () => {
    // Déclencher l'ouverture de l'explorateur de fichiers
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Fonction qui est appelée lorsque l'utilisateur sélectionne un fichier
  const FileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Fonction qui calcule la différence de temps entre l'heure actuelle et l'heure du message
  const getTimeDifference = (timestamp: Date) => {
    return formatDistanceToNow(timestamp, { addSuffix: true, locale: fr });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SendButton();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-11/12 lg:w-3/5">
        <div className="flex flex-col justify-center h-[90vh]">
          <section>
            {/* Affichage des messages reçus depuis le serveur */}
            {receivedMessages.map((message, index) => (
              <div key={index} className="flex justify-start mt-10">
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
              <div key={index} className="flex justify-end mt-10">
                <div className="text-white rounded-t-lg rounded-bl-lg w-64 bg bg-custom-blue p-2 mr-2 relative">
                  {message.file ? (
                    <>
                      <img src={message.filePreview || ''} alt="Preview" className="max-w-xs w-60 mb-2" onClick={() => window.open(message.filePreview || '', '_blank')} />
                      <p className="text-xs">{message.file.name}</p>
                    </>
                  ) : (
                    <p>{message.text}</p>
                  )}
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
            {/* Menu des smileys */}
            <Menu smileyIcon={smileyIcon} open={Boolean(smileyIcon)} onClose={SmileyMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} getContentSmileyIcon={null}
            >
              <div className="grid grid-cols-5 gap-2 p-2">
                {smileyArray.map((smiley, index) => (
                  <MenuItem key={index} onClick={() => SmileySelect(smiley)}>
                    {smiley}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            <input type="text" value={selectedFile ? selectedFile.name : message} onChange={handleChange} placeholder="Saisissez votre message..."
              className="flex-1 bg-white border border-gray-300 rounded-md px-4 py-2  focus:ring-custom-blue focus:border-custom-blue" />
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={FileInputChange} />
            {/* Bouton d'ajout de fichier */}
            <IconButton onClick={AttachmentButton}>
              <InsertDriveFileIcon />
            </IconButton>
            <IconButton
              type="submit" style={{ color: message.trim() === "" && !selectedFile ? '#5c5e60' : '#0FA3B1' }} disabled={message.trim() === "" && !selectedFile}>
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};