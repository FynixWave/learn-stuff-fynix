export default function buildMakeGroup({ Id, isValidDate }) {
  return function makeGroup({
    id = null,
    name,
    purpose,
    hash = Id.makeId(),
    address,
    alreadyOperating = false,
    meetingFrequency,
    firstMeeting,
    cashOutDate,
    sharePrice,
    minShare,
    maxShare,
    loanMinShares,
    loanMonthlyInterest,
    loanLendingLimit,
    loanMaxDuration,
    emmContAmt,
    emmFrequency,
    finesDestination,
    organisationId,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    let activeStatus = true;

    const validateFinesDestination = (str) => {
      const SAVINGS = "savings";
      const EMMERGENCIES = "emmergencies";

      return [SAVINGS, EMMERGENCIES].includes(str);
    };

    if (!Id.isValidId(hash)) {
      throw new Error("Group must have a valid hash.");
    }

    if (typeof name !== "string" || !name.length) {
      throw new Error('Group "name" is required. ');
    }

    if (typeof alreadyOperating !== "boolean") {
      throw new Error('Group "alreadyOperatingStatus" is required. ');
    }

    if (typeof meetingFrequency !== "number") {
      throw new Error('Group "meetingFrequency" is required. ');
    }

    if (!isValidDate(firstMeeting)) {
      throw new Error(
        'Group "firstMeeting" is required and must be a valid date. '
      );
    }

    if (!isValidDate(cashOutDate)) {
      throw new Error(
        'Group "cashOutDate" is required and must be a valid date. '
      );
    }

    if (typeof purpose !== "string" || !purpose.length) {
      throw new Error('Group "purpose" is required. ');
    }

    if (typeof sharePrice !== "number") {
      throw new Error('Group "sharePrice" is required. ');
    }

    if (typeof minShare !== "number") {
      throw new Error('Group "minShare" is required. ');
    }

    if (typeof maxShare !== "number") {
      throw new Error('Group "maxShare" is required. ');
    }

    if (typeof loanMinShares !== "number") {
      throw new Error('Group "loanMinShares" is required. ');
    }

    if (typeof loanMonthlyInterest !== "number") {
      throw new Error('Group "loanMonthlyInterest" is required. ');
    }

    if (typeof loanLendingLimit !== "number") {
      throw new Error('Group "loanLendingLimit" is required. ');
    }

    if (typeof loanMaxDuration !== "number") {
      throw new Error('Group "loanMaxDuration" is required. ');
    }

    if (typeof emmContAmt !== "number") {
      throw new Error('Group "emmContAmt" is required. ');
    }

    if (typeof emmFrequency !== "number") {
      throw new Error('Group "emmFrequency" is required. ');
    }

    if (!validateFinesDestination(finesDestination)) {
      throw new Error(
        'Group "finesDestination" is required and must be either "savings" or "emmergencies". '
      );
    }

    if (!organisationId || typeof organisationId !== "number") {
      throw new Error('Group must have an "organisationId"');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getPurpose: () => purpose,
      getAddress: () => address,
      getAlreadyOperating: () => alreadyOperating,
      getMeetingFrequency: () => meetingFrequency,
      getFirstMeeting: () => firstMeeting,
      getCsashOutDate: () => cashOutDate,
      getSharePrice: () => sharePrice,
      getMinShare: () => minShare,
      getMaxShare: () => maxShare,
      getLoanMinShares: () => loanMinShares,
      getLoanMonthlyInterest: () => loanMonthlyInterest,
      getLoanLendingLimit: () => loanLendingLimit,
      getLoanMaxDuration: () => loanMaxDuration,
      getEmmContAmt: () => emmContAmt,
      getEmmFrequency: () => emmFrequency,
      getFinesDestination: () => finesDestination,
      getOrganisationId: () => organisationId,
      getHash: () => hash,
      isActive: () => activeStatus,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
      markActive: () => {
        activeStatus = true;
      },
      markNotActive: () => {
        activeStatus = false;
      },
    });
  };
}
