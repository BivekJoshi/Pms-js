import React from "react";
import { Text, View, Font, StyleSheet } from "@react-pdf/renderer";
 
const styles = StyleSheet.create({
  text: {
    fontSize: 8,
  },
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: "14px",
    padding: "5px",
    margin: "12px 0px 5px 0px",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  familyRow: {
    border: "1px solid #DEE2E6",
    padding: "2px 0 0 5px",
    width: "40%",
    display: "flex",
    justifyContent: "center",
    fontSize: 8,
    alignItems: "center",
  },
  familyRows: {
    border: "1px solid #DEE2E6",
    padding: "2px 0 0 5px",
    width: "60%",
    display: "flex",
    justifyContent: "center",
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 2,
    alignItems: "center",
  },
});
 
const relationType = [
  { id: 1, label: "grandfather", value: "Grand Father", prefix: "बाजेको नाम" },
  { id: 2, label: "father", value: "Father", prefix: "बुवाको नाम" },
  { id: 3, label: "mother", value: "Mother", prefix: "आमाको नाम" },
  { id: 4, label: "spouse", value: "Spouse", prefix: "पति / पत्‍नीको नाम" },
  { id: 5, label: "daughter", value: "Daughter", prefix: "छोरीको नाम" },
  { id: 5, label: "son", value: "Son", prefix: "छोराको नाम" },
  { id: 5, label: "daughterinlaw", value: "Daughter In Law", prefix: "बुहारीको नाम" },
  { id: 5, label: "fatherinlaw", value: "Father In Law", prefix: "ससुराको नाम" },
  { id: 5, label: "motherinlaw", value: "Mother In Law", prefix: "सासुको नाम" },
];
 
const FamilyInfoPdf = ({ data }) => {
  // for family details data part
  const familyData = data?.clientFamilyDetails;
  const relationTypeMap = Object.fromEntries(
    relationType.map((relation) => [relation.label, null])
  );
  const mappedFamilyData = familyData?.reduce((result, member) => {
    const { relation, ...rest } = member;
    if (relationTypeMap.hasOwnProperty(relation)) {
      result[relation] = rest;
    }
    return result;
  }, {});
  const capitalizeAndSpace = (text) => text.toUpperCase().split("").join(" ");
 
  return (
    <View>
      <Text style={styles.header}>
        परिवारका सदस्यहरुको विवरण (Details Of Family Member)
      </Text>
 
      {relationType.map((relation) => (
        <View style={styles.table} key={relation.id}>
          <Text style={styles.familyRow}>{relation?.prefix} ({relation?.value}'s Name)</Text>
          <Text style={styles.familyRows}>
            {mappedFamilyData?.[relation.label]
              ? capitalizeAndSpace(mappedFamilyData[relation.label]?.memberName)
              : null}
          </Text>
        </View>
      ))}
    </View>
  );
};
 
export default FamilyInfoPdf;