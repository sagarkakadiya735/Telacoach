import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
    URL: "https://telacoach-v2.telacoach.com/admin/api/",
    //URL: "http://139.59.79.228/telacoach/admin/api/",

    postMethod: "POST",
    getMethod: "GET",

    // User side
    security_question_listAPI: "setting/security_question_list",

    user_registerAPI: "user/user_register",
    coach_category_listAPI: "user/coach_category_list",
    user_loginAPI: "user/user_login",
    //coach_review_listAPI: "user/coach_review_list",
    //save_user_report_problemAPI: "user/save_user_report_problem",
    coach_listAPI: "user/coach_list",
    state_listAPI: "user/state_list",
    timezone_listAPI: "user/timezone_list",
    check_coach_busyAPI: "user/check_coach_busy",
    subscription_listAPI: "user/subscription_list",
    credit_card_listAPI: "user/credit_card_list",
    set_default_cardAPI: "user/set_default_card",
    add_credit_cardAPI: "user/add_credit_card",
    contact_preferencesAPI: "user/contact_preferences",
    save_book_sessionAPI: "user/save_book_session",
    pending_session_listAPI: "user/pending_session_list",
    user_book_session_historyAPI: "user/user_book_session_history",
    delete_pending_sessionAPI: "user/delete_pending_session",
    save_coach_reviewAPI: "user/save_coach_review",
    //message_listAPI: "user/message_list",
    user_send_message_webAPI: "user/user_send_message_web",
    //about_detailsAPI: "setting/about_details",
    save_user_profileAPI: "user/save_user_profile",
    user_change_passwordAPI: "user/user_change_password",
    billing_payment_informationAPI: "user/billing_payment_information",
    my_payment_listAPI: "user/my_payment_list",
    community_roomAPI: "user/community_room",
    save_commentAPI: "user/save_comment",
    contact_usAPI: "setting/contact_us",
    most_review_listAPI: "setting/most_review_list",
    slider_listAPI: "setting/slider_list",
    forgot_passwordAPI: "user/forgot_password",
    counter_dataAPI: "user/counter_data",
    video_callAPI: "user/video_call",
    add_event_calendarAPI: "setting/add_event_calendar",
    // End

    //Coach side
    coach_registerAPI: "coach/coach_register",
    plan_listAPI: "coach/plan_list",
    request_listAPI: "coach/user_request_list",
    accept_reject_requestAPI: "coach/accept_reject_request",
    save_coach_accountAPI: "coach/save_coach_account",
    save_bank_accountAPI: "coach/save_bank_account",
    book_session_historyAPI: "coach/book_session_history",
    payment_listAPI: "user/my_payment_list",
    bank_listAPI: "coach/bank_list",
    delete_bankAPI: "coach/delete_bank_account",
    save_user_report_problemAPI: "user/save_user_report_problem",
    set_app_lockAPI: "user/set_app_lock",
    coach_change_passwordAPI: "coach/coach_change_password",
    edit_coach_profile_imageAPI: "coach/edit_coach_profile_image",
    save_professional_detailsAPI: "coach/save_professional_details",
    coach_review_listAPI: "user/coach_review_list",
    save_coach_profileAPI: "coach/save_coach_profile",
    delete_certificate_imageAPI: "coach/delete_certificate_image",
    user_telacoach_rateAPI: "user/user_telacoach_rate",
    message_listAPI: "user/message_list",
    user_send_messageAPI: "user/user_send_message_web",
    save_change_availabilityAPI: "coach/save_change_availability",
    coach_calendar_listAPI: "coach/coach_calendar_list",

    // Comman API
    about_detailsAPI: "setting/about_details",
    telacoach_certificationAPI: "setting/telacoach_certification",
    help_center_listAPI: "setting/help_center_list",
    faq_listAPI: "setting/faq_list",

    makeAPICall: async(methodName, url, params) => {
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        let options = ({ auth: { username: 'telacoach', password: 'telacoach' } });
        if (methodName == "POST") {
            return await axios.post(url, params, options).then((res) => {
                return res
            })
        }
        if (methodName == "GET") {
            return axios.get(url, params, options).then((res) => {
                return res.data
            })
        }
    },
    methods: {
    loginorNot(){
        console.log("hi");
        if(localStorage.getItem("Login_data")!=null){
        if(JSON.parse(localStorage.getItem("Login_data")).is_login==0){
           this.$router.push("/home");
        }
        else
        {
           this.$router.push("/requests");
        }
      }
      else
      {
        this.$router.push("/login");
      }
    }
}
      
}