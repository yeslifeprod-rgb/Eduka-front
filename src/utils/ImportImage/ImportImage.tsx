import React, { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        const imageDataUrl = event.target.result.toString();
        setImage(imageDataUrl);

        // Mettre à jour le storedDataEvent avec l'URL de l'image
        const storedDataString = localStorage.getItem("storedDataEvent");
        if (storedDataString) {
          const storedDataEvent: StoredDataEvent = JSON.parse(storedDataString);
          storedDataEvent.image = imageDataUrl;
          localStorage.setItem(
            "storedDataEvent",
            JSON.stringify(storedDataEvent)
          );
        }
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <label htmlFor="image">Ajouter une photo</label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*" // Limitez le type de fichier à seulement des images
        onChange={handleImageChange} // Gestionnaire d'événements pour la modification de l'image
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-blue focus:border-custom-blue"
      />
      {/* Afficher l'aperçu de l'image si elle a été téléchargée */}
      {image && (
        <img src={image} alt="Uploaded" className="mt-2 max-w-xs max-h-xs" />
      )}
    </div>
  );
}
