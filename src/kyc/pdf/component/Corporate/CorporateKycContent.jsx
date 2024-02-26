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
  import AddressComponent from "../ReuseStyle/AddressComponent";
  
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
  
  const CorporateKycContent = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <AddressComponent title="सथायी ठेगाना (Permanent Address)" />
        </Page>
      </Document>
    );
  };
  
  export default CorporateKycContent;
  