// import "@geoapify/geocoder-autocomplete/styles/minimal.css";
// import {
//   GeoapifyContext,
//   GeoapifyGeocoderAutocomplete,
// } from "@geoapify/react-geocoder-autocomplete";

// // Définissez les types appropriés pour les fonctions de rappel
// interface Place {
//   // Ajoutez les propriétés pertinentes pour le type 'Place'
//   name?: string;
// }

// interface Suggestion {
//   // Ajoutez les propriétés pertinentes pour le type 'Suggestion'
//   suggestion?: string;
// }

// export default function GeoApifyAutoComplete() {
//   // Fonction de rappel pour la sélection de lieu
//   function onPlaceSelect(value: Place) {
//     console.log(value);
//   }

//   // Fonction de rappel pour le changement de suggestion
//   function onSuggectionChange(value: Suggestion) {
//     console.log(value);
//   }

//   return (
//     <GeoapifyContext apiKey="YOUR_API_KEY_HERE">
//       <GeoapifyGeocoderAutocomplete
//         placeholder="Enter address here"
//         type={type}
//         lang={language}
//         position={position}
//         countryCodes={countryCodes}
//         limit={limit}
//         value={displayValue}
//         placeSelect={onPlaceSelect}
//         suggestionsChange={onSuggectionChange}
//       />
//     </GeoapifyContext>
//   );
// }
