/**
 * POST /api/send-email
 * Dry-run email endpoint for Immersphere Pro CRM.
 * v1.8A — validates payload, does NOT send real emails.
 * v1.8B — will call Resend API using RESEND_API_KEY (env var, never in code).
 *
 * Expected body (JSON):
 *   { to, subject, message, leadId?, source? }
 *
 * SECURITY:
 *   - RESEND_API_KEY must live in Vercel > Settings > Environment Variables only.
 *   - Never put API keys in crm.html, vercel.json or any file committed to git.
 *   - Never store tokens in localStorage.
 */
module.exports = async function handler(req, res) {
  // CORS — allow calls from GitHub Pages domain or Vercel preview URLs
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { to, subject, message, leadId, source } = req.body || {};

  // Validate required fields
  const errors = [];
  if (!to || typeof to !== 'string' || !to.includes('@') || !to.includes('.')) {
    errors.push('to: valid email address required (e.g. user@example.com)');
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
    errors.push('subject: required, minimum 3 characters');
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('message: required, minimum 10 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  // DRY RUN — v1.8A does not send real emails.
  //
  // v1.8B implementation (activate only after adding RESEND_API_KEY in Vercel):
  //   const { Resend } = require('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   const { data, error } = await resend.emails.send({
  //     from: 'CRM Immersphere Pro <crm@tudominio.com>',
  //     to: [to],
  //     subject,
  //     html: message
  //   });
  //   if (error) return res.status(500).json({ error: error.message });
  //   return res.status(200).json({ success: true, id: data.id });

  // Mask recipient email for safe response (never log full PII in production)
  const atIndex = to.indexOf('@');
  const maskedTo = to.substring(0, Math.min(2, atIndex)) + '***' + to.substring(atIndex);

  return res.status(200).json({
    success: true,
    dryRun: true,
    message: 'v1.8A dry-run: email was NOT sent. Activate real sending by adding RESEND_API_KEY in Vercel dashboard.',
    summary: {
      to: maskedTo,
      subject: subject.substring(0, 60),
      leadId: leadId || null,
      source: source || 'crm',
      timestamp: new Date().toISOString()
    }
  });
};
