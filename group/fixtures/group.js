import faker from "faker";
import Id from "../../Id";

export default function makeFakeGroup(overrides) {
  const group = {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    purpose: faker.lorem.sentence(),
    address: "kiryandongo",
    alreadyOperating: true,
    meetingFrequency: 5,
    firstMeeting: new Date(),
    cashOutDate: new Date(),
    sharePrice: 100000,
    minShare: 50000,
    maxShare: 200000,
    loanMinShares: 20000,
    loanMonthlyInterest: 5,
    loanLendingLimit: 30000,
    loanMaxDuration: 12,
    emmContAmt: 10000,
    emmFrequency: 5,
    finesDestination: "savings",
    organisationId: faker.datatype.number(),
    hash: Id.makeId(),
    activeStatus: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...group, ...overrides };
}
