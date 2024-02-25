import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  text: {
    fontSize: "8px",
    fontFamily: "NotoSerifDevnagiri",
  },
  table: {
    display: "flex",
    flexDirection: "row",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    border: "1px solid grey",
    padding: "6px 0 0 10px",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    fontSize: "10px",
    textAlign: "start",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
  thumbRow: {
    border: "1px solid grey",
    padding: "6px 0 0 10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "8vh",
    textAlign: "start",
    whiteSpace: "normal",
  },
  halfRow: {
    border: "1px solid grey",
    padding: "6px 0 0 10px",
    width: "50%",
    height: "93px",
    display: "flex",
    fontSize: "10px",
    justifyContent: "center",
  },

  width: {
    width: "50%",
  },
});

const ThumpStamp = ({ data }) => {
  return (
    <View style={[styles.flex, { alignItems: "center" }]}>
      <View style={styles.width}>
        <View style={styles.table}>
          <Text style={styles.row}>औंठाछाप (Thumb Print)</Text>
        </View>
        <View style={styles.table}>
          {data?.clientDocument?.rightThumb && extraInfo ? (
            <View
              style={[styles.thumbRow, { width: "150px", height: "100px" }]}
            >
              <Text style={styles.text}>दायाँ (Right)</Text>
              {/* <Image src={imageThumbRightUrl} /> */}
            </View>
          ) : (
            <Text style={styles.halfRow}>दायाँ (Right)</Text>
          )}
          {data?.clientDocument?.leftThumb && extraInfo ? (
            <View
              style={[styles.thumbRow, { width: "150px", height: "100px" }]}
            >
              <Text style={styles.text}>बायाँ (Left)</Text>
              {/* <Image src={imageThumbLeftUrl} /> */}
            </View>
          ) : (
            <Text style={styles.halfRow}>बायाँ (Left)</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ThumpStamp;
