function tzOffsetMs(date, timeZone) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = {};
  for (const p of dtf.formatToParts(date)) {
    parts[p.type] = p.value;
  }

  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return asUTC - date.getTime();
}

function pacificYmdAt9amToInstant(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);

  // Desired wall time: 9:00 AM America/Los_Angeles
  const guessUTC = Date.UTC(y, m - 1, d, 9, 0, 0);
  let utc = guessUTC;

  // Two passes to resolve DST correctly
  for (let i = 0; i < 2; i++) {
    const offset = tzOffsetMs(new Date(utc), "America/Los_Angeles");
    utc = guessUTC - offset;
  }

  return new Date(utc);
}

export function formatDate(input) {
  const ymd =
    typeof input === "string"
      ? input
      : input instanceof Date
        ? input.toISOString().slice(0, 10)
        : (() => { throw new TypeError("Expected YYYY-MM-DD string or Date"); })();

  const instant = pacificYmdAt9amToInstant(ymd);

  // Display in viewer’s local timezone
  return instant.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
