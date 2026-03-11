import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NewsMedia from "./pages/NewsMedia";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Club from "./pages/Club";
import ClubStaff from "./pages/ClubStaff";
import ClubStadium from "./pages/ClubStadium";
import ClubCommitments from "./pages/ClubCommitments";
import ProTeam from "./pages/ProTeam";
import ProCalendar from "./pages/ProCalendar";
import ProStandings from "./pages/ProStandings";
import Academy from "./pages/Academy";
import AcademyYouth from "./pages/AcademyYouth";
import AcademyWomen from "./pages/AcademyWomen";
import AcademySpecial from "./pages/AcademySpecial";
import Partners from "./pages/Partners";
import PartnersNews from "./pages/PartnersNews";
import PartnersHospitality from "./pages/PartnersHospitality";
import PartnersVisibility from "./pages/PartnersVisibility";
import PartnersContact from "./pages/PartnersContact";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="actualites-medias" element={<NewsMedia />} />
          <Route path="actualites-medias/photos" element={<Photos />} />
          <Route path="actualites-medias/videos" element={<Videos />} />
          <Route path="le-club" element={<Club />} />
          <Route path="le-club/organigramme" element={<ClubStaff />} />
          <Route path="le-club/infrastructures" element={<ClubStadium />} />
          <Route path="le-club/engagements" element={<ClubCommitments />} />
          <Route path="equipe-pro" element={<ProTeam />} />
          <Route path="equipe-pro/calendrier" element={<ProCalendar />} />
          <Route path="equipe-pro/classement" element={<ProStandings />} />
          <Route path="formation" element={<Academy />} />
          <Route path="formation/jeunes" element={<AcademyYouth />} />
          <Route path="equipe-pro/feminines" element={<AcademyWomen />} />
          <Route path="formation/specialisees" element={<AcademySpecial />} />
          <Route path="partenaires" element={<Partners />} />
          <Route path="partenaires/actualites" element={<PartnersNews />} />
          <Route path="partenaires/hospitalites" element={<PartnersHospitality />} />
          <Route path="partenaires/visibilite" element={<PartnersVisibility />} />
          <Route path="partenaires/contact" element={<PartnersContact />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
