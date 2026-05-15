import React from "react";
import useLang from "../context/useLang";

export default function AboutPage() {
  const { t, lang } = useLang();

  return (
    /* Unified Background with Radial Gradient */
    <div className="min-h-screen bg-white bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white to-green-50/40">
      
      <div className="px-6 py-16 max-w-4xl mx-auto space-y-16">
        
        {/* Header Section with Decorative Leaf/Element */}
        <section className="text-center space-y-4   ">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {t.about.aboutSection.title}
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-6">
            {t.about.aboutSection.text}
          </p>
        </section>

        {/* Content Cards Wrapper */}
        <div className="grid gap-8">
          
          {/* Shipping & Returns Card */}
          <section id="shipping" className="scroll-mt-24 p-8 bg-white/70 backdrop-blur-sm rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a2 2 0 012-2m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">{t.about.shipping.title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">{t.about.shipping.text}</p>
          </section>

          {/* Privacy & Terms Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <section id="privacy" className="scroll-mt-24 p-8 bg-white/70 backdrop-blur-sm rounded-[2rem] border border-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-green-800">{t.about.privacy.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{t.about.privacy.text}</p>
            </section>

            <section id="terms" className="scroll-mt-24 p-8 bg-white/70 backdrop-blur-sm rounded-[2rem] border border-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-green-800">{t.about.terms.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{t.about.terms.text}</p>
            </section>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-8 text-center text-slate-900">{t.about.faq.title}</h2>
            <div className="space-y-4">
              {t.about.faq.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group border border-slate-100 rounded-2xl p-6 bg-white hover:border-green-200 transition-all duration-300 shadow-sm"
                >
                  <h3 className="font-semibold text-lg text-slate-800 group-hover:text-green-700 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 mt-3 leading-relaxed border-t border-slate-50 pt-3">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}