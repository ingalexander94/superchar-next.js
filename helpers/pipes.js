import * as dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const scrollBottom = () => {
  const content = document.getElementById("content-scroll");
  content.scrollTo({
    top: content.scrollHeight,
    behavior: "smooth",
  });
};

const formatDate = (date) => {
  const parse = dayjs(date);
  const now = dayjs();
  const dateString = parse.isBefore(now, "day")
    ? `${parse.format("MMM D, YYYY h:mm A")}`
    : `${parse.fromNow()}`;
  return dateString;
};

export { scrollBottom, formatDate };
