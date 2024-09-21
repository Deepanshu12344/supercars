import BrowseType from "./components/BrowseType";
import Hero from "./components/Hero";
import MostSearched from "./components/MostSearched";
import QACard from "./components/QACard";

export default function Home() {
  return (
    <div>
      <div className="pb-28">
      <Hero />
      </div>
      <div className="sm:p-10 md:p-20 p-5 pt-0">
        <BrowseType />
        <QACard />
        <MostSearched />
      </div>
    </div>
  );
}
