export default function handler(req, res) {
    const validKeys = ["realsigmav5", "lwesd", "goguardiansucks..."];

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins (can replace * with specific domain)
    res.setHeader('Access-Control-Allow-Methods', 'GET');  // Allow only GET method
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allow Content-Type header

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // If the method is not GET, return 405 Method Not Allowed
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Get the key from query parameters
    const { key } = req.query;

    if (!key) {
        return res.status(400).json({ error: 'No key provided' });
    }

    if (validKeys.includes(key)) {
        return res.status(200).json({ valid: true });
    } else {
        return res.status(401).json({ valid: false });
    }
}
