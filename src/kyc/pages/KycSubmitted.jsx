import React from 'react';
import { getUser } from '../../utility/userHelper';

const CorporateTmsKyc = React.lazy(
    () => import("../ViewKyc/corporate/CorporateTmsKyc")
);
const IndividualDPKyc = React.lazy(
    () => import("../ViewKyc/Individual/IndividualDPKyc")
);
const CorporateDpKyc = React.lazy(
    () => import("../ViewKyc/corporate/CorporateDpKyc")
);
const IndividualTmsKyc = React.lazy(
    () => import("../ViewKyc/Individual/IndividualTmsKyc")
);

const KycSubmitted = () => {
    const { H: clientType, I: formNature } = getUser();

    if (formNature === "DP") {
        if (clientType === "I") {
            return <IndividualDPKyc />;
        } else {
            return <CorporateDpKyc />;
        }
    } else if (formNature === "TMS") {
        if (clientType === "I") {
            return <IndividualTmsKyc />;
        } else {
            return <CorporateTmsKyc />;
        }
    } else {
        return null;
    }
}

export default KycSubmitted;
