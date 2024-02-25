import React, { useState, useEffect } from "react";
import { Combobox } from "react-widgets";
import axios from "axios";
import "./nepaliInputText.css";

const NepaliInputText = ({ element, formik }) => {
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setSearchValue("");
    return () => {};
  }, []);

  const fetchRemote = async (lastWord) => {
    try {
      setBusy(true);
      const response = await axios.get(
        `https://inputtools.google.com/request?text=${lastWord}&itc=ne-t-i0-und&num=8&cp=0&cs=1&ie=utf-8&oe=utf-8`
      );
      convertIntoOptions(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
    }
  };

  const convertIntoOptions = (data) => {
    try {
      if (data && data[0] === "SUCCESS") {
        const optionsData = data[1][0][1];
        setOptions(optionsData);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyUp = async (e) => {
    const { value, onChange } = e.target;
    setSearchValue(value); // Update the search field value
    if (value.length >= 2 && e.keyCode !== 40 && e.keyCode !== 38) {
      if (e.keyCode === 32) {
        if (options.length >= 1) onChange(options[0] + " ");
        else onChange(value);
        return;
      }
      const lastWord = value.trim().split(" ").pop();
      await fetchRemote(lastWord);
    }
  };

  return (
    <div>
    <Combobox
      {...element}
      data={options}
      value={searchValue}
      placeholder={element?.label}
      onChange={(value) => {
        setSearchValue(value);
        formik.handleChange(value);
      }}
      busy={busy}
      onKeyUp={handleKeyUp}
      filter={() => true}
      hideCaret={true}
    />
  </div>
  );
};

export default NepaliInputText;
