import React, { useRef } from "react";
import "./kycIndividual.css";
import ReactToPrint from "react-to-print";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import IndividualKycPdf from "../../pdf/component/IndividualKycPdf";
import DpMeroShare from '../DpMeroShare';

const IndividualDPKyc = () => {
  const componentRef = useRef();

  return (
    <div className="container dpkyc">
      <div className="bg-white text-dark p-md-3 font1 dpkyc">
        <div className="d-flex justify-content-end mb-2">
          {/* {' '} */}
          <IndividualKycPdf />
          <ReactToPrint
            // trigger={(a) => <CIcon name={'cilPrint'} size={'xl'} style={{ cursor: 'pointer' }} />}
            trigger={() => <LocalPrintshopIcon />}
            content={() => componentRef.current}
            documentTitle="download.pdf"
            // pageStyle="print"
            // pageStyle='@page { margin: minimum }'
            copyStyles
            contentStyle={{
              marginTop: "500px",
            }}
          />
        </div>
        {/* <div id="pdf" ref={componentRef}> */}
        <div className="kyc-page mt-4" id="pdf" ref={componentRef}>
          {/* Header */}
          <section className="container pb-1">
            {/* <!-- Header section --> */}
            <header
              className="text-center"
              style={{ position: "relative" }}
            >
              <h2 className="">अनुसूची १२</h2>
              <p className="">(विनियम २० संग सम्बन्धित)</p>
              <h2 className="text-decoration-underline fs18">
                प्राकृतिक व्यक्तिको हितग्राही खाता खोल्ने निवेदन
              </h2>
              <h3 className=" text-decoration-underline fs18">
                ACCOUNT OPENING FORM FOR INDIVIDUAL BENEFICIAL OWNER
              </h3>
              {/* <!-- ! signature div --> */}
              <div className="text-center d-flex flex-column align-items-center">
                <p>(दोश्रो संशोधन, २०७३ अनुसार संशोधित गरिएको)</p>
              </div>
              <div
                id="photo"
              // key={userData?.clientDocument?.ppSizePhoto}
              >
                {/* {userData?.clientDocument?.ppSizePhoto && (
                <img
                  className="employee-pp-photo-kyc"
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "20px",
                    height: "150px",
                    width: "150px",
                  }}
                  id="photo"
                  src={
                    getPicCoresPorxyURL() +
                    userData?.clientDocument?.ppSizePhoto
                  }
                />
              )} */}
              </div>
            </header>
          </section>
          {/* OfficialUse */}
          <section className="pb-1">
            <div className="container">
              <div>
                <div className="text-center kyc-secondary-header text-capitalize">

                  कार्यालय प्रयोजनका लागि मात्र (For official use only)

                </div>

                {/* <div className="container"> */}
                <div className="row m-0 p-0">
                  <div className="col-4 col-md-4 col-lg-4 border center-y ">
                    <div>
                      आवेदन नं. (App No.):
                      {/* {user?.submissionNo} */}
                    </div>
                  </div>

                  <div className="col-4 col-md-4 col-lg-4 border ">
                    <div>
                      <div></div>
                      <div>
                        संकेत नं. (Ref Number):
                        {/* {user?.referenceNumber} */}
                      </div>
                    </div>
                  </div>

                  <div className="col-4 col-md-4 col-lg-4 border ">
                    <div>
                      <div>
                        मिति (Date):
                        {/* {user?.submittedDate} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* {userData?.user?.nature === "TMS" && ( */}
              {/* <div className="container"> */}
              <div className="row m-0 p-0">
                <div className="col-12  p-1 border border center-y">
                  हितग्राहीको खाता नं. (BOID No):
                  {/* {user?.boid} */}
                </div>
              </div>
              {/* </div> */}
              {/* )} */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p
                    className="my-2 mt-4 fs13"
                    style={{ fontSize: "15px", fontWeight: "600" }}
                  >
                    तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ ।
                    आफूसंग सरोकार नभएको विवरण उल्लेख गर्ने कोठामा तेर्सो
                    धर्को तानिदिनु होला ।
                  </p>

                  <p
                    className="mb-4 fs13"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Please complete all details and strike out the
                    non-applicable fields/boxes.
                  </p>
                  {/* <!-- Row htmlFor name of stock broker --> */}
                  <div className="d-flex" style={{ gap: "16px" }}>
                    <div className="">
                      निक्षेप सदस्यको नाम (Name of Depository Participant)
                      :
                    </div>
                    <p className="dotted-underline">
                      {/* {user?.dpDetails && user?.dpDetails?.dpName} */}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div>
                      <p>शाखा (Branch) :</p>
                    </div>
                    <div>
                      <p className="dotted-underline">
                        {/* {user?.branch && user?.branch?.branchName} */}
                      </p>
                    </div>
                  </div>
                  {/* <!-- Row htmlFor branch --> */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2 center-y ">
                  <div>
                    <div>खाताको किसिम :</div>
                    <div className="text-inline">Types of Account:</div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="row check-box">
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                      //   checked={!individualDetail?.isNrn}
                      />
                      <div className="m-2">
                        {" "}
                        <div>व्यक्तिगत</div>
                        <div>Individual</div>
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                      //   checked={individualDetail?.isNrn}
                      />
                      <div className="m-2">
                        {" "}
                        <div>गैर आवसीय नेपाली</div>
                        <div>NRN</div>
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                      //   checked={
                      //     individualDetail?.individualAccountType === "FIG"
                      //   }
                      />
                      <div className="m-2">
                        {" "}
                        <div>विदेशी</div>
                        <div>Foreigner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ClientDetails */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              ग्राहकको विवरण (Client Details)
            </h2>

            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- ! name row --> */}
              <div className="col-4 col-md-4 border center-y ">
                <div> नाम (Name in block letters)</div>
              </div>

              <div className="col-8 col-md-8 border center-y text-uppercase">
                <div className="letter-box-container">
                  {/* {individualDetail?.middleName === null
                    ? individualDetail?.firstName
                        .split("")
                        .map((letter, index) => (
                          <div key={index} className="letter-box">
                            {letter}
                          </div>
                        ))
                    : individualDetail?.firstName
                        .concat(
                          individualDetail?.middleName,
                          individualDetail?.lastName
                        )
                        .split("")
                        .map((letter, index) => (
                          <div key={index} className="letter-box">
                            {letter}
                          </div>
                        ))} */}
                </div>
              </div>
              <div className="col-4 border center-y ">
                <div>देवनागरी (Name in Nepali) </div>
              </div>

              <div className="col-8  border center-y   ">
                {/* <div>{individualDetail?.clientNameNepali}</div> */}
              </div>

              {/* <!-- ! date of birth --> */}
              <div className="col-4 border  center-y">
                <div>
                  <div>जन्म मिति (Date of Birth)</div>
                </div>
              </div>

              <div className="col-8 border">
                <div className="row  ">
                  <div className="col-6">
                    <div className="">
                      <label className="form-check-label" htmlFor="bs">
                        बि. सं. (B.S.):
                      </label>
                      {/* &nbsp;{individualDetail?.dob} */}
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="">
                      <label className="form-check-label" htmlFor="ad">
                        इ. सं (A.D.):{" "}
                      </label>
                      {/* &nbsp;{dateConverter(individualDetail?.dob, "BS_AD")} */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ! gender --> */}
              <div className="col-4 border center-y ">
                <div>
                  <div>लिङ्ग (Gender)</div>
                </div>
              </div>

              <div className="col-8 border d-flex  gap-4">
                {/* <!-- <form action="" className="d-flex justify-content-center align-items-center gap-4"> --> */}
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="male">
                      पुरुष (Male)
                    </label>

                    <input
                      type="radio"
                      className="form-check-input "
                      //   checked={checkGender("M")}
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="female">
                      महिला (Female)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      //   checked={checkGender("F")}
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="others"
                      style={{ paddingLeft: "8px" }} //Check default padding missing in classname
                    >
                      अन्य (Others)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkGender("O")}
                    />
                  </div>
                </div>
                {/* <!-- </form> --> */}
              </div>
            </div>
            {/* </div> */}
            {/* MoreClientDetails */}
            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- Nationality row --> */}
              <div className="col-4 border">
                राष्ट्रियता (Nationality)
              </div>
              <div className="col-8 d-flex gap-4 border d-flex ">
                <div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="nepalese"
                    >
                      नेपाली (Nepalese)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={!individualDetail?.isNrn}
                    />
                  </div>
                </div>
                <div>
                  {/* if nrn true then show country name */}

                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="other_nationality"
                    >
                      अन्य (Others) खुलाउने (if any){" "}
                      {/* {individualDetail?.isNrn && (
                        <span className="dotted-underline">
                          {individualDetail?.isNrn}
                        </span>
                      )} */}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="other_nationality"
                      name="nationality"
                    //   checked={individualDetail?.isNrn}
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}

              <div className="row m-0 p-0">
                {/* <!-- Citizenship number  --> */}
                <div className="col-4 border  center-y">
                  <div>
                    <div>नागरिकता नं. (Citizenship Number)</div>
                  </div>
                </div>

                <div className="col-8 border center-y">
                  {/* {individualDetail?.citizenshipNo
                  ? individualDetail?.citizenshipNo
                  : ""} */}
                </div>
              </div>
              <div className="row m-0 p-0">
                <div className="col-4 border ">
                  <div>
                    <div>जारी जिल्ला (Issued District)</div>
                  </div>
                </div>

                <div className="col-8 border center-y text-capitalize">
                  {/* {individualDetail?.issuedDistrict} */}
                </div>
              </div>
              <div className="row m-0 p-0">
                <div className="col-4 border center-y ">
                  <div>
                    <div>जारी मिति (Issued Date)</div>
                  </div>
                </div>

                <div className="col-8 border center-y">
                  {/* {individualDetail?.issuedDate} */}
                </div>
              </div>
              <div className="row m-0 p-0">
                {/* <!-- ! Beneficiary ID No. --> */}
                <div className="col-4 border center-y ">
                  <div>
                    <div>हितग्राही खाता नं. (Beneficiary ID No.)</div>
                  </div>
                </div>

                <div className="col-8 border center-y">
                  <div className="letter-space-3">
                    {/* {user?.boid ? user?.boid : ""} */}
                  </div>
                </div>
              </div>
              <div className="row m-0 p-0">
                {/* <!-- ! Permanent Account Number (PAN) --> */}
                <div className="col-4 border center-y ">
                  <div>
                    <div>स्थायी लेखा नं. (PAN)</div>
                  </div>
                </div>

                <div className="col-8 border center-y">
                  <div className="letter-space-3">
                    {/* {individualDetail?.panNo} */}
                  </div>
                </div>
              </div>
              <div className="row m-0 p-0">
                {/* <!-- ! Identification Number and Address --> */}
                {/* {individualDetail?.nrnNo !== "" && ( */}
                <div className="col-4 border center-y ">
                  <div>
                    <div>गैरआवासिय नेपालीको हकमा परिचयपत्र </div>
                    <div className="text-capitalize">
                      Identification No.(Incase of NRN)
                    </div>
                  </div>
                </div>
                {/* )} */}
                {/* {individualDetail?.nrnNo !== "" && (
                <div className="col-6 col-md-8 border center-y">
                  {individualDetail?.c || ""}
                </div>
              )} */}
                {/* {individualDetail?.nrnNo !== "" && ( */}
                <div className="col-8 border center-y ">
                  <div>
                    {/* <div>गैरआवासिय नेपालीको हकमा ठेगाना</div>
                          <div className="text-capitalize">
                            Address (Incase of NRN)
                          </div> */}
                  </div>
                </div>
                {/* )} */}
                {/* {individualDetail?.nrnNo !== "" && (
                <div className="col-6 col-md-8 border center-y">
                  {individualDetail?.nrn_address || ""}
                </div>
              )} */}
              </div>
            </div>
          </section>
          {/* Address */}
          {/* Permanent address */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              स्थायी ठेगाना (Permanent Address)
            </h2>

            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- Country --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>देश (Country)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {permanentAddressDetails?.[0]?.country &&
                  permanentAddressDetails?.[0]?.country} */}
              </div>

              {/* <!-- Province --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>प्रदेश (Province)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {permanentAddressDetails?.[0]?.province} */}
              </div>

              {/* <!-- Pality --> */}
              <div className="col-6 border   center-y">
                <div>
                  <div>गा.पा. / न.पा. / उ.म.न.पा / म.न.पा.</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan
                    city / Metropolitan city :
                  </div>
                </div>
              </div>
              <div className=" col-6 border center-y">
                {/* {permanentAddressDetails?.[0]?.municipality} */}
              </div>

              {/* <!-- ! District --> */}
              <div className="col-6 col-md-3 border center-y">
                <div>
                  <div>जिल्ला (District)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y text-capitalize">
                {/* {permanentAddressDetails?.[0]?.district} */}
              </div>

              {/* <!-- ! Ward Nol --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>वडा नं. (Ward No.)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {permanentAddressDetails?.[0]?.wordNo} */}
              </div>

              {/* <!-- Tole --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>टोल (Tole)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border text-capitalize center-y">
                {/* {permanentAddressDetails?.[0]?.tole} */}
              </div>

              {/* <!-- Telephone --> */}

              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>टेलिफोन नं. (Telephone No.)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {permanentAddressDetails?.[0]?.telephoneNo} */}
              </div>

              {/* <!-- MObile --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>मोबाईल नं. (Mobile No.)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {permanentAddressDetails?.[0]?.mobileNo} */}
              </div>

              {/* <!-- email --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>इमेल (Email)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {permanentAddressDetails?.[0]?.email} */}
              </div>
            </div>
            {/* </div> */}
          </section>
          {/* Temporary Address */}
          <section className="container pb-1 mt-4">
            <h2 className="text-center kyc-secondary-header">
              हालको ठेगाना (Current Address){" "}
            </h2>

            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- Country --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>देश (Country)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {currentAddressDetails?.[0]?.country} */}
              </div>

              {/* <!-- Province --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>प्रदेश (Province)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {currentAddressDetails?.[0]?.province} */}
              </div>

              {/* <!-- Pality --> */}
              <div className="col-6 border center-y">
                <div>
                  <div>गा.पा. / न.पा. / उ.म.न.पा / म.न.पा.</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan
                    city / Metropolitan city :
                  </div>
                </div>
              </div>
              <div className=" col-6 border center-y">
                {/* {currentAddressDetails?.[0]?.municipality} */}
              </div>

              {/* <!-- ! District --> */}
              <div className="col-6 col-md-3 border center-y">
                <div>
                  <div>जिल्ला (District)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y text-capitalize">
                {/* {currentAddressDetails?.[0]?.district} */}
              </div>

              {/* <!-- ! Ward Nol --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>वडा नं. (Ward No.)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {currentAddressDetails?.[0]?.wordNo} */}
              </div>

              {/* <!-- Tole --> */}
              <div className="col-6 col-md-3 border center-y">
                <div>
                  <div>टोल (Tole)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border text-capitalize center-y">
                {/* {currentAddressDetails?.[0]?.tole} */}
              </div>

              {/* <!-- Telephone --> */}

              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>टेलिफोन नं. (Telephone No.)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {currentAddressDetails?.[0]?.telephoneNo} */}
              </div>

              {/* <!-- MObile --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>मोबाईल नं. (Mobile No.)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {currentAddressDetails?.[0]?.mobileNo} */}
              </div>

              {/* <!-- email --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>इमेल (Email)</div>
                </div>
              </div>
              <div className="col-6 col-md-3 border center-y">
                {/* {currentAddressDetails?.[0]?.email} */}
              </div>
            </div>
            {/* </div> */}
          </section>
          {/* Map values in this section wit lat and long */}
          <section
            className="container mt-2"
          // key={currentAddressDetails}
          >
            <b>हाल बसोबास रहेको स्थानको नक्सा (Location map)</b>
            <div
              className="location-map border d-flex flex-column justify-content-between mb-3"
              style={{ height: "10cm" }}
            // ref={mapRef}
            // key={currentAddressDetails}
            >
              {/* <KycMap
              latitude={
                currentAddressDetails && currentAddressDetails[0]?.latitude
                  ? currentAddressDetails[0]?.latitude
                  : 0
              }
              longitude={
                currentAddressDetails && currentAddressDetails[0]?.longitude
                  ? currentAddressDetails[0]?.longitude
                  : 0
              }
            /> */}
              <div className="row mt-2">
                <div className="col-6 text-capitalize">
                  latitude :{" "}
                  {/* {currentAddressDetails && currentAddressDetails[0]?.latitude
                  ? currentAddressDetails[0]?.latitude
                  : "0"} */}
                </div>
                <div className="col-6 text-capitalize text-end">
                  longitude :{" "}
                  {/* {currentAddressDetails && currentAddressDetails[0]?.longitude
                  ? currentAddressDetails[0]?.longitude
                  : 0} */}
                </div>
              </div>
            </div>
          </section>
          {/* Details of Family Member */}
          <section className="container pb-1 avoid-page-break">
            <div className="text-center kyc-secondary-header">
              <h2 className="text-capitalize">
                परिवारका सदस्यहरुको विवरण(Details of family member)
              </h2>
            </div>

            {/* <div className="container"> */}
            <div className="row m-0 p-0 border">
              {/* <!-- grand father's name (eng)--> */}
              <div className="col-4 center-y  border text-capitalize">
                बाजेको नाम (grand father&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border ">
                {/* {memberList?.["grandfather"]} */}
              </div>

              {/* <!-- father's name (nep)--> */}

              {/* <!-- father's name (eng)--> */}
              <div className="col-4 center-y  border text-capitalize">
                बुवाको नाम (father&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border ">
                {/* {memberList?.["father"]} */}
              </div>

              {/* <!-- mother's name (nep)--> */}

              {/* <!-- mother's name (eng)--> */}
              <div className="col-4 center-y  border text-capitalize">
                आमाको नाम (mother&apos;s name){" "}
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border ">
                {/* {memberList?.["mother"]} */}
              </div>

              {/* <!-- spouse's name (nep)--> */}

              {/* <!-- spouse's name (eng)--> */}
              <div className="col-4  center-y border text-capitalize">
                पति / पत्‍नीको नाम (spouse&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border">
                {/* {memberList?.["spouse"]} */}
              </div>

              {/* <!-- daughter's name (eng)--> */}

              {/* <!-- daughters's name (nep)--> */}

              <div className="col-4   center-y border text-capitalize">
                छोरीको नाम (daughter&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border ">
                {/* {multiMemberName("daughter")} */}
              </div>

              {/* <!-- son's name (nep)--> */}

              {/* <!-- son's name (eng)--> */}
              <div className="col-4 center-y  border text-capitalize">
                छोराको नाम (son&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border">
                {/* {multiMemberName("son")} */}
              </div>

              {/* <!-- daughter in law's name (nep)--> */}

              {/* <!-- daughter in law's name (eng)--> */}
              <div className="col-4   center-y border text-capitalize">
                बुहारीको नाम (daughter in Law&apos;s name)
              </div>

              <div className="col-8 center-y text-uppercase letter-space-3 border ">
                {/* {multiMemberName("daughterInLaw")} */}
              </div>

              {/* <!-- father in law's name (nep)--> */}

              {/* <!-- father in law's name (eng)--> */}
              <div className="col-4 center-y  border text-capitalize">
                ससुराको नाम (father In Law&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border ">
                {/* {memberList?.["fatherInLaw"]} */}
              </div>

              {/* <!-- mother in law's name (nep)--> */}

              {/* <!-- mother in law's name (eng)--> */}
              <div className="col-4 center-y   border text-capitalize">
                सासुको नाम (mother In Law&apos;s name)
              </div>

              <div className="col-8  center-y text-uppercase letter-space-3 border ">
                {/* {memberList?.["motherInLaw"]} */}
              </div>
            </div>
            {/* </div> */}
          </section>
          {/* BankDetails */}
          <section className="container pb-1">
            <div className="text-center kyc-secondary-header">
              <h2 className="text-capitalize">
                बैंक खाताको विवरण(bank account details)
              </h2>
            </div>

            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- types of bank account --> */}
              <div className="col-6 col-md-4  border">
                <div>बैंक खाताको किसिम (Types of Bank Account)</div>
              </div>

              <div className="col-6 col-md-8 border d-flex justify-content gap-4">
                <div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="saving_account"
                    >
                      बचत खाता
                    </label>
                    <label
                      className="form-check-label"
                      htmlFor="saving_account"
                    >
                      &nbsp; (Saving Account)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="saving_account"
                      name="account_type"
                    //   checked={checkAccountType("S")}
                    />
                  </div>
                </div>

                <div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="current_account"
                    >
                      चल्ती खाता
                    </label>
                    <label
                      className="form-check-label"
                      htmlFor="current_account"
                    >
                      &nbsp;(Current Account)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="current_account"
                      name="account_type"
                    //   checked={checkAccountType("C")}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- ! bank account number --> */}
              <div className="col-6 col-md-4 border center-y ">
                <div className="text-capitalize">
                  बैंक खाता नं. (bank account number)
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                {/* {bankDetails?.accountNumber} */}
              </div>

              {/* <!-- ! name and address of bank --> */}
              <div className="col-6 col-md-6 border  center-y">
                <div>बैंक खाताभएको बैंकको नाम (Name of Bank)</div>
              </div>

              <div className="col-6 col-md-6 border center-y text-capitalize">
                {/* {bankList &&
                  bankList?.data?.find(
                    (d) => d.value === userData.bankDetails?.bankName
                  )?.label}
                {", "} */}
              </div>
              <div className="col-6 col-md-6 border  center-y">
                <div>बैंक खाताभएको बैंकको ठेगाना (Address of Bank)</div>
              </div>

              <div className="col-6 col-md-6 border center-y text-capitalize">
                {/* {bankDetails?.branchAddress} */}
              </div>
            </div>
            {/* </div> */}
          </section>
          {/* Details of Occupation */}
          <section className="container pb-1 avoid-page-break mt-4">
            <div className="kyc-secondary-header text-center">
              <h2>पेशागत विवरण (Details of Occupation)</h2>
            </div>

            {/* <div className="container"> */}
            <div className="row m-0 p-0 ">
              {/* <!-- occupation --> */}
              <div className="col-3 col-md-3 border center-y ">
                <div>
                  <div>पेशा (Occupation)</div>
                </div>
              </div>
              <div
                className="col-9 col-md-9 row border ms-0 on-print"
                style={{ rowGap: "1rem" }}
              >
                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="service">
                      सेवा
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="service">
                      (Service)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      //   checked={checkOccupation("SERVICE")}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="govt">
                      सरकारी
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="govt">
                      (Government Service)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      //   checked={checkOccupation("Government Services")}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="public_private_sector"
                    >
                      सार्वजनिक क्षेत्र
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="public_private_sector"
                    >
                      (Public sector)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("Public Sector")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="ngo_ingo"
                    >
                      निजी क्षेत्र
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="ngo_ingo"
                    >
                      (Private Sector)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("Private Sector")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="business_person"
                    >
                      व्यापार
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="business_person"
                    >
                      (Business)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("BUSINESS")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="agriculture"
                    >
                      कृषि
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="agriculture"
                    >
                      (Agriculture)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("FARMER")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="retired">
                      सेवा निवृत
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="retired">
                      (Retired)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("RETIRED")}
                    />
                  </div>
                </div>
                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="house_wife"
                    >
                      व्यावसायिक
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="house_wife"
                    >
                      (Professional)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("PROFESSIONAL")}
                    />
                  </div>
                </div>
                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="house_wife"
                    >
                      गृहिणी
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="house_wife"
                    >
                      (Housewife)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("HOUSEWIFE")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="student">
                      विद्यार्थी
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="student">
                      (Student)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("STUDENT")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3 ">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="occupation_others"
                    >
                      अन्य
                    </label>
                    <br />
                    <label
                      className="form-check-label"
                      htmlFor="occupation_others"
                    >
                      (Others)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                    //   checked={checkOccupation("OTHERS")}
                    />
                  </div>
                </div>
                <div className="col-3 col-md-6 col-lg-3  mt-4 text-capitalize">
                  {/* {occupationDetails?.ifOthers} */}
                </div>
              </div>

              {/* <!-- type of business --> */}
              <div className="col-4 col-md-3 border center-y ">
                <div>
                  <div>व्यापारको प्रकार (Types of Business)</div>
                </div>
              </div>
              <div
                className="col-8 col-md-9 border row ms-0"
                style={{ rowGap: "1rem" }}
              >
                <div className="form-check col-12 col-md-6 col-lg-4 col-print-md-6 ">
                  <label
                    className="form-check-label"
                    htmlFor="manifacturing"
                  >
                    उत्पादन (Manufacturing)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    readOnly
                  // checked={checkBusiness("MA")}
                  />
                </div>

                <div className="form-check col-12 col-md-6 col-lg-4 col-print-md-6  ">
                  <label
                    className="form-check-label"
                    htmlFor="service_oriented"
                  >
                    सेवामुखी (Service oriented)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    readOnly
                  // checked={checkBusiness("SO")}
                  />
                </div>

                <div className="form-check col-12 col-md-6 col-lg-4 col-print-md-6  ">
                  <label className="form-check-label" htmlFor="others">
                    अन्य (Others)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    readOnly
                  // checked={checkBusiness("O")}
                  />
                </div>
                {/* <div className="col-12 col-md-6 col-lg-3 col-print-md-6 mt-4 text-capitalize">
            {ifOthersBusiness}
          </div> */}
              </div>
              {/* <!-- organization's name --> */}
              <div className="col-4  border  center-y">
                <div>
                  <div>संस्थाको नाम (Organization's Name)</div>
                </div>
              </div>
              <div className="col-8 border text-capitalize center-y">
                {/* {occupationDetails?.orgName} */}
              </div>
              <div className="col-4  border  center-y">
                <div>
                  <div>ठेगाना ( Address)</div>
                </div>
              </div>
              <div className="col-8 border text-capitalize center-y">
                {/* {occupationDetails?.address} */}
              </div>
              {/* <!-- address --> */}

              <div className="col-3 col-md-3 border center-y">
                <div>
                  <div>आर्थिक विवरण</div>

                  <div className="text-capitalize">
                    (financial Details)
                  </div>
                </div>
              </div>
              <div className="col-9 col-md-9 border">
                <p className="text-start">
                  आयको सीमा वार्षिक विवरण (Income Limit Annual Details)
                </p>
                {/* {user?.nature === "TMS" ? (
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-print-md-6">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रु १,००,००० सम्म (Upto Rs. 1,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetailsTMS(1)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-print-md-6">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रु १,००,००१ देखि रु २,००,००० सम्म (From Rs. 1,00,001
                          to Rs. 2,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetailsTMS(2)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-print-md-6">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रु २,००,००१ देखि रू ५,००,००० सम्म ( From Rs.2,00,001
                          to Rs.5,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetailsTMS(3)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-print-md-6">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रू १०,००,००० भन्दा माथि (Above Rs. 10,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetailsTMS(4)}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-6 col-lg-6 ">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रु १,००,००० सम्म (Upto Rs. 1,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetails(1)}
                        />
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 ">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रु १,००,००१ देखि रु २,००,००० सम्म (From Rs.1,00,001
                          to Rs.2,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetails(2)}
                        />
                      </div>
                    </div>
                    <div className=" col-6 col-lg-6">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रु २,००,००१ देखि रू ५,००,००० सम्म ( From Rs.2,00,001
                          to Rs.5,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetails(3)}
                        />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="manifacturing"
                        >
                          रू ५,००,००० भन्दा माथि (Above Rs. 5,00,000)
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          readOnly
                          checked={checkFinancialDetails(4)}
                        />
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
              {/* </div> */}
              <div className="row m-0 p-0">
                <div className="col-12  border">
                  <div>
                    <div>
                      निक्षेप सदस्यले हितग्राहीको खातामा भएको घटबढ
                      स्वचालित रुपमा (Standing instruction for the
                      automatic transactions)
                    </div>
                  </div>
                  <div className="col-12 d-flex" style={{ gap: "16px" }}>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        readOnly
                        htmlFor="typeOfAccount"
                      //   checked={
                      //     userData?.boStatement
                      //       ?.isStandingInstructionForAutomaticTxn
                      //   }
                      />
                      <div> &nbsp;गराउने (Yes)</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        readOnly
                        htmlFor="typeOfAccount"
                      //   checked={
                      //     !userData?.boStatement
                      //       ?.isStandingInstructionForAutomaticTxn
                      //   }
                      />{" "}
                      <div>&nbsp;नगराउने (No)</div>
                    </div>
                  </div>
                </div>

                {/* <!-- ! bank account number --> */}
                <div className="col-12 border center-y ">
                  <div>
                    <div className="text-capitalize">
                      खाताको विवरण प्राप्त गर्ने (Account Statement)
                    </div>
                    <div
                      className="col-12  center-y"
                      style={{ gap: "16px" }}
                    >
                      <div className="d-flex">
                        <input
                          type="radio"
                          readOnly
                          htmlFor="typeOfAccount"
                        // checked={
                        //   userData?.boStatement?.accountStatementPeriod ===
                        //   "DAILY"
                        // }
                        />
                        <div className="m-2">
                          <div>दैनिक(Daily)</div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <input
                          type="radio"
                          readOnly
                          htmlFor="typeOfAccount"
                        // checked={
                        //   userData?.boStatement?.accountStatementPeriod ===
                        //   "WEEKLY"
                        // }
                        />
                        <div className="m-2">
                          <div>साप्ताहिक(Weekly)</div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <input
                          type="radio"
                          readOnly
                          htmlFor="typeOfAccount"
                        // checked={
                        //   userData?.boStatement?.accountStatementPeriod ===
                        //   "15DAYS"
                        // }
                        />
                        <div className="m-2">
                          {" "}
                          <div>पाक्षिक(15 days)</div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <input
                          type="radio"
                          readOnly
                          htmlFor="typeOfAccount"
                        // checked={
                        //   userData?.boStatement?.accountStatementPeriod ===
                        //   "C"
                        // }
                        />
                        <div className="m-2">
                          {" "}
                          <div>मासिक(Monthly)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0 p-0">
                <p className="text-start">
                  {" "}
                  म/हामीले निक्षेप सदस्य र हितग्राहीको करारनामा प्रचलित
                  ऐन,नियम, विनियम र सो मा भएको संशोधन मन्न मन्जुर
                  गर्दछु/गर्दछौं । माथि उल्लेखित विवरण सत्य तथ्य रहेको र
                  सो विवरणमा कुनै फरक परे कानून बमोजिम सहुँला, बुझाउँला ।
                  अन्यथा ठहरिएमा हितग्राही खाता रद्द गर्न मन्जुरी
                  गर्दछु/गर्दछौँ । <br />I / We shall accept to the terms
                  and conditions relating to the agreement between
                  Depository Participants and Beneficial Owner, prevalent
                  act, regulations, bylaws and any amendments on it. I/We
                  hereby acknowledge that the above disclosed details are
                  true. I further hereby consent to borne any legal
                  actions in case any false disclosure of information
                  related to me/us and the Depository Participants reserve
                  right to close my account. All disputes are subject to
                  the jurisdiction of courts in Kathmandu , Nepal.
                </p>
              </div>
              <div className="row my-4 justify-content-between">
                <div
                  className="col-4 text-center text-capitalize border"
                  style={{ width: "10cm" }}
                >
                  <div>
                    <div>
                      <p>औंठाछाप (Thumb Print)</p>
                    </div>
                  </div>

                  <div className="row col-6" style={{ width: "10cm" }}>
                    <div className="col-6 center-xy border">
                      <div style={{ height: "180px" }}>
                        {" "}
                        <p>बायाँ (left)</p>
                        {/* {userData?.clientDocument?.leftThumb && extraInfo && (
                        <img
                          width={"150px"}
                          height={"200px"}
                          src={
                            getPicCoresPorxyURL() +
                            userData?.clientDocument?.leftThumb
                          }
                        />
                      )} */}
                      </div>
                    </div>
                    <div className="col-6 center-xy border">
                      <div style={{ height: "180px" }}>
                        <p>दायाँ (right)</p>

                        {/* {userData?.clientDocument?.rightThumb && extraInfo && (
                        <img
                          width={"150px"}
                          height={"200px"}
                          src={
                            getPicCoresPorxyURL() +
                            userData?.clientDocument?.rightThumb
                          }
                        />
                      )} */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row col-5 align-self-end justify-content-end text-end"
                >
                  <div className="text-center">
                    {/* {userData?.clientDocument?.signature && extraInfo && (
                    <img
                      // className="signature-kyc"
                      width={"250px"}
                      height={"100px"}
                      src={
                        getPicCoresPorxyURL() +
                        userData?.clientDocument?.signature
                      }
                    />
                  )} */}
                  </div>

                  <div className="signature-holder"></div>

                  <p>ग्राहकको हस्ताक्षर (Applicant's Signature)</p>
                </div>
              </div>

              {/* <!-- ! htmlFor office use only --> */}
              <div className='m-0 p-0'>
                <h2
                  className="text-center kyc-secondary-header mb-0 classNam"
                // style={{ width: "102.5%" }}
                >
                  कार्यालयको प्रयोजनको लागि (For Official Use)
                </h2>

                <div className="border row m-0 p-0 p-2">
                  <div className="col-4 col-md-4">
                    <h3>रुजु गर्ने</h3>

                    {/* <p>नाम थर: {userData?.user?.verifiedBy}</p> */}

                    <p>पद:</p>

                    <p>हस्ताक्षर:</p>

                    {/* <p>मिति: {userData?.user?.verifiedDate}</p> */}
                  </div>
                  <div className="col-4 col-md-4">
                    <div className="center-y">
                      <div className="office-stamp border center-xy">
                        <p
                          className="text-center"
                          style={{ marginBottom: "9rem" }}
                        >
                          कार्यालयको छाप
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-center mt-2 "
                      style={{ marginLeft: "-7.5rem" }}
                    >
                      कार्यालयको नाम:{" "}
                      {/* <b>{orgData !== undefined && orgData?.name}</b> */}
                    </p>
                  </div>

                  <div className="col-4 col-md-4">
                    <h3>प्रमाणित गर्ने</h3>

                    {/* <p>नाम थर:{userData?.user?.approvedBy}</p> */}

                    <p>पद:</p>

                    <p>हस्ताक्षर:</p>

                    {/* <p>मिति:{userData?.user?.approvedDate}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* pointInfo */}
          <section className="container pb-1">
            <div className="container"></div>
          </section>
          {/* {individualDetail?.isMinor && ( */}
          <section className="container pb-1">
            <div>
              <div className="kyc-secondary-header text-center">
                <h2> संरक्षकको विवरण (नाबालकको हकमा मात्र)</h2>

                <h2>Guardian's Details (In case of Minor Only)</h2>
              </div>
              {/* 
                    <figure style={{ textAlign: "right" }}>
                      <img
                        src="https://picsum.photos/200/200"
                        alt="फोटो (हालसालै खचेको)"
                        height="150px"
                        width="150px"
                        className="border"
                      />
                    </figure> */}
            </div>

            <div className="row m-0 p-0 border text-capitalize">
              {/* <!-- name / surname  --> */}
              <div className="col-12 col-md-6 border ">
                <div>नाम/ थर ( name / surname) :(in block letter)</div>
              </div>
              <div className="col-12 col-md-6 border center-y text-uppercase">
                {/* {individualDetail?.guardianName} */}
              </div>

              {/* <!-- relationship  --> */}
              <div className="col-12 col-md-6 border ">
                <div>
                  निवेदकसंगको सम्बन्ध (Relationship with applicant):
                </div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {individualDetail?.relationship} */}
              </div>

              {/* <!--  Correspondence Address --> */}
              <div className="col-12 col-md-6 border ">
                <div>पत्राचार ठेगाना (Correspondence Address):</div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {individualDetail?.guardianAddress} */}
              </div>

              {/* <!-- country --> */}
              <div className="col-6 col-md-3 border center-y">
                <div>
                  <div>देश (Country):</div>
                </div>
              </div>

              <div className=" col-6 col-md-3 border center-y">
                {/* <div>{individualDetail?.country}</div> */}
              </div>

              {/* <!-- Province --> */}
              <div className="col-6 col-md-3 border ">
                <div>प्रदेश (Province):</div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* <div>{individualDetail?.guardianProvince}</div> */}
              </div>

              {/* <!-- Disstrict --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>जिल्ला (District):</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* <div>{individualDetail?.guardianDistrict}</div> */}
              </div>

              {/* <!-- Disstrict --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>गा.पा. / न.पा. / उ.म.न.पा / म.न.पा.:</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan
                    city / Metropolitan city:
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {individualDetail?.guardianMunci} */}
              </div>

              {/* <!-- Ward no --> */}
              <div className="col-6 col-md-3 border ">
                <div>
                  <div>वडा नं. (Ward No.):</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {individualDetail?.guardianWard} */}
              </div>

              {/* <!-- telephone no --> */}
              <div className="col-6 col-md-3 border s">
                <div>
                  <div>टेलिफोन नं. (Telephone No.) :</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {individualDetail?.guardianTelephone} */}
              </div>

              {/* <!-- fax no --> */}
              <div className="col-6 col-md-3 border ">
                <div>
                  <div>फ्याक्स नं. (Fax No.) :</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {individualDetail.guardianFax} */}
              </div>

              {/* <!-- mobile number --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>मोबाइल नं. (Mobile No.) :</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {individualDetail?.guardianMob} */}
              </div>

              {/* <!-- pan number --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>स्थायी लेखा नं. (PAN No.)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {individualDetail?.panNo} */}
              </div>

              {/* <!-- email id --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>इमेल (E-mail ID):</div>
                </div>
              </div>

              <div className=" col-6 col-md-3 border center-y text-lowercase">
                {/* {individualDetail?.guardianEmail} */}
              </div>
            </div>

            <div className="text-center" style={{ width: "fit-content" }}>
              {/* {extraInfo && (
                <img
                  className="signature-kyc"
                  width={"250px"}
                  height={"100px"}
                  src={
                    getPicCoresPorxyURL() +
                    userData?.clientDocument?.signature
                  }
                />
              )} */}
              <div
                className="signature-holder mt-5"
              // style={{ height: extraInfo ? "0px" : "40px" }}
              ></div>
              <div>संरक्षकको हस्ताक्षर</div>
              <p className="text-capitalize">Guardian's signature</p>
            </div>
          </section>
          {/* )} */}
          {/* {dpNomineeDetails?.haveNominee === true && ( */}
          <section className="container pb-1 avoid-page-break">
            <div className="row m-0 p-0 text-center kyc-secondary-header mb-2">
              <h2>इच्छाएको व्यक्ति सम्बन्धि विवरण (Nominee's Details)</h2>
            </div>

            <p>
              मेरो मृत्यु भएको अवस्था वा नसकेको अवस्थामा व्यक्तिले मेरो
              नाममा भएको सम्पूर्ण धितोपत्रको हकदाबी गर्न पाउने छ।
            </p>

            <p>
              In the event of my death or incapcity, the following named
              nominee shall be entitled to the balance of my demat account
            </p>

            <div className="row m-0 p-0 border text-capitalize">
              {/* <!-- name / surname  --> */}
              <div className="col-12 col-md-6 border  center-y">
                <div>
                  <div>
                    हकदाबी गर्नेको नाम (name / surname) :(in block letter)
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {dpNomineeDetails?.name?.toUpperCase()} */}
              </div>

              {/* <!-- relationship  --> */}
              <div className="col-12 col-md-6 border  center-y">
                <div>
                  <div>
                    निवेदकसंगको सम्बन्ध (Relationship with applicant):
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {dpNomineeDetails?.relation} */}
              </div>

              {/* <!--  Correspondence Address --> */}
              <div className="col-12 col-md-6  center-y border">
                <div>
                  <div>पत्राचार ठेगाना( Correspondence Address:)</div>
                </div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {dpNomineeDetails?.address} */}
              </div>

              {/* <!-- citizenship / passport number --> */}
              <div className="col-12 col-md-6 border ">
                <div>
                  <div>
                    नागरिता / राहदानी नम्बर (Citizenship / Passport No.):
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 border  center-y">
                {/* {dpNomineeDetails?.citizenShipNo} */}
              </div>
              <div className="col-12 col-md-6 border ">
                <div>
                  <div>जारी गर्ने स्थान (Place of Issue)</div>
                </div>
              </div>
              <div className="col-12 col-md-6 border  center-y">
                {/* {dpNomineeDetails?.placeOfIssue} */}
              </div>

              {/* <!-- country --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>देश (Country)</div>
                </div>
              </div>

              <div className=" col-6 col-md-3 border center-y">
                {/* {dpNomineeDetails?.country} */}
              </div>

              {/* <!-- Province --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>प्रदेश (Province)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {dpNomineeDetails?.province} */}
              </div>

              {/* <!-- Disstrict --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>जिल्ला (District)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {dpNomineeDetails?.district} */}
              </div>

              {/* <!-- District --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>गा.पा. / न.पा. / उ.म.न.पा / म.न.पा.:</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan
                    city / Metropolitan city
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-xy">
                {/* {dpNomineeDetails?.municipality} */}
              </div>

              {/* <!-- age --> */}
              <div className="col-2 col-md-3 border  center-y">
                <div>
                  <div>उमेर (age)</div>
                </div>
              </div>

              <div className="col-2 col-md-3 border center-y">
                {/* {dpNomineeDetails?.age} */}
              </div>

              {/* <!-- telephone no --> */}
              <div className="col-4 col-md-3 border ">
                <div>
                  <div>टेलिफोन नं. (Telephone No.) :</div>
                </div>
              </div>

              <div className="col-4 col-md-3 border center-y">
                {/* {dpNomineeDetails?.telephoneNo} */}
              </div>

              {/* <!-- fax no --> */}
              <div className="col-3 col-md-3 border center-y ">
                <div>
                  <div>फ्यास नं.( Fax No.) :</div>
                </div>
              </div>

              <div className="col-3 col-md-3 border center-y">
                {/* {dpNomineeDetails?.fax} */}
              </div>

              {/* <!-- mobile number --> */}
              <div className="col-3 col-md-3 border  center-y">
                <div>
                  <div>मोबाइल नं. (Mobile No.) :</div>
                </div>
              </div>

              <div className="col-3 col-md-3 border center-y">
                {/* {dpNomineeDetails?.mobileNo} */}
              </div>

              {/* <!-- pan number --> */}
              <div className="col-3 col-md-3 border center-y ">
                <div>
                  <div>स्थायी लेखा नं. (PAN No.)</div>
                </div>
              </div>

              <div className="col-3 col-md-3 border center-y">
                {/* {dpNomineeDetails?.panNo} */}
              </div>

              {/* <!-- email id --> */}
              <div className="col-3 col-md-3 border  center-y">
                <div>
                  <div>इमेल (E-mail ID):</div>
                </div>
              </div>

              <div className=" col-3 col-md-3 border center-y text-lowercase">
                {/* <div>{dpNomineeDetails?.email}</div> */}
              </div>
            </div>

            <div className="text-center" style={{ width: "fit-content" }}>
              <div
                style={{
                  //   height: extraInfo ? "0px" : "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                {/* {extraInfo && (
                  <img
                    className="signature-kyc"
                    width={"250px"}
                    height={"100px"}
                    src={
                      getPicCoresPorxyURL() +
                      userData?.clientDocument?.signature
                    }
                  />
                )} */}
                <div className="signature-holder mt-5"></div>
                <p>उम्मेदवारको हस्ताक्षर (Signature)</p>
              </div>
            </div>
          </section>
          {/* )} */}
          {/* KYCAGGREMENT */}
          <section className="container pb-1 pb-print-1">
            {/* <!-- Header section --> */}
            <header className="text-center">
              <h4 className=""> अनुसूची - १५ </h4>
              <p>(विनियम २० को उपविनियम ३ संग सम्बन्धित )</p>
              <p>
                (निक्षेप सदस्य र हितग्राही व्यक्ति वा संस्थाबीचको सम्झौता){" "}
              </p>
            </header>
            <div className="my-4">
              <p className="mx-3 text-start aggrement-content">
                {/* {orgData?.address ? (
                <span className="dotted-underline mt-3">
                  {orgData?.address}
                </span>
              ) : (
                "..........................."
              )}{" "} */}
                स्थित कार्यालय रहेको{" "}
                {/* {orgData !== undefined && (
                <span className="dotted-underline mt-3">{orgData?.name}</span>
              )} */}
                (वैधानिक अस्तित्व भएको निकायको विवरण) (यसपछि "सदस्य"
                भनिएको ) प्रथम पक्ष र{" "}
                {/* {currentAddressDetails ? (
                <span
                  className="dotted-underline mt-3"
                  style={{ textTransform: "capitalize" }}
                >
                  {currentAddressDetails[0]?.province}{" "}
                  {currentAddressDetails[0]?.district}
                </span>
              ) : (
                "............................."
              )}{" "} */}
                स्थित कार्यालय रहेको{" "}
                {/* {userData?.user?.name ? (
                <span className="dotted-underline mt-3">
                  {userData?.user?.name}
                </span>
              ) : (
                "............................."
              )}{" "} */}
                (वैधानिक अस्तित्व भएको निकायको विवरण ) यसपछि ("हितग्राही"
                भनिएको ) दोस्रो पक्ष बीच देहायको शर्तहरु पालना गर्ने
                सहमतिसाथ यो सम्झौता गरिएको छ ।{" "}
              </p>
            </div>
            <body style={{ backgroundColor: "white" }}>
              <h6 className="aggrement-header">१.सामान्य प्रावधान </h6>
              <p className="mx-3 text-start  aggrement-content">
                {" "}
                यस सम्झौताका पक्षहरु धितोपत्रको केन्द्रिय निक्षेप सेवा
                नियमावली , २०६८ को व्यवस्था र सिडिएससिले समयसमयमा जारी
                गरेका विनियमलाई यसै सम्झौतामा उल्लेख भए सरह र यसै
                सम्झौताको हिस्साको रुपमा पालना गर्न सहमत छौ।{" "}
              </p>{" "}
              <h6 className="aggrement-header">२.रकम असुल उपर </h6>
              <p className="mx-3 text-start  aggrement-content">
                हितग्राही सदस्यलाई तिर्नुपर्ने रकम तोकिएको मितिभित्र
                बुझाउनु पर्नेछ ।
              </p>{" "}
              <h6 className="aggrement-header">
                ३.खाताको फाँटबारी (स्टेटमेन्ट){" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                सदस्यले अनलाइन मार्फत हितग्राहीलाई निजको खाताको फाँटबारी
                हेर्ने सुबिधा प्रदान गर्नेछ ।साथै हितग्राहीले आफ्नो
                धितोपत्रको फाँटबारी भौतिक रुपमा प्राप्त गर्न अनुरोध गरेमा
                सदस्यले सो समेत प्रदान गर्न सक्नेछ। तर यस अवधिमा कुनै
                कारोबार नभएमा खाताको फाँटबारी दिनु पर्ने छैन ।
              </p>{" "}
              <h6 className="aggrement-header">
                ४.विवरणमा भएका परिवर्तनहरुबारे हितग्राहीले सुचित
                गर्नुपर्ने{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                हितग्राहीले सुचित गरेको अवस्था बाहेक ,हितग्राहीले विवरणमा
                भएको परिवर्तन सदस्यलाई जानकारी नगराएको कारणबाट
                हितग्राहीलाई हुनसक्ने कुनै हानि उपर सदस्य उत्तरदायी वा
                जिम्मेवार हुनेछैन ।
              </p>{" "}
              <h6 className="aggrement-header">
                ५.हितग्राहीको दाबीप्रति निक्षेप सदस्य उत्तरदायी नहुने{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                सुरक्षणका लागि हितग्राहीको खाताबाट खर्च लेखिएको/क्रेडिट
                गरिएको तेस्रो पक्षका दाबी अदालत वा राजस्व निकायबाट तोकिएको
                वा माग भएको कुनै शुल्क,दस्तुर , कर प्रति सिडिएससि तथा
                सदस्य उत्तरदायी हुने छैन।न्जन
              </p>{" "}
              <h6 className="aggrement-header">
                ६.प्रत्येक हितग्राही निम्न कुरामा बिशेष रुपले जिम्मेवार
                हुनेछ{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                (क)निक्षेप सदस्यसँग भएको सम्झौता र खाता खोल्दाका विवरणहरु
                तथा तथ्य सम्बन्धमा, <br />
                (ख )निक्षेप सदस्यसँग खाता खोल्दा पेश गरेको लिखतको
                आधिकारिकता र सत्यता सम्बन्धमा, <br />
                (ग )निक्षेप सदस्यबाट प्रत्येक कारोबार निर्देशन बमोजिम
                खाताबाट घटाएको र थपेको कुराको सुनिश्चित गर्ने, <br />
                (घ)हितग्राहीको खातामा भएको परिवर्तनका विवरण सम्बन्धमा
                जस्तै :ठेगाना ,बैंक विवरण स्थिति अख्तियारी ,आदेश मनोनयन
                दस्तखत आदि , <br />
                (ङ्ग)कुनै पनि निष्काशित धितोपत्र खरिद गरेकोमा सो को सत्य
                विवरण।
              </p>{" "}
              <h6 className="aggrement-header">७.आधिकारिक प्रतिनिधि </h6>
              <p className="mx-3 text-start  aggrement-content">
                हितग्राही संगठित संस्था वा कानुनी व्यक्ति भएमा त्यस्तो
                संस्था वा व्यक्तिको तर्फबाट प्रतिनिधित्व गर्न
                अख्तियारप्राप्त व्यक्तिले सदस्यसँगको सम्झौता क्रियन्वित
                गर्नेछन ।प्रतिनिधिको हेरफेर वा अन्य कुनै किसिमको परिवर्तन
                भएमा हितग्राहीले सदस्यलाई तुरुन्त जानकारी गराउनेछ ।
              </p>{" "}
              <h6 className="aggrement-header">८.सम्झौता रद्ध गर्ने </h6>
              <p className="mx-3 text-start  aggrement-content">
                विनियमावली तथा संचालन निर्देशिकामा उल्लेख गरिएअनुसारका
                शर्तबन्देजको अधिनमा रही पक्षहरुले यो सम्झौता जुनसुकै समयमा
                रद्ध गर्न सक्नेछन ।कुनैपनि पक्षले सम्झौता रद्ध गरेमा
                हितग्राही को खातामा भएका धितोपत्रहरुलाई सोहि हितग्राहिको
                निर्देशन बमोजिम सदस्यले व्यवस्थापन गर्नेछ।
              </p>{" "}
              <h6 className="aggrement-header">
                ९.काबु बाहिरको परिस्थिति{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                यस सम्झौतामा वा विनियमावलीमा जुनसुकै कुरा लेखिएको भएतापनि
                आंधी ,तूफान ,बाढी,चटयांग ,भूइंचालो ,आगलागी ,बिस्फोटन वा
                दैवी प्रकोप ,युद्ध ,बिद्रोह ,क्रान्ति ,हुलदंगा ,निषेधाज्ञा
                ,नाकाबन्दी ,अवरोध ,दंगा,नागरिक कलह ,हड्ताल ,तालाबन्दी
                ,तोडफोड ,विध्वंश ,प्रणालीमा गडबडी ,अनाहक प्रवेश वा
                प्रतिकार गर्न नसकिने अन्य कुनै शक्ति वा बाध्यतालगायत काबु
                वा नियन्त्रणबाहिरका घटनाद्वारा यस सम्झौता अन्तर्गतको
                दायित्वमा कुनै कार्य सम्पादन नगरेको ,बिलम्ब गरेको वा
                उल्लङ्घन भएकोमा कुनै एक पक्षलाई हुन् गएको हानीनोक्शानी
                ,क्षतिको सोधभर्ना वा क्षतिपूर्ति दिन अर्को पक्ष उत्तरदायी
                हुने छैन ।
              </p>
              <h6 className="aggrement-header">१०.जनाउ </h6>
              <p className="mx-3 text-start  aggrement-content">
                यस सम्झौतामा दिईने अथवा आवश्यक हुने कुनै पनि जनाउ वा संचार
                लिखित रुपमा र प्रापकको हालसालको ठेगानामा नपठाएसम्म
                बन्धनकारी हुनेछैन ।
              </p>{" "}
              <h6 className="aggrement-header">११.विवादको समाधान </h6>
              <p className="mx-3 text-start  aggrement-content">
                पक्षहरुका बीचमा उत्पन्न हुन सक्ने विवाद तथा भिन्नताको
                सम्बन्धमा विनियमावलीमा तोकिएअनुसारको मध्यस्थता समितिको
                व्यवस्था यस सम्झौताका पक्षहरुलाई पनि लागू हुनेछ ।
              </p>{" "}
              <h6 className="aggrement-header">१२.नियमनकारी कानुन </h6>
              <p className="mx-3 text-start  aggrement-content">
                यो सम्झौता प्रचलित नेपालको कानुनद्वारा नियमन तथा व्याख्या
                हुनेछ।
              </p>
            </body>
            <footer className="my-3">
              <div className="row">
                <div className="col-6 col-md-6 col-sm-12">
                  <h4 className="aggrement-header">
                    सम्झौताका प्रथम पक्ष{" "}
                  </h4>
                  <p></p>
                  <p>व्यक्तिको नाम:</p>
                  <p>दस्तखत: </p>
                  <p>कम्पनीको छाप : </p>
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                  <h4 className="aggrement-header">
                    सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार
                    प्राप्त){" "}
                  </h4>
                  {/* <p>व्यक्तिको नाम:{userData?.user?.name}</p> */}
                  <p>दस्तखत: </p>
                  <p>कम्पनीको छाप : </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>साक्षी</p>
                  <p>१ ............................................ </p>
                </div>
                <div className="col-6">
                  <p>साक्षी</p>
                  <p>२ ............................................ </p>
                </div>
              </div>
              <div className="my-2">
                ईति सम्बत .........................साल
                ........................... महिना
                ..................................गते रोज
                .................................शुभम्{" "}
              </div>
            </footer>
          </section>
          {/* Meroshare */}
          <section className="container pb-5">
            <DpMeroShare
            // applicantName={userData?.user?.name}
            // email={userData.user?.email}
            // mobileNo={userData.user?.phoneNo}
            // dpId={userData.user?.dpDetails?.dpId}
            // boid={userData.user?.boid}
            // addressDetails={permanentAddressDetails?.[0]}
            // date={userData.user?.submittedDate}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndividualDPKyc;
