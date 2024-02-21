import React from 'react';

const CorporateDpkyc = () => {
  return (
    <div className="container">
    <div className="bg-white text-dark p-md-3">
      <div className="d-flex justify-content-end mb-2">
        {/* <SaveAsPdf componentRef={componentRef} title={"KYC"} margin={5} /> */}
        {/* <NewKycCorporate userData={userData} imageURL={mapImage} /> */}
        {/* <ReactToPrint
          trigger={() => (
            <ActionIcon>
              <IconPrinter />
            </ActionIcon>
          )}
          content={() => componentRef.current}
          documentTitle="download.pdf"
          copyStyles
        /> */}
      </div>
      <div id="pdf" ref={componentRef}>
        <div size="A4" className="page">
          <div className="display-flex">
            <span className="heading-1">अनुसूची १२</span>
            <span className="heading-5">(विनियम २० सँग सम्बन्धित)</span>
            <span className="heading-3">
              {/* {userData?.user?.nature === "DP"
                ? "प्राकृतिक व्यक्ति बाहेक अन्य संस्थाको हितग्राही खाता खोल्ने निवेदन"
                : "कम्पनी वा संस्थाको परिचय विवरण"} */}
            </span>
            <span className="heading-3">
              {/* {userData?.user?.nature === "DP"
                ? "ACCOUNT OPENING FORM FOR CORPORATE BENEFICIAL OWNER"
                : "DETAILS OF COMPANY OF INSTITUTION"} */}
            </span>
          </div>

          <div className="">
            <div className="text-center kyc-secondary-header text-capitalize mr-1">
              <h5>कार्यालय प्रयोजनका लागि मात्र (For official use only)</h5>
            </div>

            <div className="row p-0 m-0">
              <div className="col-4 border">
                <span className="title">आवेदन नं.: (App No.):</span>
                <span className="input-semi">
                  {/* {userData?.user?.submissionNo} */}
                </span>
              </div>

              <div className="col-4 border">
                <span className="title">संकेत नम्बर ( Ref Number):</span>
                <span className="input-semi"></span>
              </div>
              <div className="col-4 border">
                <span className="title">मिति (Date): </span>
                {/* {ADToBS(currentDate.toLocaleDateString())} */}
              </div>
            </div>
            {userData?.user?.nature === "TMS" && (
              <div className="row p-0 m-0">
                <div className="col-6 border center-y">
                  <span className="title">
                    कम्पनी वा संस्थाको हितग्राही खाता नं. (Company's BOID
                    No.):
                  </span>
                </div>
                <div className="col-6 border center-y p-2">
                  <span className="input-semi">
                    {/* {userData?.user?.boid && userData?.user?.boid} */}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="message">
            <p
              className="my-2 mt-4"
              style={{ fontSize: "17px", fontWeight: "600" }}
            >
              तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ | आफुसंग
              सरोकार नभएको विवरण उल्लेख गर्ने कोठामा तेस्रो धर्को तानिदिनु
              होला |
            </p>
            <p
              className="mb-4"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Please complete all details and strike out the non-applicable
              fields/boxes.
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
            <div className="container">
              <div className="row">
                <div className="col-2 col-md-2 col-lg-2 center-y p-2">
                  <div>
                    <div>खाताको किसिम :</div>
                    <div className="text-inline">Types of Account:</div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-4 d-flex">
                      {/* {corporateDetails?.corporateAccountType === "CLR" ? (
                        <input
                          type="checkbox"
                          readOnly
                          htmlFor="typeOfAccount"
                          checked={true}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          readOnly
                          htmlFor="typeOfAccount"
                          disabled
                        />
                      )} */}
                      <div className="m-2">
                        <div>राफसाफ</div>
                        <div>Clearing</div>
                      </div>
                    </div>
                    {/* <div className="col-4 d-flex">
                      {corporateDetails?.corporateAccountType === "BNO" ? (
                        <input
                          type="checkbox"
                          readOnly
                          htmlFor="typeOfAccount"
                          checked={true}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          readOnly
                          htmlFor="typeOfAccount"
                          disabled
                        />
                      )}
                      <div className="m-2">
                        <div>हितग्राही</div>
                        <div>Beneficial Owner</div>
                      </div>
                    </div> */}
                    <div className="col-4 d-flex">
                      {/* {corporateDetails?.corporateAccountType === "OTR" ? (
                        <input
                          type="checkbox"
                          readOnly
                          htmlFor="typeOfAccount"
                          checked={true}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          readOnly
                          htmlFor="typeOfAccount"
                          disabled
                        />
                      )} */}
                      <div className="m-2">
                        <div>अन्य</div>
                        <div>Others</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Company Details */}
          <div className="table-container">
            <table className="kyc-table">
              <thead>
                <tr>
                  <th
                    className="text-center kyc-secondary-header"
                    colSpan={4}
                  >
                    ग्राहकको विवरण (Client Details)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    हितग्राही कम्पनीको नाम (Name of Beneficial Owner Company)
                  </td>
                  <td colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.companyName?.toUpperCase()}{" "} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    पहिलो आधिकारीक प्रतिनिधिको नाम (Name of First Authorized
                    Person)
                  </td>
                  <td colSpan={2}>
                    <p className="input-full text-start">
                      {/* {userData?.corporateBodDetails?.fcpName} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    दोश्रो आधिकारीक प्रतिनिधिको नाम (Name of Second Authorized
                    Person)
                  </td>
                  <td colSpan={2}>
                    <p className="input-full text-start">
                      {/* {userData?.corporateBodDetails?.scpName} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    तेस्रो आधिकारीक प्रतिनिधिको नाम (Name of Third Authorized
                    Person)
                  </td>
                  <td colSpan={2}>
                    <p className="input-full text-start">
                      {/* {userData?.corporateBodDetails?.trdName} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    प्रमुख आधिकारीक प्रतिनिधिको नाम(Chief Operating
                    Officer&apos;s Name)
                  </td>
                  <td colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.companyCeoName?.toUpperCase()} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    कम्पनी सचिवको नाम (Company Secretary&apos;s Name)
                  </td>
                  <td>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.companySecretaryName?.toUpperCase()} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" width="30%" colSpan={2}>
                    कम्पनी स्थापना मिति (Date of Incorporation)
                  </td>
                  <td className="text-start">
                    बि. सं.( B.S.):
                    <span>
                      {/* {userData?.corporateDetails?.incorporationDate &&
                        corporateDetails?.incorporationDate} */}
                    </span>
                  </td>
                  <td className="text-start">
                    इ. सं.( A.D.):
                    <span>
                      {/* {dateConverter(
                        corporateDetails?.incorporationDate,
                        "BS_AD"
                      )} */}
                    </span>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={1}>
                    कम्पनीको किसिम (Types of Company)
                  </td>
                  <td className="text-start" colSpan={3}>
                    <span className="td-span">
                      प्राइभेट लि. <br /> (Pvt. Ltd.)
                      <input
                        type="checkbox"
                        name="companyType"
                        // checked={corporateDetails?.companyType === "PVT"}
                        readOnly
                      />
                    </span>

                    <span className="td-span">
                      पब्लिक लि. <br /> (Public Ltd.)
                      <input
                        type="checkbox"
                        name="companyType"
                        // checked={corporateDetails?.companyType === "PUB"}
                        readOnly
                      />
                    </span>

                    <span className="td-span">
                      सरकारी स्वामित्व भएको <br /> (Govt. Owned)
                      <input
                        type="checkbox"
                        name="companyType"
                        // checked={corporateDetails?.companyType === "GOV"}
                        readOnly
                      />
                    </span>

                    <span className="td-span">
                      अन्य <br />( Others)
                      <input
                        type="checkbox"
                        name="companyType"
                        // checked={corporateDetails?.companyType === "OTHER"}
                        readOnly
                      />
                    </span>
                  </td>
                </tr>

                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    कम्पनी दर्ता भएको देश (Country of Registration)
                  </td>
                  <td colSpan="2" className="text-start">
                    <span className="td-span">
                      नेपाल
                      <br /> Nepal
                      <input
                        type="checkbox"
                        name="registrationPlace"
                        // checked={corporateDetails?.countryReg === "Nepal"}
                        readOnly
                      ></input>
                    </span>

                    <span className="td-span">
                      अन्य (नेपाल बाहेक अन्य देश भएमा उल्लेख गर्ने) <br />
                      Others(Please mention if other than Nepal)
                      <span className="input-semi-dotted">
                        {/* {corporateDetails?.countryReg !== "Nepal"
                          ? corporateDetails?.countryReg
                          : ""} */}
                      </span>
                      <input
                        type="checkbox"
                        name="registrationPlace"
                        // checked={corporateDetails?.countryReg !== "Nepal"}
                        readOnly
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="footer-p text-start mt-2">
              बोर्ड संचालक समितिको मिति २०७४|११|२१ को निर्णय बमोजिम संशोधन
              गरिएको |
            </p>
          </div>
          <div className="table-container">
            <table className="kyc-table">
              <thead>
                <tr>
                  <th
                    className="text-center kyc-secondary-header"
                    colSpan={4}
                  >
                    कम्पनीको थप विवरण (Details of Company)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    दर्ता गर्ने कार्यालय (Registration Office)
                  </td>
                  <td colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.registrationOffice?.toUpperCase()} */}
                    </p>
                  </td>
                </tr>

                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    दर्ता नं. ( Registration No.)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.registrationNo} */}
                    </p>
                  </td>{" "}
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    दर्ता मिति. (Registration Date.)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.registrationDate} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    स्थायी लेखा नं. (PAN No.)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.panNo} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    मूल्य अभिबृद्धि कर दर्ता नं. (VAT Registration No)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.vatRegistration &&
                        corporateDetails?.vatRegistration} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    सहायक कम्पनी भएमा मुख्य कम्पनीको नाम र ठेगाना ( Name and
                    Address of Main Company in case of Subsidiary Company
                    Office)
                  </td>
                  <td colSpan="2">
                    <p className="input-full text-start">
                      {/* {corporateDetails?.isSubsidiary === true
                        ? corporateDetails?.mainCompanyName
                        : ""} */}
                    </p>
                    {" , "}
                    <p className="input-full text-start">
                      {/* {corporateDetails?.isSubsidiary === true
                        ? userData?.corporateDetails?.address
                        : ""} */}
                    </p>
                  </td>
                </tr>

                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    कम्पनीको व्‍यवसायको किसिम (Types of business of the
                    company)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.businessType &&
                      corporateDetails?.businessType === "MANU"
                        ? "Manufacturing"
                        : corporateDetails?.businessType === "SEV"
                        ? "Service Oriented"
                        : ""}{" "} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    कार्य क्षेत्र (Area of Work)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.workArea} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    धितोपत्र बजारमा सूचीकरण भए / नभएको (Listed Yes/No)
                  </td>

                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.isListed ? "Yes" : "No"} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    सूचीकरण मिति (SEBON Registration Date)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.listingDate} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    नेपाल राष्ट्र बैंकमा दर्ता भएको भए दर्ता नं. (NRB
                    Registration No.)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.nrbRegistration &&
                        corporateDetails?.nrbRegistration}{" "} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start" colSpan={2}>
                    नेपाल राष्ट्र बैंकको स्वीकृत मिति. (NRB Approval Date.)
                  </td>
                  <td className="kyc-td" colSpan={2}>
                    <p className="input-full text-start">
                      {/* {corporateDetails?.nrbApproval &&
                        corporateDetails?.nrbApproval}{" "} */}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div size="A4" className="page">
          <div>
            {/* Company current Address */}
            <div className="text-center">
              <table className="kyc-table">
                <thead>
                  <tr>
                    <th
                      className="text-center kyc-secondary-header"
                      colSpan={6}
                    >
                      कम्पनीको हालको ठेगाना (Current Address of Company)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="kyc-tr">
                    <td className="kyc-td text-start" colSpan="1">
                      देश (Country) :
                    </td>
                    <td colSpan="2">
                      <p className="text-start">{" NEPAL"}</p>
                    </td>

                    <td className="kyc-td text-start" colSpan="1">
                      प्रदेश (Province) :
                    </td>
                    <td colSpan="2">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.province
                          : userData.addressDetails?.[0]?.province} */}
                      </p>
                    </td>
                  </tr>

                  <tr className="kyc-tr">
                    <td className="kyc-td text-start" colSpan="2">
                      जिल्ला (District) :
                    </td>
                    <td colSpan="4">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.district
                          : userData.addressDetails?.[0]?.district} */}
                      </p>
                    </td>
                  </tr>
                  <tr className="kyc-tr">
                    <td colSpan="3" className="text-start">
                      गा.पा./न.पा./उ.म.न.पा/म.न.पा (Rural Municipality /
                      MunicipalitySub Metropolitan city / Metropolitan city) :
                    </td>
                    <td className="kyc-td" colSpan="1">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.municipality
                          : userData.addressDetails?.[0]?.municipality} */}
                      </p>
                    </td>
                    <td colSpan="1" className="text-start kyc-td">
                      टोल (Tole) :
                    </td>
                    <td colSpan="1">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.tole
                          : userData.addressDetails?.[0]?.tole} */}
                      </p>
                    </td>
                  </tr>

                  <tr className="kyc-tr">
                    <td className="kyc-td text-start">
                      टेलिफोन नं. (Tel No.) :
                    </td>
                    <td className="kyc-td">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.telephoneNo
                          : userData.addressDetails?.[0]?.telephoneNo} */}
                      </p>
                    </td>
                    <td className="kyc-td text-start">वडा नं. (Ward No.):</td>
                    <td className="kyc-td">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.wordNo
                          : userData.addressDetails?.[0]?.wordNo} */}
                      </p>
                    </td>
                    <td className="kyc-td text-start">
                      ब्लक नं. (Block No.) :
                    </td>
                    <td className="kyc-td">
                      <p className="text-start"></p>
                    </td>
                  </tr>

                  <tr className="kyc-tr">
                    <td className="kyc-td text-start">इमेल (Email) :</td>
                    <td colSpan="2">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.email
                          : userData.addressDetails?.[0]?.email} */}
                      </p>
                    </td>
                    <td className="kyc-td text-start">वेबसाइट (Website) :</td>
                    <td colSpan="2">
                      <p className="text-start">
                        {/* {userData.addressDetails?.[0]
                          ?.perAndCurAddressSame === false
                          ? currentAddressDetails?.[0]?.website
                          : userData.addressDetails?.[0]?.website} */}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Map values in this section wit lat and long */}
          <section className="container" key={currentAddressDetails}>
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
                <div className="col-6 text-capitalize">
                  longitude :{" "}
                  {/* {currentAddressDetails &&
                  currentAddressDetails[0]?.longitude
                    ? currentAddressDetails[0]?.longitude
                    : 0} */}
                </div>
              </div>
            </div>
          </section>
          {/* Permanent Address */}
          <div className="" style={{margin:"0 !important", textAlign:"center"}}>
            <table className="kyc-table">
              <thead>
                <tr>
                  <th
                    className="text-center kyc-secondary-header"
                    colSpan={6}
                  >
                    कम्पनी दर्ता हुँदाको ठेगाना ( Permanent Address of
                    Company)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="kyc-tr">
                  <td className="kyc-td text-start">देश (Country) :</td>
                  <td colSpan="2">
                    <p className="text-start">{" NEPAL"}</p>
                  </td>

                  <td className="kyc-td text-start">प्रदेश (Province) :</td>
                  <td colSpan="2">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0].province
                        : userData.addressDetails?.[0]?.province} */}
                    </p>
                  </td>
                </tr>

                <tr className="kyc-tr">
                  <td className="kyc-td text-start">जिल्ला (District) :</td>
                  <td colSpan="2">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0].district
                        : userData.addressDetails?.[0]?.district} */}
                    </p>
                  </td>
                </tr>
                <tr className="kyc-tr">
                  <td colSpan="2" className="text-start">
                    गा.पा./न.पा./उ.म.न.पा/म.न.पा (Rural Municipality /
                    Municipality Sub Metropolitan city / Metropolitan city) :
                  </td>
                  <td className="kyc-td">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0].municipality
                        : userData.addressDetails?.[0]?.municipality} */}
                    </p>
                  </td>
                  <td colSpan="1" className="text-start kyc-td">
                    टोल (Tole) :
                  </td>
                  <td>
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0].tole
                        : userData.addressDetails?.[0]?.tole} */}
                    </p>
                  </td>
                </tr>

                <tr className="kyc-tr">
                  <td className="kyc-td text-start">
                    टेलिफोन नं. (Tel No.) :
                  </td>
                  <td className="kyc-td">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0].telephoneNo
                        : userData.addressDetails?.[0]?.telephoneNo} */}
                    </p>
                  </td>
                  <td className="kyc-td text-start">वडा नं. (Ward No).:</td>
                  <td className="kyc-td">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0]?.wordNo
                        : userData.addressDetails?.[0]?.wordNo} */}
                    </p>
                  </td>
                  <td className="kyc-td text-start">
                    ब्लक नं. (Block No.) :
                  </td>
                  <td className="kyc-td">
                    <p className="text-start"></p>
                  </td>
                </tr>

                <tr className="kyc-tr">
                  <td className="kyc-td text-start">इमेल (Email) :</td>
                  <td colSpan="2">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0]?.email
                        : userData.addressDetails?.[0]?.email} */}
                    </p>
                  </td>
                  <td className="kyc-td text-start">वेबसाइट ( Website) :</td>
                  <td colSpan="2">
                    <p className="text-start">
                      {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                      false
                        ? permanentAddressDetails?.[0]?.website
                        : userData.addressDetails?.[0]?.website} */}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=""  style={{margin:"0 !important", textAlign:"center"}}>
            <table className="kyc-table m-0">
              <thead>
                <tr>
                  <th
                    className="text-center kyc-secondary-header"
                    colSpan={7}
                  >
                    शाखा/कार्यालय संख्या र मुख्य शाखा / कार्यालयहरु रहेको
                    स्थान
                    <br /> (Branch/Number of Office and Main Branches/Office
                    Location)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-200">
                  <th className="kyc-th">
                    {" "}
                    क्र.सं.
                    <br /> S.N.
                  </th>
                  <th className="kyc-th">
                    क्षेत्र
                    <br />
                    Area
                  </th>
                  <th className="kyc-th">
                    मुख्य शाखा /कार्यालय
                    <br />
                    Main Branch/Office
                  </th>
                  <th className="kyc-th">
                    ठेगाना <br />
                    Address
                  </th>
                  <th className="kyc-th">
                    टेलिफोन नं.
                    <br />
                    Telephone No
                  </th>
                  <th className="kyc-th">
                    मोबाईल नं. <br />
                    Mobile No.
                  </th>
                  <th className="kyc-th">
                    सम्पर्क व्यक्ति <br />
                    Contact Person
                  </th>
                </tr>
                {userData?.branchDetails?.length > 0 ? (
                  <>
                    {" "}
                    {userData?.branchDetails?.map((d, index) => {
                      return (
                        <tr key={d.id}>
                          <td className="kyc-tr" height="30px">
                            {index + 1}
                          </td>
                          <td className="kyc-tr">{d?.area}</td>
                          <td className="kyc-tr">{d.mainBranch}</td>
                          <td className="kyc-tr">{d.address}</td>
                          <td className="kyc-tr">{d.telephoneNo}</td>
                          <td className="kyc-tr">{d.mobileNo}</td>
                          <td className="kyc-tr">{d.contactPerson}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <tr>
                    <td className="kyc-tr" height="30px"></td>
                    <td className="kyc-tr"></td>
                    <td className="kyc-tr"></td>
                    <td className="kyc-tr"></td>
                    <td className="kyc-tr"></td>
                    <td className="kyc-tr"></td>
                    <td className="kyc-tr"></td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="table-container">
              <table className="kyc-table">
                <thead>
                  <tr>
                    <th
                      className="text-center kyc-secondary-header"
                      colSpan={4}
                    >
                      बैंक खाताको विवरण
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="kyc-tr">
                    <td className="kyc-td text-start" colSpan={2}>
                      बैंक खाताको प्रकार ( Types of Bank Account )
                    </td>
                    <td className="kyc-td " colSpan={2}>
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-row">
                          <input
                            type="checkbox"
                            name="accountType"
                            checked={
                              userData.bankDetails?.accountType === "S"
                            }
                            readOnly
                          />
                          <div className="m-2">बचत खाता (Saving Account)</div>
                        </div>
                        <div className="d-flex flex-row">
                          <input
                            type="checkbox"
                            name="accountType"
                            checked={
                              userData.bankDetails?.accountType === "C"
                            }
                            readOnly
                          />
                          <div className="m-2">
                            चल्ती खाता (Current Account)
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="kyc-tr">
                    <td className="kyc-td text-start" colSpan={2}>
                      {""}
                      बैंक खाता नम्बर (Bank Account Number)
                    </td>
                    <td className="kyc-td" colSpan={2}>
                      <p className="input-full text-start">
                        {userData.bankDetails?.accountNumber}
                      </p>
                    </td>
                  </tr>

                  <tr className="kyc-tr">
                    <td className="kyc-td text-start" colSpan={2}>
                      बैंक खाता भएको बैंकको नाम र ठेगाना ( Name and Address of
                      Bank)
                    </td>
                    <td className="kyc-td" colSpan={2}>
                      <p className="text-start">
                        {
                          bankList?.data?.find(
                            (d) => d.value === userData.bankDetails?.bankName
                          )?.label
                        }
                        {","}
                        {userData.bankDetails?.branchAddress}
                      </p>
                    </td>
                  </tr>

                  {userData?.user?.nature === "DP" && (
                    <>
                      <tr className="kyc-tr">
                        <td className="kyc-td text-start" colSpan={2}>
                          निक्षेप सदस्यले हितग्राहिको खातामा भएको घटबढ
                          स्वचालित रुपमा गराउने/नगराउने (Standing Instruction
                          for the automatic transactions)
                        </td>
                        <td
                          colSpan={2}
                          className="d-flex"
                          style={{ justifyContent: "" }}
                        >
                          <div className="d-flex mx-2">
                            <input
                              type="radio"
                              readOnly
                              htmlFor="typeOfAccount"
                              checked={
                                userData?.boStatement
                                  ?.isStandingInstructionForAutomaticTxn
                              }
                            />
                            <div className=" mx-2">
                              {" "}
                              <div>गराउने (Yes)</div>
                            </div>
                          </div>
                          <div className="d-flex mx-5">
                            <input
                              type="radio"
                              readOnly
                              htmlFor="typeOfAccount"
                              checked={
                                !userData?.boStatement
                                  ?.isStandingInstructionForAutomaticTxn
                              }
                            />
                            <div className=" ">
                              {" "}
                              <div>नगराउने (No)</div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="kyc-tr">
                        <td className="kyc-td text-start" colSpan={2}>
                          खाताको विवरण प्राप्त गर्ने (Account Statement)
                        </td>
                        <td colSpan={2} className="center-y">
                          {" "}
                          <div className="d-flex">
                            <input
                              type="radio"
                              readOnly
                              htmlFor="typeOfAccount"
                              checked={
                                userData?.boStatement
                                  ?.accountStatementPeriod === "DAILY"
                              }
                            />
                            <div style={{ width: "6rem" }}>
                              दैनिक <br /> (Daily)
                            </div>
                          </div>
                          <div className="d-flex">
                            <input
                              type="radio"
                              readOnly
                              htmlFor="typeOfAccount"
                              checked={
                                userData?.boStatement
                                  ?.accountStatementPeriod === "WEEKLY"
                              }
                            />
                            <div className="m-2">
                              {" "}
                              <div style={{ width: "6rem" }}>
                                साप्ताहिक <br />
                                (Weekly)
                              </div>
                            </div>
                          </div>
                          <div className="d-flex">
                            <input
                              type="radio"
                              readOnly
                              htmlFor="typeOfAccount"
                              checked={
                                userData?.boStatement
                                  ?.accountStatementPeriod === "15DAYS"
                              }
                            />
                            <div className="m-2">
                              {" "}
                              <div style={{ width: "6rem" }}>
                                पाक्षिक <br /> (15 days)
                              </div>
                            </div>
                          </div>
                          <div className="d-flex">
                            <input
                              type="radio"
                              readOnly
                              htmlFor="typeOfAccount"
                              checked={
                                userData?.boStatement
                                  ?.accountStatementPeriod === "MONTHLY"
                              }
                            />
                            <div className="m-2">
                              {" "}
                              <div>
                                मासिक
                                <br />
                                (Monthly)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div size="A4" className="page">
          <div className="h-4">
            (तीनवटा भन्दा बढी भएका छुट्टै विवरण पेश गर्न सकिने छ / Separate
            details can be submitted in case of more than three.)
          </div>
          <div className="table-container-CEO ceoCOntant">
            <table className="kyc-table">
              <thead>
                <tr>
                  <th
                    className="text-center kyc-secondary-header"
                    colSpan={12}
                  >
                    संचालक, कार्यालय प्रमुख र खाता संचालकहरुको विवरण <br />{" "}
                    (Details of Directors,CEO, and Authorised Account
                    Operators)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-200">
                  <th className="kyc-th">
                    {" "}
                    क्र.सं.
                    <br /> S.N.
                  </th>
                  <th className="kyc-th">
                    नाम/थर
                    <br />
                    Name/ Surname
                  </th>
                  <th className="kyc-th">
                    पद
                    <br />
                    Designation
                  </th>
                  <th className="kyc-th">
                    पति/पत्नीको नाम
                    <br />
                    Spouse&apos;s Name
                  </th>
                  <th className="kyc-th">
                    बुवाको नाम
                    <br />
                    Father&apos;s Name
                  </th>
                  <th className="kyc-th">
                    बाजेको नाम
                    <br />
                    Grandfather&apos;s Name
                  </th>
                  <th className="kyc-th">
                    स्थायी ठेगाना
                    <br />
                    Permanent Address
                  </th>
                  <th className="kyc-th">
                    हालको ठेगाना
                    <br />
                    Current Address
                  </th>
                  <th className="kyc-th">
                    टेलिफोन नं.
                    <br />
                    Tel No.
                  </th>
                  <th className="kyc-th">
                    मोबाइल नं.
                    <br />
                    Mobile No
                  </th>
                  <th className="kyc-th">
                    इमेल
                    <br />
                    Email
                  </th>
                  <th className="kyc-th">
                    प्यान नं.
                    <br />
                    PAN
                  </th>
                </tr>
                {userData?.corporateBodDetails ? (
                  <>
                    {" "}
                    {userData?.corporateBodDetails?.detail?.map(
                      (bod, index) => {
                        return (
                          <tr className="h-50" key={index}>
                            <td className="kyc-td">{index + 1}.</td>
                            <td className="kyc-td">
                              <span>
                                {bod?.firstName} {bod?.lastName}
                              </span>
                            </td>
                            <td className="kyc-td ">
                              {bod.designation?.toUpperCase()}
                            </td>
                            <td className="kyc-td">{bod?.spouseName}</td>
                            <td className="kyc-td">{bod?.fatherName}</td>
                            <td className="kyc-td">{bod?.grandFather}</td>
                            <td className="kyc-td">
                              {" "}
                              {bod?.permanentAddress}
                            </td>
                            <td className="kyc-td"> {bod?.currentAddress}</td>
                            <td className="kyc-td">{bod?.telephoneNo}</td>
                            <td className="kyc-td">{bod?.mobileNo}</td>
                            <td className="kyc-td">{bod?.email}</td>
                            <td className="kyc-td">{bod?.panNo}</td>
                          </tr>
                        );
                      }
                    )}
                  </>
                ) : (
                  <tr className="h-50">
                    <td className="kyc-td" height={"30px"}></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td "></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"> </td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"></td>
                    <td className="kyc-td"></td>
                  </tr>
                )}
              </tbody>
            </table>
            <table className="kyc-table">
              <tbody>
                <tr className="kyc-tr">
                  <th className="kyc-th"></th>
                  <th className="kyc-th">
                    पहिलो आधिकारीक व्यक्ति <br /> First Authorizes Person
                  </th>
                  <th className="kyc-th">
                    दोश्रो आधिकारीक व्यक्ति <br /> Second Authorizes Person
                  </th>
                  <th className="kyc-th">
                    तेस्रो आधिकारीक व्यक्ति <br /> Third Authorizes Person
                  </th>
                </tr>
                <tr>
                  <td className="kyc-td text-start">नाम /Name</td>
                  <td className="kyc-td text-start">
                    {userData?.corporateBodDetails?.fcpName}
                  </td>
                  <td className="kyc-td text-start">
                    {userData?.corporateBodDetails?.scpName}
                  </td>
                  <td className="kyc-td text-start">
                    {userData?.corporateBodDetails?.trdName}
                  </td>
                </tr>
                <tr>
                  <td className="kyc-td text-start">पद /Designation</td>
                  <td className="kyc-td text-start">
                    {" "}
                    {userData?.corporateBodDetails?.fcpDesignation}
                  </td>
                  <td className="kyc-td text-start">
                    {" "}
                    {userData?.corporateBodDetails?.scpDesignation}
                  </td>
                  <td className="kyc-td text-start">
                    {userData?.corporateBodDetails?.trdDesignation}
                  </td>
                </tr>
                <tr>
                  <td className="kyc-td text-start"> हस्ताक्षर /Signature</td>
                  <td className="kyc-td text-start"></td>
                  <td className="kyc-td text-start"></td>
                  <td className="kyc-td text-start"></td>
                </tr>
                <tr>
                  <td className="kyc-td text-start" height={"177px"}>
                    पासपोर्ट साइजको फोटो <br /> Passport size photo
                  </td>
                  <td className="kyc-td">
                    फोटो
                    <br />
                    Photo
                  </td>
                  <td className="kyc-td">
                    {" "}
                    फोटो
                    <br />
                    Photo
                  </td>
                  <td className="kyc-td">
                    {" "}
                    फोटो
                    <br />
                    Photo
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              {userData?.user?.clientType === "I" ? (
                <p style={{ fontSize: "14px" }} className="text-start">
                  म/हामीले निक्षेप सदस्य र हितग्राहीको करारनामा प्रचलित
                  ऐन,नियम, विनियम र सो मा भएको संशोधन मन्न मन्जुर
                  गर्दछु/गर्दछौं | माथि उल्लेखित विवरण सत्य तथ्य रहेको र सो
                  विवरणमा कुनै फरक परे कानून बमोजिम सहुँला, बुझाउँला | अन्यथा
                  ठहरिएमा हितग्राही खाता रद्द गर्न मन्जुरी गर्दछु/गर्दछौँ |{" "}
                  <br />I / We shall accept to the terms and conditions
                  relating to the agreement between Depository Participants
                  and Beneficial Owner, preveilent act, regulations, bylaws
                  and any amendments on it. I/We hereby acknowledge that the
                  above disclosed details are true. I further hereby consent
                  to borne any legal actions in case any false disclosure of
                  information related to me/us and the Depository Participants
                  reserve right to close my account. All disputes are subject
                  to the jurisdiction of courts in Kathmandu,Nepal.
                </p>
              ) : (
                <>
                  <h5 style={{ fontWeight: "bold" }}>संलग गनुर पने कागजात</h5>
                  <div className="d-flex gap-2 text-start">
                    <div style={{ width: "45%" }}>
                      <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                        िधतोपत कारोवारको समनमा तपिशल बमोिजमको सघोषणा गदरछु ।
                      </p>
                      <p>
                        १. कम्पनी / संस्थाले धितोपत्र खरिदका लागि प्रयोग गर्ने
                        रकम सम्पत्ती शुद्धिकरण सम्बन्धि प्रचलित कानुन विपरित
                        आर्जन गरेको हुने छैन ।
                      </p>
                      <p>
                        २. कम्पनी / संस्था धितोपत्रमा गरिएको लगानीमा निहित
                        जोखिमको सम्बन्धमा जानकारी छ ।
                      </p>
                      <p>
                        "३. कम्पनी/संस्थाले खरिद गरेका धितोपत्रहरु वापतको
                        भुक्तानी लिने दिने कार्य तोकिएको समय भित्र गर्ने छु ।
                      </p>
                      <p>
                        ४. धितोपत्र सम्बन्धि तथा अन्य प्रचलित नियम कानूनहरुको
                        पालना गरिने छ ।
                      </p>
                      <p>
                        ५. कम्पनी / संस्था कर्जा सूचना केन्द्रको कालो सूचीमा
                        रहेको छैन ।
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                        धितोपत्र कारोवार गर्न ग्राहक परिचय विवरण भर्ने
                        सम्बन्धमा संचालक समितिको निर्णय ।
                      </p>
                      <p>१. कम्पनी / संस्था दर्ता प्रमाणपत्रको प्रतिलिपि ।</p>
                      <p>
                        २. कम्पनी / संस्थाको स्थायी लेखा नं. प्रबन्धपत्र तथा
                        नियमावलीको प्रतिलिपि ।
                      </p>
                      <p>
                        ३. धितोपत्र कारोवार गर्न ग्राहक परिचय विवरण भर्ने
                        सम्बन्धमा संचालक समितिको निर्णय ।
                      </p>
                      <p>
                        ४. कुनै नियमनकारी निकायबाट अनुमतिपत्र प्राप्त गरेको
                        भएमा सोको प्रतिलिपि ।
                      </p>
                      <p>५. कर चुक्ता / दाखिला प्रमाणपत्र ।</p>
                      <p>
                        ६. अख्तियार प्राप्त व्यक्तिको फोटो तथा नागरिकता
                        प्रमाणपत्रको प्रतिलिपि ।
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="d-flex flex-column mt-4">
            <div className="signature d-flex flex-row justify-content-between">
              <div></div>
              <div>
                <p>
                  {" "}
                  आधिकारिक व्यक्तिको नाम (Name of Authorized Person):
                  ...........................
                </p>
                <p>
                  {" "}
                  पद (Designation):
                  .....................................................................................................
                </p>
                <p>
                  हस्ताक्षर (Signature):
                  .................................................................................................
                </p>
                <p>
                  कम्पनीको छाप (Company&apos;s Stamp):
                  ....................................................................
                </p>
              </div>
            </div>
          </div>
          {/* बैंक खाता */}
          <div className="official-area mt-4">
            <div className="text-center kyc-secondary-header text-capitalize mr-1">
              <h5>कार्यालयको प्रयोजनको लागि (For Official Use)</h5>
            </div>
            <div className="box">
              <div>
                <div className="heading">रुजु गर्ने</div>
                <ol className="kyc-ol">
                  <li className="kyc-li">
                    नाम थर: {userData.user?.verifiedBy}
                  </li>
                  <li className="kyc-li">पद:</li>
                  <li className="kyc-li">हस्ताक्षर:</li>
                  <li className="kyc-li">
                    मिति: {userData?.user?.verifiedDate}
                  </li>
                </ol>
              </div>
              <div className="stamp" style={{ height: "12rem" }}>
                <div style={{ marginBottom: "9rem" }}>
                  <p>कार्यालयको नाम तथा छाप</p>
                </div>
              </div>
              <div>
                <div className="heading">प्रमाणित गर्ने</div>
                <ol className="kyc-ol">
                  <li className="kyc-li">
                    नाम थर: {userData.user?.approvedBy}
                  </li>
                  <li className="kyc-li">पद:</li>
                  <li className="kyc-li">हस्ताक्षर:</li>
                  <li className="kyc-li">
                    मिति: {userData.user?.approvedDate}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div size="A4" className="page">
          <div>
            {userData?.user?.nature === "DP" ? (
              <section className="container pb-5 pb-print-1">
                {/* <!-- Header section --> */}
                <header className="text-center">
                  <h4 className=""> अनुसूची - १५ </h4>
                  <p>(विनियम २० को उपविनियम ३ संग सम्बन्धित )</p>
                  <p>
                    (निक्षेप सदस्य र हितग्राही व्यक्ति वा संस्थाबीचको सम्झौता)
                  </p>
                </header>
                <div className="my-4">
                  <p className="mx-3 text-start aggrement-content">
                    {orgData?.address ? (
                      <span className="dotted-underline mt-3">
                        {orgData?.address}
                      </span>
                    ) : (
                      "..........................."
                    )}{" "}
                    स्थित कार्यालय रहेको
                    {orgData !== undefined ? (
                      <span className="dotted-underline mt-3">
                        {orgData?.name}
                      </span>
                    ) : (
                      "..........................."
                    )}
                    (वैधानिक अस्तित्व भएको निकायको विवरण) (यसपछि "सदस्य"
                    भनिएको ) प्रथम पक्ष र
                    {currentAddressDetails ? (
                      <span
                        className="dotted-underline mt-3"
                        style={{ textTransform: "capitalize" }}
                      >
                        {currentAddressDetails[0].province}{" "}
                        {currentAddressDetails[0]?.district}
                      </span>
                    ) : (
                      "............................."
                    )}{" "}
                    स्थित कार्यालय रहेको
                    {corporateDetails?.companyName ? (
                      <span className="dotted-underline mt-3">
                        {corporateDetails?.companyName}
                      </span>
                    ) : (
                      "............................."
                    )}
                    (वैधानिक अस्तित्व भएको निकायको विवरण ) यसपछि ("हितग्राही"
                    भनिएको ) दोस्रो पक्ष बीच देहायको शर्तहरु पालना गर्ने
                    सहमतिसाथ यो सम्झौता गरिएको छ |
                  </p>
                </div>
                <body>
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
                    <div className="col-6 ">
                      <h4 className="aggrement-header">
                        सम्झौताका प्रथम पक्ष
                      </h4>
                      <p></p>
                      <p>व्यक्तिको नाम:</p>
                      <p>दस्तखत: </p>
                      <p>कम्पनीको छाप : </p>
                    </div>
                    <div className="col-6 ">
                      <h4 className="aggrement-header">
                        सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार
                        प्राप्त)
                      </h4>
                      <p>व्यक्तिको नाम: {corporateDetails?.companyName}</p>
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
                    .................................शुभम्
                  </div>
                </footer>
              </section>
            ) : (
              <>
                <section className="container" style={{ fontSize: "14px" }}>
                  {/* <!-- Header section --> */}
                  <header className="text-center">
                    <p>
                      <b>
                        (धितोपत्र कारोबार सञ्चालन विनियमावली २०७५ को विनियम १०
                        संग सम्बन्धित )
                      </b>
                    </p>

                    <p>
                      <b>(कारोवार सदस्य र ग्राहक बिचको सम्झौतापत्र )</b>
                    </p>
                  </header>
                  <div className="my-2">
                    <p className="mx-3 text-start aggrement-content">
                      कम्पनी रजिस्ट्रारको कार्यलयमा दर्ता भई नेपाल धितोपत्र
                      बोर्डबाट धितोपत्र दलाल ब्यवसायीको इजाजत प्राप्त गरी
                      नेपाल स्टक एक्सचेञ्ज लिमिटेडको कारोबार सदस्य रहेको स्थित
                      कार्यालय रहेको <b>{orgData && orgData?.address}</b> मा
                      रजिस्टर्ड कार्यालय भएको
                      {orgData && " " + orgData?.code} (उप्रान्त प्रथम पक्ष
                      भनिनेछ)
                      {}
                    </p>
                    <p className="text-center">
                      <b>तथा</b>
                    </p>
                    <p>
                      प्रथम पक्ष मार्फत धितोपत्रको कारोबार गर्न / अनलाईन
                      सुबिधा प्रयोग गर्ने ग्राहक संकेत नम्बर
                      .................. हितग्राही खाता न&nbsp;
                      {user?.dematNo ? user?.dematNo : "..............."}{" "}
                      रहेको प्रदेश{" "}
                      {permanentAddressDetails?.[0]?.province
                        ? permanentAddressDetails?.[0]?.province
                        : "................"}{" "}
                      {/* अञ्चल ......... */}
                      जिल्ला{" "}
                      {permanentAddressDetails?.[0]?.district
                        ? permanentAddressDetails?.[0]?.district
                        : "....................."}{" "}
                      गा।पार न।पार उ।प।न।पा{" "}
                      {permanentAddressDetails?.[0]?.municipality
                        ? permanentAddressDetails?.[0]?.municipality
                        : "...................."}{" "}
                      वडा{" "}
                      {permanentAddressDetails?.[0]?.wordNo
                        ? permanentAddressDetails?.[0]?.wordNo
                        : "..................."}{" "}
                      स्थायी ठेगाना भई हाल{" "}
                      {currentAddressDetails?.[0]?.tole
                        ? currentAddressDetails?.[0]?.tole
                        : "............."}{" "}
                      स्थानमा बसोबास गर्ने श्री {"................."} को
                      नाती/नातीनी बुहारी, श्री {".................."} को छोरा
                      / छोरी वर्ष&nbsp;
                      {/* {individualDetail?.dob && currentAge()} */}
                      &nbsp; को श्री {"............."} <b>वा</b> ग्राहक संकेत
                      नम्बर (युनिक क्लाईन्ट कोड)............................
                      रहेको .......................... कार्यालयमा दर्ता भई
                      रजिस्टर्ड कार्यालय .............................. मा
                      भएको श्री
                      .........................................................................
                      ले (उप्रान्त दोस्रो पक्ष भनिने र सो शब्दले विषय वा
                      प्रसंगले अन्यथा अर्थ लगाएकोमा बाहेक निजका उत्तराधिकारी र
                      / वा कानुनी प्रतिनिधि समेत लाई जनाउने), बीच नेप्सेको
                      कारोबार प्रणालीबाट कारोबार हुने विधि र आपैmले कारोबार
                      गर्ने सम्बन्धमा दोस्रो पक्ष सँग आवश्यक ज्ञान रहेको मानी
                      यो सम्झौता (उप्रान्त सम्झौता भनिने छ) सम्पन्न भएको छ ।
                    </p>
                    <br />
                    <p>
                      <b>
                        यस सम्झौताका पक्षहरु निम्नलिखित शर्तहरु पालना गर्न
                        मञ्जुर छन् ः
                      </b>
                    </p>
                    <p>
                      १. प्रचालित धितोपत्र ऐन, नियम, विनियम, कार्यविधि तथा
                      नेपाल राष्ट्र बैंक, बिमा समिति, नेपाल धितोपत्र बार्डे,
                      नेपाल स्टक एक्सचेन्ज लिमिटेड, सिडिएस एन्ड क्लियरिङ
                      लिमिटेड लगायतका नियमक निकायले समय समयमा जारी गरेका
                      निर्देशिका, परिपत्र र निर्देशन समेतलाई यसै सम्झौतामा
                      उल्लेख भए सरह मानी सम्झौताका पक्षहरुले सोको पालना गर्न
                      मञ्जुर गर्दछन् ।{" "}
                    </p>
                    <p>
                      २. दोस्रो पक्षले यस सम्झौता गर्दाको वखत वा यस भन्दा अघि
                      प्रथम पक्षलाई दिएको सूचना, दोस्रो पक्षको ग्राहक परिचय
                      विवरण (केवाइसी) मा भरेको विवरणमा कुनै फेरवदल भए, फेरबदल
                      भएको ७ कार्य दिनभित्र प्रथम पक्षलाई जानकारी दिई आफ्नो
                      पहिचान तथा खाताका विवरणहरु अद्यावधिक गराउन मञ्जुर गर्दछ
                      ।{" "}
                    </p>
                    <p>
                      ३. दोस्रो पक्ष धितोपत्रको कारोबार गर्न कानून बमोजिम
                      अयोग्य ठहरिने कनु ै अवस्था उत्पन्न भई कारवाहीमा परेमा,
                      आर्थिक रुपमा टाट पल्टिएमा, विघटनमा गएमा, दामासाहीमा
                      परेमा वा कर्जा सूचना केन्द्रको कालो सूचीमा परेमा वा अन्य
                      कुनै कारणले कानूनत आर्थिक कारोवार गर्न असमर्थ भएमा प्रथम
                      पक्षलाई तुरुन्त जानकारी दिन मञ्जुर गर्दछ ।
                    </p>
                    <p>
                      ४. दोस्रो पक्षले यस सम्झौतामा उल्लेख गरेको वा ग्राहक
                      परिचय विवरण (केवाइसी) मा उल्लेख भएको इमेल ठेगाना वा
                      मोबाइल नम्बरमा दोस्रो पक्षले प्रयोग गर्ने युजरनेम तथा
                      पासवर्ड प्रथम पक्षले उपलब्ध गराउने छ । प्रथम पक्षले
                      उपलब्ध गराएको वा सो पश्चात दोस्रो पक्षले परिर्वतन गरेको
                      युजरनेम वा पासवर्ड का ेगोपनियता कायम गर्ने र आफ्नो
                      नियन्त्रणमा राख्ने दायित्व दोस्रो पक्षको हुनेछ ।
                    </p>
                    <p>
                      ५. दोश्रो पक्षले बिक्री कारोवार गर्दा मौज्दातमा धितोपत्र
                      रहेको वा रहने कुनै एक हीतग्राही खाता प्रथम पक्षलाई
                      उपलब्ध गराउने छ । र उक्त खाता अन्य धितोपत्र कारोवार
                      सदस्यलाइ दिने छैन । यदी एउटै खाता अन्य धितोपत्र कारोवार
                      सदस्यलाई दिइ हुने जोखिको जिम्मेवारी दोश्रो पक्ष ले लिने
                      छ ।
                    </p>
                    <p>
                      ६. दोस्रो पक्षलाई दिइएको युजरनेमबाट भएगरेको सम्पूर्ण
                      कारोबारहरुको दायित्व बहन गर्ने तथा सो को समयमा राफसाफ
                      गर्ने जिम्मेवारी दोस्रो पक्षको हुनेछ ।
                    </p>
                    <p>
                      ७. दोस्रो पक्षलाइ प्रदान गरीएको युजरनेमको प्रयोग गरी
                      सिर्जना हुने दायित्व तथा सम्झौतारत पक्ष र नेप्से समेतको
                      सम्पत्तिमा कुनै हानी नोक्सानी भएमा सो प्रति दोस्रो पक्ष
                      जिम्मेवार हुनेछ ।
                    </p>
                    <p>
                      ८. दोस्रो पक्षले आफ्ना ेयुजरनेम प्रयोग गरी वा प्रथम
                      पक्षलाई आदेश दिई बिक्री भएका धितोपत्रहरुको निर्देशन
                      पूर्जी जारी गर्नुपर्ने दायित्व दोस्रो पक्षको हुनेछ ।
                      यसरी बिक्री भएको धितोपत्रको हस्तान्तरण दोस्रो पक्षले
                      टिं१ को १२ बजे भित्र प्रथम पक्षको राफसाफ खातामा जम्मा
                      गर्न नसकी उक्त कारोवारको राफसाफ हुन नसकेमा सो बाट
                      सिर्जित सम्पूर्ण दायित्व दोस्रो पक्षले वहन गर्नुपर्नेछ ।
                    </p>
                    <p>
                      ९. दोस्रो पक्षले धितोपत्र बिक्री गरिसकेपछि सो धितोपत्रको
                      आधार मूल्य प्रथम पक्षलाई राफसाफ समयको १ (एक) दिन पूर्व
                      नै उपलब्ध गराउनु पर्नेछ । आधार मूल्य समयमा उपलव्ध
                      नगराएमा, फर्जी वा गलत आधार मूल्यका कारण उत्पन्न हुने
                      कानूनी तथा आर्थिक दायित्च वा हानी नोक्सानी दोस्रो पक्षले
                      व्यहोर्नु पर्नेछ ।
                    </p>
                    <p>
                      १०. दोस्रो पक्षले बिक्रि गरेको धितोपत्रको कारोबारमा
                      लाग्ने कर, शुल्क, दस्तुर तथा अन्य प्रणालीगत शुल्कहरु तथा
                      प्रथम पक्षले धितोपत्र खरीद बिक्री सम्वन्धमा थप सुविधा
                      प्रदान गरेमा लाग्ने थप स्वीकृत दस्तुर कट्टा गरी बाँकी
                      रकम मात्र प्रथम पक्षले दोस्रो पक्षलाई भुक्तानी गर्नेछ ।
                    </p>
                    <p>
                      ११. दोस्रो पक्षले खरीद आदेश प्रणालीमा प्रविष्ट गर्दा
                      प्रथम पक्षले तोकेको कारोबार लिमिटको सीमाभित्र रही गर्नु
                      पर्नेछ । दोस्रो पक्षले प्रथम पक्षलाई अग्रिम रुपमा
                      बुझाएको रकमको ४ (चार) गुणा सम्म कारोबार लिमिट प्राप्त
                      गर्न सक्नेछ । उक्त कारोबार सीमा दोस्रो पक्षले बुझाएको
                      रकमको चार गुणा भन्दा बढी हनु ेछैन ।
                    </p>
                    <p>
                      ११.१ दोस्रो पक्षले प्रथम पक्षलै अग्रिम रुपमा बुझाएको
                      रकमको दोस्रो पक्षले खरिद गर्ने धितोपत्रबाट सिर्जना हुने
                      कुल दायित्व रकममा समायोजन हुनेछ।
                    </p>
                    <p>
                      ११.२ दोश्रो पक्षले धितोपत्रखरिद गरेवापत सिर्जना हुने कुल
                      दायित्व रकममा प्रथमपक्षलाई अग्रिम रुपमा बुझाएको रकम तथा
                      दोस्रो पक्षले धितोपत्र बिक्रो गरि प्रथमपक्षसंग भुक्तानी
                      लिन बाकी भए सो समेत समायोजन गरि बाकी रहेको दायित्व रकम
                      कारोबारको राफसाफ हुनु भन्दा पहिले प्रथमपक्षलाई दोस्रो
                      पक्षले भुक्तानी गर्नुपर्नेछ।
                    </p>
                    <p>
                      ११.३ दोस्रो पक्षले प्रथमपक्षलाई तिर्नु पर्ने रकम कारोबार
                      राफसाफ हुनुपुर्व भुक्तानी गर्न नसकेमा दोस्रो पक्षको
                      नाममा खरिद भएको धितोपत्र प्रथमपक्षले बिक्रि गर्न सक्नेछ।
                      तर दोस्रो पक्षले प्रथमपक्षसंग रकम तिर्ने समय माग गरेमा
                      प्रथमपक्षले आफ्नो अनुकुलता हेरी दोस्रो पक्षले खरिद गरेको
                      धितोपत्रको रकम भुक्तानी गर्न निश्चित समय दिन सक्नेछ।
                    </p>
                    <p>
                      ११.४ सर्त न ११.३ बमोजिम दोस्रो पक्षको कारोबार राफसाफ
                      गर्न उपयोग भएको प्रथमपक्षको रकममा दोस्रो पक्षलाई दिएको
                      थप निश्चित समयावधि सम्ममा दोस्रो पक्षले तिर्नुपर्ने बाकी
                      रकम प्रथम पक्षलाई उपलब्ध नगराए सम्मको वा दोस्रो पक्षको
                      धितोपत्र बिक्रि गरि प्रथम पक्षलाई रकम प्राप्त नभएसम्मको
                      समयावधिमा प्रथ पक्षले व्यहोर्नु परेको वास्तविक लागत थप
                      गरि हुन आउने दायित्व दोस्रो पक्षले प्रथम पक्षलाई
                      भुक्तानी गर्नु पर्नेछ वा दोस्रो पक्षलाई प्रथम पक्षले
                      दिनुपर्ने हिसाबमा कट्ट गर्न सक्नेछ।
                    </p>
                    <p>
                      ११.५ दोस्रो पक्षले प्रथम पक्षलाई बुझाएको अग्रिम रकममा
                      दोस्रो पक्षले खरिद गर्ने धितोपत्रको राफसाफ नभएसम्मको
                      अवधिसम्म प्रथम पक्षको राफसाफ खातामा रहदा प्रथम पक्षले
                      बैंकबाट प्राप्त गर्ने प्रतिफल ९खुद ब्याज० दोस्रो दोस्रो
                      पक्षबता माग भए आएमा फिर्ता दिन सक्ने छ।
                    </p>
                    <p>
                      ११.६ प्रथम पक्षले दोस्रो पक्षसंग लिनु पर्ने दायित्व
                      रकमको लागत गणना तथा निर्धारण गर्दा प्रथम पक्षले बाणिज्य
                      बैंकबाट ऋण लिदा आफुले तिर्नु पर्ने ब्याजदरमा सेवा सुल्क
                      वापत बर्सिक ४ प्रतिशत बिन्दुले लागत थप गरि दायित्व
                      निर्धारण गरिनेछ।
                    </p>
                    <p>
                      ११.७ प्रथम पक्षले दोस्रो पक्षलाई धितोपत्र बिक्रि वापतको
                      भुक्तानी दिनुपर्ने अवस्थामा कबु बाहिरको परिस्थिथि
                      सिर्जना भै भुक्तानी रोकिन गएमा तत्कालिन समयमा वाणिज्य
                      बैंकहरुले आफ्ना ग्राहकलाई बचत खातामा दिने ब्याज रकम थप
                      गरि भुक्तानी रकम उपलब्द गराउने छ।
                    </p>
                    <p>
                      १२. दोस्रो पक्षले कारोबार सीमाका लागि प्रथम पक्षलाई
                      बुझाउने सबै किसिमका भुक्तानी चेक वा अन्य बिद्युतीय
                      माध्यमबाट गर्नुपर्नेछ ।
                    </p>
                    <p>
                      १३. दोस्रो पक्षले कारोबार प्रयोजनका लागि प्रथम पक्षलाई
                      उपलब्ध गराएको रकम तथा धितोपत्र कारोवार राफसाफ प्रयोजनमा
                      मात्र प्रयोग गर्नुपर्नेछ ।
                    </p>
                    <p>
                      १४. दुवै पक्षको आपसी सहमतिमा दोस्रो पक्षले प्रथम पक्षलाई
                      यस्तो कारोबार सीमाको लागि आवश्यक अग्रिम भुक्तानी बैंक
                      ग्यारेन्टी तथा कारोवारयोग्य धितोपत्रहरुको माध्यमबाट पनि
                      गर्न सक्ने छ । यस्तो धरौटी दोश्रो पक्षले आफनो दायीत्व
                      समयमा भुक्तानी नगरेमा प्रथम पक्षले दोस्रो पक्षलाई
                      जानकारी दिई नगदमा परिणत गर्न सक्ने छ ।
                    </p>
                    <p>
                      १५. कारोबार सीमा गणना प्रयोजनको लागि कारोबारयोग्य
                      धितोपत्रको मूल्यांकन बजार मूल्यको बढीमा ७० प्रतिशत सम्म
                      गर्न सकिने छ । धितोपत्र तथा धितोपत्र बजारमा हुने
                      सम्भावित जोखिमलाई मध्यनजर गरी प्रथम पक्षले दोस्रो
                      पक्षलाई उपलब्ध गराएको कारोबार सीमा दोस्रो पक्षलाई
                      जानकारी गराई फेरबदल गर्न सक्नेछ ।
                    </p>
                    <p>
                      १६. खरीद कारोबारपछि बाँकी रहेको रकम खरिद बिल बमोजिम
                      दोस्रो पक्षले टिं १ भित्रमा प्रथम पक्षको खातामा जम्मा
                      हुने गरी प्रथम पक्षलाई उपलब्ध गराउनु पर्नेछ । यसरी रकम
                      उपलब्ध गराउदा अग्रिम भुक्तानी रकममा उपलब्ध गराएको भए सो
                      रकम समायोजन गर्ने सुविधा दोस्रो पक्षलाई हुनेछ ।
                    </p>
                    <p>
                      १७. खरिद कारोबार पश्चात दोस्रो पक्षले राफसाफ समय भित्रमा
                      आफ्नो दायित्व पुरा नगरेमा टिं३ मा प्रथम पक्षले दोस्रो
                      पक्षलाई जानकारी गराई दोस्रो पक्षकै नाममा खरिद गरिएको तथा
                      जमानतमा लिइएको धितोपत्र बिक्री, वैक जमानतबाट रकम र सो को
                      लागत बापतको सोधभर्ना र नपुग रकम कानून बमोजिम असुल उपर
                      गरि लिन सक्नेछ ।
                    </p>
                    <p>
                      १८. दोस्रो पक्षको धितोपत्र बिक्री गरि प्रथम पक्षको लेना
                      रकम असुलउपर गरी रकम बाँकी रहेमा दोस्रो पक्षको अग्रिम
                      भुक्तानी सम्मको रकम दोस्रो पक्षलाई फिर्ता गरी थप रकम
                      बाँकि रहन गए धितोपत्र कारोबार सञ्चालन विनियमावली, २०७५
                      मा तोकिए बमोजिम हुनेछ ।
                    </p>
                    <p>
                      १९. दोस्रो पक्षले खरीद गरेको धितोपत्र खरिदबाट सिर्जित
                      दायित्वहरु पुरा गरेपछि वा कारोवारको राफसाफको दिन मध्ये
                      जुन पछी हुन्छ सो को भोलिपल्ट ग्राहकको निक्षेप खातामा
                      प्रथम पक्षले धितोपत्र हस्तान्तरण गर्नु पर्नेछ ।
                    </p>
                  </div>
                </section>
                <section className="container" style={{ fontSize: "14px" }}>
                  <div className="row">
                    <p>
                      २०. दोस्रो पक्षका ेनामवाट कारोवार भए पश्चात दोस्रो
                      पक्षको मृत्यु भएमा, दामासाहीमा परेमा, मगज बिग्रिएमा वा
                      अन्य कुनै कारणवाट दोस्रो पक्षको नामवाट भएका कारोवारको
                      राफसाफ हुन नसक्ने स्थिति सिर्जना भएमा उक्त कारोबारको
                      राफसाफको जिम्मेवारी निज वा निजको कानूनी उत्तराधिकारीको
                      हुनेछ । कानुनी उत्तराधिकारीवाट पनि राफसाफ हुन नसकेमा
                      प्रचलित कानून बमोजिम हुनेछ ।
                    </p>
                    <p>
                      २१. नियमक निकायहरुबाट कारोबारहरु रद्द भएमा वा रद्द गर्ने
                      आदेश प्राप्त भएमा सो कारोवारहरु स्वतः रद्द हुनेछन । सो
                      का ेदायित्व प्रथम पक्षले बहन गर्ने छैन ।
                    </p>
                    <p>
                      २२. दोस्रो पक्ष नावालक वा कानूनतः पक्षको रुपमा करार गर्न
                      अयोग्य देखिएमा निजको संरक्षक वा प्रतिनिधिले यो सम्झौता
                      गर्न सक्नेछ ।
                    </p>
                    <p>
                      २३. प्रथम पक्षको काबु बाहिरको परिस्थितिको कारणबाट
                      उत्पन्न हुने कुनै पनि दायित्वमा प्रथम पक्ष जिम्मेवार
                      हुने छैन ।
                    </p>
                    <p>
                      २४. दोस्रो पक्षले आफ्नो कारोवारको निम्ति आदेश दिन लिखित
                      मञ्जुरी दिई प्रतिनिधि नियुक्ति गर्न सक्ने छ सो
                      प्रतिनिधिवाट भएका सम्पूर्ण कारोबारहरु निज दोस्रो पक्षले
                      नै गरेसरह मान्य हुनेछ ।
                    </p>
                    <p>
                      २५. धितोपत्रमा गरीने लगानीमा जोखिम हुन्छ भन्ने कुरामा
                      दोस्रो पक्ष जानकार रहेको मानिनेछ र सो जोखिमबाट सिर्जित
                      हुने हानी नोक्सानी प्रति दोस्रो पक्षनै जिम्मेवार रहनेछ ।
                    </p>
                    <p>
                      २६. दोस्रो पक्षले निम्न लिखित माध्यमवाट कारोबार आदेश दिन
                      सक्ने छ :<br /> &emsp;&emsp;क. स्वयं उपस्थित भई लिखित
                      आदेश
                      ।&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                      ख. टेलिफोन
                      ........................................................
                      <br />
                      &emsp;&nbsp;&nbsp;&nbsp; ग. मोबाइलफोन{" "}
                      {user?.phoneNo ? user?.phoneNo : "..................."}
                      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                      घ. इमेल{" "}
                      {user?.email ? user?.email : ".................."}
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
                      प्रथम पक्षले उल्लिखित माध्यमबाट आएका आदेशहरुलाई मात्र
                      वैधानिक मान्यता दिई प्राथमिकताका आधारमा कारोबार
                      प्रणालीमा आदेश प्रविष्टी गर्नेछ । नियम अनुसार उक्त
                      आदेशहरुको सुरक्षित रेकर्डिङ्ग तथा भण्डारण प्रथम पक्षले
                      गर्न सक्नेछ ।
                    </p>
                    <p>
                      २७. दोस्रो पक्षको मार्जिन कारोवार सुविधा उपयोग गर्ने
                      भएमा सो सम्बन्धी सर्त तथा सुविधाहरु सम्बन्धित नियममा
                      तोकिए बमोजिम हुनेछ ।
                    </p>
                    <p>
                      २८. दोस्रो पक्षले धितोपत्र कारोवार गर्दा उक्त धितोपत्र
                      कारोवार गर्न प्रचलित कानुन वमोजिम आफु योग्य रहेको र सो
                      धितोपत्रमा आफुले कानून बमोजिम धारण गर्न सक्ने सीमा भित्र
                      रहि खरीद आदेश प्रविष्ट गर्नु पर्ने छ । सो नगरेबाट
                      सिर्जित परिणाम तथा दायित्व दोस्रो पक्षको हुनेछ ।
                    </p>
                    <p>
                      २९. प्रचलित नीति नियममा उल्लेख भएअनुसार वा सम्बन्धित
                      निकायहरुबाट धितोपत्रको कारोबारको श्रोतको जानकारी गराउन
                      आवश्यक रहेमा उक्त जानकारी कारोबार राफसाफ समयाबधीभित्र
                      प्रथम पक्षलाई बुझाउन दोस्रोपक्ष मञ्जुर गर्दछ । दोस्रो
                      पक्षले प्रचलित कानुन बमोजिम अवैधानिक नठहरीने रकमहरु
                      मात्र धितोपत्रमा लगानी गर्नुपर्ने छ ।
                    </p>
                    <p>
                      ३०. पक्षहरुबिच आपसि सहमतीमा एक महिनाको अग्रिम सूचना दिई
                      यो सम्झौता रद्द गर्न सकिनेछ । सम्झौता रद्द गर्नु पूर्व
                      पक्षहरुले आ–आफ्नो दायित्व पुरा गरेको हुनु पर्नेछ ।
                    </p>
                    <p>
                      ३१. प्रचलित कानून बमोजिम प्रथम पक्षले व्यवसाय सञ्चालनका
                      लागि प्राप्त गरेको इजाजत, अनुमतिपत्र, सदस्यता खारेज भइ
                      कारोबार गर्न अयोग्य भएमा यो सम्झौता स्वतः खारेज हुनेछ ।
                      यसरी सम्झौता खारेज भए पनि बाँकी बक्यौता फछ्र्यौट
                      गर्नुपर्ने दायित्व दुवै पक्षको हुनेछ ।
                    </p>
                    <p>
                      ३२. यस सम्झौताअनुसार प्रथम पक्षले दिने अथवा आवश्यक हुने
                      कुनै पनि जनाउ वा सञ्चार तोकिएको माध्यमबाट दोस्रो पक्षको
                      अद्यावधिक ठेगानामा पठाए पश्चात दोस्रो पक्षले जानकारी पाए
                      सरह हनु ेछ ।
                    </p>
                    <p>
                      ३३. सम्झौताका दुवै पक्षहरुले नेप्से अनलाइन कारोबार
                      प्रणालीमा क्षति पु¥याउने कुनै पनि कार्य गर्ने छैनन् ।
                    </p>
                    <p>
                      ३४. प्रथम पक्षले प्रचलित कानूनमा उल्लेख भएको अवस्थामा
                      बाहेक दोस्रो पक्षको गोपनीयता कायम गर्नेछ ।
                    </p>
                    <p>
                      ३५. पक्षहरुका बीचमा उत्पन्न हुनसक्ने विवाद तथा
                      मतभिन्नताहरुको समाधान सकेसम्म आपसी सहमतिमा निराकरण
                      गरिनेछ । आपसी सहमतीबाट समाधान गर्न नसकेमा धितोपत्र
                      कारोबार सञ्चालन विनियमावली, २०७५ मा तोकिए बमोजिम बमोजिम
                      हुनेछ ।
                    </p>
                    <p>
                      ३६. दोस्रो पक्षले अनलाईन कारोबार सुविधा, एसएमएस सुबिधा
                      लगायतका अन्य सुबिधा उपयोग गरे बापत तोकिएको शुल्क तिर्न
                      मञ्जुर गर्दछ । दोस्रो पक्षले उल्लिखित सुबिधाहरु प्राप्त
                      गर्न हरेक आर्थिक बर्षमा नविकरण शुल्क तिर्नुपर्नेछ ।
                    </p>
                    <p>
                      ३७. यो सम्झौतामा उल्लेख तथा व्याख्या नभएका विषय प्रचलित
                      नेपाल कानूनद्वारा नियमन तथा व्याख्या हुनेछ ।
                    </p>
                    <p>
                      ३८. कारोबार राफसाफ चक्र तथा अन्य नियम कानुन तथा निर्देशन
                      परिवर्तन भएमा परिवर्तनको हद सम्म यस सम्झौतामा लेखिएका
                      शर्तहरु स्वतस् परिवर्तन हुनेछ।
                    </p>
                    <p>
                      ३९. यो सम्झौता दुवै पक्षले हस्ताक्षर गरेको मितिबाट
                      .............................. सम्म कायम रहने छ र दुवै
                      पक्षको सहमतीबाट सम्झौता पुनः नविकरण हुन सक्नेछ ।
                    </p>
                    <p>
                      ४०. यो सम्झौता राम्ररी पढी, बुझी दुवै पक्ष हस्ताक्षर
                      गर्न मञ्जुर गर्दछौं ।
                    </p>
                    <div className="col-6 col-md-6 col-sm-12">
                      <h4 className="aggrement-header">
                        सम्झौताका प्रथम पक्ष{" "}
                      </h4>
                      <p></p>
                      <p>व्यक्तिको नाम: {"  " + orgData && orgData?.name}</p>
                      <p>दस्तखत: </p>
                      <p>कम्पनीको छाप : </p>
                    </div>
                    <div className="col-6 col-md-6 col-sm-12">
                      <h4 className="aggrement-header">
                        सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार
                        प्राप्त){" "}
                      </h4>
                      <p>व्यक्तिको नाम: {userData?.user?.name}</p>
                      <p>दस्तखत: </p>
                      <p>कम्पनीको छाप : </p>
                      <div className="row my-4 py-5">
                        <div
                          className="col-4 text-center text-capitalize border"
                          style={{ width: "10cm" }}
                        >
                          <div>
                            <div>
                              <p>औंठाछाप</p>
                              <p>Thumb Print</p>
                            </div>
                          </div>

                          <div className="row" style={{ height: "5cm" }}>
                            <div className="col-6 center-xy border">
                              <div style={{ marginBottom: "6rem" }}>
                                <p>बायाँ (Left)</p>
                              </div>
                            </div>
                            <div className="col-6 center-xy border">
                              <div style={{ marginBottom: "6rem" }}>
                                <p>दायाँ (Right)</p>
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
                    {userData?.user?.approvedDate
                      ? "  " +
                        dateConverter(
                          userData?.user?.approvedDate,
                          "AD_BS"
                        ).split("-")[0] +
                        " "
                      : "........"}
                    साल{" "}
                    {userData?.user?.approvedDate
                      ? "  " +
                        dateConverter(
                          userData?.user?.approvedDate,
                          "AD_BS"
                        ).split("-")[1] +
                        " "
                      : "......."}{" "}
                    महिना{" "}
                    {userData?.user?.approvedDate
                      ? "  " +
                        dateConverter(
                          userData?.user?.approvedDate,
                          "AD_BS"
                        ).split("-")[2] +
                        " "
                      : "........"}{" "}
                    गते रोज .................................शुभम्{" "}
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
        {userData?.user?.nature === "DP" && (
          <div size="A4" className="page">
            <div>
              <DpMeroShare
                applicantName={userData?.user?.name}
                email={userData.user?.email}
                mobileNo={userData.user?.phoneNo}
                dpId={userData.user?.dpDetails?.dpId}
                boid={userData.user?.boid}
                addressDetails={permanentAddressDetails?.[0]}
                date={userData.user?.submittedDate}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default CorporateDpkyc;
