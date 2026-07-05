export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { code } = req.body;

  const ACCESS_CODE = "MK312026";

  if (code === ACCESS_CODE) {
    return res.json({ success: true });
  }

  return res.json({ success: false });

}
