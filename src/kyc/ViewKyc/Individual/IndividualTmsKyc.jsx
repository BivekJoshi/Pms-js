import React, { useRef } from "react";
import "./kycIndividual.css";
import ReactToPrint from "react-to-print";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import IndividualKycPdf from "../../pdf/component/IndividualKycPdf";

const IndividualTmsKyc = ({ userData }) => {
  const componentRef = useRef();

  return (
    <div className="container">
      <div className="bg-white text-dark p-md-3 kyctms">
        <div className="d-flex justify-content-end">
          {/* {' '} */}
          {/* <SaveAsPdf componentRef={componentRef} title={"KYC"} margin={16} /> */}
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
        <div className="kyc-page " id="pdf" ref={componentRef}>
          {/* Header */}
          <section className="container pb-2 pb-print-1">
            {/* <!-- Header section --> */}
            <header className="text-center" style={{ position: "relative" }}>
              <h2 className="">अनुसूची १२</h2>
              <p className="">(विनियम २० संग सम्बन्धित)</p>
              <h2 className="text-decoration-underline fs18">
                प्राकृतिक व्यक्तिको परिचय विवरण
              </h2>
              <h3 className=" text-decoration-underline fs18">
                DETAILS OF NATURAL PERSON
              </h3>
              <div id="photo" key={userData?.clientDocument?.ppSizePhoto}>
                {userData?.clientDocument?.ppSizePhoto && (
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
                )}{" "}
              </div>
            </header>
          </section>
          {/* OfficialUse */}
          <section className="pb-2">
            <div className="container">
              <div>
                <div className="text-center kyc-secondary-header">
                  कार्यालय प्रयोजनका लागि मात्र (For official use only)
                </div>

                {/* <div className="container"> */}
                <div className="row m-0 p-0 ">
                  <div className="col-4 col-md-4 col-lg-4 border center-y ">
                    <div>
                      <div>
                        आवेदन नं.(App No.):
                        {/* {user?.submissionNo} */}
                      </div>
                    </div>
                  </div>

                  <div className="col-4 col-md-4 col-lg-4 border center-y">
                    <div>
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
                {/* </div> */}
              </div>
              {/* <div className="container"> */}
              <div className="row m-0 p-0">
                <div className="col-12 col-md-3 border border center-y">
                  <div>हितग्राहीको खाता नं. (BOID No):</div>
                </div>
                <div className="col-9 col-md-9 border d-flex center-y p-0">
                  {/* {user?.boid} */}
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12">
                  <p className="my-2">
                    तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ | आफूसंग
                    सरोकार नभएको विवरण उल्लेख गर्ने कोठामा तेर्सो धर्को तानिदिनु
                    होला |
                  </p>

                  <p>
                    Please complete all details and strike out the
                    non-applicable fields/boxes.
                  </p>

                  {/* <!-- Row htmlFor name of stock broker --> */}
                  <div className="d-flex" style={{ gap: "16px" }}>
                    <div className="">
                      निक्षेप सदस्यको नाम (Name of Depository Participant) :
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
                <div className="col-2 col-md-2 col-lg-2 center-y ">
                  <div>
                    <div>खाताको किसिम :</div>
                    <div className="text-inline">Types of Account:</div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                        // checked={!individualDetail?.isNrn}
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
                        // checked={individualDetail?.isNrn}
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
                        // checked={
                        //   individualDetail?.individualAccountType === "FIG"
                        // }
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
          <section className="container pb-2">
            <h2 className="text-center kyc-secondary-header">
              ग्राहकको विवरण (Client Details)
            </h2>

            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- ! name row --> */}
              <div className="col-4 col-md-4 border center-y">
                <div>Name (In block letters)</div>
              </div>

              <div className="col-8 col-md-8 border center-y text-uppercase">
                {/* {individualDetail?.middleName === null
                    ? individualDetail?.firstName +
                      " " +
                      individualDetail?.lastName
                    : individualDetail?.firstName +
                      " " +
                      individualDetail?.middleName +
                      " " +
                      individualDetail?.lastName} */}
              </div>
              <div className="col-4 col-md-4 border center-y">
                <div>देवनागरी (Name in Nepali)</div>
              </div>

              <div className="col-8 col-md-8 border d-flex align-items-end">
                <div className="text-uppercase">
                  {/* {individualDetail?.clientNameNepali} */}
                </div>
              </div>
              {/* <!-- ! date of birth --> */}
              <div className="col-4 col-md-4 border center-y">
                <div>
                  <div>जन्म मिति (Date of Birth)</div>
                </div>
              </div>

              <div className="col-8 col-md-8 border">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="">
                      <label className="form-check-label" htmlFor="bs">
                        बि. सं. (B.S.) :
                      </label>
                      <input
                        type="date"
                        // value={individualDetail?.dob}
                        readOnly
                        className="mx-2"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="">
                      <label className="form-check-label" htmlFor="ad">
                        इ. सं (A.D.):{" "}
                      </label>
                      <input
                        type="date"
                        // value={dateConverter(individualDetail?.dob, "BS_AD")}
                        readOnly
                        className="mx-2"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ! gender --> */}
              <div className="col-4 col-md-4 border center-y ">
                <div>
                  <div>लिङ्ग (Gender)</div>
                </div>
              </div>

              <div className="col-8 col-md-8 border d-flex center-y p-0 ">
                {/* <!-- <form action="" className="d-flex justify-content-center align-items-center gap-4"> --> */}
                <div className="form-check p-0" style={{ marginLeft: "5px" }}>
                  <label className="form-check-label" htmlFor="male">
                    पुरुष(Male)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input mx-2"
                    // checked={checkGender("M")}
                    readOnly
                  />
                </div>

                <div className="form-check">
                  <label className="form-check-label" htmlFor="female">
                    महिला (Female)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    // checked={checkGender("F")}
                    readOnly
                  />
                </div>

                <div className="form-check">
                  <label className="form-check-label" htmlFor="others">
                    अन्य (Others){" "}
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    readOnly
                    style={{ marginLeft: 0 }}
                    // checked={checkGender("O")}
                  />
                </div>
                {/* <!-- </form> --> */}
              </div>
              {/* <!-- Nationality row --> */}
              <div className="col-4 col-md-4 border center-y ">
                <div>
                  <div>राष्ट्रियता (Nationality)</div>
                </div>
              </div>

              <div className="col-8 col-md-8 border d-flex center-y gap-4">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="nepalese">
                    नेपाली (Nepalese)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    readOnly
                    // checked={!individualDetail?.isNrn}
                  />
                </div>

                <div className="form-check">
                  <label
                    className="form-check-label"
                    htmlFor="other_nationality"
                  >
                    अन्य (खुलाउने) (Others if any){" "}
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
                    // checked={individualDetail?.isNrn}
                  />
                </div>
              </div>

              {/* <!-- Citizenship number  --> */}
              <div className="col-6 col-md-4 border  center-y">
                <div>
                  <div>नागरिकता नम्बर (Citizenship Number)</div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                {/* {individualDetail?.citizenshipNo
                    ? individualDetail?.citizenshipNo
                    : ""} */}
              </div>

              <div className="col-6 col-md-4 border ">
                <div>
                  <div>जारी जिल्ला (Issued District)</div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y text-capitalize">
                {/* {individualDetail?.issuedDistrict} */}
              </div>

              <div className="col-6 col-md-4 border center-y ">
                <div>
                  <div>जारी मिति (Issued Date)</div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                {/* {individualDetail?.issuedDate} */}
              </div>

              {/* <!-- ! Beneficiary ID No. --> */}
              <div className="col-6 col-md-4 border center-y ">
                <div>
                  <div>हितग्राही खाता नं. (Beneficiary ID No.)</div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                <div className="letter-space-3">
                  {/* {user?.boid ? user?.boid : ""} */}
                </div>
              </div>

              {/* <!-- ! Permanent Account Number (PAN) --> */}
              <div className="col-6 col-md-4 border center-y ">
                <div>
                  <div>स्थायी लेखा नं. (PAN)</div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                <div className="letter-space-3">
                  {/* {individualDetail?.panNo} */}
                </div>
              </div>

              {/* <!-- ! Identification Number and Address --> */}
              <div className="col-6 col-md-4 border center-y ">
                <div>
                  <div>गैरआवासिय नेपालीको हकमा परिचयपत्र नं. र ठेगाना</div>
                  <div className="text-capitalize">
                    Identification No. and address (Incase of NRN)
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                {/* {individualDetail?.nrnNo || ""} */}
              </div>
            </div>
            {/* </div> */}
          </section>
          {/* Address */}
          {/* Permanent address */}
          <section className="container pb-2">
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
                {/* {permanentAddressDetails?.[0]?.country} */}
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
                  <div>गा.पा./न.पा./उ.म.न.पा/म.न.पा.</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan city /
                    Metropolitan city :
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
          <section className="container pb-2 mt-2">
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
              <div className="col-6 border   center-y">
                <div>
                  <div>गा.पा./न.पा./उ.म.न.पा/म.न.पा.</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan city /
                    Metropolitan city :
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
              <div className="col-6 col-md-3 border center-y ">
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
          {/* Map */}
          <section
            className="container"
            mt={2}
            // key={currentAddressDetails}
          >
            <b>हाल बसोबास रहेको स्थानको नक्सा (Location map)</b>
            <div
              className="location-map border d-flex flex-column justify-content-between mb-3"
              style={{ height: "10cm" }}
              // ref={mapRef}
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
                <div className="col-6 text-capitalize">
                  longitude :{" "}
                  {/* {currentAddressDetails && currentAddressDetails[0]?.longitude
                    ? currentAddressDetails[0]?.longitude
                    : 0} */}
                </div>
              </div>
            </div>
          </section>
          {/* Details of Family Member */}
          <section className="container pb-2 avoid-page-break">
            <div className="text-center kyc-secondary-header">
              परिवारका सदस्यहरुको विवरण (Details of family member)
            </div>

            {/* <div className="container"> */}
            <div className="row m-0 p-0 border">
              {/* <!-- grand father's name (nep)--> */}

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
              बैंक खाताको विवरण(bank account details)
            </div>

            {/* <div className="container"> */}
            <div className="row m-0 p-0">
              {/* <!-- types of bank account --> */}
              <div className="col-6 col-md-4  border">
                <div>
                  <div>बैंक खाताको किसिम (Types of Bank Account)</div>
                </div>
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
                      // checked={checkAccountType("S")}
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
                      // checked={checkAccountType("C")}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- ! bank account number --> */}
              <div className="col-6 col-md-4 border center-y ">
                <div>
                  <div className="text-capitalize">
                    बैंक खाता नं. (bank account number)
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-8 border center-y">
                {/* {bankDetails?.accountNumber} */}
              </div>

              {/* <!-- ! name and address of bank --> */}
              <div className="col-6 col-md-4 border  center-y">
                <div>बैंक खाताभएको बैंकको नाम (Name of Bank)</div>
              </div>

              <div className="col-6 col-md-8 border center-y text-capitalize">
                {/* {bankList &&
                    bankList?.data?.find(
                      (d) => d.value === userData.bankDetails?.bankName
                    )?.label} */}
              </div>
              <div className="col-6 col-md-4 border  center-y">
                <div>बैंक खाताभएको बैंकको ठेगाना (Address of Bank)</div>
              </div>

              <div className="col-6 col-md-8 border center-y text-capitalize">
                {/* {bankDetails?.branchAddress} */}
              </div>
            </div>
            {/* </div> */}
          </section>
          {/* Details of Occupation */}
          <section className="container pb-2 avoid-page-break">
            <div className="kyc-secondary-header text-center">
              पेशागत विवरण (Details of Occupation)
            </div>

            {/* <div className="container"> */}
            <div className="row m-0 p-0 border">
              {/* <!-- occupation --> */}
              <div className="col-3 col-md-3 border center-y">
                <div>
                  <div>पेशा (Occupation)</div>
                </div>
              </div>
              <div
                className="col-9 col-md-9 row border ms-0 on-print"
                style={{ rowGap: "1rem" }}
              >
                <div className="col-3 col-md-6 col-lg-3">
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
                      // checked={checkOccupation("SERVICE")}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="govt">
                      सरकारी
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="govt">
                      (Government Services)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      // checked={checkOccupation("Government Services")}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
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
                      // checked={checkOccupation("Public Sector")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="ngo_ingo">
                      निजी क्षेत्र
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="ngo_ingo">
                      (Private Sector)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      // checked={checkOccupation("Private Sector")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="business_person"
                    >
                      ब्यापार
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
                      // checked={checkOccupation("BUSINESS")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="agriculture">
                      कृषि
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="agriculture">
                      (Agriculture)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      // checked={checkOccupation("FARMER")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
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
                      // checked={checkOccupation("RETIRED")}
                    />
                  </div>
                </div>
                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="house_wife">
                      व्यावसायिक
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="house_wife">
                      (Professional)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      // checked={checkOccupation("PROFESSIONAL")}
                    />
                  </div>
                </div>
                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="house_wife">
                      गृहिणी
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="house_wife">
                      ( Housewife)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      // checked={checkOccupation("HOUSEWIFE")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="student">
                      विद्यार्थी
                    </label>
                    <br />
                    <label className="form-check-label" htmlFor="student">
                      Student
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      // checked={checkOccupation("STUDENT")}
                    />
                  </div>
                </div>

                <div className="col-3 col-md-6 col-lg-3">
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
                      Others
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      // checked={checkOccupation("OTHERS")}
                    />
                  </div>
                </div>
                <div className="col-3 col-md-6 col-lg-3 mt-4 text-capitalize">
                  {/* {occupationDetails?.ifOthers} */}
                </div>
              </div>

              {/* <!-- type of business --> */}
              <div className="col-3 col-md-3 border center-y ">
                <div>
                  <div>ब्यापारको प्रकार (Types of Business)</div>
                </div>
              </div>
              <div
                className="col-8 col-md-9 border row ms-0"
                style={{ rowGap: "1rem" }}
              >
                <div className="form-check col-12 col-md-6 col-lg-4 col-print-md-6 my-3">
                  <label className="form-check-label" htmlFor="manifacturing">
                    उत्पादन (Manufacturing)
                  </label>
                  <input
                    type="radio"
                    className="form-check-input"
                    readOnly
                    // checked={checkBusiness("MA")}
                  />
                </div>

                <div className="form-check col-12 col-md-6 col-lg-4 col-print-md-6  my-3">
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

                <div className="form-check col-12 col-md-6 col-lg-4 col-print-md-6  my-3">
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
              <div className="col-4 col-md-4 border  center-y">
                <div>
                  <div>संस्थाको नाम( Organization's Name)</div>
                </div>
              </div>
              <div className="col-8 col-md-8 border text-capitalize center-y">
                {/* {occupationDetails?.orgName} */}
              </div>
              {/* <!-- address --> */}
              <div className="col-4 col-md-4 border center-y ">
                <div>
                  <div>ठेगाना (Address)</div>
                </div>
              </div>
              <div className="col-8 col-md-8 border text-capitalize center-y">
                {/* {occupationDetails?.address} */}
              </div>
              <div className="col-3 col-md-3 center-y">
                <div className="text-capitalize">
                  आर्थिक विवरण(financial Details)
                </div>
              </div>
              <div className="col-9 col-md-9 border">
                <p className="text-start">
                  आयको सीमा (वार्षिक विवरण) / Income Limit(Annual Details)
                </p>
                {/* {user?.nature === "TMS" ? ( 
                <div className="row">
                  <div className="col-4">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="manifacturing"
                      >
                        रु ५,००,००० सम्म (Upto Rs. 5,00,000)
                      </label>
                      <input
                        type="radio"
                        className="form-check-input"
                        readOnly
                        checked={checkFinancialDetailsTMS(1)}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="manifacturing"
                      >
                        रु ५,००,००१ देखि रु १०,००,००० सम्म (From Rs. 5,00,001 to
                        Rs. 10,00,000)
                      </label>
                      <input
                        type="radio"
                        className="form-check-input"
                        readOnly
                        checked={checkFinancialDetailsTMS(2)}
                      />
                    </div>
                  </div>

                  <div className="col-4">
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
                        checked={checkFinancialDetailsTMS(3)}
                      />
                    </div>
                  </div>
                </div>*/}
              </div>
            </div>
            {/* </div> */}
          </section>

          {/* pointInfo */}
          <section className="container pb-2">
            <div>
              <div className="d-flex gap-2">
                <div style={{ width: "48.5%" }} mt={2}>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    धितोपत्र कारोवारको सम्बन्धमा तपशिल बमोजिमको स्वघोषणा गर्दछु
                    ।
                  </p>
                  <p>
                    १. म/हामी धितोपत्र खरिदका लागि प्रयोग गर्ने रकम सम्पत्ती
                    शुद्धिकरण सम्बन्धी प्रचलित कानुन विपरित आर्जन गरेको हुने छैन
                    ।
                  </p>
                  <p>
                    २. धितोपत्रमा गरिएको लगानीमा निहित जोखिमको सम्बन्धमा जानकार
                    छु।
                  </p>
                  <p>
                    ३. म/हामीले खरिद गरेका धितोपत्रहरु बापतको भुक्तानी लिने दिने
                    कार्य तोकिएको समय भित्र गर्ने छु ।
                  </p>
                  <p>
                    ४. म / हामीले धितोपत्र सम्बन्धी तथा अन्य पचलित नियम
                    कानूनहरुको पालना गर्नेछु ।
                  </p>
                  <p>
                    ५. म/ हामी कर्जा सूचना केन्द्रको कालो सुचीमा रहेको छु / छैन
                    ।
                  </p>
                  <p>
                    ६. सम्पत्ति शुद्धिकरण (मनी लाउण्डरिङ्ग) निवारण ऐन २०६४ र यस
                    अन्तर्गत जारी भएका नियमावली तथा निर्देशन आदिबाट माग
                    भएअनुसारका सूचना, विवरण तथा कागजातहरु कम्पनीलाई उपलब्ध
                    गराउने छु / छौं ।
                  </p>
                  <p>
                    ७. कम्पनीलाई गर्नु पर्ने भुक्तानी नगरी बाँकी राखोको कारणबाट
                    मेरो/ हाम्रो कारोवार अन्य धितोपत्र दलाल कम्पनीहरुमा समेत
                    निलम्बन गर्न पत्राचार वा परिपत्र गर्न मेरो/ हाम्रो मञ्जुरी छ
                    ।
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    संलग गनुर पने कागजात
                  </p>
                  <div>
                    <p>
                      धितोपत्र कारोवार गर्न ग्राहक परिचय विवरण भर्ने सम्बन्धमा
                      संचालक समितिको निर्णय ।
                    </p>
                    <p>
                      १. नेपाली नागरिकताको हकमा नागरिकता प्रमाणपत्रको प्रतिलिपि
                      ।
                    </p>
                    <p>२. अन्य देशको नागरिकको हकमा पासपोर्टको प्रतिलिपि ।</p>
                    <p>३. नाबालकको हकमा संरक्षक तथा नाबालक दुबैको फोटो ।</p>
                    <p>४. कानुनी संरक्षक भए सो सम्बन्धी कागजात ।</p>
                    <p>
                      ५. आमा वा बाबु संरक्षक भएमा छोरा वा छोरीको जन्मदर्ता
                      प्रमाण पत्रको प्रतिलिपि ।
                    </p>
                    <p>
                      ६. निवेदकको हस्ताक्षर तथा औठा छापमा संरक्षकको हस्ताक्षर
                      तथा औंठा छाप ।
                    </p>
                    <p>
                      ७. कुनै सस्थाको कर्मचारी रहेको हकमा परिचयपत्रको प्रतिलिपि
                      ।
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                <p>
                  माथि उल्लेखित विवरण सत्य तथ्य रहेको र सो विवरणमा कुनै फरक परे
                  कानून बमोजिम सहुँला, बुझाउँला।
                </p>
                <p>
                  I/We hereby acknowledge that the above disclosed details are
                  true. I/We further hereby consent to bear any legal actions in
                  case any false disclosure of information related to me/us.
                </p>
              </div>
            </div>
            <div className="row my-4 justify-content-between m-0 p-0">
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
                    <div
                      style={{ height: "180px", paddingTop: "12px" }}
                      // style={{ height: !extraInfo && "250px" }}
                    >
                      {" "}
                      <p>बायाँ (Left)</p>
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
                    <div style={{ height: "180px", paddingTop: "12px" }}>
                      {" "}
                      <p>दायाँ (Right)</p>
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
                className="row col-5 align-self-end 
               justify-content-end text-end"
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
          </section>
          <section className="container pb-2">
            {/* <!-- ! htmlFor office use only --> */}
            <div>
              <h2 className="text-center kyc-secondary-header mb-0">
                कार्यालयको प्रयोजनको लागि (For Official Use)
              </h2>

              <div className="border row m-0 p-0 pb-0">
                <div className="col-4 col-md-4">
                  <h3>रुजु गर्ने</h3>

                  <p>
                    नाम थर:
                    {/* {userData?.user?.verifiedBy} */}
                  </p>

                  <p>पद:</p>

                  <p>हस्ताक्षर:</p>

                  <p>
                    मिति:
                    {/* {userData?.user?.verifiedDate} */}
                  </p>
                </div>
                <div
                  className="col-4 col-md-4 center-y"
                  style={{ height: "15rem" }}
                >
                  <div className="office-stamp border center-xy">
                    <p style={{ marginBottom: "9rem" }}>
                      कार्यालयको नाम तथा छाप
                    </p>
                  </div>
                </div>
                <div className="col-4 col-md-4">
                  <h3>प्रमाणित गर्ने</h3>

                  <p>
                    नाम थर:
                    {/* {userData?.user?.approvedBy} */}
                  </p>

                  <p>पद:</p>

                  <p>हस्ताक्षर:</p>

                  <p>
                    मिति:
                    {/* {userData?.user?.approvedDate} */}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* {individualDetail?.isMinor && ( */}
          {/* {individualDetail?.isMinor && ( */}
          <section className="container pb-2">
            <div>
              <div className="kyc-secondary-header text-center">
                संरक्षकको विवरण (नाबालकको हकमा मात्र)
                <br /> Guardian's Details (In case of Minor only)
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
                <div>निवेदकसंगको सम्बन्ध (Relationship with applicant):</div>
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
                    Rural Municipality / Municipality / Sub Metropolitan city /
                    Metropolitan city:
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
                {/* {individualDetail.guardianFax
                  ? individualDetail.guardianFax
                  : ""} */}
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

            <div
              className="text-center"
              style={{ width: "fit-content", marginTop: "40px" }}
            >
              <div className="signature-holder"></div>
              <div>संरक्षकको हस्ताक्षर</div>
              <p className="text-capitalize">Guardian's signature</p>
            </div>
          </section>
          {/* )} */}

          {/* {beneficialOwner && ( */}
          <section className="container pb-2 avoid-page-break">
            <div className="text-center kyc-secondary-header mb-2">
              इच्छाएको व्यक्ति सम्बन्धि विवरण (Nominee's Details)
            </div>

            <p>
              मेरो मृत्यु भएको अवस्था वा नसकेको अवस्थामा व्यक्तिले मेरो नाममा
              भएको सम्पूर्ण धितोपत्रको हकदाबी गर्न पाउने छ।
            </p>

            <p>
              In the event of my death or incapcity, the following named nominee
              shall be entitled to the balance of my demat account
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
                {/* {beneficialOwnerName?.name?.toUpperCase()} */}
              </div>

              {/* <!-- relationship  --> */}
              <div className="col-12 col-md-6 border  center-y">
                <div>
                  <div>निवेदकसंगको सम्बन्ध (Relationship with applicant):</div>
                </div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {beneficialOwnerName?.relation} */}
              </div>

              {/* <!--  Correspondence Address --> */}
              <div className="col-12 col-md-6  center-y border">
                <div>
                  <div>पत्राचार ठेगाना( Correspondence Address:)</div>
                </div>
              </div>
              <div className="col-12 col-md-6 border center-y">
                {/* {beneficialOwnerName?.correspondenceAddress} */}
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
                {/* {beneficialOwnerName?.citizenShipNo} */}
              </div>
              <div className="col-12 col-md-6 border ">
                <div>
                  <div>जारी गर्ने स्थान (Place of Issue)</div>
                </div>
              </div>
              <div className="col-12 col-md-6 border  center-y">
                {/* {placeOfIssue} */}
              </div>

              {/* <!-- country --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>देश (Country)</div>
                </div>
              </div>

              <div className=" col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.country} */}
              </div>

              {/* <!-- Province --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>प्रदेश (Province)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.province} */}
              </div>

              {/* <!-- Disstrict --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>जिल्ला (District)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.district} */}
              </div>

              {/* <!-- District --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>गा.पा. / न.पा. / उ.म.न.पा / म.न.पा.:</div>

                  <div>
                    Rural Municipality / Municipality / Sub Metropolitan city /
                    Metropolitan city
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-xy">
                {/* {beneficialOwnerName?.municipality} */}
              </div>

              {/* <!-- age --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>उमेर (age)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.age} */}
              </div>

              {/* <!-- telephone no --> */}
              <div className="col-6 col-md-3 border ">
                <div>
                  <div>टेलिफोन नं. (Telephone No.) :</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.telephoneNo} */}
              </div>

              {/* <!-- fax no --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>फ्यास नं.( Fax No.) :</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.faxNo} */}
              </div>

              {/* <!-- mobile number --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>मोबाइल नं. (Mobile No.) :</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.mobileNo} */}
              </div>

              {/* <!-- pan number --> */}
              <div className="col-6 col-md-3 border center-y ">
                <div>
                  <div>स्थायी लेखा नं. (PAN No.)</div>
                </div>
              </div>

              <div className="col-6 col-md-3 border center-y">
                {/* {beneficialOwnerName?.panNo} */}
              </div>

              {/* <!-- email id --> */}
              <div className="col-6 col-md-3 border  center-y">
                <div>
                  <div>इमेल (E-mail ID):</div>
                </div>
              </div>

              <div className=" col-6 col-md-3 border center-y text-lowercase">
                {/* <div>{beneficialOwnerName?.email}</div> */}
              </div>
            </div>

            <div className="text-center" style={{ width: "fit-content" }}>
              <div
                className="row m-0 p-0"
                style={{
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                {/* {userData?.clientDocument?.signature && (
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
                <div className="signature-holder"></div>
                <p>उम्मेदवारको हस्ताक्षर (Signature)</p>
              </div>
            </div>
          </section>
          {/* )} */}
          {/* KYCAGGREMENT */}
          <section className="container fs10">
            {/* <!-- Header section --> */}
            <div>
              <p className="text-center">
                <b>
                  (धितोपत्र कारोबार सञ्चालन विनियमावली २०७५ को विनियम १० संग
                  सम्बन्धित )
                </b>
              </p>

              <p className="text-center">
                <b>(कारोवार सदस्य र ग्राहक बिचको सम्झौतापत्र )</b>
              </p>

              <p className="mx-3 text-start aggrement-content">
                कम्पनी रजिस्ट्रारको कार्यलयमा दर्ता भई नेपाल धितोपत्र बोर्डबाट
                धितोपत्र दलाल ब्यवसायीको इजाजत प्राप्त गरी नेपाल स्टक एक्सचेञ्ज
                लिमिटेडको कारोबार सदस्य रहेको स्थित कार्यालय रहेको{" "}
                {/* <b>{orgData && orgData?.address}</b> */}
                मा रजिस्टर्ड कार्यालय भएको
                {/* {orgData && " " + orgData?.name} */}
                (उप्रान्त प्रथम पक्ष भनिनेछ)
                {}
              </p>
              <p className="text-center">
                <b>तथा</b>
              </p>
              <p>
                प्रथम पक्ष मार्फत धितोपत्रको कारोबार गर्न / अनलाईन सुबिधा प्रयोग
                गर्ने ग्राहक संकेत नम्बर .................. हितग्राही खाता
                न&nbsp;
                {/* {user?.dematNo ? user?.dematNo : "..............."} रहेको प्रदेश{" "}
                {permanentAddressDetails?.[0]?.province
                  ? permanentAddressDetails?.[0]?.province
                  : "................"}{" "} */}
                {/* अञ्चल ......... */}
                जिल्ला{" "}
                {/* {permanentAddressDetails?.[0]?.district
                  ? permanentAddressDetails?.[0]?.district
                  : "....................."}{" "} */}
                गा।पार न।पार उ।प।न।पा{" "}
                {/* {permanentAddressDetails?.[0]?.municipality
                  ? permanentAddressDetails?.[0]?.municipality
                  : "...................."}{" "} */}
                वडा{" "}
                {/* {permanentAddressDetails?.[0]?.wordNo
                  ? permanentAddressDetails?.[0]?.wordNo
                  : "..................."}{" "} */}
                स्थायी ठेगाना भई हाल{" "}
                {/* {currentAddressDetails?.[0]?.tole
                  ? currentAddressDetails?.[0]?.tole
                  : "............."}{" "} */}
                स्थानमा बसोबास गर्ने श्री{" "}
                {/* {memberList?.["grandfather"]
                  ? memberList?.["grandfather"]
                  : "................."}{" "} */}
                को नाती/नातीनी बुहारी, श्री{" "}
                {/* {memberList?.["father"]
                  ? memberList?.["father"]
                  : ".................."}{" "} */}
                को छोरा / छोरी वर्ष&nbsp;
                {/* {individualDetail?.dob && currentAge()}&nbsp; को श्री{" "}
                {user?.name ? user?.name : "............."} <b>वा</b> ग्राहक */}
                संकेत नम्बर (युनिक क्लाईन्ट कोड)............................
                रहेको .......................... कार्यालयमा दर्ता भई रजिस्टर्ड
                कार्यालय .............................. मा भएको श्री
                .........................................................................
                ले (उप्रान्त दोस्रो पक्ष भनिने र सो शब्दले विषय वा प्रसंगले
                अन्यथा अर्थ लगाएकोमा बाहेक निजका उत्तराधिकारी र / वा कानुनी
                प्रतिनिधि समेत लाई जनाउने), बीच नेप्सेको कारोबार प्रणालीबाट
                कारोबार हुने विधि र आपैmले कारोबार गर्ने सम्बन्धमा दोस्रो पक्ष
                सँग आवश्यक ज्ञान रहेको मानी यो सम्झौता (उप्रान्त सम्झौता भनिने
                छ) सम्पन्न भएको छ ।
              </p>
              <br />
              <p>
                <b>
                  यस सम्झौताका पक्षहरु निम्नलिखित शर्तहरु पालना गर्न मञ्जुर छन्
                  ः
                </b>
              </p>
              <p>
                १. प्रचालित धितोपत्र ऐन, नियम, विनियम, कार्यविधि तथा नेपाल
                राष्ट्र बैंक, बिमा समिति, नेपाल धितोपत्र बार्डे, नेपाल स्टक
                एक्सचेन्ज लिमिटेड, सिडिएस एन्ड क्लियरिङ लिमिटेड लगायतका नियमक
                निकायले समय समयमा जारी गरेका निर्देशिका, परिपत्र र निर्देशन
                समेतलाई यसै सम्झौतामा उल्लेख भए सरह मानी सम्झौताका पक्षहरुले
                सोको पालना गर्न मञ्जुर गर्दछन् ।{" "}
              </p>
              <p>
                २. दोस्रो पक्षले यस सम्झौता गर्दाको वखत वा यस भन्दा अघि प्रथम
                पक्षलाई दिएको सूचना, दोस्रो पक्षको ग्राहक परिचय विवरण (केवाइसी)
                मा भरेको विवरणमा कुनै फेरवदल भए, फेरबदल भएको ७ कार्य दिनभित्र
                प्रथम पक्षलाई जानकारी दिई आफ्नो पहिचान तथा खाताका विवरणहरु
                अद्यावधिक गराउन मञ्जुर गर्दछ ।{" "}
              </p>
              <p>
                ३. दोस्रो पक्ष धितोपत्रको कारोबार गर्न कानून बमोजिम अयोग्य
                ठहरिने कनु ै अवस्था उत्पन्न भई कारवाहीमा परेमा, आर्थिक रुपमा टाट
                पल्टिएमा, विघटनमा गएमा, दामासाहीमा परेमा वा कर्जा सूचना
                केन्द्रको कालो सूचीमा परेमा वा अन्य कुनै कारणले कानूनत आर्थिक
                कारोवार गर्न असमर्थ भएमा प्रथम पक्षलाई तुरुन्त जानकारी दिन
                मञ्जुर गर्दछ ।
              </p>
              <p>
                ४. दोस्रो पक्षले यस सम्झौतामा उल्लेख गरेको वा ग्राहक परिचय विवरण
                (केवाइसी) मा उल्लेख भएको इमेल ठेगाना वा मोबाइल नम्बरमा दोस्रो
                पक्षले प्रयोग गर्ने युजरनेम तथा पासवर्ड प्रथम पक्षले उपलब्ध
                गराउने छ । प्रथम पक्षले उपलब्ध गराएको वा सो पश्चात दोस्रो पक्षले
                परिर्वतन गरेको युजरनेम वा पासवर्ड का ेगोपनियता कायम गर्ने र
                आफ्नो नियन्त्रणमा राख्ने दायित्व दोस्रो पक्षको हुनेछ ।
              </p>
              <p>
                ५. दोश्रो पक्षले बिक्री कारोवार गर्दा मौज्दातमा धितोपत्र रहेको
                वा रहने कुनै एक हीतग्राही खाता प्रथम पक्षलाई उपलब्ध गराउने छ । र
                उक्त खाता अन्य धितोपत्र कारोवार सदस्यलाइ दिने छैन । यदी एउटै
                खाता अन्य धितोपत्र कारोवार सदस्यलाई दिइ हुने जोखिको जिम्मेवारी
                दोश्रो पक्ष ले लिने छ ।
              </p>
              <p>
                ६. दोस्रो पक्षलाई दिइएको युजरनेमबाट भएगरेको सम्पूर्ण
                कारोबारहरुको दायित्व बहन गर्ने तथा सो को समयमा राफसाफ गर्ने
                जिम्मेवारी दोस्रो पक्षको हुनेछ ।
              </p>
              <p>
                ७. दोस्रो पक्षलाइ प्रदान गरीएको युजरनेमको प्रयोग गरी सिर्जना
                हुने दायित्व तथा सम्झौतारत पक्ष र नेप्से समेतको सम्पत्तिमा कुनै
                हानी नोक्सानी भएमा सो प्रति दोस्रो पक्ष जिम्मेवार हुनेछ ।
              </p>
              <p>
                ८. दोस्रो पक्षले आफ्ना ेयुजरनेम प्रयोग गरी वा प्रथम पक्षलाई आदेश
                दिई बिक्री भएका धितोपत्रहरुको निर्देशन पूर्जी जारी गर्नुपर्ने
                दायित्व दोस्रो पक्षको हुनेछ । यसरी बिक्री भएको धितोपत्रको
                हस्तान्तरण दोस्रो पक्षले टिं१ को १२ बजे भित्र प्रथम पक्षको
                राफसाफ खातामा जम्मा गर्न नसकी उक्त कारोवारको राफसाफ हुन नसकेमा
                सो बाट सिर्जित सम्पूर्ण दायित्व दोस्रो पक्षले वहन गर्नुपर्नेछ ।
              </p>
              <p>
                ९. दोस्रो पक्षले धितोपत्र बिक्री गरिसकेपछि सो धितोपत्रको आधार
                मूल्य प्रथम पक्षलाई राफसाफ समयको १ (एक) दिन पूर्व नै उपलब्ध
                गराउनु पर्नेछ । आधार मूल्य समयमा उपलव्ध नगराएमा, फर्जी वा गलत
                आधार मूल्यका कारण उत्पन्न हुने कानूनी तथा आर्थिक दायित्च वा हानी
                नोक्सानी दोस्रो पक्षले व्यहोर्नु पर्नेछ ।
              </p>
              <p>
                १०. दोस्रो पक्षले बिक्रि गरेको धितोपत्रको कारोबारमा लाग्ने कर,
                शुल्क, दस्तुर तथा अन्य प्रणालीगत शुल्कहरु तथा प्रथम पक्षले
                धितोपत्र खरीद बिक्री सम्वन्धमा थप सुविधा प्रदान गरेमा लाग्ने थप
                स्वीकृत दस्तुर कट्टा गरी बाँकी रकम मात्र प्रथम पक्षले दोस्रो
                पक्षलाई भुक्तानी गर्नेछ ।
              </p>
              <p>
                ११. दोस्रो पक्षले खरीद आदेश प्रणालीमा प्रविष्ट गर्दा प्रथम
                पक्षले तोकेको कारोबार लिमिटको सीमाभित्र रही गर्नु पर्नेछ ।
                दोस्रो पक्षले प्रथम पक्षलाई अग्रिम रुपमा बुझाएको रकमको ४ (चार)
                गुणा सम्म कारोबार लिमिट प्राप्त गर्न सक्नेछ । उक्त कारोबार सीमा
                दोस्रो पक्षले बुझाएको रकमको चार गुणा भन्दा बढी हनु ेछैन ।
              </p>
              <p>
                ११.१ दोस्रो पक्षले प्रथम पक्षलै अग्रिम रुपमा बुझाएको रकमको
                दोस्रो पक्षले खरिद गर्ने धितोपत्रबाट सिर्जना हुने कुल दायित्व
                रकममा समायोजन हुनेछ।
              </p>
              <p>
                ११.२ दोश्रो पक्षले धितोपत्रखरिद गरेवापत सिर्जना हुने कुल दायित्व
                रकममा प्रथमपक्षलाई अग्रिम रुपमा बुझाएको रकम तथा दोस्रो पक्षले
                धितोपत्र बिक्रो गरि प्रथमपक्षसंग भुक्तानी लिन बाकी भए सो समेत
                समायोजन गरि बाकी रहेको दायित्व रकम कारोबारको राफसाफ हुनु भन्दा
                पहिले प्रथमपक्षलाई दोस्रो पक्षले भुक्तानी गर्नुपर्नेछ।
              </p>
              <p>
                ११.३ दोस्रो पक्षले प्रथमपक्षलाई तिर्नु पर्ने रकम कारोबार राफसाफ
                हुनुपुर्व भुक्तानी गर्न नसकेमा दोस्रो पक्षको नाममा खरिद भएको
                धितोपत्र प्रथमपक्षले बिक्रि गर्न सक्नेछ। तर दोस्रो पक्षले
                प्रथमपक्षसंग रकम तिर्ने समय माग गरेमा प्रथमपक्षले आफ्नो अनुकुलता
                हेरी दोस्रो पक्षले खरिद गरेको धितोपत्रको रकम भुक्तानी गर्न
                निश्चित समय दिन सक्नेछ।
              </p>
              <p>
                ११.४ सर्त न ११.३ बमोजिम दोस्रो पक्षको कारोबार राफसाफ गर्न उपयोग
                भएको प्रथमपक्षको रकममा दोस्रो पक्षलाई दिएको थप निश्चित समयावधि
                सम्ममा दोस्रो पक्षले तिर्नुपर्ने बाकी रकम प्रथम पक्षलाई उपलब्ध
                नगराए सम्मको वा दोस्रो पक्षको धितोपत्र बिक्रि गरि प्रथम पक्षलाई
                रकम प्राप्त नभएसम्मको समयावधिमा प्रथ पक्षले व्यहोर्नु परेको
                वास्तविक लागत थप गरि हुन आउने दायित्व दोस्रो पक्षले प्रथम
                पक्षलाई भुक्तानी गर्नु पर्नेछ वा दोस्रो पक्षलाई प्रथम पक्षले
                दिनुपर्ने हिसाबमा कट्ट गर्न सक्नेछ।
              </p>
              <p>
                ११.५ दोस्रो पक्षले प्रथम पक्षलाई बुझाएको अग्रिम रकममा दोस्रो
                पक्षले खरिद गर्ने धितोपत्रको राफसाफ नभएसम्मको अवधिसम्म प्रथम
                पक्षको राफसाफ खातामा रहदा प्रथम पक्षले बैंकबाट प्राप्त गर्ने
                प्रतिफल ९खुद ब्याज० दोस्रो दोस्रो पक्षबता माग भए आएमा फिर्ता दिन
                सक्ने छ।
              </p>
              <p>
                ११.६ प्रथम पक्षले दोस्रो पक्षसंग लिनु पर्ने दायित्व रकमको लागत
                गणना तथा निर्धारण गर्दा प्रथम पक्षले बाणिज्य बैंकबाट ऋण लिदा
                आफुले तिर्नु पर्ने ब्याजदरमा सेवा सुल्क वापत बर्सिक ४ प्रतिशत
                बिन्दुले लागत थप गरि दायित्व निर्धारण गरिनेछ।
              </p>
              <p>
                ११.७ प्रथम पक्षले दोस्रो पक्षलाई धितोपत्र बिक्रि वापतको भुक्तानी
                दिनुपर्ने अवस्थामा कबु बाहिरको परिस्थिथि सिर्जना भै भुक्तानी
                रोकिन गएमा तत्कालिन समयमा वाणिज्य बैंकहरुले आफ्ना ग्राहकलाई बचत
                खातामा दिने ब्याज रकम थप गरि भुक्तानी रकम उपलब्द गराउने छ।
              </p>
              <p>
                १२. दोस्रो पक्षले कारोबार सीमाका लागि प्रथम पक्षलाई बुझाउने सबै
                किसिमका भुक्तानी चेक वा अन्य बिद्युतीय माध्यमबाट गर्नुपर्नेछ ।
              </p>
              <p>
                १३. दोस्रो पक्षले कारोबार प्रयोजनका लागि प्रथम पक्षलाई उपलब्ध
                गराएको रकम तथा धितोपत्र कारोवार राफसाफ प्रयोजनमा मात्र प्रयोग
                गर्नुपर्नेछ ।
              </p>
              <p>
                १४. दुवै पक्षको आपसी सहमतिमा दोस्रो पक्षले प्रथम पक्षलाई यस्तो
                कारोबार सीमाको लागि आवश्यक अग्रिम भुक्तानी बैंक ग्यारेन्टी तथा
                कारोवारयोग्य धितोपत्रहरुको माध्यमबाट पनि गर्न सक्ने छ । यस्तो
                धरौटी दोश्रो पक्षले आफनो दायीत्व समयमा भुक्तानी नगरेमा प्रथम
                पक्षले दोस्रो पक्षलाई जानकारी दिई नगदमा परिणत गर्न सक्ने छ ।
              </p>
              <p>
                १५. कारोबार सीमा गणना प्रयोजनको लागि कारोबारयोग्य धितोपत्रको
                मूल्यांकन बजार मूल्यको बढीमा ७० प्रतिशत सम्म गर्न सकिने छ ।
                धितोपत्र तथा धितोपत्र बजारमा हुने सम्भावित जोखिमलाई मध्यनजर गरी
                प्रथम पक्षले दोस्रो पक्षलाई उपलब्ध गराएको कारोबार सीमा दोस्रो
                पक्षलाई जानकारी गराई फेरबदल गर्न सक्नेछ ।
              </p>
              <p>
                १६. खरीद कारोबारपछि बाँकी रहेको रकम खरिद बिल बमोजिम दोस्रो
                पक्षले टिं १ भित्रमा प्रथम पक्षको खातामा जम्मा हुने गरी प्रथम
                पक्षलाई उपलब्ध गराउनु पर्नेछ । यसरी रकम उपलब्ध गराउदा अग्रिम
                भुक्तानी रकममा उपलब्ध गराएको भए सो रकम समायोजन गर्ने सुविधा
                दोस्रो पक्षलाई हुनेछ ।
              </p>
              <p>
                १७. खरिद कारोबार पश्चात दोस्रो पक्षले राफसाफ समय भित्रमा आफ्नो
                दायित्व पुरा नगरेमा टिं३ मा प्रथम पक्षले दोस्रो पक्षलाई जानकारी
                गराई दोस्रो पक्षकै नाममा खरिद गरिएको तथा जमानतमा लिइएको धितोपत्र
                बिक्री, वैक जमानतबाट रकम र सो को लागत बापतको सोधभर्ना र नपुग रकम
                कानून बमोजिम असुल उपर गरि लिन सक्नेछ ।
              </p>
              <p>
                १८. दोस्रो पक्षको धितोपत्र बिक्री गरि प्रथम पक्षको लेना रकम
                असुलउपर गरी रकम बाँकी रहेमा दोस्रो पक्षको अग्रिम भुक्तानी सम्मको
                रकम दोस्रो पक्षलाई फिर्ता गरी थप रकम बाँकि रहन गए धितोपत्र
                कारोबार सञ्चालन विनियमावली, २०७५ मा तोकिए बमोजिम हुनेछ ।
              </p>
              <p>
                १९. दोस्रो पक्षले खरीद गरेको धितोपत्र खरिदबाट सिर्जित दायित्वहरु
                पुरा गरेपछि वा कारोवारको राफसाफको दिन मध्ये जुन पछी हुन्छ सो को
                भोलिपल्ट ग्राहकको निक्षेप खातामा प्रथम पक्षले धितोपत्र
                हस्तान्तरण गर्नु पर्नेछ ।
              </p>
            </div>
          </section>
          <section className="container fs10">
            <div className="row">
              <p>
                २०. दोस्रो पक्षका ेनामवाट कारोवार भए पश्चात दोस्रो पक्षको मृत्यु
                भएमा, दामासाहीमा परेमा, मगज बिग्रिएमा वा अन्य कुनै कारणवाट
                दोस्रो पक्षको नामवाट भएका कारोवारको राफसाफ हुन नसक्ने स्थिति
                सिर्जना भएमा उक्त कारोबारको राफसाफको जिम्मेवारी निज वा निजको
                कानूनी उत्तराधिकारीको हुनेछ । कानुनी उत्तराधिकारीवाट पनि राफसाफ
                हुन नसकेमा प्रचलित कानून बमोजिम हुनेछ ।
              </p>
              <p>
                २१. नियमक निकायहरुबाट कारोबारहरु रद्द भएमा वा रद्द गर्ने आदेश
                प्राप्त भएमा सो कारोवारहरु स्वतः रद्द हुनेछन । सो का ेदायित्व
                प्रथम पक्षले बहन गर्ने छैन ।
              </p>
              <p>
                २२. दोस्रो पक्ष नावालक वा कानूनतः पक्षको रुपमा करार गर्न अयोग्य
                देखिएमा निजको संरक्षक वा प्रतिनिधिले यो सम्झौता गर्न सक्नेछ ।
              </p>
              <p>
                २३. प्रथम पक्षको काबु बाहिरको परिस्थितिको कारणबाट उत्पन्न हुने
                कुनै पनि दायित्वमा प्रथम पक्ष जिम्मेवार हुने छैन ।
              </p>
              <p>
                २४. दोस्रो पक्षले आफ्नो कारोवारको निम्ति आदेश दिन लिखित मञ्जुरी
                दिई प्रतिनिधि नियुक्ति गर्न सक्ने छ सो प्रतिनिधिवाट भएका
                सम्पूर्ण कारोबारहरु निज दोस्रो पक्षले नै गरेसरह मान्य हुनेछ ।
              </p>
              <p>
                २५. धितोपत्रमा गरीने लगानीमा जोखिम हुन्छ भन्ने कुरामा दोस्रो
                पक्ष जानकार रहेको मानिनेछ र सो जोखिमबाट सिर्जित हुने हानी
                नोक्सानी प्रति दोस्रो पक्षनै जिम्मेवार रहनेछ ।
              </p>
              <p>
                २६. दोस्रो पक्षले निम्न लिखित माध्यमवाट कारोबार आदेश दिन सक्ने छ
                :<br /> &emsp;&emsp;क. स्वयं उपस्थित भई लिखित आदेश
                ।&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                ख. टेलिफोन
                ........................................................
                <br />
                &emsp;&nbsp;&nbsp;&nbsp; ग. मोबाइलफोन{" "}
                ........................................................
                {/* {user?.phoneNo ? user?.phoneNo : "..................."} */}
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                घ. इमेल ........................................................
                {/*  {user?.email ? user?.email : ".................."} */}
                <br />
                &emsp;&nbsp;&nbsp; ङ. दोश्रो पक्ष्यको उजरनेम
                ....................................................
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
                च. प्रथम पक्षको वेभसाइट
                .........................................
                <br />
                &emsp;&nbsp;&nbsp; छ. अन्य बिद्युतीय माध्यम
                .........................................................
                <br />
                <br />
                प्रथम पक्षले उल्लिखित माध्यमबाट आएका आदेशहरुलाई मात्र वैधानिक
                मान्यता दिई प्राथमिकताका आधारमा कारोबार प्रणालीमा आदेश प्रविष्टी
                गर्नेछ । नियम अनुसार उक्त आदेशहरुको सुरक्षित रेकर्डिङ्ग तथा
                भण्डारण प्रथम पक्षले गर्न सक्नेछ ।
              </p>
              <p>
                २७. दोस्रो पक्षको मार्जिन कारोवार सुविधा उपयोग गर्ने भएमा सो
                सम्बन्धी सर्त तथा सुविधाहरु सम्बन्धित नियममा तोकिए बमोजिम हुनेछ
                ।
              </p>
              <p>
                २८. दोस्रो पक्षले धितोपत्र कारोवार गर्दा उक्त धितोपत्र कारोवार
                गर्न प्रचलित कानुन वमोजिम आफु योग्य रहेको र सो धितोपत्रमा आफुले
                कानून बमोजिम धारण गर्न सक्ने सीमा भित्र रहि खरीद आदेश प्रविष्ट
                गर्नु पर्ने छ । सो नगरेबाट सिर्जित परिणाम तथा दायित्व दोस्रो
                पक्षको हुनेछ ।
              </p>
              <p>
                २९. प्रचलित नीति नियममा उल्लेख भएअनुसार वा सम्बन्धित निकायहरुबाट
                धितोपत्रको कारोबारको श्रोतको जानकारी गराउन आवश्यक रहेमा उक्त
                जानकारी कारोबार राफसाफ समयाबधीभित्र प्रथम पक्षलाई बुझाउन
                दोस्रोपक्ष मञ्जुर गर्दछ । दोस्रो पक्षले प्रचलित कानुन बमोजिम
                अवैधानिक नठहरीने रकमहरु मात्र धितोपत्रमा लगानी गर्नुपर्ने छ ।
              </p>
              <p>
                ३०. पक्षहरुबिच आपसि सहमतीमा एक महिनाको अग्रिम सूचना दिई यो
                सम्झौता रद्द गर्न सकिनेछ । सम्झौता रद्द गर्नु पूर्व पक्षहरुले
                आ–आफ्नो दायित्व पुरा गरेको हुनु पर्नेछ ।
              </p>
              <p>
                ३१. प्रचलित कानून बमोजिम प्रथम पक्षले व्यवसाय सञ्चालनका लागि
                प्राप्त गरेको इजाजत, अनुमतिपत्र, सदस्यता खारेज भइ कारोबार गर्न
                अयोग्य भएमा यो सम्झौता स्वतः खारेज हुनेछ । यसरी सम्झौता खारेज भए
                पनि बाँकी बक्यौता फछ्र्यौट गर्नुपर्ने दायित्व दुवै पक्षको हुनेछ
                ।
              </p>
              <p>
                ३२. यस सम्झौताअनुसार प्रथम पक्षले दिने अथवा आवश्यक हुने कुनै पनि
                जनाउ वा सञ्चार तोकिएको माध्यमबाट दोस्रो पक्षको अद्यावधिक
                ठेगानामा पठाए पश्चात दोस्रो पक्षले जानकारी पाए सरह हनु ेछ ।
              </p>
              <p>
                ३३. सम्झौताका दुवै पक्षहरुले नेप्से अनलाइन कारोबार प्रणालीमा
                क्षति पु¥याउने कुनै पनि कार्य गर्ने छैनन् ।
              </p>
              <p>
                ३४. प्रथम पक्षले प्रचलित कानूनमा उल्लेख भएको अवस्थामा बाहेक
                दोस्रो पक्षको गोपनीयता कायम गर्नेछ ।
              </p>
              <p>
                ३५. पक्षहरुका बीचमा उत्पन्न हुनसक्ने विवाद तथा मतभिन्नताहरुको
                समाधान सकेसम्म आपसी सहमतिमा निराकरण गरिनेछ । आपसी सहमतीबाट
                समाधान गर्न नसकेमा धितोपत्र कारोबार सञ्चालन विनियमावली, २०७५ मा
                तोकिए बमोजिम बमोजिम हुनेछ ।
              </p>
              <p>
                ३६. दोस्रो पक्षले अनलाईन कारोबार सुविधा, एसएमएस सुबिधा लगायतका
                अन्य सुबिधा उपयोग गरे बापत तोकिएको शुल्क तिर्न मञ्जुर गर्दछ ।
                दोस्रो पक्षले उल्लिखित सुबिधाहरु प्राप्त गर्न हरेक आर्थिक बर्षमा
                नविकरण शुल्क तिर्नुपर्नेछ ।
              </p>
              <p>
                ३७. यो सम्झौतामा उल्लेख तथा व्याख्या नभएका विषय प्रचलित नेपाल
                कानूनद्वारा नियमन तथा व्याख्या हुनेछ ।
              </p>
              <p>
                ३८. कारोबार राफसाफ चक्र तथा अन्य नियम कानुन तथा निर्देशन
                परिवर्तन भएमा परिवर्तनको हद सम्म यस सम्झौतामा लेखिएका शर्तहरु
                स्वतस् परिवर्तन हुनेछ।
              </p>
              <p>
                ३९. यो सम्झौता दुवै पक्षले हस्ताक्षर गरेको मितिबाट
                .............................. सम्म कायम रहने छ र दुवै पक्षको
                सहमतीबाट सम्झौता पुनः नविकरण हुन सक्नेछ ।
              </p>
              <p>
                ४०. यो सम्झौता राम्ररी पढी, बुझी दुवै पक्ष हस्ताक्षर गर्न मञ्जुर
                गर्दछौं ।
              </p>
              <div className="col-6 ">
                <h4 className="aggrement-header">सम्झौताका प्रथम पक्ष </h4>
                <p></p>
                {/* <p>व्यक्तिको नाम: {"  " + orgData && orgData?.name}</p> */}
                <p>दस्तखत: </p>
                <p>कम्पनीको छाप : </p>
              </div>
              <div className="col-6 ">
                <h4 className="aggrement-header">
                  सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार प्राप्त){" "}
                </h4>
                {/* <p>व्यक्तिको नाम: {userData?.user?.name}</p> */}
                <p>दस्तखत: </p>
                <p>कम्पनीको छाप : </p>
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
                        <div style={{ height: "200px" }}>
                          {" "}
                          <p>दायाँ (right)</p>
                          {/* {userData?.clientDocument?.rightThumb &&
                            extraInfo && (
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
                      <div className="col-6 center-xy border">
                        <div style={{ height: "200px" }}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2">
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
              ईति सम्बत
              {/* {userData?.user?.approvedDate &&
                "  " + ADToBS(userData?.user?.approvedDate).split("-")[0] + " "}
              साल{" "}
              {userData?.user?.approvedDate &&
                "  " +
                  ADToBS(userData?.user?.approvedDate).split("-")[1] +
                  " "}{" "}
              महिना{" "}
              {userData?.user?.approvedDate &&
                "  " +
                  ADToBS(userData?.user?.approvedDate).split("-")[2] +
                  " "}{" "} */}
              गते रोज .................................शुभम्{" "}
            </div>
          </section>
          {/* ONLINE TRADING AGREEEMENT */}
          <section className="container" style={{ fontSize: "14px" }}>
            {/* <TradingArg
              userData={userData}
              orgData={orgData}
              extraInfo={extraInfo}
            /> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndividualTmsKyc;
