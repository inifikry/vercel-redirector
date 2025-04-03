export default function redirect(req) {
  const url = process.env.REDIRECT_URL || "https://x.com/inifikry"; // Fallback jika env kosong
  return Response.redirect(url, 301);
}

export const config = {
  runtime: 'edge',
};
