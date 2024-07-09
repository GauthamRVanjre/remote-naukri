import React, { useState } from "react";
import CreateableSelectDropdown, {
  Option,
} from "../utils/CreateableSelectDropdown";

const Header = ({ keywords, removekeywords, removeAllKeywords }: any) => {
  const [experienceValue, setExperienceValue] = useState<
    Option | null | undefined
  >();
  const experienceOptions = [
    { label: "freshers", value: "Freshers" },
    { label: "12", value: "12" },
    { label: "24", value: "24" },
  ];

  return (
    <>
      <div className="header-container">
        <ul>
          <CreateableSelectDropdown
            isLoading={false}
            options={experienceOptions}
            setValue={setExperienceValue}
            value={experienceValue}
          />

          <select className="select-dropdown" name="location" id="location">
            <option value="Remote">Remote</option>
            <option value="NoRemote">No Remote</option>
          </select>

          <select className="select-dropdown" name="city" id="city">
            <option value="Remote">Remote</option>
            <option value="NoRemote">No Remote</option>
          </select>

          {/* {keywords.map((key, id) => {
            return (
              <li key={id}>
                {key}
                <button className="close" onClick={() => removekeywords(key)}>
                  &#x2716;
                </button>
              </li>
            );
          })} */}
          <a href="/" onClick={() => removeAllKeywords()}>
            Clear Filters
          </a>
        </ul>
      </div>
    </>
  );
};

export default Header;
