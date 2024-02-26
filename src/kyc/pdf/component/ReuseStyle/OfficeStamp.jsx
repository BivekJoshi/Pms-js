import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: "14px",
    padding: "5px",
    margin: "12px 0px 5px 0px",
  },
  text: {
    fontSize: "8px",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  office: {
    border: "1px solid grey",
    padding: "6px 0 0 10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  officeContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "25%",
  },
  officeContentMiddle: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    gap: "6px",
    // justifyContent: "center",
    alignItems: "center",
  },
  officeStamp: {
    border: "1px solid grey",
    padding: "6px 0 0 10px",
    height: "11vh",
    width: "50%",
  },
  officeTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  heading: {
    fontSize: 14,
  },
});

const OfficeStamp = ({ data }) => {
  return (
    <View>
      <Text style={styles.header}>
        कार्यालयको प्रयोजनको लागि (For Official Use)
      </Text>

      <View style={styles.table}>
        <View style={styles.office}>
          <View style={styles.officeContent}>
            <Text style={styles.heading}>रुजु गर्ने</Text>
            <Text style={styles.text}>नाम थर:</Text>
            <Text style={styles.text}>पद:</Text>
            <Text style={styles.text}>हस्ताक्षर:</Text>
            <Text style={styles.text}>मिति:</Text>
          </View>
          <View style={styles.officeContentMiddle}>
            <Text>कार्यालयको छाप</Text>
            <View style={styles.officeTable}>
              <View style={styles.officeStamp}></View>
            </View>
            <Text style={styles.text}>
              कार्यालयको नाम:
              {/* {orgData?.name} */}
            </Text>
          </View>
          <View style={styles.officeContent}>
            <Text style={styles.heading}>प्रमाणित गर्ने</Text>
            <Text style={styles.text}>नाम थर:</Text>
            <Text style={styles.text}>पद:</Text>
            <Text style={styles.text}>हस्ताक्षर:</Text>
            <Text style={styles.text}>मिति:</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OfficeStamp;
