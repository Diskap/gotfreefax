import Home from './components/Home';
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import OnlineFaxTips from "./components/OnlineFaxTips";
import FreeFaxReview from "./components/FreeFaxReview";
import FreeFaxCoverSheet from "./components/FreeFaxCoverSheet";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Testimonials from "./components/Testimonials";

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        {
            path: '/faq',
            component: FAQ,
            name: "FAQ"
        },
        {
            path: '/contact',
            component: ContactUs,
            name: "ContactUs"
        },
        {
            path: '/onlinefaxtips',
            component: OnlineFaxTips,
            name: "OnlineFaxTips"
        },
        {
            path: '/freefaxreview',
            component: FreeFaxReview,
            name: "FreeFaxReview"
        },
        {
            path: '/freefaxcoversheet',
            component: FreeFaxCoverSheet,
            name: "FreeFaxCoverSheet"
        },
        {
            path: '/termsofservice',
            component: TermsOfService,
            name: "TermsOfService"
        },
        {
            path: '/privacypolicy',
            component: PrivacyPolicy,
            name: "PrivacyPolicy"
        },
        {
            path: '/testimonials',
            component: Testimonials,
            name: "Testimonials"
        }
    ]
}
