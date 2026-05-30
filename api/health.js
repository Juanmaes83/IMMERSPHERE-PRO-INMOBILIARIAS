/**
 * GET /api/health
 * Health check for Immersphere Pro CRM backend.
 * v1.8A — Dry-run mode. No real external API connections.
 *
 * Deploy on Vercel. Secrets go in Vercel Dashboard > Settings > Environment Variables.
 * NEVER put API keys in this file or in crm.html.
 */
module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  res.status(200).json({
    status: 'ok',
    service: 'Immersphere Pro CRM — Serverless Backend',
    version: '1.8A',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    mode: 'dry-run',
    note: 'v1.8A readiness layer. No real external API connections yet. Add env vars in Vercel dashboard.',
    endpoints: [
      'GET  /api/health',
      'POST /api/send-email',
      'GET  /api/integrations/status'
    ]
  });
};
