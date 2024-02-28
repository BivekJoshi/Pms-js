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
import BasicInfoPdf from "../PageIndividual/BasicInfoPdf";
import AddressComponent from "../ReuseStyle/AddressComponent";
import FamilyInfoPdf from "../PageIndividual/FamilyInfoPdf";
import BankInfoPdf from "../PageIndividual/BankInfoPdf";
import OfficeStamp from "../ReuseStyle/OfficeStamp";
import ThumpStamp from "../ReuseStyle/ThumpStamp";
import UserAgreementDpPdf from "../UserAggrement/UserAggrementDpPdf";
import RequestFormPdf from "../PageIndividual/RequestFormPdf";
import OccupationInfoPdf from "../PageIndividual/OccupationInfoPdf";
import TermsAndConditionInfo from "../PageIndividual/TermsAndConditionInfo";
import SignatureUI from "../ReuseStyle/SignatureUI";

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
        <OccupationInfoPdf />
        <TermsAndConditionInfo />
        <View
          style={[
            styles,
            {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            },
          ]}
        >
          <ThumpStamp />
          <SignatureUI />
        </View>
        <OfficeStamp />
      </Page>
      <Page size="A4" style={styles.page}>
        <UserAgreementDpPdf />
      </Page>
      <Page size="A4" style={styles.page}>
        <RequestFormPdf />
      </Page>
    </Document>
  );
};

export default IndividualKycContent;
