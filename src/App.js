import { Route, Routes, Navigate } from "react-router-dom";
import GetStarted from "./component/GetStarted";
import Navbar from "./component/Navbar";
import EmailVerification from "./component/EmailVerification";
import ContectVerification from "./component/ContectVerification";
import OtpVerification from "./component/OtpVerification";
import CreatYourAccount from "./component/CreatYourAccount";
import VerifyYourEmail from "./component/VerifyYourEmail";
import VerifyYourPhone from "./component/VerifyYourPhone";
import OtpSignup from "./component/OtpSignup";
import WebDashbord from "./component/WebDashbord";
import Saidbar from "./component/Saidbar";
import Webpage1 from "./component/Webpage1";
import Webpage2 from "./component/Webpage2";
import EditProfile from "./component/EditProfile";
import Webpage3 from "./component/Webpage3";
import CandidateProfile from "./component/CandidateProfile";
import ClintWebPage1 from "./component/ClintWebPage1";
import ClintWebPage2 from "./component/ClintWebPage2";
import CandidateCompliance from "./component/CandidateCompliance";
import Webpage4 from "./component/Webpage4";
import ClientProfile from "./component/ClientProfile";
import CandidatesComplianceList from "./component/CandidatesComplianceList";
import ClintEditProfile from "./component/ClintEditProfile";
import ComplianceOverView from "./component/ComplianceOverView";
import ClientDetailView from "./component/ClientDetailView";
import AddJobBasics from "./component/PostJobs/AddJobBasics";
import KeyQualification from "./component/KeyQualification";
import DescribetheJob from "./component/PostJobs/DescribetheJob";
import SetPreferences from "./component/PostJobs/SetPreferences";
import HealthAssistant from "./component/PostJobs/HealthAssistant";
import Review from "./component/PostJobs/Review";
import Webpage5 from "./component/Webpage5";
import ClientDashbord from "./component/ClientDashbord";
import CreateAdmin from "./component/panel/CreateAdmin";
import LocamJobDetails from "./component/LocamJobDetails";
import LocamPostjob from "./component/LocamPostjob";
import Admin from "./component/panel/Admin";
import EditAdmin from "./component/panel/EditAdmin";
import AddCreatorandNumberofPositions from "./component/AddCreatorandNumberofPositions";
import AddShiftTimeandPay from "./component/AddShiftTimeandPay";
import Vacancies from "./component/Vacancies";
// import UpcomingInterview from "./component/UpcomingInterview";
import PastInterview from "./component/PastInterview";
import FindYourDreamjob from "./component/FindYourDreamjob";
import PayrollInformation from "./component/PayrollInformation";
import Applicationformcdt from "./component/Applicationformcdt";
import Clientbooking from "./component/Clientbooking";
import HomeClient from "./component/HomeClient";
import AboutUsClient from "./component/AboutUsClient";
import ContactUsClient from "./component/ContactUsClient";


import EmploymentHistory from "./component/EmploymentHistory";
import Payslip from "./component/Payslip";
import CandidateMyjobs1 from "./component/CandidateMyjobs1";
import Booking from "./component/Booking";
import LocamAddjobDetails from "./component/LocamAddjobDetails";
import LoginScreen from "./component/LoginScreen";
import Notification from "./component/Notification";
import CdtDashboard from "./component/CdtDashboard";
import Vacanciesdetail from "./component/Vacanciesdetail";
import CreateYourAccount from "./component/CreatYourAccount";
import Reason from "./component/Reason";
import ApplicationForm1 from "./component/Application1";
import Application4 from "./component/Application4";
import Application1 from "./component/Application1";
import ApplicationForm2 from "./component/Application2";
import ApplicationForm3 from "./component/Application3";
import ApplicationForm5 from "./component/Application5";
import ApplicationForm6 from "./component/Application6";
import ApplicationForm7 from "./component/Application7";

import ReferredCompany from "./component/ReferredCompany";
import Locam1 from "./component/Locam1";
import ClientTime1 from "./component/ClientTime1";
import CandidateTime1 from "./component/CandidateTime1";
import CandidateTime2 from "./component/CandidateTime2";

import CompanyCdtDoc from "./component/CompanyCdtDoc";
import MandatoryTrainings from "./component/MandatoryTrainings";
import CandidateReferredFriends from "./component/CandidateReferredFriends";
import Cdtreview from "./component/CdtReview";
import AddClint from "./component/AddClint";
import LocamjobVacancies from "./component/LocamjobVacancies";
import Marketplace from "./component/Marketplace";
import LocamjobAppliedCandidates from "./component/LocamjobAppliedCandidates";
import ClientCreateAC from "./component/ClientCreateAC";
import ClientuserProfile from "./component/ClientuserProfile";  
import CltDashboard from "./component/CltDashboard";
import CdtvacancyDashboard from "./component/CdtvacancyDashboard";
import AddQuestion from "./component/AddQuestion";
import ClientTime2 from "./component/ClientTime2";
import ClientTimesheet from "./component/ClientTimesheet";
import ClientAddVacancies from "./component/ClientAddVacancies";
import LocamjobCandidateDetail from "./component/LocamjobCandidateDetail";
import LocamjobBestMatchCandidates from "./component/LocamjobBestMatchCandidates";
import LocamSelectedCandidates from "./component/LocamSelectedCandidates";
import LocamRejectedCandidates from "./component/LocamRejectedCandidates";
import LocamjobCandidateDetail_2 from "./component/LocamjobCandidateDetail_2";
import ClientInterview from "./component/ClientInterview";
import ClientCandidateDetail from "./component/ClientCandidateDetail";
import ClientInvoice from "./component/ClientInvoice";
import PostYourJob from "./component/PostYourJob";
import ClientSorry from "./component/ClientSorry";
import ClientActiveList from "./component/ClientActiveList";
import Invoice from "./component/Invoice";
import Calendar from "./component/Celendar";
import CandidateInterviewSelectDateCalender from "./component/CandidateInterviewSelectDateCalender";
import CandidateAvailabilityCalander from "./component/CandidateAvailabilityCalander";
import CandidateTime3 from "./component/CandidateTime3";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Saidbar /> */}
      <Routes>
      <Route path="/" element={<HomeClient />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/contectverification" element={<ContectVerification />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/creatyouraccount" element={<CreatYourAccount />} />
        <Route path="/verifyyouremail" element={<VerifyYourEmail />} />
        <Route path="/verifyyourphone" element={<VerifyYourPhone />} />
        <Route path="/otpsignup" element={<OtpSignup />} />
        <Route path="/webdeshbord" element={<WebDashbord />} />
        <Route path="/webpage1" element={<Webpage1 />} />
        <Route path="/webpage2" element={<Webpage2 />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/webpage3" element={<Webpage3 />} />
        <Route path="/candidateprofile" element={<CandidateProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/clintwebpage1" element={<ClintWebPage1 />} />
        <Route path="/clintwebpage2" element={<ClintWebPage2 />} />
        <Route path="/candidatecompliance" element={<CandidateCompliance />} />
        <Route path="/webpage4" element={<Webpage4 />} />
        <Route path="/clientprofile" element={<ClientProfile />} />
        <Route path="/candidatescompliancelist" element={<CandidatesComplianceList />} />
        <Route path="/clinteditprofile" element={<ClintEditProfile />} />
        <Route path="/complianceoverview" element={<ComplianceOverView />} />
        <Route path="/clientdetailview" element={<ClientDetailView />} />
        <Route path="/addjobbasics" element={<AddJobBasics />} />
        <Route path="/keyqualification" element={<KeyQualification />} />
        <Route path="/review" element={<Review />} />
        <Route path="/healthassistant" element={<HealthAssistant />} />
        <Route path="/describethejob" element={<DescribetheJob />} />
        <Route path="/setpreferences" element={<SetPreferences />} />
        <Route path="/webpage5" element={<Webpage5 />} />
        <Route path="/clientdashbord" element={<ClientDashbord />} />
        <Route path="/locamjobdetails" element={<LocamJobDetails />} />
        <Route path="/locampostjob" element={<LocamPostjob />} />
        <Route path="/addshifttimeandpay" element={<AddShiftTimeandPay />} />
        <Route path="/addcreatorandnumberofpositions" element={<AddCreatorandNumberofPositions/>} />
        <Route path="/vacancies" element={<Vacancies />} />
        {/* <Route path="/upcominginterview" element={<UpcomingInterview />} /> */}
        <Route path="/pastinterview" element={<PastInterview />} />
        <Route path="/findyourdreamjob" element={<FindYourDreamjob />} />
        <Route path="/PayrollInformation" element={<PayrollInformation />} />
        <Route path="/Applicationformcdt" element={<Applicationformcdt />} />
        <Route path="/Clientbooking" element={<Clientbooking />} />
        <Route path="/AboutUsClient" element={<AboutUsClient />} />
        <Route path="/ContactUsClient" element={<ContactUsClient />} />
        <Route path="booking" element={<Booking />} />
        <Route path="LocamAddjobDetails" element={<LocamAddjobDetails />} />
        <Route path="CreateYourAccount" element={<CreateYourAccount />} />

        <Route path="employmenthistory" element={<EmploymentHistory />} />
        <Route path="payslip" element={<Payslip />} />
        <Route path="candidatemyjobs1" element={<CandidateMyjobs1 /> } />
        <Route path="loginscreen" element={<LoginScreen />} />
        <Route path="Reason" element={<Reason />} />
        <Route path="ApplicationForm1" element={<ApplicationForm1 />} />

        <Route path="Notification" element={<Notification /> } />
        <Route path="CdtDashboard" element={<CdtDashboard /> } />
        <Route path="Vacanciesdetail" element={<Vacanciesdetail /> } />
        <Route path="Application1" element={<Application1 /> } />
        <Route path="ApplicationForm2" element={<ApplicationForm2 /> } />
        <Route path="ApplicationForm3" element={<ApplicationForm3 /> } />
        <Route path="Application4" element={<Application4 /> } />
        <Route path="ApplicationForm5" element={<ApplicationForm5 /> } />
        <Route path="ApplicationForm6" element={<ApplicationForm6 /> } />
        <Route path="ApplicationForm7" element={<ApplicationForm7 /> } />

        <Route path="ReferredCompany" element={<ReferredCompany />} />
        <Route path="CandidateTime1" element={<CandidateTime1 /> } />
        <Route path="CandidateTime2" element={<CandidateTime2 /> } />
        <Route path="CandidateTime3" element={<CandidateTime3 /> } />


        <Route path="ClientTime1" element={<ClientTime1 />} />
        <Route path="Locam1" element={<Locam1 /> } />
        <Route path="CompanyCdtDoc" element={<CompanyCdtDoc /> } />
        <Route path="MandatoryTrainings" element={<MandatoryTrainings /> } />
        <Route path="CandidateReferredFriends" element={<CandidateReferredFriends /> } />
        <Route path="Cdtreview" element={<Cdtreview /> } />
        <Route path="addClint" element={<AddClint /> } />
        <Route path="locamjobvacancies" element={<LocamjobVacancies /> } />
        <Route path="Marketplace" element={<Marketplace /> } />
        <Route path="LocamjobAppliedCandidates" element={<LocamjobAppliedCandidates /> } />
        <Route path="ClientCreateAC" element={<ClientCreateAC /> } />
        <Route path="ClientuserProfile" element={<ClientuserProfile /> } />
        <Route path="CltDashboard" element={<CltDashboard /> } />
        <Route path="CdtvacancyDashboard" element={<CdtvacancyDashboard /> } />
        <Route path="AddQuestion" element={<AddQuestion /> } />
        <Route path="ClientTime2" element={<ClientTime2 /> } />
        <Route path="ClientTimesheet" element={<ClientTimesheet /> } />
        <Route path="ClientAddVacancies" element={<ClientAddVacancies /> } />
        <Route path="LocamjobCandidateDetail" element={<LocamjobCandidateDetail /> } />
        <Route path="LocamjobCandidateDetail_2" element={<LocamjobCandidateDetail_2 /> } />
        <Route path="locambestmatchcandidates" element={<LocamjobBestMatchCandidates /> } />
        <Route path="LocamSelectedCandidates" element={<LocamSelectedCandidates /> } />
        <Route path="LocamRejectedCandidates" element={<LocamRejectedCandidates /> } />
        <Route path="ClientInterview" element={<ClientInterview /> } />
        <Route path="ClientCandidateDetail" element={<ClientCandidateDetail /> } />

        <Route path="ClientInvoice" element={<ClientInvoice /> } />
        <Route path="PostYourJob" element={<PostYourJob /> } />
        <Route path="ClientSorry" element={<ClientSorry /> } />
        <Route path="ClientActiveList" element={<ClientActiveList /> } />
        <Route path="invoice" element={<Invoice /> } />
        <Route path="CandidateInterviewSelectDateCalender" element={<CandidateInterviewSelectDateCalender /> } />
        <Route path="CandidateAvailabilityCalander" element={<CandidateAvailabilityCalander /> } />
        <Route path="Celendar" element={<Calendar /> } />


        {/*     Panel     */}
        <Route path="/createadmin" element={<CreateAdmin />} />\
        <Route path="/admin" element={<Admin />} />
        <Route path="/editadmin/:id" element={<EditAdmin />} />
      </Routes>
    </>
  );
}

export default App;
