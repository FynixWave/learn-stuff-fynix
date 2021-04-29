import makeFakeGroup from "./fixtures/group";
import makeGroup from "./";

describe("group", () => {
  test("if it has a valid hash", () => {
    const group = makeFakeGroup({ hash: null });
    expect(() => makeGroup(group)).toThrow(
      new Error("Group must have a valid hash.")
    );
  });

  test("if it has a name", () => {
    const group = makeFakeGroup({ name: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "name" is required. ')
    );
  });

  test("if its already operating status is provided", () => {
    const group = makeFakeGroup({ alreadyOperating: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "alreadyOperatingStatus" is required. ')
    );
  });

  test("if its meetingFrequency is provided", () => {
    const group = makeFakeGroup({ meetingFrequency: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "meetingFrequency" is required. ')
    );
  });

  test("if first meeting date is provided and is valid", () => {
    const group = makeFakeGroup({ firstMeeting: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "firstMeeting" is required and must be a valid date. ')
    );
  });

  test("if cashout date is valid", () => {
    const group = makeFakeGroup({ cashOutDate: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "cashOutDate" is required and must be a valid date. ')
    );
  });

  test("if its purpose is provided", () => {
    const group = makeFakeGroup({ purpose: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "purpose" is required. ')
    );
  });

  test("if its share price is provided", () => {
    const group = makeFakeGroup({ sharePrice: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "sharePrice" is required. ')
    );
  });

  test("if its minimum share is provided", () => {
    const group = makeFakeGroup({ minShare: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "minShare" is required. ')
    );
  });

  test("if its maximum share is provided", () => {
    const group = makeFakeGroup({ maxShare: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "maxShare" is required. ')
    );
  });

  test("if loan minimum share is provided", () => {
    const group = makeFakeGroup({ loanMinShares: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "loanMinShares" is required. ')
    );
  });

  test("if loan monthly interest is provided", () => {
    const group = makeFakeGroup({ loanMonthlyInterest: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "loanMonthlyInterest" is required. ')
    );
  });

  test("if loan lending limit is provided", () => {
    const group = makeFakeGroup({ loanLendingLimit: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "loanLendingLimit" is required. ')
    );
  });

  test("if loan maximum duration is provided", () => {
    const group = makeFakeGroup({ loanMaxDuration: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "loanMaxDuration" is required. ')
    );
  });

  test("if emmContAmt is provided", () => {
    const group = makeFakeGroup({ emmContAmt: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "emmContAmt" is required. ')
    );
  });

  test("if emmFrequency is provided", () => {
    const group = makeFakeGroup({ emmFrequency: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group "emmFrequency" is required. ')
    );
  });

  test("if finesDestination is provided and is valid", () => {
    const group = makeFakeGroup({ finesDestination: null });
    expect(() => makeGroup(group)).toThrow(
      new Error(
        'Group "finesDestination" is required and must be either "savings" or "emmergencies". '
      )
    );
  });

  test("if organisationId is provided", () => {
    const group = makeFakeGroup({ organisationId: null });
    expect(() => makeGroup(group)).toThrow(
      new Error('Group must have an "organisationId"')
    );
  });
});
