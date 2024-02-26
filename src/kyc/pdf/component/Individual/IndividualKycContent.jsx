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
import BasicInfoPdf from "../PageDp/BasicInfoPdf";
import AddressComponent from "../ReuseStyle/AddressComponent";
import FamilyInfoPdf from "../PageDp/FamilyInfoPdf";
import BankInfoPdf from "../PageDp/BankInfoPdf";
import OfficeStamp from "../ReuseStyle/OfficeStamp";
import ThumpStamp from "../ReuseStyle/ThumpStamp";
import UserAgreementDpPdf from "../UserAggrement/UserAggrementDpPdf";
import RequestFormPdf from "../PageDp/RequestFormPdf";

Font.register({
  family: "notoSerifDevnagari",
  src: notoSerifDevanagari,
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "notoSerifDevnagari",
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

const IndividualKycContent = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <BasicInfoPdf />
        <AddressComponent title="सथायी ठेगाना (Permanent Address)" />
      </Page>
      <Page size="A4" style={styles.page}>
        <AddressComponent title="हालको ठेगाना (Current Address)" />
        <FamilyInfoPdf />
        <BankInfoPdf />
      </Page>
      <Page size="A4" style={styles.page}>
        <OfficeStamp />
        <ThumpStamp />
      </Page>
      <Page size="A4" style={styles.page}>
        <UserAgreementDpPdf/>
      </Page>
      <Page size="A4" style={styles.page}>
        <RequestFormPdf/>
      </Page>
    </Document>
  );
};

export default IndividualKycContent;
