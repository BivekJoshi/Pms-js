import _ from "lodash";
import { nanoid } from "nanoid";
import React, { lazy, useContext, useState } from "react";
import IndividualTmsKyc from "../kyc/ViewKyc/Individual/IndividualTmsKyc";
import CorporateDpKyc from "../kyc/ViewKyc/corporate/CorporateDpKyc";
import CorporateTmsKyc from "../kyc/ViewKyc/corporate/CorporateTmsKyc";
// import BranchCorporateForm from "../kyc/dp/forms/corporate/BranchCorporate/BranchCorporateForm";

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
const BranchCorporateForm = React.lazy(() =>
  import("../kyc/dp/forms/corporate/BranchCorporate/BranchCorporateForm")
);
const CorporateDocument = React.lazy(() =>
  import("../kyc/pages/CorporateDocument")
);
/*---------------------------CORPORATE--------------------------------------------------------------*/

export const kycDpIndividualRoutes = [
  {
    path: "demat-registration/i/basic-details",
    id: 1,
    component: BasicIndividualDpForms,
  },
  {
    path: "demat-registration/i/document-details",
    id: 2,
    component: IndividualDocument,
  },
  {
    path: "demat-registration/i/address-details",
    id: 3,
    component: IndividualAddress,
  },
  {
    path: "demat-registration/i/family-details",
    id: 4,
    component: FamilyIndividualDpForms,
  },
  {
    path: "demat-registration/i/bank-details",
    id: 5,
    component: BankIndividualDpForms,
  },
  {
    path: "demat-registration/i/occupation-details",
    id: 6,
    component: OccupationsIndividualForms,
  },
  {
    path: "demat-registration/i/aml-cft",
    id: 7,
    component: AmlCft,
  },
  {
    path: "demat-registration/i/nominee-details",
    id: 8,
    component: NomineeDpForms,
  },
  {
    path: "demat-registration/i/bo-details",
    id: 9,
    component: BoIndividualDetails,
  },
  {
    path: "demat-registration/i/detail-verification",
    id: 10,
    component: IndividualDPKyc,
  },
];

export const kycDpCorporateRoutes = [
  {
    path: "demat-registration/c/corporate-details",
    id: 1,
    component: CorporateDetailsDp,
  },
  {
    path: "demat-registration/c/corporate-address",
    id: 2,
    component: CorporateAddress,
  },
  {
    path: "demat-registration/c/corporate-bo-statement",
    id: 3,
    component: CorporateBoStatement,
  },
  {
    path: "demat-registration/c/corporate-ownership-details",
    id: 4,
    component: CorporatOwnershipDetails,
  },
  {
    path: "demat-registration/c/document-details",
    id: 5,
    component: CorporateDocument,
  },
  {
    path: "demat-registration/c/detail-verification",
    id: 6,
    component: IndividualDPKyc,
  },
  {
    path: "demat-registration/c/corporate-branch-detail",
    id: 7,
    component: BranchCorporateForm,
  },
  {
    path: "demat-registration/c/corporate-bank-detail",
    id: 7,
    component: CorporatBankDetail,
  },
];

export const kycTmsIndividualRoutes = [
  {
    path: "tms-registration/i/basic-details",
    id: 1,
    component: BasicIndividualDpForms,
  },
  {
    path: "tms-registration/i/document-details",
    id: 2,
    component: IndividualDocument,
  },
  {
    path: "tms-registration/i/address-details",
    id: 3,
    component: IndividualAddress,
  },
  {
    path: "tms-registration/i/family-details",
    id: 4,
    component: FamilyIndividualDpForms,
  },
  {
    path: "tms-registration/i/bank-details",
    id: 5,
    component: BankIndividualDpForms,
  },
  {
    path: "tms-registration/i/occupation-details",
    id: 6,
    component: OccupationsIndividualForms,
  },
  {
    path: "tms-registration/i/aml-cft",
    id: 7,
    component: AmlCft,
  },
  {
    path: "tms-registration/i/nominee-details",
    id: 8,
    component: NomineeDpForms,
  },
  {
    path: "tms-registration/i/bo-details",
    id: 9,
    component: BoIndividualDetails,
  },
  {
    path: "tms-registration/i/detail-verification",
    id: 10,
    component: IndividualTmsKyc,
  },
];

export const kycTmsCorporateRoutes = [
  {
    path: "tms-registration/c/corporate-details",
    id: 1,
    component: CorporateDetailsDp,
  },
  {
    path: "tms-registration/c/corporate-address",
    id: 2,
    component: CorporateAddress,
  },
  {
    path: "tms-registration/c/corporate-bank-detail",
    id: 3,
    component: CorporatBankDetail,
  },
  {
    path: "tms-registration/c/corporate-ownership-details",
    id: 4,
    component: CorporatOwnershipDetails,
  },
  {
    path: "tms-registration/c/document-details",
    id: 5,
    component: CorporateDocument,
  },
  {
    path: "tms-registration/c/detail-verification",
    id: 6,
    component: CorporateTmsKyc,
  },
  {
    path: "tms-registration/c/corporate-branch-detail",
    id: 6,
    component: BranchCorporateForm,
  },
];

export const kycRoutes = (clientType, formNature) => {
  if (clientType === "I" && formNature === "DP") {
    return _.map(kycDpIndividualRoutes, (route) => _.omit(route, "component"));
  } else if (clientType === "I" && formNature === "TMS") {
    return _.map(kycTmsIndividualRoutes, (route) => _.omit(route, "component"));
  } else if (clientType === "C" && formNature === "DP") {
    return _.map(kycDpCorporateRoutes, (route) => _.omit(route, "component"));
  } else if (clientType === "C" && formNature === "TMS") {
    return _.map(kycTmsCorporateRoutes, (route) => _.omit(route, "component"));
  }
};
