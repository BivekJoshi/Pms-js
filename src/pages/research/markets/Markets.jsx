import React from "react";

const Markets = () => {
  return (
    <div>
      <Grid
        display="grid"
        gridTemplateColumns="2fr 3fr"
        gap="2rem"
        p="2rem 1rem"
        rowGap="2rem"
      >
        <ResearchTable />
        <ResearchNews />
        <ResearchGainer />
        <ResearchLosser />
      </Grid>
    </div>
  );
};

export default Markets;
