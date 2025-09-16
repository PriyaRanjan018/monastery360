// Monastery360 - Main Application
// Add this complete language system to your app.js

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'en';
        this.translations = {
            en: {
                // Navigation
                nav_home: "Home",
                nav_tours: "Virtual Tours",
                nav_map: "Map",
                nav_archives: "Archives",
                nav_calendar: "Events",
                nav_transport: "Transport",
                
                // Hero Section
                hero_title: "Discover Sikkim's Sacred Heritage",
                hero_subtitle: "Explore 200+ monasteries through immersive virtual experiences",
                stat_monasteries: "Monasteries",
                stat_tours: "Virtual Tours",
                stat_archives: "Archives",
                btn_start_tour: "Start Virtual Tour",
                btn_explore_map: "Explore Map",
                
                // Tours Section
                tours_title: "360° Virtual Tours",
                tours_subtitle: "Experience monasteries from anywhere in the world",
                filter_all: "All Tours",
                filter_popular: "Popular",
                filter_ancient: "Ancient",
                filter_remote: "Remote",
                tour_rating: "Rating",
                tour_explore: "Explore",
                
                // Map Section
                map_title: "Interactive Monastery Map",
                map_subtitle: "Plan your spiritual journey through Sikkim",
                map_search: "Search monasteries...",
                map_legend: "Legend",
                map_ancient: "Ancient (Pre-1800)",
                map_modern: "Modern",
                map_virtual: "Virtual Tour Available",
                
                // Archives Section
                archives_title: "Digital Archives",
                archives_subtitle: "Preserving centuries of Buddhist art and manuscripts",
                archive_manuscripts: "Manuscripts",
                archive_manuscripts_desc: "Ancient texts and scriptures",
                archive_murals: "Murals",
                archive_murals_desc: "Sacred wall paintings",
                archive_artifacts: "Artifacts",
                archive_artifacts_desc: "Religious objects",
                archive_documents: "Documents",
                archive_documents_desc: "Historical records",
                archive_download: "Download High Resolution",
                
                // Calendar Section
                calendar_title: "Cultural Calendar",
                calendar_subtitle: "Join festivals and spiritual events",
                calendar_upcoming: "Upcoming Events",
                calendar_today: "Today",
                
                // Transport Section
                transport_title: "Transport & Tourism Services",
                transport_subtitle: "Complete travel solutions for your monastery visits",
                transport_taxi: "Local Taxis",
                transport_taxi_desc: "Connect with verified local drivers",
                transport_homestay: "Homestays",
                transport_homestay_desc: "Authentic local accommodations",
                transport_guide: "Tour Guides",
                transport_guide_desc: "Expert local guides",
                transport_route: "Route Planner",
                transport_route_desc: "Multi-monastery itineraries",
                btn_book_now: "Book Now",
                btn_explore: "Explore",
                btn_find_guide: "Find Guide",
                btn_plan_route: "Plan Route",
                
                // Booking Form
                booking_title: "Quick Booking",
                booking_service: "Service Type",
                booking_date: "Date",
                booking_contact: "Contact",
                booking_phone_placeholder: "Your phone number",
                btn_confirm: "Confirm Booking",
                
                // Footer
                footer_tagline: "Preserving Sikkim's sacred heritage digitally",
                footer_quick_links: "Quick Links",
                footer_contact: "Contact",
                footer_copyright: "© 2024 Monastery360. Made with ❤️ for Sikkim",
                
                // Common
                loading: "Loading...",
                close: "Close",
                next: "Next",
                previous: "Previous",
                download: "Download",
                share: "Share",
                view_details: "View Details",
                learn_more: "Learn More"
            },
            
            hi: {
                // Navigation
                nav_home: "होम",
                nav_tours: "वर्चुअल टूर",
                nav_map: "नक्शा",
                nav_archives: "अभिलेखागार",
                nav_calendar: "कार्यक्रम",
                nav_transport: "परिवहन",
                
                // Hero Section
                hero_title: "सिक्किम की पवित्र विरासत की खोज करें",
                hero_subtitle: "200+ मठों को इमर्सिव वर्चुअल अनुभवों के माध्यम से देखें",
                stat_monasteries: "मठ",
                stat_tours: "वर्चुअल टूर",
                stat_archives: "अभिलेख",
                btn_start_tour: "वर्चुअल टूर शुरू करें",
                btn_explore_map: "नक्शा देखें",
                
                // Tours Section
                tours_title: "360° वर्चुअल टूर",
                tours_subtitle: "दुनिया में कहीं से भी मठों का अनुभव करें",
                filter_all: "सभी टूर",
                filter_popular: "लोकप्रिय",
                filter_ancient: "प्राचीन",
                filter_remote: "दूरस्थ",
                tour_rating: "रेटिंग",
                tour_explore: "देखें",
                
                // Map Section
                map_title: "इंटरैक्टिव मठ नक्शा",
                map_subtitle: "सिक्किम में अपनी आध्यात्मिक यात्रा की योजना बनाएं",
                map_search: "मठ खोजें...",
                map_legend: "लीजेंड",
                map_ancient: "प्राचीन (1800 से पहले)",
                map_modern: "आधुनिक",
                map_virtual: "वर्चुअल टूर उपलब्ध",
                
                // Archives Section
                archives_title: "डिजिटल अभिलेखागार",
                archives_subtitle: "बौद्ध कला और पांडुलिपियों की शताब्दियों का संरक्षण",
                archive_manuscripts: "पांडुलिपियां",
                archive_manuscripts_desc: "प्राचीन ग्रंथ और शास्त्र",
                archive_murals: "भित्ति चित्र",
                archive_murals_desc: "पवित्र दीवार चित्र",
                archive_artifacts: "कलाकृतियां",
                archive_artifacts_desc: "धार्मिक वस्तुएं",
                archive_documents: "दस्तावेज़",
                archive_documents_desc: "ऐतिहासिक रिकॉर्ड",
                archive_download: "हाई रेज़ोल्यूशन डाउनलोड करें",
                
                // Calendar Section
                calendar_title: "सांस्कृतिक कैलेंडर",
                calendar_subtitle: "त्योहारों और आध्यात्मिक कार्यक्रमों में शामिल हों",
                calendar_upcoming: "आगामी कार्यक्रम",
                calendar_today: "आज",
                
                // Transport Section
                transport_title: "परिवहन और पर्यटन सेवाएं",
                transport_subtitle: "आपकी मठ यात्राओं के लिए संपूर्ण यात्रा समाधान",
                transport_taxi: "स्थानीय टैक्सी",
                transport_taxi_desc: "सत्यापित स्थानीय ड्राइवरों से जुड़ें",
                transport_homestay: "होमस्टे",
                transport_homestay_desc: "प्रामाणिक स्थानीय आवास",
                transport_guide: "टूर गाइड",
                transport_guide_desc: "विशेषज्ञ स्थानीय गाइड",
                transport_route: "रूट प्लानर",
                transport_route_desc: "मल्टी-मठ यात्रा कार्यक्रम",
                btn_book_now: "अभी बुक करें",
                btn_explore: "देखें",
                btn_find_guide: "गाइड खोजें",
                btn_plan_route: "रूट प्लान करें",
                
                // Booking Form
                booking_title: "त्वरित बुकिंग",
                booking_service: "सेवा प्रकार",
                booking_date: "तारीख",
                booking_contact: "संपर्क",
                booking_phone_placeholder: "आपका फोन नंबर",
                btn_confirm: "बुकिंग की पुष्टि करें",
                
                // Footer
                footer_tagline: "सिक्किम की पवित्र विरासत को डिजिटल रूप से संरक्षित करना",
                footer_quick_links: "त्वरित लिंक",
                footer_contact: "संपर्क",
                footer_copyright: "© 2024 Monastery360. सिक्किम के लिए ❤️ से बनाया गया",
                
                // Common
                loading: "लोड हो रहा है...",
                close: "बंद करें",
                next: "अगला",
                previous: "पिछला",
                download: "डाउनलोड",
                share: "शेयर",
                view_details: "विवरण देखें",
                learn_more: "और जानें"
            },
            
            ne: {
                // Navigation
                nav_home: "गृह",
                nav_tours: "भर्चुअल भ्रमण",
                nav_map: "नक्सा",
                nav_archives: "अभिलेख",
                nav_calendar: "कार्यक्रम",
                nav_transport: "यातायात",
                
                // Hero Section
                hero_title: "सिक्किमको पवित्र सम्पदा पत्ता लगाउनुहोस्",
                hero_subtitle: "२००+ गुम्बाहरूलाई इमर्सिभ भर्चुअल अनुभवहरू मार्फत अन्वेषण गर्नुहोस्",
                stat_monasteries: "गुम्बाहरू",
                stat_tours: "भर्चुअल भ्रमण",
                stat_archives: "अभिलेख",
                btn_start_tour: "भर्चुअल भ्रमण सुरु गर्नुहोस्",
                btn_explore_map: "नक्सा हेर्नुहोस्",
                
                // Tours Section
                tours_title: "३६०° भर्चुअल भ्रमण",
                tours_subtitle: "संसारको कुनै पनि ठाउँबाट गुम्बाहरूको अनुभव गर्नुहोस्",
                filter_all: "सबै भ्रमण",
                filter_popular: "लोकप्रिय",
                filter_ancient: "पुरानो",
                filter_remote: "टाढा",
                tour_rating: "रेटिंग",
                tour_explore: "अन्वेषण",
                
                // Map Section
                map_title: "अन्तरक्रियात्मक गुम्बा नक्सा",
                map_subtitle: "सिक्किममा तपाईंको आध्यात्मिक यात्राको योजना बनाउनुहोस्",
                map_search: "गुम्बा खोज्नुहोस्...",
                map_legend: "लेजेन्ड",
                map_ancient: "पुरानो (१८०० भन्दा पहिले)",
                map_modern: "आधुनिक",
                map_virtual: "भर्चुअल भ्रमण उपलब्ध",
                
                // Archives Section
                archives_title: "डिजिटल अभिलेख",
                archives_subtitle: "बौद्ध कला र पाण्डुलिपिहरूको शताब्दीयौं संरक्षण",
                archive_manuscripts: "पाण्डुलिपिहरू",
                archive_manuscripts_desc: "पुरातन ग्रन्थहरू र शास्त्रहरू",
                archive_murals: "भित्ति चित्रहरू",
                archive_murals_desc: "पवित्र भित्ता चित्रहरू",
                archive_artifacts: "कलाकृतिहरू",
                archive_artifacts_desc: "धार्मिक वस्तुहरू",
                archive_documents: "कागजातहरू",
                archive_documents_desc: "ऐतिहासिक अभिलेखहरू",
                archive_download: "उच्च रिजोल्युसन डाउनलोड गर्नुहोस्",
                
                // Calendar Section
                calendar_title: "सांस्कृतिक पात्रो",
                calendar_subtitle: "चाडपर्व र आध्यात्मिक कार्यक्रमहरूमा सामेल हुनुहोस्",
                calendar_upcoming: "आगामी कार्यक्रमहरू",
                calendar_today: "आज",
                
                // Transport Section
                transport_title: "यातायात र पर्यटन सेवाहरू",
                transport_subtitle: "तपाईंको गुम्बा भ्रमणको लागि पूर्ण यात्रा समाधान",
                transport_taxi: "स्थानीय ट्याक्सी",
                transport_taxi_desc: "प्रमाणित स्थानीय चालकहरूसँग जडान गर्नुहोस्",
                transport_homestay: "होमस्टे",
                transport_homestay_desc: "प्रामाणिक स्थानीय आवास",
                transport_guide: "भ्रमण गाइड",
                transport_guide_desc: "विशेषज्ञ स्थानीय गाइडहरू",
                transport_route: "मार्ग योजनाकार",
                transport_route_desc: "बहु-गुम्बा यात्रा कार्यक्रम",
                btn_book_now: "अहिले बुक गर्नुहोस्",
                btn_explore: "अन्वेषण",
                btn_find_guide: "गाइड खोज्नुहोस्",
                btn_plan_route: "मार्ग योजना",
                
                // Booking Form
                booking_title: "द्रुत बुकिंग",
                booking_service: "सेवा प्रकार",
                booking_date: "मिति",
                booking_contact: "सम्पर्क",
                booking_phone_placeholder: "तपाईंको फोन नम्बर",
                btn_confirm: "बुकिंग पुष्टि गर्नुहोस्",
                
                // Footer
                footer_tagline: "सिक्किमको पवित्र सम्पदालाई डिजिटल रूपमा संरक्षण गर्दै",
                footer_quick_links: "द्रुत लिंकहरू",
                footer_contact: "सम्पर्क",
                footer_copyright: "© २०२४ Monastery360. सिक्किमको लागि ❤️ सँग बनाइएको",
                
                // Common
                loading: "लोड हुँदैछ...",
                close: "बन्द गर्नुहोस्",
                next: "अर्को",
                previous: "अघिल्लो",
                download: "डाउनलोड",
                share: "सेयर",
                view_details: "विवरण हेर्नुहोस्",
                learn_more: "थप जान्नुहोस्"
            },
            
            tb: {
                // Navigation (Tibetan)
                nav_home: "ཁྱིམ།",
                nav_tours: "དངོས་མེད་སྐོར་བསྐྱོད།",
                nav_map: "ས་ཁྲ།",
                nav_archives: "ཡིག་མཛོད།",
                nav_calendar: "ལོ་ཐོ།",
                nav_transport: "འགྲུལ་འཁོར།",
                
                // Hero Section
                hero_title: "འབྲས་ལྗོངས་ཀྱི་དམ་པའི་ཤུལ་བཞག་རྙེད་པ།",
                hero_subtitle: "དགོན་པ་ ༢༠༠+ ཞིག་ལ་དངོས་མེད་ཀྱི་ཉམས་མྱོང་བརྒྱུད་ནས་ཞིབ་འཇུག་བྱེད།",
                stat_monasteries: "དགོན་པ།",
                stat_tours: "དངོས་མེད་སྐོར་བསྐྱོད།",
                stat_archives: "ཡིག་མཛོད།",
                btn_start_tour: "དངོས་མེད་སྐོར་བསྐྱོད་འགོ་འཛུགས།",
                btn_explore_map: "ས་ཁྲ་ལྟ་བ།",
                
                // More Tibetan translations...
                // Note: These are approximations - professional translation recommended
                
                // Common
                loading: "འཇུག་བཞིན་པ...",
                close: "སྒོ་རྒྱག",
                next: "རྗེས་མ།",
                previous: "སྔོན་མ།",
                download: "ཕབ་ལེན།",
                share: "བགོ་འགྲེམས།",
                view_details: "ཞིབ་ཕྲ་ལྟ་བ།",
                learn_more: "དེ་ལས་མང་བ་ཤེས་པ།"
            }
        };
    }

    init() {
        this.setupEventListeners();
        this.loadSavedLanguage();
        this.updatePageLanguage();
        this.addGoogleFonts();
    }

    setupEventListeners() {
        // Language button click
        const langBtn = document.getElementById('languageBtn');
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleLanguageDropdown();
            });
        }

        // Language option clicks
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const langCode = e.currentTarget.getAttribute('data-lang-code');
                this.changeLanguage(langCode);
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            this.closeLanguageDropdown();
        });
    }

    toggleLanguageDropdown() {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    }

    closeLanguageDropdown() {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }

    changeLanguage(langCode) {
        this.currentLanguage = langCode;
        localStorage.setItem('preferred-language', langCode);
        
        // Update UI
        this.updatePageLanguage();
        this.updateLanguageButton(langCode);
        this.highlightActiveLanguage(langCode);
        this.closeLanguageDropdown();
        
        // Show confirmation toast
        this.showLanguageToast(langCode);
        
        // Update page attributes for CSS
        document.documentElement.setAttribute('data-language', langCode);
        
        // Trigger language change event
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: langCode } 
        }));
    }

    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        this.updatePlaceholders();
        
        // Update page title
        document.title = this.getTranslation('hero_title') || 'Monastery360';
    }

    updatePlaceholders() {
        // Search box
        const searchBox = document.getElementById('mapSearch');
        if (searchBox) {
            searchBox.placeholder = this.getTranslation('map_search');
        }

        // Phone number input
        const phoneInput = document.getElementById('bookingContact');
        if (phoneInput) {
            phoneInput.placeholder = this.getTranslation('booking_phone_placeholder');
        }
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || 
               this.translations['en'][key] || 
               key;
    }

    updateLanguageButton(langCode) {
        const langDisplay = document.getElementById('currentLang');
        const langNames = {
            'en': 'EN',
            'hi': 'हि',
            'ne': 'ने',
            'tb': 'བོད'
        };
        
        if (langDisplay) {
            langDisplay.textContent = langNames[langCode] || 'EN';
        }
    }

    highlightActiveLanguage(langCode) {
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang-code') === langCode) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    showLanguageToast(langCode) {
        const messages = {
            'en': 'Language changed to English',
            'hi': 'भाषा हिंदी में बदली गई',
            'ne': 'भाषा नेपालीमा परिवर्तन गरियो',
            'tb': 'སྐད་ཡིག་བོད་ཡིག་ཏུ་བསྒྱུར།'
        };

        // Remove existing toast
        const existingToast = document.querySelector('.language-toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'language-toast show';
        toast.textContent = messages[langCode];
        document.body.appendChild(toast);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
            this.updateLanguageButton(savedLang);
            this.highlightActiveLanguage(savedLang);
            document.documentElement.setAttribute('data-language', savedLang);
        }
    }

    addGoogleFonts() {
        // Add Google Fonts for different languages
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600&family=Noto+Sans+Tibetan:wght@400;600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get all available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }

    // Add new translation
    addTranslation(langCode, key, value) {
        if (!this.translations[langCode]) {
            this.translations[langCode] = {};
        }
        this.translations[langCode][key] = value;
    }

    // Translate dynamic content
    translateText(text, targetLang = null) {
        const lang = targetLang || this.currentLanguage;
        
        // This would typically call a translation API
        // For now, return the original text
        return text;
    }

    // Format numbers based on locale
    formatNumber(number) {
        const locales = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'ne': 'ne-NP',
            'tb': 'bo-CN'
        };
        
        return new Intl.NumberFormat(locales[this.currentLanguage] || 'en-US').format(number);
    }

    // Format dates based on locale
    formatDate(date) {
        const locales = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'ne': 'ne-NP',
            'tb': 'bo-CN'
        };
        
        return new Intl.DateTimeFormat(locales[this.currentLanguage] || 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
}

// Initialize Language Manager
const languageManager = new LanguageManager();
languageManager.init();

// Export for use in other parts of the app
window.languageManager = languageManager;

// Listen for language changes in your main app
window.addEventListener('languageChanged', (e) => {
    console.log('Language changed to:', e.detail.language);
    
    // Update any dynamic content here
    if (window.app) {
        window.app.currentLanguage = e.detail.language;
        // Refresh dynamic content
        window.app.renderTours();
        window.app.renderEvents();
        window.app.renderArchives();
    }
});

class Monastery360App {
    constructor() {
        this.currentLanguage = window.languageManager?.getCurrentLanguage() || 'en';
        this.currentTheme = 'light';
        this.monasteries = [];
        this.events = [];
        this.archives = [];
        this.tours = [];
        this.map = null;
        this.markers = [];
        this.currentMonth = new Date();
        this.panoramaRotation = 0;
        this.panoramaZoom = 1;

        this.init();

        window.addEventListener('languageChanged', (e) => {
            this.handleLanguageChange(e.detail.language);
        });
    }

    handleLanguageChange(newLanguage) {
        this.currentLanguage = newLanguage;
        
        // Update dynamic content
        this.updateDynamicContent();
        
        // Update audio guides
        if (this.currentMonastery) {
            this.loadAudioGuide(this.currentMonastery);
        }
    }

    updateDynamicContent() {
        // Update any dynamically generated content
        const tourCards = document.querySelectorAll('.tour-card');
        tourCards.forEach(card => {
            // Update text based on current language
            const exploreBtn = card.querySelector('.btn-outline');
            if (exploreBtn) {
                exploreBtn.textContent = window.languageManager.getTranslation('tour_explore');
            }
        });
    }

    // Modified method to support translations
    renderTours() {
        const grid = document.getElementById('toursGrid');
        if (!grid) return;
        
        grid.innerHTML = this.tours.map(tour => `
            <div class="tour-card" onclick="app.openTour(${tour.id})">
                <div class="tour-image">
                    <img src="${tour.image || 'assets/images/monastery-default.jpg'}" alt="${tour.name}">
                    <span class="tour-badge">360°</span>
                </div>
                <div class="tour-content">
                    <h3 class="tour-title">${tour.name}</h3>
                    <div class="tour-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${tour.location}</span>
                    </div>
                    <p>${tour.description}</p>
                    <div class="tour-actions">
                        <div class="tour-rating">
                            ${'★'.repeat(Math.floor(tour.rating))}
                            <span>${tour.rating}</span>
                        </div>
                        <button class="btn btn-outline">
                            ${window.languageManager.getTranslation('tour_explore')}
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    async init() {
        await this.loadData();
        this.setupEventListeners();
        this.initMap();
        this.renderTours();
        this.renderArchives();
        this.renderCalendar();
        this.renderEvents();
        this.animateStats();
        this.hideLoader();
    }

    // Data Loading
    async loadData() {
        // Sample data - In production, this would come from a server
        this.monasteries = [
            {
                id: 1,
                name: "Rumtek Monastery",
                location: "East Sikkim",
                coordinates: [27.2833, 88.5556],
                established: 1966,
                type: "ancient",
                hasVirtualTour: true,
                description: "The largest monastery in Sikkim, seat of the Karmapa",
                image: "assets/images/rumtek.jpg",
                rating: 4.8,
                audioGuides: {
                    en: "assets/audio/rumtek-en.mp3",
                    hi: "assets/audio/rumtek-hi.mp3",
                    ne: "assets/audio/rumtek-ne.mp3"
                }
            },
            {
                id: 2,
                name: "Pemayangtse Monastery",
                location: "West Sikkim",
                coordinates: [27.3167, 88.2500],
                established: 1705,
                type: "ancient",
                hasVirtualTour: true,
                description: "One of the oldest and most prestigious monasteries",
                image: "assets/images/pemayangtse.jpg",
                rating: 4.7
            },
            {
                id: 3,
                name: "Tashiding Monastery",
                location: "West Sikkim",
                coordinates: [27.3500, 88.2333],
                established: 1641,
                type: "ancient",
                hasVirtualTour: false,
                description: "Sacred monastery with holy water vase",
                image: "assets/images/tashiding.jpg",
                rating: 4.6
            },
            {
                id: 4,
                name: "Enchey Monastery",
                location: "Gangtok",
                coordinates: [27.3389, 88.6065],
                established: 1909,
                type: "modern",
                hasVirtualTour: true,
                description: "200-year-old monastery above Gangtok",
                image: "assets/images/enchey.jpg",
                rating: 4.5
            },
            {
                id: 5,
                name: "Phodong Monastery",
                location: "North Sikkim",
                coordinates: [27.4333, 88.6000],
                established: 1740,
                type: "ancient",
                hasVirtualTour: false,
                description: "Beautiful monastery with ancient murals",
                image: "assets/images/phodong.jpg",
                rating: 4.4
            }
        ];

        this.tours = this.monasteries.filter(m => m.hasVirtualTour).map((m, index) => ({
            ...m,
            tourId: `tour-${index + 1}`,
            duration: "30 mins",
            panorama: `assets/panoramas/monastery-${index + 1}.jpg`
        }));

        this.events = [
            {
                id: 1,
                title: "Losar Festival",
                date: new Date(2024, 1, 10),
                monastery: "Rumtek Monastery",
                type: "festival",
                description: "Tibetan New Year celebration"
            },
            {
                id: 2,
                title: "Saga Dawa",
                date: new Date(2024, 4, 23),
                monastery: "Pemayangtse Monastery",
                type: "festival",
                description: "Buddha's birth, enlightenment and parinirvana"
            },
            {
                id: 3,
                title: "Meditation Retreat",
                date: new Date(2024, 10, 15),
                monastery: "Tashiding Monastery",
                type: "retreat",
                description: "7-day silent meditation retreat"
            },
            {
                id: 4,
                title: "Cham Dance Festival",
                date: new Date(2024, 11, 20),
                monastery: "Enchey Monastery",
                type: "festival",
                description: "Traditional masked dance festival"
            }
        ];

        this.archives = [
            {
                id: 1,
                title: "Ancient Manuscript",
                type: "manuscripts",
                monastery: "Rumtek Monastery",
                year: "17th Century",
                image: "assets/archives/manuscript1.jpg",
                description: "Rare Buddhist text on meditation practices"
            },
            {
                id: 2,
                title: "Sacred Mural",
                type: "murals",
                monastery: "Pemayangtse Monastery",
                year: "18th Century",
                image: "assets/archives/mural1.jpg",
                description: "Depicts the life of Buddha"
            },
            {
                id: 3,
                title: "Prayer Wheel",
                type: "artifacts",
                monastery: "Tashiding Monastery",
                year: "19th Century",
                image: "assets/archives/artifact1.jpg",
                description: "Ancient bronze prayer wheel"
            },
            {
                id: 4,
                title: "Historical Document",
                type: "documents",
                monastery: "Enchey Monastery",
                year: "1909",
                image: "assets/archives/document1.jpg",
                description: "Foundation document of the monastery"
            }
        ];
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation
        document.getElementById('hamburger')?.addEventListener('click', () => this.toggleMobileMenu());
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());

        // Language switcher
        document.getElementById('languageBtn')?.addEventListener('click', () => this.switchLanguage());

        // Search
        document.getElementById('mapSearch')?.addEventListener('input', (e) => this.searchMonasteries(e.target.value));

        // Booking form
        document.getElementById('bookingForm')?.addEventListener('submit', (e) => this.handleBooking(e));

        // Scroll effects
        window.addEventListener('scroll', () => this.handleScroll());
    }

    // UI Functions
    hideLoader() {
        setTimeout(() => {
            document.getElementById('loader')?.classList.add('hidden');
        }, 1500);
    }

    toggleMobileMenu() {
        document.getElementById('navMenu')?.classList.toggle('active');
    }

    handleNavClick(e) {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        this.scrollToSection(target);

        // Update active state
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        // Close mobile menu
        document.getElementById('navMenu')?.classList.remove('active');
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80;
            const top = section.offsetTop - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    handleScroll() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);

        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    switchLanguage() {
        const languages = ['EN', 'HI', 'NE'];
        const currentIndex = languages.indexOf(this.currentLanguage.toUpperCase());
        const nextIndex = (currentIndex + 1) % languages.length;
        this.currentLanguage = languages[nextIndex].toLowerCase();

        const langBtn = document.querySelector('#languageBtn span');
        if (langBtn) {
            langBtn.textContent = languages[nextIndex];
        }

        // Update content based on language
        this.updateLanguageContent();
    }

    updateLanguageContent() {
        // Sample translation implementation
        const translations = {
            en: {
                heroTitle: "Discover Sikkim's Sacred Heritage",
                heroSubtitle: "Explore 200+ monasteries through immersive virtual experiences"
            },
            hi: {
                heroTitle: "सिक्किम की पवित्र विरासत की खोज करें",
                heroSubtitle: "200+ मठों का अन्वेषण करें"
            },
            ne: {
                heroTitle: "सिक्किमको पवित्र सम्पदा पत्ता लगाउनुहोस्",
                heroSubtitle: "200+ गुम्बाहरू अन्वेषण गर्नुहोस्"
            }
        };

        const trans = translations[this.currentLanguage];
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');

        if (heroTitle) heroTitle.textContent = trans.heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = trans.heroSubtitle;
    }

    // Tours
    renderTours() {
        const grid = document.getElementById('toursGrid');
        if (!grid) return;

        grid.innerHTML = this.tours.map(tour => `
            <div class="tour-card" onclick="app.openTour(${tour.id})">
                <div class="tour-image">
                    <img src="${tour.image || 'assets/images/monastery-default.jpg'}" alt="${tour.name}">
                    <span class="tour-badge">360°</span>
                </div>
                <div class="tour-content">
                    <h3 class="tour-title">${tour.name}</h3>
                    <div class="tour-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${tour.location}</span>
                    </div>
                    <p>${tour.description}</p>
                    <div class="tour-actions">
                        <div class="tour-rating">
                            ${'★'.repeat(Math.floor(tour.rating))}
                            <span>${tour.rating}</span>
                        </div>
                        <button class="btn btn-outline">Start Tour</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    startTour() {
        const firstTour = this.tours[0];
        if (firstTour) {
            this.openTour(firstTour.id);
        }
    }

    openTour(monasteryId) {
        const monastery = this.monasteries.find(m => m.id === monasteryId);
        if (!monastery) return;

        const viewer = document.getElementById('tourViewer');
        const title = document.getElementById('tourTitle');
        const description = document.getElementById('tourDescription');
        const panorama = document.getElementById('panoramaImage');

        if (viewer) viewer.classList.add('active');
        if (title) title.textContent = monastery.name;
        if (description) description.textContent = monastery.description;
        if (panorama) {
            panorama.src = `assets/panoramas/monastery-${monasteryId}.jpg`;
            // Fallback to placeholder image
            panorama.onerror = () => {
                panorama.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzY2N2VlYSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQwMCIgeT0iMjAwIiBzdHlsZT0iZmlsbDojZmZmO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtZmFtaWx5OkFyaWFsIj4zNjDCsCBWaXJ0dWFsIFRvdXI8L3RleHQ+PC9zdmc+';
            };
        }

        // Load audio guide if available
        if (monastery.audioGuides) {
            this.loadAudioGuide(monastery);
        }
    }

    closeTourViewer() {
        document.getElementById('tourViewer')?.classList.remove('active');
        this.pauseAudio();
    }

    rotateLeft() {
        this.panoramaRotation -= 45;
        this.updatePanorama();
    }

    rotateRight() {
        this.panoramaRotation += 45;
        this.updatePanorama();
    }

    zoomIn() {
        this.panoramaZoom = Math.min(this.panoramaZoom + 0.2, 3);
        this.updatePanorama();
    }

    zoomOut() {
        this.panoramaZoom = Math.max(this.panoramaZoom - 0.2, 1);
        this.updatePanorama();
    }

    updatePanorama() {
        const panorama = document.getElementById('panoramaImage');
        if (panorama) {
            panorama.style.transform = `rotate(${this.panoramaRotation}deg) scale(${this.panoramaZoom})`;
        }
    }

    toggleFullscreen() {
        const viewer = document.getElementById('tourViewer');
        if (!document.fullscreenElement) {
            viewer?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    // Map
    initMap() {
        // Initialize Leaflet map
        this.map = L.map('mapContainer').setView([27.5330, 88.5122], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        // Add monastery markers
        this.monasteries.forEach(monastery => {
            const marker = L.marker(monastery.coordinates)
                .addTo(this.map)
                .bindPopup(`
                    <div style="text-align: center;">
                        <h4>${monastery.name}</h4>
                        <p>${monastery.location}</p>
                        ${monastery.hasVirtualTour ?
                        `<button onclick="app.openTour(${monastery.id})" class="btn btn-primary" style="margin-top: 10px;">
                                Virtual Tour
                            </button>` : ''}
                    </div>
                `);

            this.markers.push(marker);
        });

        // Render monastery list
        this.renderMonasteryList();
    }

    renderMonasteryList() {
        const list = document.getElementById('monasteryList');
        if (!list) return;

        list.innerHTML = this.monasteries.map(monastery => `
            <div class="monastery-item" onclick="app.focusMonastery(${monastery.id})">
                <h4>${monastery.name}</h4>
                <p>${monastery.location}</p>
                ${monastery.hasVirtualTour ? '<span style="color: var(--primary);">360° Tour Available</span>' : ''}
            </div>
        `).join('');
    }

    focusMonastery(id) {
        const monastery = this.monasteries.find(m => m.id === id);
        if (monastery && this.map) {
            this.map.setView(monastery.coordinates, 13);

            // Open popup
            const marker = this.markers[this.monasteries.indexOf(monastery)];
            if (marker) marker.openPopup();
        }
    }

    searchMonasteries(query) {
        const filtered = this.monasteries.filter(m =>
            m.name.toLowerCase().includes(query.toLowerCase()) ||
            m.location.toLowerCase().includes(query.toLowerCase())
        );

        const list = document.getElementById('monasteryList');
        if (!list) return;

        list.innerHTML = filtered.map(monastery => `
            <div class="monastery-item" onclick="app.focusMonastery(${monastery.id})">
                <h4>${monastery.name}</h4>
                <p>${monastery.location}</p>
                ${monastery.hasVirtualTour ? '<span style="color: var(--primary);">360° Tour Available</span>' : ''}
            </div>
        `).join('');
    }

    // Archives
    renderArchives() {
        const gallery = document.getElementById('archiveGallery');
        if (!gallery) return;

        gallery.innerHTML = this.archives.map(archive => `
            <div class="archive-item" onclick="app.openArchive(${archive.id})">
                <img src="${archive.image || 'assets/images/archive-default.jpg'}" alt="${archive.title}"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjIwMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDojNjY2O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtZmFtaWx5OkFyaWFsIj5BcmNoaXZlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
                <div class="archive-overlay">
                    <h4>${archive.title}</h4>
                    <p>${archive.monastery} • ${archive.year}</p>
                </div>
            </div>
        `).join('');
    }

    filterArchives(type) {
        const filtered = type === 'all' ? this.archives : this.archives.filter(a => a.type === type);

        const gallery = document.getElementById('archiveGallery');
        if (!gallery) return;

        gallery.innerHTML = filtered.map(archive => `
            <div class="archive-item" onclick="app.openArchive(${archive.id})">
                <img src="${archive.image || 'assets/images/archive-default.jpg'}" alt="${archive.title}"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjIwMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDojNjY2O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtZmFtaWx5OkFyaWFsIj5BcmNoaXZlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
                <div class="archive-overlay">
                    <h4>${archive.title}</h4>
                    <p>${archive.monastery} • ${archive.year}</p>
                </div>
            </div>
        `).join('');
    }

    openArchive(id) {
        const archive = this.archives.find(a => a.id === id);
        if (!archive) return;

        const viewer = document.getElementById('archiveViewer');
        const title = document.getElementById('archiveTitle');
        const description = document.getElementById('archiveDescription');
        const date = document.getElementById('archiveDate');
        const location = document.getElementById('archiveLocation');
        const image = document.getElementById('archiveImage');

        if (viewer) viewer.classList.add('active');
        if (title) title.textContent = archive.title;
        if (description) description.textContent = archive.description;
        if (date) date.textContent = archive.year;
        if (location) location.textContent = archive.monastery;
        if (image) {
            image.src = archive.image || 'assets/images/archive-default.jpg';
            image.onerror = () => {
                image.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjIwMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDojNjY2O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtZmFtaWx5OkFyaWFsIj5BcmNoaXZlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
            };
        }
    }

    closeArchiveViewer() {
        document.getElementById('archiveViewer')?.classList.remove('active');
    }

    downloadArchive() {
        alert('Download started! The high-resolution image will be saved to your device.');
    }

    // Calendar
    renderCalendar() {
        const grid = document.getElementById('calendarGrid');
        if (!grid) return;

        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Update month display
        const monthDisplay = document.getElementById('calendarMonth');
        if (monthDisplay) {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            monthDisplay.textContent = `${monthNames[month]} ${year}`;
        }

        let html = '';

        // Day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            html += `<div style="font-weight: bold; text-align: center;">${day}</div>`;
        });

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            html += '<div></div>';
        }

        // Days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const hasEvent = this.events.some(e =>
                e.date.getDate() === day &&
                e.date.getMonth() === month &&
                e.date.getFullYear() === year
            );

            const isToday = new Date().toDateString() === date.toDateString();

            html += `
                <div class="calendar-day ${hasEvent ? 'has-event' : ''} ${isToday ? 'today' : ''}"
                     onclick="app.selectDate(${year}, ${month}, ${day})">
                    ${day}
                </div>
            `;
        }

        grid.innerHTML = html;
    }

    previousMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
        this.renderCalendar();
    }

    nextMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
        this.renderCalendar();
    }

    selectDate(year, month, day) {
        const date = new Date(year, month, day);
        const dayEvents = this.events.filter(e =>
            e.date.getDate() === day &&
            e.date.getMonth() === month &&
            e.date.getFullYear() === year
        );

        if (dayEvents.length > 0) {
            alert(`Events on ${date.toDateString()}:\n\n${dayEvents.map(e =>
                `• ${e.title} at ${e.monastery}`).join('\n')}`);
        }
    }

    renderEvents() {
        const list = document.getElementById('eventsList');
        if (!list) return;

        const upcomingEvents = this.events
            .filter(e => e.date >= new Date())
            .sort((a, b) => a.date - b.date)
            .slice(0, 5);

        list.innerHTML = upcomingEvents.map(event => `
            <div class="event-card">
                <                <div class="event-date">${event.date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })}</div>
                <h4>${event.title}</h4>
                <p>${event.monastery}</p>
                <small>${event.description}</small>
            </div>
        `).join('');
    }

    // Audio Guide
    loadAudioGuide(monastery) {
        const audio = document.getElementById('audioGuide');
        const widgetAudio = document.getElementById('audioWidgetPlayer');

        if (monastery.audioGuides && monastery.audioGuides[this.currentLanguage]) {
            const audioUrl = monastery.audioGuides[this.currentLanguage];

            if (audio) {
                audio.src = audioUrl;
                // Fallback to sample audio
                audio.onerror = () => {
                    audio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
                };
            }

            if (widgetAudio) {
                widgetAudio.src = audioUrl;
                widgetAudio.onerror = () => {
                    widgetAudio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
                };
            }

            // Update widget info
            const widgetTitle = document.getElementById('audioWidgetTitle');
            const widgetLocation = document.getElementById('audioWidgetLocation');
            const widgetImage = document.getElementById('audioWidgetImage');

            if (widgetTitle) widgetTitle.textContent = monastery.name;
            if (widgetLocation) widgetLocation.textContent = monastery.location;
            if (widgetImage) {
                widgetImage.src = monastery.image || 'assets/images/monastery-default.jpg';
                widgetImage.onerror = () => {
                    widgetImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjY2NjIi8+PC9zdmc+';
                };
            }
        }
    }

    toggleAudio() {
        const audio = document.getElementById('audioGuide');
        if (audio) {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }

    pauseAudio() {
        const audio = document.getElementById('audioGuide');
        const widgetAudio = document.getElementById('audioWidgetPlayer');

        if (audio) audio.pause();
        if (widgetAudio) widgetAudio.pause();
    }

    changeAudioLanguage() {
        const select = document.getElementById('audioLanguage');
        if (select) {
            this.currentLanguage = select.value;
            // Reload audio with new language
            const tourTitle = document.getElementById('tourTitle');
            if (tourTitle) {
                const monastery = this.monasteries.find(m => m.name === tourTitle.textContent);
                if (monastery) {
                    this.loadAudioGuide(monastery);
                }
            }
        }
    }

    toggleAudioWidget() {
        const widget = document.getElementById('audioWidget');
        if (widget) {
            widget.classList.toggle('active');
        }
    }

    // Transport & Booking
    bookTaxi() {
        document.getElementById('transportBooking').style.display = 'block';
        document.getElementById('serviceType').value = 'Taxi';
        this.scrollToSection('transportBooking');
    }

    findHomestay() {
        document.getElementById('transportBooking').style.display = 'block';
        document.getElementById('serviceType').value = 'Homestay';
        this.scrollToSection('transportBooking');
    }

    findGuide() {
        alert('Available Guides:\n\n• Tenzin Norbu - ★★★★★ (50+ tours)\n• Pemba Sherpa - ★★★★☆ (30+ tours)\n• Karma Bhutia - ★★★★★ (40+ tours)\n\nContact: +91 98765 43210');
    }

    planRoute() {
        const route = prompt('Enter monasteries to visit (comma-separated):\nExample: Rumtek, Enchey, Phodong');
        if (route) {
            alert(`Route planned!\n\nYour itinerary:\n${route.split(',').map((m, i) =>
                `Day ${i + 1}: ${m.trim()}`).join('\n')}\n\nEstimated duration: ${route.split(',').length} days\n\nWe'll send you detailed directions via SMS.`);
        }
    }

    handleBooking(e) {
        e.preventDefault();
        const service = document.getElementById('serviceType').value;
        const date = document.getElementById('bookingDate').value;
        const contact = document.getElementById('bookingContact').value;

        if (service && date && contact) {
            alert(`Booking Confirmed!\n\nService: ${service}\nDate: ${date}\nContact: ${contact}\n\nYou will receive a confirmation SMS shortly.`);
            e.target.reset();
            document.getElementById('transportBooking').style.display = 'none';
        }
    }

    // Animations
    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        const animationDuration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(animationDuration / frameDuration);

        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const current = Math.round(target * progress);

                stat.textContent = current;

                if (frame === totalFrames) {
                    clearInterval(counter);
                }
            }, frameDuration);
        });
    }

    // Filter Tours
    filterTours(filter) {
        let filtered = this.tours;

        if (filter === 'popular') {
            filtered = this.tours.filter(t => t.rating >= 4.5);
        } else if (filter === 'ancient') {
            filtered = this.tours.filter(t => t.established < 1800);
        } else if (filter === 'remote') {
            filtered = this.tours.filter(t =>
                t.location.includes('North') || t.location.includes('West')
            );
        }

        // Re-render with filtered tours
        const grid = document.getElementById('toursGrid');
        if (!grid) return;

        grid.innerHTML = filtered.map(tour => `
            <div class="tour-card" onclick="app.openTour(${tour.id})">
                <div class="tour-image">
                    <img src="${tour.image || 'assets/images/monastery-default.jpg'}" alt="${tour.name}">
                    <span class="tour-badge">360°</span>
                </div>
                <div class="tour-content">
                    <h3 class="tour-title">${tour.name}</h3>
                    <div class="tour-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${tour.location}</span>
                    </div>
                    <p>${tour.description}</p>
                    <div class="tour-actions">
                        <div class="tour-rating">
                            ${'★'.repeat(Math.floor(tour.rating))}
                            <span>${tour.rating}</span>
                        </div>
                        <button class="btn btn-outline">Start Tour</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new Monastery360App();

    // Add filter event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            app.filterTours(btn.getAttribute('data-filter'));
        });
    });

    // Add language button listeners for audio widget
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            app.currentLanguage = btn.getAttribute('data-lang');

            // Update main language selector
            const select = document.getElementById('audioLanguage');
            if (select) select.value = app.currentLanguage;

            // Reload audio if playing
            const tourTitle = document.getElementById('tourTitle');
            if (tourTitle) {
                const monastery = app.monasteries.find(m => m.name === tourTitle.textContent);
                if (monastery) {
                    app.loadAudioGuide(monastery);
                }
            }
        });
    });
});

// Prevent console errors for missing images/audio
window.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2NjYyIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjIwMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDojNjY2O2ZvbnQtc2l6ZToyMHB4O2ZvbnQtZmFtaWx5OkFyaWFsIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
    }
}, true);