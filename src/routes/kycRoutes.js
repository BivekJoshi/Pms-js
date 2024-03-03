import { nanoid } from "nanoid";
import React, { lazy, useContext, useState } from "react";

/*---------------------------INDIVIDUAL--------------------------------------------------------------*/
const BasicIndividualDpForms = React.lazy(() =>
  import("../kyc/dp/forms/individual/BasicIndividualDpForms")
);
const IndividualDocument = React.lazy(() =>
  import("../kyc/pages/IndividualDocument")
);
const IndividualAddress = React.lazy(() =>
  import("../kyc/pages/IndividualAddress")
);
const FamilyIndividualDpForms = React.lazy(() =>
  import("../kyc/dp/forms/individual/FamilyIndividual/FamilyIndividualDpForms")
);
const BankIndividualDpForms = React.lazy(() =>
  import("../kyc/dp/forms/individual/BankIndividual/BankIndividualDpForms")
);
const NomineeDpForms = React.lazy(() =>
  import("../kyc/dp/forms/individual/NomineeIndividual/NomineeDpForms")
);
const IndividualDPKyc = React.lazy(() =>
  import("../kyc/ViewKyc/Individual/IndividualDPKyc")
);
const AmlCft = React.lazy(() =>
  import("../kyc/dp/forms/individual/Aml-Cft/AmlCft")
);
const OccupationsIndividualForms = React.lazy(() =>
  import(
    "../kyc/dp/forms/individual/OccupationIndividual/OccupationsIndividualForms"
  )
);
const BoIndividualDetails = React.lazy(() =>
  import("../kyc/dp/forms/individual/BoIndividual/BoIndividualDetails")
);
/*---------------------------INDIVIDUAL--------------------------------------------------------------*/

/*---------------------------CORPORATE--------------------------------------------------------------*/
const CorporateDetailsDp = React.lazy(() =>
  import("../kyc/dp/forms/corporate/CorporateDetailsDp")
);
const CorporateAddress = React.lazy(() =>
  import("../kyc/pages/CorporateAddress")
);
const CorporateBoStatement = React.lazy(() =>
  import("../kyc/dp/forms/corporate/CorporatBoStatement")
);
const CorporatOwnershipDetails = React.lazy(() =>
  import("../kyc/dp/forms/corporate/CorporatOwnershipDetails")
);
const CorporatBankDetail = React.lazy(() =>
  import("../kyc/dp/forms/corporate/CorporatBankDetail")
);
const CorporateDocument = React.lazy(() =>
  import("../kyc/pages/CorporateDocument")
);
const BranchCorporateForm = React.lazy(() =>
  import("../kyc/dp/forms/corporate/BranchCorporate/BranchCorporateForm")
);
/*---------------------------CORPORATE--------------------------------------------------------------*/

export const kycDpIndividualRoutes = [
  {
    path: "demat-registration/i/basic-details",
    id: nanoid(),
    component: BasicIndividualDpForms,
  },
  {
    path: "demat-registration/i/document-details",
    id: nanoid(),
    component: IndividualDocument,
  },
  {
    path: "demat-registration/i/address-details",
    id: nanoid(),
    component: IndividualAddress,
  },
  {
    path: "demat-registration/i/family-details",
    id: nanoid(),
    component: FamilyIndividualDpForms,
  },
  {
    path: "demat-registration/i/bank-details",
    id: nanoid(),
    component: BankIndividualDpForms,
  },
  {
    path: "demat-registration/i/occupation-details",
    id: nanoid(),
    component: OccupationsIndividualForms,
  },
  {
    path: "demat-registration/i/aml-cft",
    id: nanoid(),
    component: AmlCft,
  },
  {
    path: "demat-registration/i/nominee-details",
    id: nanoid(),
    component: NomineeDpForms,
  },
  {
    path: "demat-registration/i/bo-details",
    id: nanoid(),
    component: BoIndividualDetails,
  },
  {
    path: "demat-registration/i/detail-verification",
    id: nanoid(),
    component: IndividualDPKyc,
  },
];

export const kycDpCorporateRoutes = [
  {
    path: "demat-registration/c/corporate-details",
    id: nanoid(),
    component: CorporateDetailsDp,
  },
  {
    path: "demat-registration/c/corporate-address",
    id: nanoid(),
    component: CorporateAddress,
  },
  {
    path: "demat-registration/c/corporate-bank-detail",
    id: nanoid(),
    component: CorporatBankDetail,
  },
  {
    path: "demat-registration/c/corporate-bo-statement",
    id: nanoid(),
    component: CorporateBoStatement,
  },
  {
    path: "demat-registration/c/corporate-ownership-details",
    id: nanoid(),
    component: CorporatOwnershipDetails,
  },
  {
    path: "demat-registration/c/document-details",
    id: nanoid(),
    component: CorporateDocument,
  },
  {
    path: "demat-registration/c/corporate-branch-detail",
    id: nanoid(),
    component: BranchCorporateForm,
  },
];
