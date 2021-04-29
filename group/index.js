import buildMakeGroup from "./group";
import Id from "../Id";
import isValidDate from "../isValidDate";

const makeGroup = buildMakeGroup({
  Id,
  isValidDate,
});

export default makeGroup;
