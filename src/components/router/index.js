// USer
import Signup from "../User/Signup.vue";
import Address from "../User/Address.vue";
import Password from "../User/Password.vue";
//import PasswordCoach from "../Coach/PasswordCoach.vue";
import Coachlist from "../User/Coachlist.vue";
import Details from "../User/Details.vue";
import Profilesetting from "../User/Profilesetting.vue";
import Community from "../User/Community.vue";
import Plandetails from "../User/Plandetails.vue";
import Booksessions from "../User/Booksessions.vue";
import Personaldetails from "../User/Personaldetails.vue";
import Pushnotification from "../User/Pushnotification.vue";
import Rate from "../User/Rate.vue";
import Billing from "../User/Billing.vue";
import Booksession from "../User/Booksession.vue";
import Myplan from "../User/Myplan.vue";
import Reportcoach from "../User/Reportcoach.vue";
import Setting from "../User/Setting.vue";
import Message from "../User/Message.vue";
import Session from "../User/Session.vue";
import Home from "../User/Home.vue";
import MyPlans from "../User/MyPlans.vue";
import Filter from "../User/Filter.vue";
import Cards from "../User/Cards.vue";
import Accountsetting from "../User/Accountsetting.vue";
import AddCard from "../User/AddCard.vue";
import VideoCallSession from "../User/VideoCallSession.vue";
import VideoConnectDetails from "../User/VideoConnectDetails.vue";
import Changepassword from "../User/Changepassword.vue";
import Report from "../User/Report.vue";
import Professionaldetails from "../User/Professionaldetails.vue";
import MySession from "../User/MySession.vue";
import Rateapp from "../User/Rateapp.vue";
import Comment from "../User/Comment.vue";

// Coach
import SignupCoach from "../Coach/SignupCoach.vue";
import PersonalDetailsCoach from "../Coach/PersonalDetailsCoach.vue";
import AddressCoach from "../Coach/AddressCoach.vue";
import SetPassword from "../Coach/SetPassword.vue";
import MessageChat from "../Coach/MessageChat.vue";
import Profilesettingcoach from "../Coach/Profilesettingcoach.vue";
import Myprofilesetting from "../Coach/Myprofilesetting.vue";
import Mypaymentcoach from "../Coach/Mypaymentcoach.vue";
import Paymentdetails from "../Coach/Paymentdetails.vue";
import CoachVideoConnectDetails from "../Coach/CoachVideoConnectDetails.vue";
import CoachRate from "../Coach/CoachRate.vue";
import CoachReportProblem from "../Coach/CoachReportProblem.vue";
import CoachPushnotification from "../Coach/CoachPushnotification.vue";
import ChangeProfile from "../Coach/ChangeProfile.vue";
import CoachChangepassword from "../Coach/CoachChangepassword.vue";
import CoachProfessionalDetails from "../Coach/CoachProfessionalDetails.vue";
import MyProfile from "../Coach/MyProfile.vue";
import ConnectWithClient from "../Coach/ConnectWithClient.vue";
import StartVideoChat from "../Coach/StartVideoChat.vue";
import UpdateBankAccount from "../Coach/UpdateBankAccount.vue";
import Bankaccount from "../Coach/Bankaccount.vue";
//import Scheduler from "../Coach/Scheduler.vue";
import Calendar from "../Coach/CalendarNew.vue";
import Mysessionhistory from "../Coach/Mysessionhistory.vue";
import Billingplan from "../Coach/Billingplan.vue";
import Requests from "../Coach/Requests.vue";
import Requestdetails from "../Coach/Requestdetails.vue";
import AddBankAccount from "../Coach/AddBankAccount.vue";
import CoachProfile from "../Coach/CoachProfile.vue";
import SignupProfessionalDetails from "../Coach/SignupProfessionalDetails.vue";
import selectCalendar from "../Coach/selectCalendar.vue";
import createEvent from "../Coach/createEvent.vue";

// Comman
import VueRouter from "vue-router";
import Login from "../Login.vue";
import Video from "../Video.vue";
import Aboutus from "../Aboutus.vue";
import Abouttelacoach from "../Abouttelacoach.vue";
import Faq from "../Faq.vue";
import Helpcenter from "../Helpcenter.vue";
import Privacy from "../Privacy.vue";
import Teamsandconditions from "../Teamsandconditions.vue";
import Certification from "../Certification.vue";

import Forgotpassword from "../Forgotpassword.vue";
import Contact from "../Contact.vue";
import Invoice from "../User/Invoice.vue";
import InvoiceDetails from "../User/InvoiceDetails.vue";

import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    { path: "/", name: "login", component: Login },
    { path: "/login", name: "login", component: Login },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/video", name: "video", component: Video },
    { path: "/address", name: "address", component: Address },
    { path: "/aboutus", name: "aboutus", component: Aboutus },
    { path: "/password", name: "password", component: Password },
    { path: "/home", name: "home", component: Home },
    { path: "/myplans", name: "myplans", component: MyPlans },
    { path: "/filter", name: "filter", component: Filter },
    { path: "/cards", name: "cards", component: Cards },
    { path: "/details", name: "details", component: Details },
    { path: "/coachlist", name: "coachlist", component: Coachlist },
    { path: "/session", name: "session", component: Session },
    { path: "/message", name: "message", component: Message },
    { path: "/setting", name: "setting", component: Setting },
    { path: "/reportcoach/:id", name: "reportcoach", component: Reportcoach },
    { path: "/myplan", name: "myplan", component: Myplan },
    { path: "/booksession", name: "booksession", component: Booksession },
    { path: "/forgotpassword", name: "forgotpassword", component: Forgotpassword },
    { path: "/requests", name: "requests", component: Requests },
    { path: "/requestdetails/:id", name: "requestdetails", component: Requestdetails },
    { path: "/mysessionhistory", name: "mysessionhistory", component: Mysessionhistory },
    { path: "/teamsandconditions", name: "teamsandconditions", component: Teamsandconditions },
    { path: "/billing", name: "billing", component: Billing },
    { path: "/faq", name: "faq", component: Faq },
    { path: "/helpcenter", name: "helpcenter", component: Helpcenter },
    { path: "/report", name: "report", component: Report },
    { path: "/changepassword", name: "changepassword", component: Changepassword },
    { path: "/professionaldetails", name: "professionaldetails", component: Professionaldetails },
    { path: "/billingplan", name: "billingplan", component: Billingplan },
    { path: "/messageChat", name: "messageChat", component: MessageChat },
    { path: "/profilesettingcoach", name: "profilesettingcoach", component: Profilesettingcoach },
    { path: "/myprofilesetting", name: "myprofilesetting", component: Myprofilesetting },
    { path: "/accountsetting", name: "accountsetting", component: Accountsetting },
    { path: "/mypaymentcoach", name: "mypaymentcoach", component: Mypaymentcoach },
    { path: "/abouttelacoach", name: "abouttelacoach", component: Abouttelacoach },
    { path: "/rate", name: "rate", component: Rate },
    { path: "/pushnotification", name: "pushnotification", component: Pushnotification },
    { path: "/privacy", name: "privacy", component: Privacy },
    { path: "/personaldetails", name: "personaldetails", component: Personaldetails },
    { path: "/plandetails", name: "plandetails", component: Plandetails },
    { path: "/booksessions", name: "booksessions", component: Booksessions },
    { path: "/community", name: "community", component: Community },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/profilesetting", name: "profilesetting", component: Profilesetting },
    { path: "/paymentdetails", name: "paymentdetails", component: Paymentdetails },
    { path: "/addcard", name: "addcard", component: AddCard },
    { path: "/videocallsession", name: "videocallsession", component: VideoCallSession },
    //{ path: "/scheduler", name: "scheduler", component: Scheduler },
    { path: "/calendar", name: "calendar", component: Calendar },
    { path: "/videoconnectdetails", name: "videoconnectdetails", component: VideoConnectDetails },
    { path: "/changeprofile", name: "changeprofile", component: ChangeProfile },
    { path: "/signupCoach", name: "signupCoach", component: SignupCoach },
    { path: "/personaldetailscoach", name: "personaldetailscoach", component: PersonalDetailsCoach },
    { path: "/addresscoach", name: "addressCoach", component: AddressCoach },
    { path: "/myprofile", name: "myprofile", component: MyProfile },
    { path: "/connectwithclient", name: "connectwithclient", component: ConnectWithClient },
    { path: "/startvideochat", name: "startvideochat", component: StartVideoChat },
    { path: "/updatebankaccount", name: "updatebankaccount", component: UpdateBankAccount },
    { path: "/bankaccount", name: "bankaccount", component: Bankaccount },
    { path: "/setpassword", name: "setpassword", component: SetPassword },
    { path: "/coachvideoconnectdetails", name: "coachvideoconnectdetails", component: CoachVideoConnectDetails },
    { path: "/coachrate", name: "coachrate", component: CoachRate },
    { path: "/coachreportproblem", name: "coachreportproblem", component: CoachReportProblem },
    { path: "/coachpushnotification", name: "coachpushnotification", component: CoachPushnotification },
    { path: "/coachchangepassword", name: "coachchangepassword", component: CoachChangepassword },
    { path: "/coachprofessionaldetail", name: "coachprofessionaldetail", component: CoachProfessionalDetails },
    { path: "/addbankaccount", name: "addbankaccount", component: AddBankAccount },
    { path: "/addcoachbankaccount", name: "addcoachbankaccount", component: CoachProfile },
    { path: "/signupprofessionaldetail", name: "signupprofessionaldetail", component: SignupProfessionalDetails },
    { path: "/certification", name: "certification", component: Certification },
    { path: "/mySession", name: "mySession", component: MySession },
    { path: "/Rateapp", name: "Rateapp", component: Rateapp },
    { path: "/Comment/:id", name: "Comment", component: Comment },
    { path: "/invoice", name: "invoice", component: Invoice },
    { path: "/invoicedetails", name: "invoicedetails", component: InvoiceDetails },
    { path: "/selectcalendar", name: "selectcalendar", component: selectCalendar },
    { path: "/event", name: "event", component: createEvent },
];

const router = new VueRouter({
    mode: 'hash',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

export default router;