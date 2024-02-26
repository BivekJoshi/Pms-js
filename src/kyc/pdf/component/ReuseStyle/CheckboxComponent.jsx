import { View, Image, Text, Font, StyleSheet } from "@react-pdf/renderer";

import CheckBoxChecked from "../../../../assets/CheckBoxChecked.png";
import CheckBoxUnChecked from "../../../../assets/CheckBoxUnChecked.png";
import RadioButtonChecked from "../../../../assets/RadiobuttonChecked.png";
import RadioButtonUnChecked from "../../../../assets/RadioButtonUnChecked.png";

const styles = StyleSheet.create({
  paragraphText: {
    fontSize: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox: {
    width: 8,
    height: 8,
    marginRight: 5,
  },
  radioButton: {
    width: 8,
    height: 8,
    marginRight: 5,
    border: 1,
    borderColor: "black",
    borderRadius: "50%",
  },
});

export const Checkbox = ({ checked, label1, label2 }) => (
  <View style={styles.checkboxContainer}>
    {checked ? (
      <View style={[styles.checkbox]}>
        <Image src={CheckBoxChecked} />
      </View>
    ) : (
      <View style={[styles.checkbox]}>
        <Image src={CheckBoxUnChecked} />
      </View>
    )}

    <View style={[styles, { display: "flex", flexDirection: "column" }]}>
      <Text style={styles.paragraphText}>{label1}</Text>
      <Text style={styles.paragraphText}>{label2}</Text>
    </View>
  </View>
);

export const RadioButton = ({ checked, label1, label2 }) => (
  <View style={styles.checkboxContainer}>
    {checked ? (
      <View style={[styles.checkbox]}>
        <Image
          src={RadioButtonChecked}
          style={[{ width: "100%", height: "100%" }]}
        />
      </View>
    ) : (
      <View style={[styles.checkbox]}>
        <Image
          src={RadioButtonUnChecked}
          style={[{ width: "100%", height: "100%" }]}
        />
      </View>
    )}
    <View style={[styles, { display: "flex", flexDirection: "column" }]}>
      <Text style={styles.paragraphText}>{label1}</Text>
      <Text style={styles.paragraphText}>{label2}</Text>
    </View>
  </View>
);
