import { useEffect, useMemo, useRef, useState } from "react";
import { useAge } from "./useAge";
import { useData } from "../contexts/DataContext";
import { useHaveInputsChanged } from "./useHaveInputsChanged";
import { GeoNames } from "../api/geoNames";
import { PatientInfoApi } from "../api/patientInfo";
import { useContact } from "../contexts/ContactContext";

export const usePatientInfoForm = (contact) => {
  const { getCountryName, user } = useData();

  const { refetchContacts } = useContact();

  const [birthDate, setBirthDate] = useState('');
  const { age } = useAge(birthDate);

  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState({ number: "", countryCode: "", isValid: false, numberE164: "", numberINT: "" })
  const [homeLandCountry, setHomeLandCountry] = useState({ name: "", code: "" });
  const [countryOfResidence, setCountryOfResidence] = useState({ name: "", code: "" });
  const [cityOfResidence, setCityOfResidence] = useState({ name: "", province: "", id: "" });
  const [occupation, setOccupation] = useState({ type: "", description: "" });
  const [meetingRoom, setMeetingRoom] = useState("");
  const [livesWith, setLivesWith] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [medicalEnsurance, setMedicalEnsurance] = useState("");

  const [citiesList, setCitiesList] = useState([]);

  const [isLoadingFetch, setIsLoadingFetch] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const infoPatient = useRef(
    {
      patient_status: "",
      phone_number: "",
      homeland_country: "",
      residence_country: "",
      residence_city: "",
      birthday: "",
      occupation_type: "",
      occupation_description: "",
      meeting_room: "",
      livesWith: "",
      emergency_contact: "",
      medical_ensurance: "",
    }
  )

  const hasStatusChanged = useHaveInputsChanged(status, infoPatient.current.patient_status);
  const hasBirthDateChanged = useHaveInputsChanged(birthDate, infoPatient.current.birthday);
  const hasPhoneChanged = useHaveInputsChanged(phone.numberE164, infoPatient.current.phone_number);
  const hasHomeLandCountryChanged = useHaveInputsChanged(homeLandCountry.code, infoPatient.current.homeland_country);
  const hasCountryOfResidenceChanged = useHaveInputsChanged(countryOfResidence.code, infoPatient.current.residence_country);
  const hasCityOfResidenceChanged = useHaveInputsChanged(cityOfResidence.id, infoPatient.current.residence_city);
  const hasOccupationTypeChanged = useHaveInputsChanged(occupation.type, infoPatient.current.occupation_type);
  const hasOccupationDescripChanged = useHaveInputsChanged(occupation.description, infoPatient.current.occupation_description);
  const hasRoomChanged = useHaveInputsChanged(meetingRoom, infoPatient.current.meeting_room);
  const hasLivesWithChanged = useHaveInputsChanged(livesWith, infoPatient.current.livesWith);
  const hasEmergencyContactChanged = useHaveInputsChanged(emergencyContact, infoPatient.current.emergency_contact);
  const hasMedicalEnsuranceChanged = useHaveInputsChanged(medicalEnsurance, infoPatient.current.medical_ensurance);

  const somethingChanged = useMemo(() => {
    const arrayHasChanged = [
      hasStatusChanged,
      hasPhoneChanged,
      hasHomeLandCountryChanged,
      hasCountryOfResidenceChanged,
      hasBirthDateChanged,
      hasOccupationTypeChanged,
      hasOccupationDescripChanged,
      hasRoomChanged,
      hasLivesWithChanged,
      hasEmergencyContactChanged,
      hasMedicalEnsuranceChanged,
      hasCityOfResidenceChanged,
    ];
    return arrayHasChanged.some(Boolean);
  }, [
    hasStatusChanged,
    hasPhoneChanged,
    hasHomeLandCountryChanged,
    hasCountryOfResidenceChanged,
    hasBirthDateChanged,
    hasOccupationTypeChanged,
    hasOccupationDescripChanged,
    hasRoomChanged,
    hasLivesWithChanged,
    hasEmergencyContactChanged,
    hasMedicalEnsuranceChanged,
    hasCityOfResidenceChanged,
  ]);

  const mapInfoToRef = (info) => {
    infoPatient.current = {
      patient_status: info.patient_status || "",
      phone_number: info.phone_number || "",
      homeland_country: info.homeland_country || "",
      residence_country: info.residence_country || "",
      residence_city: info.residence_city || "",
      birthday: info.birthday?.slice(0, 10) || "",
      occupation_type: info.occupation_type || "",
      occupation_description: info.occupation_description || "",
      meeting_room: info.meeting_room || "",
      livesWith: info.livesWith || "",
      emergency_contact: info.emergency_contact || "",
      medical_ensurance: info.medical_ensurance || "",
    };
  };

  const setFormStateFromInfo = async (info) => {
    setStatus(info.patient_status || "");
    setPhone(prev => ({ ...prev, number: info.phone_number || "", numberE164: info.phone_number || "", countryCode: info.phone_country || "" }));
    setHomeLandCountry({ name: getCountryName(info.homeland_country), code: info.homeland_country || "" });
    setCountryOfResidence({ name: getCountryName(info.residence_country), code: info.residence_country || "" });
    setOccupation({ type: info.occupation_type || "", description: info.occupation_description || "" });
    setMeetingRoom(info.meeting_room || "");
    setLivesWith(info.livesWith || "");
    setEmergencyContact(info.emergency_contact || "");
    setMedicalEnsurance(info.medical_ensurance || "");
    setBirthDate(info.birthday?.slice(0, 10) || "");

    const city = await GeoNames.getCityById(info.residence_city);
    setCityOfResidence({ name: city.body.data?.name || "", id: info.residence_city || "", province: city.body.data?.province || "" });
  };

  useEffect(() => {

    const fetchData = async () => {
      setIsLoadingFetch(true);
      const { body: info } = await PatientInfoApi.getInfo(contact.psychologist_patient_id);
      mapInfoToRef(info);
      await setFormStateFromInfo(info);
      setIsLoadingFetch(false);
    };

    fetchData();
  }, [contact.psychologist_patient_id]);

  const handleCitiesSearch = async (e) => {
    let results;
    if (e.target.value.length > 1) {
      const { body, res } = await GeoNames.searchCities(e.target.value, countryOfResidence.code);
      results = body.data
    } else {
      results = [];
    }
    setCitiesList(results)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const input = {
      psychologist_patient_id: contact.psychologist_patient_id,
      patient_status: status || "",
      phone_number: phone.numberE164 || "",
      phone_country: phone.countryCode || "",
      homeland_country: homeLandCountry.code || "",
      residence_country: countryOfResidence.code || "",
      residence_city: cityOfResidence.id || "",
      birthday: birthDate || "",
      occupation_type: occupation.type || "",
      occupation_description: occupation.description || "",
      meeting_room: meetingRoom || "",
      livesWith: livesWith || "",
      emergency_contact: emergencyContact || "",
      medical_ensurance: medicalEnsurance || "",
    };

    setIsLoadingSubmit(true);

    const { res, body: info } = await PatientInfoApi.updateInfo(input)
    mapInfoToRef(info)
    await setFormStateFromInfo(info);

    await refetchContacts(user)

    setIsLoadingSubmit(false);

    return false
  }

  return {
    // states
    birthDate, setBirthDate, age,
    status, setStatus,
    phone, setPhone,
    homeLandCountry, setHomeLandCountry,
    countryOfResidence, setCountryOfResidence,
    cityOfResidence, setCityOfResidence,
    occupation, setOccupation,
    meetingRoom, setMeetingRoom,
    livesWith, setLivesWith,
    emergencyContact, setEmergencyContact,
    medicalEnsurance, setMedicalEnsurance,
    citiesList,
    isLoadingFetch,
    isLoadingSubmit,
    somethingChanged,

    // handlers
    handleCitiesSearch,
    handleSubmit,
  }
}
