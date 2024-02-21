import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const KycHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => navigate("/kyc/demat-registration/i/basic-details")}
      >
        Individual Kyc
      </Button>
      <Button
        onClick={() => navigate("/kyc/demat-registration/c/corporate-details")}
      >
        Corporate Kyc
      </Button>
    </div>
  );
};

export default KycHomePage;
