import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  signature: {
    width: "150px",
    height: "130px",
  },
  text: {
    fontSize: "8px",
  },
});

const SignatureUI = ({data}) => {
  return (
    <View
      style={[
        styles.signature,
        { alignSelf: "flex-end", justifyContent: "flex-end" },
      ]}
    >
      {data?.clientDocument?.signature && extraInfo ? (
        <View style={[{ width: "150px", height: "160px" }]}>
          {/* <Image src={imagesignature} style={styles.signature} /> */}
        </View>
      ) : (
        <Text>.................................</Text>
      )}
      <Text style={[styles.text, { marginTop: "6px" }]}>
        ग्राहकको हस्ताक्षर (Applicant's Signature)
      </Text>
    </View>
  );
};

export default SignatureUI;
