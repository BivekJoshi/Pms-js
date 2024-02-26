import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: 12,
    padding: 3,
    margin: "12px 0px 0 0px",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  tableRow: {
    flexDirection: "row",
    flexGrow: 1,
  },
  cellHeader: {
    flex: 1,
    textAlign: "center",
    color: "black",
    backgroundColor: "#D4D4D4",
    fontSize: 8,
    padding: 2,
    border: "1px solid #DEE2E6",
  },
  cellBody: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    color: "black",
    fontSize: "6px",
    padding: 2,
    border: "1px solid #DEE2E6",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  emailCell: {
    flex: 1.5,
    textAlign: "center",
    color: "black",
    fontSize: "6px",
    padding: 2,
    border: "1px solid #DEE2E6",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  phoneCell: {
    flex: 1.1,
    textAlign: "center",
    color: "black",
    fontSize: "6px",
    padding: 2,
    border: "1px solid #DEE2E6",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  snCell: {
    flex: 0.5,
    textAlign: "center",
    color: "black",
    fontSize: 8,
    padding: 2,
    border: "1px solid #DEE2E6",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    border: "1px solid #DEE2E6",
    padding: "6px 0 0 10px",
    fontSize: 8,
  },
});

const DetailOperatorInfoPdf = ({ userData }) => {
  const corporateBodDetails = userData && userData?.corporateBodDetails;
  return (
    <>
      <View>
        <Text style={styles.header}>
          संचालक, कार्यालय प्रमुख र खाता संचालकहरुको विवरण {"\n"}
          (Details of Directors, CEO and Authorised Account Operators)
        </Text>
        <View style={[{ display: "flex", flexDirection: "column" }]}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={[styles.snCell, { backgroundColor: "#D4D4D4" }]}>
                क्र.सं.{"\n"} S.N.
              </Text>
              <Text style={styles.cellHeader}>नाम/थर {"\n"}Name/Surname</Text>
              <Text style={styles.cellHeader}>पद{"\n"} Designation</Text>
              <Text style={styles.cellHeader}>
                पति/पत्नीको नाम {"\n"}Spouse's Name
              </Text>
              <Text style={styles.cellHeader}>
                बुवाको नाम {"\n"}Father's Name
              </Text>
              <Text style={styles.cellHeader}>
                बाजेको नाम Grandfather's Name
              </Text>
              <Text style={styles.cellHeader}>
                स्थायी ठेगाना{"\n"} Permanent Address
              </Text>
              <Text style={styles.cellHeader}>
                हालको ठेगाना {"\n"}Current Address
              </Text>
              <Text style={styles.cellHeader}>टेलिफोन नं.{"\n"} Tel No.</Text>
              <Text style={[styles.phoneCell, { backgroundColor: "#D4D4D4" }]}>
                मोबाइल नं.{"\n"} Mobile No.
              </Text>
              <Text style={[styles.emailCell, { backgroundColor: "#D4D4D4" }]}>
                इमेल {"\n"}Email
              </Text>
              <Text style={[styles.phoneCell, { backgroundColor: "#D4D4D4" }]}>
                प्यान नं. {"\n"}PAN No.
              </Text>
            </View>
          </View>
          {userData?.corporateBodDetails?.detail.map((operatorData, index) => {
            return (
              <View style={styles.tableContainer} key={index}>
                <View style={styles.tableRow}>
                  <Text style={styles.snCell}>{index + 1}.</Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.firstName} {operatorData?.lastName}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.designation}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.spouseName}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.fatherName}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.grandFather}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.permanentAddress}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.currentAddress}
                  </Text>
                  <Text style={styles.cellBody}>
                    {operatorData?.telephoneNo}
                  </Text>
                  <Text style={styles.phoneCell}>{operatorData?.mobileNo}</Text>
                  <Text style={styles.emailCell}>{operatorData?.email}</Text>
                  <Text style={styles.phoneCell}>{operatorData?.panNo}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View style={[styles.table, {marginTop: "14px"}]}>
        <Text
          style={[styles.row, { backgroundColor: "#d4d4d4", width: "25%" }]}
        ></Text>
        <Text
          style={[styles.row, { backgroundColor: "#d4d4d4", width: "25%" }]}
        >
          पहिलो आधिकारीक व्यक्ति {"\n"} First Authorizes Person
        </Text>
        <Text
          style={[styles.row, { backgroundColor: "#d4d4d4", width: "25%" }]}
        >
          दोश्रो आधिकारीक व्यक्ति {"\n"} Second Authorizes Person
        </Text>
        <Text
          style={[styles.row, { backgroundColor: "#d4d4d4", width: "25%" }]}
        >
          तेस्रो आधिकारीक व्यक्ति {"\n"} Third Authorizes Person
        </Text>
      </View>
      <View style={styles.table}>
        <Text style={[styles.row, { width: "25%" }]}>नाम (Name)</Text>
        <Text style={[styles.row, { width: "25%" }]}>
          {corporateBodDetails?.fcpName}
        </Text>
        <Text style={[styles.row, { width: "25%" }]}>
          {corporateBodDetails?.scpName}
        </Text>
        <Text style={[styles.row, { width: "25%" }]}>
          {corporateBodDetails?.trdName}
        </Text>
      </View>
      <View style={styles.table}>
        <Text style={[styles.row, { width: "25%" }]}>पद (Designation)</Text>
        <Text style={[styles.row, { width: "25%" }]}>
          {corporateBodDetails?.fcpDesignation}
        </Text>
        <Text style={[styles.row, { width: "25%" }]}>
          {corporateBodDetails?.scpDesignation}
        </Text>
        <Text style={[styles.row, { width: "25%" }]}>
          {corporateBodDetails?.trdDesignation}
        </Text>
      </View>
      <View style={styles.table}>
        <Text style={[styles.row, { width: "25%"}]}>
          हस्ताक्षर (Signature)
        </Text>
        <Text style={[styles.row, { width: "25%"}]}></Text>
        <Text style={[styles.row, { width: "25%"}]}></Text>
        <Text style={[styles.row, { width: "25%"}]}></Text>
      </View>
      <View style={styles.table}>
        <Text
          style={[styles.row, { width: "25%", padding: "32px 0 32px 10px" }]}
        >
          पासपोर्ट साइजको फोटो {"\n"} Passport size photo
        </Text>
        <Text
          style={[
            styles.row,
            { width: "25%", padding: "32px 0", textAlign: "center" },
          ]}
        >
          फोटो {"\n"} Photo
        </Text>
        <Text
          style={[
            styles.row,
            { width: "25%", padding: "32px 0", textAlign: "center" },
          ]}
        >
          फोटो {"\n"} Photo
        </Text>
        <Text
          style={[
            styles.row,
            { width: "25%", padding: "32px 0", textAlign: "center" },
          ]}
        >
          फोटो {"\n"} Photo
        </Text>
      </View>
    </>
  );
};

export default DetailOperatorInfoPdf;
