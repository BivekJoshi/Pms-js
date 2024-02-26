import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: 12,
    padding: 5,
    margin: "3px 0px 0 0px",
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
    fontSize: 9,
    padding: 4,
    border: "1px solid #DEE2E6",
  },
  cellBody: {
    flex: 1,
    textAlign: "center",
    color: "black",
    fontSize: 9,
    padding: 4,
    border: "1px solid #DEE2E6",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  radio: {
    border: "1px solid #DEE2E6",
    padding: "0 0 0 10px",
    fontSize: 8,
  },
  row: {
    border: "1px solid #DEE2E6",
    padding: "2px 0 0 10px",
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    fontSize: 8,
    textAlign: "start",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
});

const BranchInfoPdf = ({ userData }) => {
  const branchDetail = userData && userData?.branchDetails;
  return (
    <>
      <View>
        <Text style={styles.header}>
          शाखा/कार्यालय संख्या र मुख्य शाखा / कार्यालयहरु रहेको स्थान {"\n"}
          (Branch/Number of Office and Main Branches/Office Location)
        </Text>
        <View style={[{ display: "flex", flexDirection: "column" }]}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.cellHeader}>क्र.सं.{"\n"} (S.N.)</Text>
              <Text style={styles.cellHeader}>क्षेत्र Area</Text>
              <Text style={styles.cellHeader}>
                मुख्य शाखा /कार्यालय (Main Branch/Office)
              </Text>
              <Text style={styles.cellHeader}>ठेगाना {"\n"}(Address)</Text>
              <Text style={styles.cellHeader}>
                टेलिफोन नं. {"\n"}Telephone No.
              </Text>
              <Text style={styles.cellHeader}>
                मोबाईल नं. {"\n"}(Mobile No.)
              </Text>
              <Text style={styles.cellHeader}>
                सम्पर्क व्यक्ति {"\n"}(Contact Person)
              </Text>
            </View>
          </View>
          {branchDetail?.map((branchData, index) => {
            return (
              <View style={styles.tableContainer} key={index}>
                <View style={styles.tableRow}>
                  <Text style={styles.cellBody}>{index + 1}.</Text>
                  <Text style={styles.cellBody}>{branchData?.area}</Text>
                  <Text style={styles.cellBody}>{branchData?.mainBranch}</Text>
                  <Text style={styles.cellBody}>{branchData?.address}</Text>
                  <Text style={styles.cellBody}>{branchData?.telephoneNo}</Text>
                  <Text style={styles.cellBody}>{branchData?.mobileNo}</Text>
                  <Text style={styles.cellBody}>
                    {branchData?.contactPerson}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default BranchInfoPdf;
