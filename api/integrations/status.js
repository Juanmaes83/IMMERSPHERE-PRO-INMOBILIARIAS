/**
 * GET /api/integrations/status
 * Reports which environment variables are configured in this deployment.
 *
 * SECURITY:
 *   - Returns only PRESENCE (configured / not_configured), never actual values.
 *   - Printing env var values would be a security incident.
 *   - All secrets must live in Vercel > Settings > Environment Variables.
 *   - Never commit .env files or put API keys in crm.html / vercel.json.
 *
 * v1.8A — all vars will show as not_configured until added in Vercel dashboard.
 * Future phases add real implementations once vars are configured.
 */
module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  const requiredVars = [
    { key: 'RESEND_API_KEY',        phase: 'v1.8B', usage: 'Email real — Resend API' },
    { key: 'GOOGLE_CLIENT_ID',      phase: 'v1.8C', usage: 'Google Drive OAuth (public client ID)' },
    { key: 'GOOGLE_CLIENT_SECRET',  phase: 'v1.8C', usage: 'Google Drive OAuth (secret — never in frontend)' },
    { key: 'HOLDED_API_KEY',        phase: 'v1.8D', usage: 'Holded facturación API' },
    { key: 'SIGNATURIT_API_KEY',    phase: 'v1.8E', usage: 'Signaturit firma digital API' },
    { key: 'SUPABASE_URL',          phase: 'v2.0',  usage: 'Supabase database URL' },
    { key: 'SUPABASE_ANON_KEY',     phase: 'v2.0',  usage: 'Supabase public anon key' }
  ];

  const integrations = {};
  requiredVars.forEach(({ key, phase, usage }) => {
    const val = process.env[key];
    integrations[key] = {
      status: val && val.trim().length > 0 ? 'configured' : 'not_configured',
      phase,
      usage
      // value: intentionally omitted — NEVER include this
    };
  });

  const configured = Object.values(integrations).filter(v => v.status === 'configured').length;
  const total = requiredVars.length;

  return res.status(200).json({
    status: 'ok',
    version: '1.8A',
    integrations,
    summary: {
      configured,
      total,
      allReady: configured === total
    },
    security: {
      note: 'Values are never exposed. Only presence is checked.',
      howToAdd: 'Vercel Dashboard > Project > Settings > Environment Variables',
      warning: 'Never put secrets in crm.html, vercel.json, package.json or any file committed to git'
    },
    timestamp: new Date().toISOString()
  });
};
