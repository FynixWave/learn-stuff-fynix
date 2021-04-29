import moment from "moment";

export default function isValidDate(dateString) {
  return moment(dateString).isValid();
}
