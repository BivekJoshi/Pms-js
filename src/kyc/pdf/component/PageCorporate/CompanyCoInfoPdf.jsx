import { Text, StyleSheet, View, Font } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: "12px",
    padding: "5px 5px 0 5px",
    margin: "5px 0px 0px 0px",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    border: "1px solid #DEE2E6",
    padding: "2px 0 0 10px",
    display: "flex",
    justifyContent: "center",
    fontSize: 8,
    textAlign: "start",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  boldText: {
    fontSize: "11px",
    fontWeight: "bold",
    margin: "4px 0px",
  },
  paragraphTextHeader: {
    fontSize: "10px",
    textAlign: "center",
  },
  paragraphText: {
    fontSize: 8,
  },
});

const CompanyCoInfoPdf = ({ userData }) => {
  const corporateDetails = userData && userData?.corporateDetails;

  return (
    <>
      <View>
        <Text style={styles.header}>
          कम्पनीको थप विवरण (Details of Company)
        </Text>
      </View>

      <View>
        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            दर्ता गर्ने कार्यालय (Registration Office)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.registrationOffice?.toUpperCase()}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            दर्ता नं. (Registration No.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.registrationNo}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            दर्ता मिति. (Registration Date.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.registrationDate}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            {" "}
            स्थायी लेखा नं. (PAN No.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.panNo}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            मूल्य अभिबृद्धि कर दर्ता नं. (VAT Registration No.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.vatRegistration}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            {" "}
            सहायक कम्पनी भएमा मुख्य कम्पनीको नाम र ठेगाना (Name and Address of
            Main Company in case of Subsidiary Company Office)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.isSubsidiary === true
              ? corporateDetails?.mainCompanyName
              : ""}{" "}
            {corporateDetails?.isSubsidiary === true
              ? userData?.corporateDetails?.address
              : ""}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            कम्पनीको व्‍यवसायको किसिम (Types of business of the company)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.businessType &&
            corporateDetails?.businessType === "MANU"
              ? "Manufacturing"
              : corporateDetails?.businessType === "SEV"
              ? "Service Oriented"
              : ""}{" "}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            कार्य क्षेत्र (Area of Work)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.workArea}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            धितोपत्र बजारमा सूचीकरण भए / नभएको (Listed Yes/No)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.isListed ? "Yes" : "No"}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            सूचीकरण मिति. (SEBON Registration Date.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.listingDate}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            नेपाल राष्ट्र बैंकमा दर्ता भएको भए दर्ता नं. (NRB Registration No.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.nrbRegistration &&
              corporateDetails?.nrbRegistration}
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={[styles.row, { width: "50%" }]}>
            नेपाल राष्ट्र बैंकको स्वीकृत मिति. (NRB Approval Date.)
          </Text>
          <Text style={[styles.row, { width: "50%" }]}>
            {corporateDetails?.nrbApproval && corporateDetails?.nrbApproval}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CompanyCoInfoPdf;
