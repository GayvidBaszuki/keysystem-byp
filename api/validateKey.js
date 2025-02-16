export default function handler(req, res) {
    const validKeys = ["YOUR-KEY-1", "YOUR-KEY-2", "YOUR-KEY-3"];
    
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Get the key from query parameters instead of the body
    const { key } = req.query;
    
    if (!key) {
        return res.status(400).json({ error: "No key provided" });
    }

    if (validKeys.includes(key)) {
        return res.status(200).json({ valid: true });
    } else {
        return res.status(401).json({ valid: false });
    }
}
