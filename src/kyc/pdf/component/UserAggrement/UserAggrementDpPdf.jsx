import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
  Font,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: "11px",
    padding: 4,
  },
  titleText: {
    fontSize: 10,
  },
  paragraphText: {
    fontSize: 9,
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  text: {
    fontSize: 9,
    display: "flex",
    flexWrap: "wrap",
  },
  finalPag: {
    // marginTop: "23px",
    display: "flex",
  },
});

const USER_AGREEMENTLIST = [
  {
    title: "१.सामान्य प्रावधान",
    desc: "यस सम्झौताका पक्षहरु धितोपत्रको केन्द्रिय निक्षेप सेवा नियमावली , २०६८ को व्यवस्था र सिडिएससिले समयसमयमा जारी गरेका विनियमलाई यसै सम्झौतामा उल्लेख भए सरह र यसै सम्झौताको हिस्साको रुपमा पालना गर्न सहमत छौ।",
  },
  {
    title: "२.रकम असुल उपर",
    desc: "हितग्राही सदस्यलाई तिर्नुपर्ने रकम तोकिएको मितिभित्र बुझाउनु पर्नेछ ।",
  },
  {
    title: "३.खाताको फाँटबारी (स्टेटमेन्ट)",
    desc: "सदस्यले अनलाइन मार्फत हितग्राहीलाई निजको खाताको फाँटबारी हेर्ने सुबिधा प्रदान गर्नेछ ।साथै हितग्राहीले आफ्नो धितोपत्रको फाँटबारी भौतिक रुपमा प्राप्त गर्न अनुरोध गरेमा सदस्यले सो समेत प्रदान गर्न सक्नेछ। तर यस अवधिमा कुनै कारोबार नभएमा खाताको फाँटबारी दिनु पर्ने छैन ।",
  },
  {
    title: "४.विवरणमा भएका परिवर्तनहरुबारे हितग्राहीले सुचित गर्नुपर्ने",
    desc: "हितग्राहीले सुचित गरेको अवस्था बाहेक ,हितग्राहीले विवरणमा भएको परिवर्तन सदस्यलाई जानकारी नगराएको कारणबाट हितग्राहीलाई हुनसक्ने कुनै हानि उपर सदस्य उत्तरदायी वा जिम्मेवार हुनेछैन ।",
  },
  {
    title: "५.हितग्राहीको दाबीप्रति निक्षेप सदस्य उत्तरदायी नहुने",
    desc: "सुरक्षणका लागि हितग्राहीको खाताबाट खर्च लेखिएको/क्रेडिट गरिएको तेस्रो पक्षका दाबी अदालत वा राजस्व निकायबाट तोकिएको वा माग भएको कुनै शुल्क,दस्तुर , कर प्रति सिडिएससि तथा सदस्य उत्तरदायी हुने छैन।न्जन",
  },
  {
    title: "६.प्रत्येक हितग्राही निम्न कुरामा बिशेष रुपले जिम्मेवार हुनेछ",
    desc: "(क)निक्षेप सदस्यसँग भएको सम्झौता र खाता खोल्दाका विवरणहरु तथा तथ्य सम्बन्धमा,",
    desc2:
      "(ख )निक्षेप सदस्यसँग खाता खोल्दा पेश गरेको लिखतको आधिकारिकता र सत्यता सम्बन्धमा,",
    desc3:
      "(ग )निक्षेप सदस्यबाट प्रत्येक कारोबार निर्देशन बमोजिम खाताबाट घटाएको र थपेको कुराको सुनिश्चित ग",
    desc4:
      "(घ)हितग्राहीको खातामा भएको परिवर्तनका विवरण सम्बन्धमा जस्तै :ठेगाना ,बैंक विवरण स्थिति अख्तियारी ,आदेश मनोनयन दस्तखत आदि ,",
    desc5: "(ङ्ग)कुनै पनि निष्काशित धितोपत्र खरिद गरेकोमा सो को सत्य विवरण।",
  },
  {
    title: "७.आधिकारिक प्रतिनिधि",
    desc: "हितग्राही संगठित संस्था वा कानुनी व्यक्ति भएमा त्यस्तो संस्था वा व्यक्तिको तर्फबाट प्रतिनिधित्व गर्न अख्तियारप्राप्त व्यक्तिले सदस्यसँगको सम्झौता क्रियन्वित गर्नेछन ।प्रतिनिधिको हेरफेर वा अन्य कुनै किसिमको परिवर्तन भएमा हितग्राहीले सदस्यलाई तुरुन्त जानकारी गराउनेछ ।",
  },
  {
    title: "८.सम्झौता रद्ध गर्ने",
    desc: "विनियमावली तथा संचालन निर्देशिकामा उल्लेख गरिएअनुसारका शर्तबन्देजको अधिनमा रही पक्षहरुले यो सम्झौता जुनसुकै समयमा रद्ध गर्न सक्नेछन ।कुनैपनि पक्षले सम्झौता रद्ध गरेमा हितग्राही को खातामा भएका धितोपत्रहरुलाई सोहि हितग्राहिको निर्देशन बमोजिम सदस्यले व्यवस्थापन गर्नेछ।",
  },
  {
    title: "९.काबु बाहिरको परिस्थिति",
    desc: "यस सम्झौतामा वा विनियमावलीमा जुनसुकै कुरा लेखिएको भएतापनि आंधी ,तूफान ,बाढी,चटयांग ,भूइंचालो ,आगलागी ,बिस्फोटन वा दैवी प्रकोप ,युद्ध ,बिद्रोह ,क्रान्ति ,हुलदंगा ,निषेधाज्ञा ,नाकाबन्दी ,अवरोध ,दंगा,नागरिक कलह ,हड्ताल ,तालाबन्दी ,तोडफोड ,विध्वंश ,प्रणालीमा गडबडी ,अनाहक प्रवेश वा प्रतिकार गर्न नसकिने अन्य कुनै शक्ति वा बाध्यतालगायत काबु वा नियन्त्रणबाहिरका घटनाद्वारा यस सम्झौता अन्तर्गतको दायित्वमा कुनै कार्य सम्पादन नगरेको ,बिलम्ब गरेको वा उल्लङ्घन भएकोमा कुनै एक पक्षलाई हुन् गएको हानीनोक्शानी ,क्षतिको सोधभर्ना वा क्षतिपूर्ति दिन अर्को पक्ष उत्तरदायी हुने छैन ।",
  },
  {
    title: "१०.जनाउ",
    desc: "यस सम्झौतामा दिईने अथवा आवश्यक हुने कुनै पनि जनाउ वा संचार लिखित रुपमा र प्रापकको हालसालको ठेगानामा नपठाएसम्म बन्धनकारी हुनेछैन ।",
  },
  {
    title: "११.विवादको समाधान",
    desc: "पक्षहरुका बीचमा उत्पन्न हुन सक्ने विवाद तथा भिन्नताको सम्बन्धमा विनियमावलीमा तोकिएअनुसारको मध्यस्थता समितिको व्यवस्था यस सम्झौताका पक्षहरुलाई पनि लागू हुनेछ ।",
  },
  {
    title: "१२.नियमनकारी कानुन",
    desc: "यो सम्झौता प्रचलित नेपालको कानुनद्वारा नियमन तथा व्याख्या हुनेछ।",
  },
];
const UserAgreementDpPdf = ({ userData }) => {
  const currentAddressDetails = userData?.addressDetails?.filter(
    (address) => address?.addressType === "T"
  );
  return (
    <View
      style={[{ display: "flex", flexDirection: "column", marginTop: "18px" }]}
    >
      <Text style={styles.headerText}>अनुसूची - १५</Text>
      <Text style={styles.headerText}>
        (विनियम २० को उपविनियम ३ संग सम्बन्धित )
      </Text>
      <Text style={styles.headerText}>
        (निक्षेप सदस्य र हितग्राही व्यक्ति वा संस्थाबीचको सम्झौता)
      </Text>
      <View style={[{ display: "flex", flexWrap: "wrap" }]}>
        <Text style={[styles.text]}>
          {/* {orgData?.address} स्थित कार्यालय रहेको {orgData?.name} Pvt. Limited */}
          (वैधानिक अस्तित्व भएको निकायको विवरण) (यसपछि "सदस्य" भनिएको ) प्रथम
          पक्ष र
          {currentAddressDetails ? (
            <>
              <Text>{currentAddressDetails[0]?.province}</Text>{" "}
              <Text>{currentAddressDetails[0]?.district}</Text>
            </>
          ) : (
            "................................."
          )}{" "}
          स्थित कार्यालय रहेको {userData?.user?.name} (वैधानिक अस्तित्व भएको
          निकायको विवरण ) यसपछि ("हितग्राही" भनिएको ) दोस्रो पक्ष बीच देहायको
          शर्तहरु पालना गर्ने सहमतिसाथ यो सम्झौता गरिएको छ ।
        </Text>
      </View>

      {USER_AGREEMENTLIST?.map((data, index) => {
        return (
          <>
            <Text style={styles.titleText}>{data?.title}</Text>
            <Text style={styles.paragraphText}>{data?.desc}</Text>
            <Text style={styles.paragraphText}>{data?.desc2}</Text>
            <Text style={styles.paragraphText}>{data?.desc3}</Text>
            <Text style={styles.paragraphText}>{data?.desc4}</Text>
            <Text style={styles.paragraphText}>{data?.desc5}</Text>
          </>
        );
      })}
      <View
        style={[
          styles,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5px",
          },
        ]}
      >
        <View style={[{ display: "flex", flexDirection: "column" }]}>
          <Text style={styles.titleText}>सम्झौताका प्रथम पक्ष</Text>
          <Text style={styles.paragraphText}>व्यक्तिको नाम :</Text>
          <Text style={styles.paragraphText}>दस्तखत :</Text>
          <Text style={styles.paragraphText}>कम्पनीको छाप :</Text>
          <Text style={styles.paragraphText}>साक्षी :</Text>
          <Text style={styles.paragraphText}>
            १ ............................................
          </Text>
        </View>
        <View style={[{ display: "flex", flexDirection: "column" }]}>
          <Text style={styles.titleText}>
            सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार प्राप्त)
          </Text>
          <Text style={styles.paragraphText}>
            व्यक्तिको नाम : {userData?.user?.name}
          </Text>
          <Text style={styles.paragraphText}>दस्तखत :</Text>
          <Text style={styles.paragraphText}>कम्पनीको छाप :</Text>
          <Text style={styles.paragraphText}>साक्षी :</Text>
          <Text style={styles.paragraphText}>
            २ ............................................
          </Text>
        </View>
      </View>
      <View style={styles.finalPag}>
        <Text style={styles.paragraphText}>
          ईति सम्बत .........................साल ...........................
          महिना ..................................गते रोज
          .................................शुभम्
        </Text>
      </View>
    </View>
  );
};

export default UserAgreementDpPdf;
