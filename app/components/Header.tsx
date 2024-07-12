import React, { Dispatch, SetStateAction, useState } from "react";
import CreateableSelectDropdown, {
  Option,
} from "../utils/CreateableSelectDropdown";

interface HeaderProps {
  loading: boolean;
  keywords: {
    searchValue: string;
    experienceValue: string | undefined | boolean;
    locationValue: boolean | undefined | string;
    employementTypeValue: string | undefined | boolean;
  };
  setKeywords: Dispatch<
    SetStateAction<{
      searchValue: string;
      experienceValue: string | undefined | boolean;
      locationValue: boolean | undefined | string;
      employementTypeValue: string | undefined | boolean;
    }>
  >;
  removeAllKeywords: () => void;
}

const Header: React.FC<HeaderProps> = ({
  loading,
  keywords,
  removeAllKeywords,
  setKeywords,
}) => {
  const [experienceValue, setExperienceValue] = useState<
    Option | null | undefined
  >();
  const [locationValue, setLocationValue] = useState<
    Option | null | undefined
  >();
  const [employmentTypeValue, setemploymentTypeValue] = useState<
    Option | null | undefined
  >();
  const [searchValue, setSearchValue] = useState<string>("");

  const experienceOptions = [
    { label: "freshers", value: "" },
    { label: "12", value: "12" },
    { label: "24", value: "24" },
  ];

  const locationOptions = [
    { label: "Remote", value: true },
    { label: "Non-Remote", value: false },
  ];

  const employmentTypeOptions = [
    { label: "FULLTIME", value: "FULLTIME" },
    { label: "CONTRACTOR", value: "CONTRACTOR" },
    { label: "PARTTIME", value: "PARTTIME" },
    { label: "INTERN", value: "INTERN" },
  ];

  const clearAll = () => {
    setSearchValue("");
    removeAllKeywords();
    // setemploymentTypeValue({ label: "", value: "" });
    // setExperienceValue({ label: "", value: "" });
    // setLocationValue({ label: "", value: false });
  };

  return (
    <>
      <div className="header-container">
        <ul>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search By company/ skills/ role"
            className="header-input-text"
          />

          <CreateableSelectDropdown
            isLoading={false}
            options={experienceOptions}
            value={experienceValue}
            setValue={setExperienceValue}
          />

          <CreateableSelectDropdown
            isLoading={false}
            options={locationOptions}
            value={locationValue}
            setValue={setLocationValue}
          />

          <CreateableSelectDropdown
            isLoading={false}
            options={employmentTypeOptions}
            value={employmentTypeValue}
            setValue={setemploymentTypeValue}
          />

          <button
            className="header-btn apply_link"
            onClick={() =>
              setKeywords({
                searchValue: searchValue || "",
                experienceValue: experienceValue?.value || "",
                employementTypeValue: employmentTypeValue?.value || "",
                locationValue: locationValue?.value || "",
              })
            }
          >
            Submit
          </button>

          {/* <button className="header-btn apply_link" onClick={() => clearAll()}>
            Clear
          </button> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
