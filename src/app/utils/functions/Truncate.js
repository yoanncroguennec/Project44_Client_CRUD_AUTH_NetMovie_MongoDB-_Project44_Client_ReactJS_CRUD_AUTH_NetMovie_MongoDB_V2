export default function TruncateActors(str) {
  return str.length > 10 ? str.substring(0, 55) + "..." : str;
}

export function TruncateDesc(str) {
  return str.length > 10 ? str.substring(0, 150) + "..." : str;
}
