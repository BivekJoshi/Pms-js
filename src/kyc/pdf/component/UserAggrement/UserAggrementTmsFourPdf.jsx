import React from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
  Font,
} from "@react-pdf/renderer";
import ThumpStamp from "../ReuseStyle/ThumpStamp";
// import { getPicCoresPorxyURL } from "../../../../api/urls.api";


const styles = StyleSheet.create({
  text: {
    fontSize: 8,
    display: "flex",
    flexWrap: "wrap",
  },
  paragraphText: {
    fontSize: 9,
    fontWeight: "extrabold",
  },
  underlinedText: {
    borderBottom: "1px solid black",
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
  signature: {
    width: "150px",
    height: "130px",
    // borderBottom: "1px dotted black",
  },
});

const data = [
  {
    content:
      "१. ब्रोकर कम्पनीबाट शेयर खरिद गरे पश्‍चात २ कार्य दिन भित्र सम्पूर्ण दायित्व भुक्तानी गर्नेछु।",
  },
  {
    content:
      "२. शेयर खरिद गरेको रकम तोकियेको समयमा भुक्‍तानि गर्न नसकेमा वा नगरेमा ब्रोकेर कम्पनीले निर्धारण गरेको शुल्क तिर्न मञ्‍जुर गर्दछु।",
  },
  {
    content:
      "३. शेयर खरिद विक्रि गरेको तथा अन्य दायित्य समयमा भुक्‍तानि नगरेमा जुनसुकै समयमा ब्रोकेर कम्पनीले सामन्य जानकारी दीएर वा नदिएर आफ्नो नाममा भयेको कुनैपनि शेयर विक्रि गरि दायित्य असुल उपर गर्ने कुरामा मञ्‍जुर गर्दछु।",
  },
  {
    content:
      "४. शेयर विक्रि पश्‍चात् ब्रोकर कम्पनीको खातामा पठाउने पर्ने शेयर टि+१ नपठाऐमा ब्रोकेर कम्पनीले समन्धित निक्षेप सदस्यमा अनुरोध गरि विक्रि भयेको शेयर ब्रोकेरको पूल ऐकाउन्टमा ल्याई सेटलमेन्ट गरेमा कुनै उजुर वाजुर गर्ने छैन।",
  },
  {
    content:
      "५. ब्रोकेर कम्पनीबाट उपल्ब्ध हुने UserName र Password प्रयोग गरी भए गरेका कारोवारबाट सृजित सम्पूर्ण दायित्‍व मेरो आफ्नो हुने कुरा मञ्‍जुर गर्दछु।",
  },
];

const UserAggrementTmsFourPdf = ({ userData, extraInfo }) => {
//   const imageThumbRightUrl =
//     getPicCoresPorxyURL() + userData?.clientDocument?.rightThumb;
//   const imageThumbLeftUrl =
//     getPicCoresPorxyURL() + userData?.clientDocument?.leftThumb;
//   const imagesignature =
//     getPicCoresPorxyURL() + userData?.clientDocument?.signature;

  return (
    <View style={[styles, { marginTop: "30px" }]}>
      {" "}
      <Text style={[styles.paragraphText, { textAlign: "right" }]}>
        मिति: .........................
      </Text>
      {/* <Text style={styles.paragraphText}>श्री {orgData?.name}</Text>
      <Text style={styles.paragraphText}>{orgData?.address}</Text> */}
      <Text
        style={[
          styles.paragraphText,
          { textAlign: "center", fontWeight: "extrabold", margin: "16px 0px" },
        ]}
      >
        विषय : अनलाइन सेवा साम्बन्धमा |
      </Text>
      <Text style={styles.paragraphText}>महोदय,</Text>
      <Text style={styles.text}>
        धितोपत्रको खरिद विक्रि गर्न नेपाल स्टक एक्सचेन्जबाट स्वीकृति प्राप्त
        {/* कारोवार प्रणालीमा कारोवर गर्न मैले {orgData?.name} Ltd ग्राहाक विवरण पेश */}
        गरी कारोवार खाता खोलेको व्यहोरा तहाँमा अवगत नै छ| धितोपत्र सम्बन्धि ऐन
        नियम, विनियम तथा त्यस कम्पनीले अख्तियार गरेको नीति नियमको परिधिमा रही
        शेयर खरिद विक्रि कार्य अन्लाइन् प्र्विधिमार्फत लगानीकर्ता स्वयंले गर्न
        सकिने व्यवस्था अन्तर्गत कारोवार प्रयोजनको लागि Username र Password
        उपलव्ध गराई दिनुहुन अनुरोध गर्दछ। यसरी तेहाँबाट उपलब्ध हुने Username र
        Password प्रयोग गरी शेयर खरेद विक्रि गर्ने क्रममा तपसिलका सर्त तथा
        नियमहरु पालना गर्न पुर्णरुपमा मञ्‍जुर गर्दछु|
      </Text>
      <Text
        style={[
          styles.paragraphText,
          { textDecoration: "underline", margin: "16px 0px" },
        ]}
      >
        सर्त तथा नियमहरु
      </Text>
      <View style={[styles, { display: "flex", flexDirection: "column" }]}>
        {data && data.map((d) => <Text style={styles.text}>{d?.content}</Text>)}
      </View>
      <View
        style={[
          styles,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "14px",
          },
        ]}
      >
        <View
          style={[
            styles,
            { display: "flex", flexDirection: "column", gap: "1rem" },
          ]}
        >
          <Text style={styles.paragraphText}>नाम: {userData?.user?.name}</Text>
          <Text style={styles.paragraphText}>
            सम्पर्क न.: {userData?.user?.phoneNo}
          </Text>
        </View>
        <View
          style={[
            styles,
            { display: "flex", flexDirection: "column", gap: "1rem" },
          ]}
        >
          <Text style={styles.paragraphText}>
            {/* ग्राहक संकेत न.: {orgData?.code} */}
          </Text>
          <Text style={styles.paragraphText}>{userData?.user?.email}</Text>
        </View>
      </View>
      <View
        style={[
          styles,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "14px",
          },
        ]}
      >
        <View>
          {userData?.clientDocument?.signature && extraInfo ? (
            <View style={[{ width: "150px", height: "160px" }]}>
              {/* <Image src={imagesignature} style={styles.signature} /> */}
            </View>
          ) : (
            <Text style={[styles.text, { marginBottom: "3px",marginTop: "72px" }]}>
              _________________
            </Text>
          )}
          <Text style={styles.paragraphText}>
            उम्मेदवारको हस्ताक्षर (Signature)
          </Text>
        </View>
        {/* <View style={[styles, { width: "50%" }]}>
          <View style={[styles, { display: "flex", flexDirection: "row" }]}>
            <Text
              style={[
                styles.text,
                {
                  textAlign: "center",
                  padding: "6px 0 0 10px",
                  width: "100%",
                  border: "1px solid grey",
                },
              ]}
            >
              औंठाछाप (Thumb Print)
            </Text>
          </View>
          <View style={[styles, { display: "flex", flexDirection: "row" }]}>
            {userData?.clientDocument?.rightThumb && extraInfo ? (
              <View
                style={[styles.thumbRow, { width: "150px", height: "100px" }]}
              >
                <Text style={styles.text}>दायाँ (Right)</Text>
                //  <Image src={imageThumbRightUrl} /> 
              </View>
            ) : (
              <Text
                style={[
                  styles.text,
                  {
                    border: "1px solid grey",
                    textAlign: "center",
                    width: "50%",
                    height: "12vh",
                  },
                ]}
              >
                दायाँ (Right)
              </Text>
            )}
            {userData?.clientDocument?.leftThumb && extraInfo ? (
              <View
                style={[styles.thumbRow, { width: "150px", height: "100px" }]}
              >
                <Text style={styles.text}>बायाँ (Left)</Text>
                //  <Image src={imageThumbLeftUrl} /> 
              </View>
            ) : (
              <Text
                style={[
                  styles.text,
                  {
                    border: "1px solid grey",
                    textAlign: "center",
                    width: "50%",
                    height: "12vh",
                  },
                ]}
              >
                बायाँ (Left)
              </Text>
            )}
          </View>
        </View> */}
         <View style={[styles, { width: "50%" }]}>
        <ThumpStamp/></View>
      </View>
    </View>
  );
};

export default UserAggrementTmsFourPdf;
