import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import notoSerifDevanagari from "../../../../assets/NotoSerifDevanagari-VariableFont_wdth,wght.ttf";
import AddressComponent from "../ReuseStyle/AddressComponent";
import UserAggrementTmsOnePdf from "../UserAggrement/UserAggrementTmsOnePdf";
import UserAgreementTmsTwoPdf from "../UserAggrement/UserAggrementTmsTwoPdf";
import UserAggrementTmsThreePdf from "../UserAggrement/UserAggrementTmsThreePdf";
import UserAggrementTmsFourPdf from "../UserAggrement/UserAggrementTmsFourPdf";
import BasicInfoCoPdf from "../PageCorporate/BasicInfoCoPdf";
import CompanyCoInfoPdf from "../PageCorporate/CompanyCoInfoPdf";
import BranchInfoPdf from "../PageCorporate/BranchInfoCoPdf";
import DetailOperatorInfoPdf from "../PageCorporate/DetailOperatorInfoPdf";
import BankInfoPdf from "../PageIndividual/BankInfoPdf";
import OfficeStamp from "../ReuseStyle/OfficeStamp";

Font.register({
  family: "notoSerifDevanagari",
  src: notoSerifDevanagari,
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "notoSerifDevanagari",
    flexDirection: "column",
    padding: "12px 35px",
    fontSize: "14px",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    color: "grey",
    right: 0,
    left: 0,
    textAlign: "center",
  },
});

const CorporateKycContent = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <BasicInfoCoPdf />
        <CompanyCoInfoPdf />
      </Page>
      <Page size="A4" style={styles.page}>
        <AddressComponent title="कम्पनीको हालको ठेगाना (Current Address Of Company)" />
        <AddressComponent title="कम्पनी दर्ता हुँदाको ठेगाना ( Permanent Address Of Company)" />
        <BranchInfoPdf/>
      </Page>
      <Page size="A4" style={styles.page}>
        <DetailOperatorInfoPdf/>
      </Page>
      <Page size="A4" style={styles.page}>
        <BankInfoPdf/>
        <OfficeStamp/>
      </Page>
      <Page size="A4" style={styles.page}>
        <UserAggrementTmsOnePdf />
      </Page>
      <Page size="A4" style={styles.page}>
        <UserAgreementTmsTwoPdf />
        <UserAggrementTmsThreePdf />
      </Page>
      <Page size="A4" style={styles.page}>
        <UserAggrementTmsFourPdf />
      </Page>
    </Document>
  );
};

export default CorporateKycContent;
