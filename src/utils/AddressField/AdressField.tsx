import {
  AddressAutofill,
  AddressMinimap,
  config,
  useConfirmAddress,
} from "@mapbox/search-js-react";
import { useCallback, useEffect, useState } from "react";

export default function AddressField() {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showMinimap, setShowMinimap] = useState(false);
  const [feature, setFeature] = useState();
  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken =
      "pk.eyJ1IjoieWVzbGlmZTEwIiwiYSI6ImNsdnV5amx3czFrN20ya29kcnIybXp4YzUifQ.w4zlwaAcEw8H-k8KO7JWow";
    if (accessToken) {
      setToken(accessToken);
      config.accessToken = accessToken;
    }
  }, []);

  const { formRef, showConfirm } = useConfirmAddress({
    minimap: true,
    skipConfirmModal: (feature) =>
      ["exact", "high"].includes(feature.properties.match_code.confidence),
  });

  const handleRetrieve = useCallback(
    (res) => {
      const feature = res.features[0];
      setFeature(feature);
      setShowMinimap(true);
      setShowFormExpanded(true);
    },
    [setFeature, setShowMinimap]
  );

  function handleSaveMarkerLocation(coordinate) {
    console.log(`Marker moved to ${JSON.stringify(coordinate)}.`);
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await showConfirm();
      if (result.type === "nochange") submitForm();
    },
    [showConfirm]
  );

  function submitForm() {
    setShowValidationText(true);
    setTimeout(() => {
      resetForm();
    }, 2500);
  }

  function resetForm() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    setShowFormExpanded(false);
    setShowValidationText(false);
    setFeature(null);
  }

  return (
    <>
      <form ref={formRef} className="" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex flex-col gap-4">
            {/* Input form */}
            <label className="">Address</label>
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <input
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
                placeholder="Commencez a entrer une adresse"
                autoComplete="address-line1"
                id="mapbox-autofill"
              />
            </AddressAutofill>
            {!showFormExpanded && (
              <div
                id="manual-entry"
                className="inline-block m-auto txt-s txt-bold color-gray mb3 border-custom-orange border-2 p-2 rounded-md cursor-pointer"
                onClick={() => setShowFormExpanded(true)}
              >
                Entrez manuellement l'adresse
              </div>
            )}
            <div style={{ display: showFormExpanded ? "block" : "none" }}>
              <label className="txt-s txt-bold color-gray mb3">
                Address Line 2
              </label>
              <input
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
                placeholder="Apartment, suite, unit, building, floor, etc."
                autoComplete="address-line2"
              />
              <label>City</label>
              <input
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
                placeholder="City"
                autoComplete="address-level2"
              />
              <label>State / Region</label>
              <input
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
                placeholder="State / Region"
                autoComplete="address-level1"
              />
              <label className="txt-s txt-bold color-gray mb3">
                ZIP / Postcode
              </label>
              <input
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
                placeholder="ZIP / Postcode"
                autoComplete="postal-code"
              />
            </div>
          </div>
          <div className="mb-4">
            {/* Visual confirmation map */}
            <div id="minimap-container">
              <AddressMinimap
                canAdjustMarker={true}
                satelliteToggle={true}
                feature={feature}
                show={showMinimap}
                onSaveMarkerLocation={handleSaveMarkerLocation}
              />
            </div>
          </div>
        </div>

        {/* Form buttons */}
        {showFormExpanded && (
          <div className="flex mb30 submit-btns gap-4">
            <button type="submit" className="btn round" id="btn-confirm">
              Confirm
            </button>
            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-gray-200"
              id="btn-reset"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        )}
      </form>

      {/* Validation text */}
      {showValidationText && (
        <div
          id="validation-msg"
          className=" bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Adresse validée
        </div>
      )}
    </>
  );
}
