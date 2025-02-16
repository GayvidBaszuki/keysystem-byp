export default function handler(req, res) {
    const validKeys = ["YOUR-KEY-1", "YOUR-KEY-2", "YOUR-KEY-3"];
    
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins, you can restrict this to specific origins if needed
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // Allow only POST method
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow the Content-Type header

    // Handle OPTIONS request (for pre-flight check)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { key } = req.body;

    if (!key) {
        return res.status(400).json({ error: 'No key provided' });
    }

    if (validKeys.includes(key)) {
        return res.status(200).json({ valid: true });
    } else {
        return res.status(401).json({ valid: false });
    }
}
