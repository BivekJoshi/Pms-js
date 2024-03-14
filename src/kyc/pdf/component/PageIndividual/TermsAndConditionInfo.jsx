import React from "react";
import { Text, View, Font, StyleSheet, Image, Page } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  review: {
    display: "flex",
    flexDirection: "column",
    marginTop: "6px",
  },
  text: {
    fontSize: "8px",
  },
});

const tmsData = [
  {
    content:
      "१. म/हामी धितोपत्र खरिदका लागि प्रयोग गर्ने रकम सम्पत्ती शुद्धिकरण सम्बन्धी प्रचलित कानुन विपरित आर्जन गरेको हुने छैन ।",
  },
  {
    content: "२. धितोपत्रमा गरिएको लगानीमा निहित जोखिमको सम्बन्धमा जानकार छु। ",
  },
  {
    content:
      "३. म/हामीले खरिद गरेका धितोपत्रहरु बापतको भुक्तानी लिने दिने कार्य तोकिएको समय भित्र गर्ने छु ।",
  },
  {
    content:
      "४. म / हामीले धितोपत्र सम्बन्धी तथा अन्य पचलित नियम कानूनहरुको पालना गर्नेछु ।",
  },
  {
    content: "५. म/ हामी कर्जा सूचना केन्द्रको कालो सुचीमा रहेको छु / छैन ।",
  },
  {
    content:
      "६. सम्पत्ति शुद्धिकरण (मनी लाउण्डरिङ्ग) निवारण ऐन २०६४ र यस अन्तर्गत जारी भएका नियमावली तथा निर्देशन आदिबाट माग भएअनुसारका सूचना, विवरण तथा कागजातहरु कम्पनीलाई उपलब्ध गराउने छु / छौं ।",
  },
  {
    content:
      "७. कम्पनीलाई गर्नु पर्ने भुक्तानी नगरी बाँकी राखोको कारणबाट मेरो/ हाम्रो कारोवार अन्य धितोपत्र दलाल कम्पनीहरुमा समेत निलम्बन गर्न पत्राचार वा परिपत्र गर्न मेरो/ हाम्रो मञ्जुरी छ ।",
  },
];

const newData = [
  {
    content:
      "धितोपत्र कारोवार गर्न ग्राहक परिचय विवरण भर्ने सम्बन्धमा संचालक समितिको निर्णय ।",
  },
  {
    content: "१. नेपाली नागरिकताको हकमा नागरिकता प्रमाणपत्रको प्रतिलिपि ।",
  },
  {
    content: "२. अन्य देशको नागरिकको हकमा पासपोर्टको प्रतिलिपि ।",
  },
  {
    content: "३. नाबालकको हकमा संरक्षक तथा नाबालक दुबैको फोटो ।",
  },
  {
    content: "४. कानुनी संरक्षक भए सो सम्बन्धी कागजात ।",
  },
  {
    content:
      "५. आमा वा बाबु संरक्षक भएमा छोरा वा छोरीको जन्मदर्ता प्रमाण पत्रको प्रतिलिपि ।",
  },
  {
    content:
      "६. निवेदकको हस्ताक्षर तथा औठा छापमा संरक्षकको हस्ताक्षर तथा औंठा छाप ।",
  },
  {
    content: "७. कुनै सस्थाको कर्मचारी रहेको हकमा परिचयपत्रको प्रतिलिपि ।",
  },
];

const TermsAndConditionInfo = ({ data, extraInfo }) => {
  return (
    <View>
      {/* {data?.user?.nature === "DP" ? ( */}
      <>
        <View style={styles.review}>
          <Text style={styles.text}>
            म/हामीले निक्षेप सदस्य र हितग्राहीको करारनामा प्रचलित ऐन,नियम,
            विनियम र सो मा भएको संशोधन मन्न मन्जुर गर्दछु/गर्दछौं । माथि
            उल्लेखित विवरण सत्य तथ्य रहेको र सो विवरणमा कुनै फरक परे कानून
            बमोजिम सहुँला, बुझाउँला । अन्यथा ठहरिएमा हितग्राही खाता रद्द गर्न
            मन्जुरी गर्दछु/गर्दछौँ ।
          </Text>
        </View>

        <View style={styles.review}>
          <Text style={styles.text}>
            I / We shall accept the terms and conditions relating to the
            agreement between Depository Participants and Beneficial Owner,
            prevalent act, regulations, bylaws, and any amendments to it. I/We
            hereby acknowledge that the above disclosed details are true. I
            further hereby consent to bear any legal actions in case of any
            false disclosure of information related to me/us, and the Depository
            Participants reserve the right to close my account. All disputes are
            subject to the jurisdiction of courts in Kathmandu, Nepal.
          </Text>
        </View>
      </>
      {/* ) : (
        ""
      )} */}

      {data?.user?.clientType === "I" && data?.user?.nature === "TMS" && (
        <>
          <View
            style={[
              styles.text,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // alignItems: "center",
                marginTop: "8px",
              },
            ]}
          >
            <View style={[styles.text, { width: "48%" }]}>
              <Text style={[styles.text, { fontSize: "10px" }]}>
                धितोपत्र कारोवारको सम्बन्धमा तपशिल बमोजिमको स्वघोषणा गर्दछु ।
              </Text>

              <View style={styles.dColumn}>
                {tmsData &&
                  tmsData?.map((d) => (
                    <Text style={styles.text}>{d?.content}</Text>
                  ))}
              </View>
            </View>

            <View style={[styles.text, { width: "48%" }]}>
              <Text style={[styles.text, { fontSize: "10px" }]}>
                संलग्न गर्नु पर्ने कागजात
              </Text>

              <View style={styles.dColumn}>
                {newData &&
                  newData?.map((d) => (
                    <Text style={styles.text}>{d?.content}</Text>
                  ))}
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default TermsAndConditionInfo;