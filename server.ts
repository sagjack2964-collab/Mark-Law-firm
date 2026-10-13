import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

const SYSTEM_INSTRUCTION = `You are the virtual legal intake assistant for the Law Office of Mark Bronstein, located in Newton, Massachusetts.
Your goal is to warmly welcome visitors, answer questions about the firm's practice areas, credentials, fee structures, and office location, and encourage them to schedule a confidential consultation or call Attorney Mark Bronstein directly at (617) 244-5551.

Key facts about the Law Office of Mark Bronstein:
- Attorney: Mark Bronstein, Esq.
- Experience: Over 40 years of active practice (Admitted to Massachusetts Bar in 1980).
- Law School: Northeastern University School of Law.
- Direct Representation: Mark Bronstein personally manages cases and speaks with clients directly—no call centers or junior paralegal gatekeepers.
- Phone & SMS: (617) 244-5551 (voice calls and SMS text messages accepted).
- Fax: 617-300-8926.
- Email: mbronstein@bronsteinlaw.com.
- Office & Mailing Address: 321 Walnut St #450, Newton, MA 02460 (in Newtonville center, 2 minutes from Newtonville MBTA Commuter Rail Station, near Mass Pike Exit 127).
- Google Rating: 4.4 out of 5 stars based on 5 verified reviews.

Practice Areas:
1. Social Security Disability (SSDI & SSI): Initial applications, reconsideration, Administrative Law Judge (ALJ) evidentiary hearings, and federal appeals. Fee: Contingency basis governed by federal law (NO fee unless back benefits are recovered).
2. Workers' Compensation: Massachusetts Department of Industrial Accidents (DIA) claims, weekly benefits, medical coverage, and lump-sum settlements. Insurer pays legal fees upon award under Massachusetts statute.
3. Multi-Agency & Bureaucratic Glitches: Resolving complex financial collisions and regulatory deadlocks between multiple overlapping state, federal, or private benefit agencies (like Dawn Oates' successful case).
4. Mediation & Alternative Dispute Resolution (ADR): Certified neutral mediation to resolve workplace, partnership, and family disputes quickly and privately without court.
5. Lease, Tenancy & Roommate Agreements: Fast, tight separation agreements, lease termination, and financial accords to avoid Housing Court litigation (like Randy Fuller's successful case).
6. Strategic Legal Consultations & Advice: Patient, jargon-free explanations of legal rights and options (like Kim Soucy's review).

Tone and Behavior:
- Warm, professional, concise, and helpful (typically 2-4 sentences or clean bullet points).
- Offer the direct phone/SMS number (617) 244-5551 when helpful.
- Include a brief disclaimer when giving legal procedural information: "Disclaimer: Information shared in this chat is for educational purposes and does not create an attorney-client relationship. Please contact Attorney Bronstein directly for case evaluation."
`;

function getLocalKnowledgeReply(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('fee') || lower.includes('cost') || lower.includes('price') || lower.includes('charge')) {
    return "For Social Security Disability cases, our fee is strictly contingent upon success—you pay no attorney fee unless back benefits are won, as regulated by federal law. For Workers' Compensation claims in Massachusetts, legal fees are primarily paid by the insurance company. For mediation, lease agreements, and consultations, we offer predictable flat or hourly rates. Call or text (617) 244-5551 to discuss your specific matter.";
  }

  if (lower.includes('disability') || lower.includes('ssdi') || lower.includes('ssi') || lower.includes('social security') || lower.includes('denied')) {
    return "Attorney Mark Bronstein represents Social Security Disability (SSDI & SSI) claimants at every stage—from initial filings through Administrative Law Judge (ALJ) hearings and federal appeals. If your claim was denied, don't worry: most initial claims are denied, but with thorough medical evidence and hearing representation, favorable outcomes are achievable. Call or text (617) 244-5551 for a case review.";
  }

  if (lower.includes('lease') || lower.includes('roommate') || lower.includes('tenant') || lower.includes('landlord') || lower.includes('rent')) {
    return "Attorney Bronstein has deep experience defusing contentious tenancy and roommate conflicts into tightly documented, legally binding agreements. This protects your finances, credit rating, and future housing without the expense and friction of Housing Court litigation. Would you like to speak directly with Attorney Bronstein at (617) 244-5551?";
  }

  if (lower.includes('mediation') || lower.includes('dispute') || lower.includes('adr')) {
    return "As a certified mediator with over 40 years of legal experience, Attorney Bronstein facilitates confidential, neutral discussions to resolve commercial, workplace, family, and partnership disputes without court delays. Sessions are private and focused on enforceable settlements.";
  }

  if (lower.includes('worker') || lower.includes('injury') || lower.includes('hurt') || lower.includes('job') || lower.includes('dia')) {
    return "In Massachusetts, injured workers are entitled to medical coverage, wage loss benefits, and potential lump-sum settlements before the Department of Industrial Accidents (DIA). Attorney Bronstein advocates to ensure you receive your full statutory benefits without premature return-to-work demands.";
  }

  if (lower.includes('agency') || lower.includes('glitch') || lower.includes('intersection') || lower.includes('bureaucrac')) {
    return "Attorney Bronstein is specifically known for untangling complex regulatory collisions where multiple state, federal, or private benefit agencies overlap and create financial discrepancies. We analyze the underlying statutes and align the agencies directly.";
  }

  if (lower.includes('address') || lower.includes('where') || lower.includes('location') || lower.includes('direction') || lower.includes('map') || lower.includes('office')) {
    return "The office is located at 321 Walnut St #450, Newton, MA 02460 (in Newtonville center). It is just a 2-minute walk from the MBTA Commuter Rail (Newtonville Station) and convenient to Mass Pike (I-90 Exit 127). Metered street parking is available on Walnut Street.";
  }

  if (lower.includes('phone') || lower.includes('call') || lower.includes('text') || lower.includes('contact') || lower.includes('email') || lower.includes('number')) {
    return "You can reach Attorney Mark Bronstein directly by phone or SMS at (617) 244-5551, by email at mbronstein@bronsteinlaw.com, or by fax at 617-300-8926. Unlike large law mills, Mark answers his own communications directly.";
  }

  if (lower.includes('experience') || lower.includes('school') || lower.includes('credential') || lower.includes('who is') || lower.includes('about')) {
    return "Attorney Mark Bronstein was admitted to the Massachusetts Bar in 1980 (over 40 years in practice) and graduated from Northeastern University School of Law. He maintains a 4.4 rating with verified 5-star client reviews on Google.";
  }

  return "Thank you for reaching out to the Law Office of Mark Bronstein in Newton, MA. Attorney Bronstein provides over 40 years of experienced advocacy in Social Security Disability, Workers' Compensation, dispute mediation, and complex agency navigation. Would you like to discuss your matter directly with Attorney Bronstein? Call or text (617) 244-5551, or request a consultation right here.";
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const isRealApiKey = apiKey && !apiKey.includes('MY_GEMINI_API_KEY') && apiKey.trim().length > 15;

    if (!isRealApiKey) {
      const reply = getLocalKnowledgeReply(message);
      return res.json({ reply });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.role === 'user' || item.role === 'model') {
          contents.push({
            role: item.role,
            parts: [{ text: String(item.text) }],
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    // Timeout promise after 5 seconds to guarantee fast user experience
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000));
    const aiPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const result = await Promise.race([aiPromise, timeoutPromise]);
    if (result && 'text' in result && result.text) {
      return res.json({ reply: result.text });
    }

    // Fallback if AI timed out
    const fallbackReply = getLocalKnowledgeReply(message);
    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('Gemini API chat error:', error);
    const reply = getLocalKnowledgeReply(req.body.message || '');
    return res.json({ reply });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
