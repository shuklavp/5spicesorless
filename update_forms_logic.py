# 1. Update Letterbox.jsx
with open('src/components/Letterbox.jsx', 'r') as f:
    l_code = f.read()

# Import Loader2 and FORMS_CONFIG
old_import = "import { ArrowUpRight, Check, Heart, Mail, Send, ShieldCheck, Utensils, Briefcase } from 'lucide-react';"
new_import = "import { ArrowUpRight, Check, Heart, Mail, Send, ShieldCheck, Utensils, Briefcase, Loader2 } from 'lucide-react';\nimport { FORMS_CONFIG } from '../config/forms';"
assert old_import in l_code
l_code = l_code.replace(old_import, new_import)

# State
old_state = "  const [spamRejected, setSpamRejected] = useState(false);"
new_state = "  const [spamRejected, setSpamRejected] = useState(false);\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  const [submitError, setSubmitError] = useState('');"
assert old_state in l_code
l_code = l_code.replace(old_state, new_state)

# Submit logic
old_submit = """  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-Spam Check 1: Honeypot field must be empty
    if (formData.website_url) {
      console.warn('Bot submission blocked via honeypot.');
      setSpamRejected(true);
      return;
    }

    // Anti-Spam Check 2: Dwell time must be at least 2.5 seconds
    const elapsed = Date.now() - loadTime;
    if (elapsed < 2500) {
      console.warn('Bot submission blocked via dwell time.');
      setSpamRejected(true);
      return;
    }

    setSubmitted(true);
  };"""

new_submit = """  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Anti-Spam Check 1: Honeypot field must be empty
    if (formData.website_url) {
      console.warn('Bot submission blocked via honeypot.');
      setSpamRejected(true);
      return;
    }

    // Anti-Spam Check 2: Dwell time must be at least 2.5 seconds
    const elapsed = Date.now() - loadTime;
    if (elapsed < 2500) {
      console.warn('Bot submission blocked via dwell time.');
      setSpamRejected(true);
      return;
    }

    setIsSubmitting(true);

    try {
      if (FORMS_CONFIG.web3formsAccessKey && FORMS_CONFIG.web3formsAccessKey !== 'YOUR_ACCESS_KEY_HERE') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: FORMS_CONFIG.web3formsAccessKey,
            subject: `[5 Spices Letterbox] [${selectedCategory.toUpperCase()}] from ${isAnonymous ? 'Anonymous' : (formData.name || 'Reader')}`,
            from_name: '5 Spices or Less — Letterbox',
            category: selectedCategory,
            author_type: isAnonymous ? 'Anonymous' : 'Named',
            sender_name: isAnonymous ? 'Anonymous' : formData.name,
            sender_email: formData.email || 'None provided',
            letter: formData.question,
          }),
        });
        const resData = await response.json();
        if (resData.success) {
          setSubmitted(true);
        } else {
          setSubmitError(resData.message || 'Submission error. Please try again.');
        }
      } else {
        // Fallback for preview mode
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };"""

assert old_submit in l_code
l_code = l_code.replace(old_submit, new_submit)

# Button
old_btn = """                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-md shadow-berry-600/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Drop Into Letterbox</span>
                </button>"""

new_btn = """                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 disabled:opacity-60 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-md shadow-berry-600/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Delivering Letter...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Drop Into Letterbox</span>
                    </>
                  )}
                </button>"""

assert old_btn in l_code
l_code = l_code.replace(old_btn, new_btn)

with open('src/components/Letterbox.jsx', 'w') as f:
    f.write(l_code)
print("Updated Letterbox.jsx with Web3Forms integration")

# 2. Update AdvisoryPage.jsx
with open('src/components/AdvisoryPage.jsx', 'r') as f:
    a_code = f.read()

old_a_import = "import { ArrowLeft, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles, Send } from 'lucide-react';"
new_a_import = "import { ArrowLeft, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles, Send, Loader2 } from 'lucide-react';\nimport { FORMS_CONFIG } from '../config/forms';"
assert old_a_import in a_code
a_code = a_code.replace(old_a_import, new_a_import)

old_a_state = "  const [spamRejected, setSpamRejected] = useState(false);"
new_a_state = "  const [spamRejected, setSpamRejected] = useState(false);\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  const [submitError, setSubmitError] = useState('');"
assert old_a_state in a_code
a_code = a_code.replace(old_a_state, new_a_state)

old_a_submit = """  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-Spam Check 1: Honeypot field must be empty
    if (formData.website_url) {
      console.warn('Bot submission blocked via honeypot.');
      setSpamRejected(true);
      return;
    }

    // Anti-Spam Check 2: Dwell time must be at least 2.5 seconds
    const elapsed = Date.now() - loadTime;
    if (elapsed < 2500) {
      console.warn('Bot submission blocked via dwell time.');
      setSpamRejected(true);
      return;
    }

    setSubmitted(true);
  };"""

new_a_submit = """  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Anti-Spam Check 1: Honeypot field must be empty
    if (formData.website_url) {
      console.warn('Bot submission blocked via honeypot.');
      setSpamRejected(true);
      return;
    }

    // Anti-Spam Check 2: Dwell time must be at least 2.5 seconds
    const elapsed = Date.now() - loadTime;
    if (elapsed < 2500) {
      console.warn('Bot submission blocked via dwell time.');
      setSpamRejected(true);
      return;
    }

    setIsSubmitting(true);

    try {
      if (FORMS_CONFIG.web3formsAccessKey && FORMS_CONFIG.web3formsAccessKey !== 'YOUR_ACCESS_KEY_HERE') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: FORMS_CONFIG.web3formsAccessKey,
            subject: `[5 Spices Advisory] Confidential Enquiry from ${formData.name || 'Founder'} (${formData.venture || 'Venture'})`,
            from_name: '5 Spices or Less — Advisory Intake',
            founder_name: formData.name,
            founder_email: formData.email,
            venture: formData.venture,
            mode_selected: formData.advisoryMode,
            bottleneck: formData.bottleneck,
          }),
        });
        const resData = await response.json();
        if (resData.success) {
          setSubmitted(true);
        } else {
          setSubmitError(resData.message || 'Submission error. Please try again.');
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };"""

assert old_a_submit in a_code
a_code = a_code.replace(old_a_submit, new_a_submit)

# Advisory submit button
old_a_btn = """                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-berry-600/25 flex items-center justify-center gap-2 group"
                >
                  <span>Send Confidential Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>"""

new_a_btn = """                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 disabled:opacity-60 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-berry-600/25 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Delivering Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Confidential Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>"""

assert old_a_btn in a_code
a_code = a_code.replace(old_a_btn, new_a_btn)

with open('src/components/AdvisoryPage.jsx', 'w') as f:
    f.write(a_code)
print("Updated AdvisoryPage.jsx with Web3Forms integration")
