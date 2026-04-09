import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Clock } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '👋 Hello! Welcome to IBClassesOnline — Your trusted partner for IB excellence.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      type: 'bot',
      text: 'I can help you with information about our courses, pricing, tutors, and more. What would you like to know?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    { id: 1, text: 'What courses does IBClassesOnline offer?', icon: '📚' },
    { id: 2, text: 'What are the pricing plans?', icon: '💰' },
    { id: 3, text: 'How do I book a demo?', icon: '📅' },
    { id: 4, text: 'Do you offer IB/MYP/DP coaching?', icon: '🎓' },
    { id: 5, text: 'What subjects do you support?', icon: '📖' }
  ];

  const botResponses = {
    'What courses does IBClassesOnline offer?': 
      'We offer comprehensive IB coaching for:\n\n• IB MYP (Grades 6-10)\n• IB DP (Grades 11-12)\n• All IB Subjects: Physics, Chemistry, Biology, Mathematics, Economics, Computer Science, English, French, German\n• IB Core Components: Extended Essay, TOK, Internal Assessments, CAS\n\nWould you like to know more about any specific subject?',
    
    'What are the pricing plans?':
      'Our pricing is flexible and customized based on:\n\n✓ Subject requirements\n✓ Grade level (MYP/DP)\n✓ Number of sessions per week\n✓ Group or individual classes\n\n📞 Call us at +91 96114 88690 or WhatsApp for personalized pricing.\n\nWe also offer a FREE DEMO CLASS! Would you like to book one?',
    
    'How do I book a demo?':
      '🎉 Booking a demo is easy!\n\nYou can:\n1. WhatsApp us at +91 96114 88690\n2. Call us directly at +91 96114 88690\n3. Fill the contact form on our website\n\nOur team will schedule a convenient time for your FREE demo class. What subject are you interested in?',
    
    'Do you offer IB/MYP/DP coaching?':
      'Yes! We specialize exclusively in IB curriculum:\n\n✅ IB MYP (Middle Years Programme) - Grades 6-10\n✅ IB DP (Diploma Programme) - Grades 11-12\n✅ Pre-IB Foundation courses\n✅ IB Core Components (EE, TOK, IA, CAS)\n\nAll our tutors are IB-certified experts with years of experience. Want to meet our faculty?',
    
    'What subjects do you support?':
      'We cover all major IB subjects:\n\n🔬 Sciences: Physics, Chemistry, Biology\n📐 Mathematics: AA & AI (SL/HL)\n💼 Individuals & Societies: Economics, History\n💻 Computer Science\n🌍 Languages: English, French, German\n\nPlus full support for Extended Essay, TOK, Internal Assessments, and CAS.\n\nWhich subject do you need help with?'
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickQuestion = (question) => {
    // Add user message
    const userMessage = {
      type: 'user',
      text: question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Add bot response after delay
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: botResponses[question] || 'Thank you for your question! Our team will get back to you shortly. You can also reach us directly at +91 96114 88690.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Add bot response
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: 'Thank you for your message! Our team will respond shortly. For immediate assistance, please call us at +91 96114 88690 or WhatsApp us.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="bg-gray-800 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap shadow-xl">
              Need help? Chat with us!
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#0071BD] to-[#005A9C] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" 
                    alt="Assistant" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">IB Assistant</h3>
                <div className="flex items-center gap-1 text-xs text-white/90">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Online | Ask me anything</span>
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="hover:bg-white/20 p-2 rounded-full transition-all duration-200"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.type === 'user'
                      ? 'bg-[#FF6B35] text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <span className={`text-[10px] mt-1 block ${message.type === 'user' ? 'text-white/80' : 'text-gray-500'}`}>
                    {message.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 font-semibold px-2">Quick Questions:</p>
                {quickQuestions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuickQuestion(question.text)}
                    className="w-full text-left p-3 bg-white hover:bg-blue-50 hover:border-blue-300 border border-gray-200 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md group"
                  >
                    <span className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-[#0071BD]">
                      <span className="text-lg">{question.icon}</span>
                      <span className="font-medium">{question.text}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Contact Options */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
              <p className="text-xs font-semibold text-gray-700 mb-3">📞 Contact Us Directly:</p>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/919611488690" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +91 96114 88690 (WhatsApp)
                </a>
                <a 
                  href="tel:+919611488690"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +91 96114 88690 (Call)
                </a>
                <a 
                  href="mailto:info@ibclassesonline.com"
                  className="flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  info@ibclassesonline.com
                </a>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white p-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-100">
            <p className="text-[10px] text-gray-500">
              Powered by <span className="font-semibold text-[#FF6B35]">IBClassesOnline AI</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
