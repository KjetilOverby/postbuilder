import React from "react";
import HeaderComponent from "../reusable components/HeaderComponent";
import SkurlisteComponent from "./SkurlisteComponent";
interface SkurlisteProps {
  skurliste: {
    map(arg0: (item: any) => JSX.Element): React.ReactNode;
    treslag: string;
  };
  setOpenSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartPageComponent = ({
  skurliste,
  setOpenSearchModal,
}: SkurlisteProps) => {
  return (
    <>
      <HeaderComponent open={setOpenSearchModal} />
      <div className="container mx-auto px-12 md:px-60 pt-12">
        <h1 className="header text-2xl">Skurplan</h1>
        <SkurlisteComponent skurliste={skurliste} />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default StartPageComponent;
