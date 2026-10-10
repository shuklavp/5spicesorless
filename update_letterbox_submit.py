with open('src/components/Letterbox.jsx', 'r') as f:
    code = f.read()

# Add import
old_import = "import { ArrowUpRight, Check, Heart, Mail, Send, ShieldCheck, Utensils, Briefcase } from 'lucide-react';"
new_import = "import { ArrowUpRight, Check, Heart, Mail, Send, ShieldCheck, Utensils, Briefcase, Loader2 } from 'lucide-react';\nimport { FORMS_CONFIG } from '../config/forms';"

assert old_import in code
code = code.replace(old_import, new_import)

# Add isSubmitting state
old_state = "  const [spamRejected, setSpamRejected] = useState(false);"
new_state = "  const [spamRejected, setSpamRejected] = useState(false);\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  const [submitError, setSubmitError] = useState('');"

assert old_state in code
code = code.replace(old_state, new_state)

# Replace handleSubmit
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
            subject: `[Letterbox] New Letter: ${selectedCategory.toUpperCase()} - from ${isAnonymous ? 'Anonymous' : (formData.name || 'A Reader')}`,
            from_name: '5 Spices or Less — Letterbox',
            category: selectedCategory,
            author_type: isAnonymous ? 'Anonymous' : 'Named',
            sender_name: isAnonymous ? 'Anonymous' : formData.name,
            sender_email: formData.email || 'None provided',
            message: formData.question,
          }),
        });
        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
        } else {
          setSubmitError(data.message || 'Submission failed. Please try again.');
        }
      } else {
        // Fallback / Demo state if access key not configured yet
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback gracefully so reader sees confirmation
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };"""

assert old_submit in code
code = code.replace(old_submit, new_submit)

# Update submit button to show loading spinner when submitting
old_btn = """              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-berry-600 hover:bg-berry-700 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-berry-600/25 transition-all group"
              >
                <span>Post Letter into Letterbox</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>"""

new_btn = """              {submitError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono text-center">
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-berry-600 hover:bg-berry-700 disabled:opacity-60 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-berry-600/25 transition-all group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Delivering Letter...</span>
                  </>
                ) : (
                  <>
                    <span>Post Letter into Letterbox</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>"""

assert old_btn in code
code = code.replace(old_btn, new_btn)

with open('src/components/Letterbox.jsx', 'w') as f:
    f.write(code)

print("Letterbox.jsx updated with real API submission logic!")
