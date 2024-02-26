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
  row: {
    border: "1px solid #DEE2E6",
    padding: "2px 0 0 10px",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    fontSize: 8,
    textAlign: "start",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  fullRow: {
    border: "1px solid #DEE2E6",
    padding: "6px 0 0 10px",
    width: "50%",
    display: "flex",
    fontSize: 8,
    justifyContent: "center",
  },
});

const AddressComponent = ({ addressData, title }) => {
  return (
    <View style={[styles, {margin: "8px 0 8px 0"}]}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.table}>
        <Text style={styles.row}>देश (Country)</Text>
        <Text style={styles.row}>{addressData?.country}</Text>
        <Text style={styles.row}>प्रदेश (Province)</Text>
        <Text style={styles.row}>{addressData?.province}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.fullRow}>
          गा.पा. / न.पा. / उ.म.न.पा / म.न.पा  (Rural Municipality /
          Municipality / Sub Metropolitan city / Metropolitan city) :
        </Text>
        <Text style={styles.fullRow}>{addressData?.municipality}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.row}>जिल्ला (District)</Text>
        <Text style={styles.row}>{addressData?.district}</Text>
        <Text style={styles.row}> वडा नं. (Ward No.)</Text>
        <Text style={styles.row}>{addressData?.wordNo}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.row}>टोल (Tole)</Text>
        <Text style={styles.row}>{addressData?.tole}</Text>
        <Text style={styles.row}> टेलिफोन नं. (Telephone No.)</Text>
        <Text style={styles.row}>{addressData?.telephoneNo}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.row}>मोबाईल नं. (Mobile No.)</Text>
        <Text style={styles.row}>{addressData?.mobileNo}</Text>
        <Text style={styles.row}>इमेल (Email)</Text>
        <Text style={styles.row}>{addressData?.email}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.fullRow}>वेबसाइट (Website)</Text>
        <Text style={styles.fullRow}>{addressData?.website}</Text>
      </View>
    </View>
  );
};

export default AddressComponent;
