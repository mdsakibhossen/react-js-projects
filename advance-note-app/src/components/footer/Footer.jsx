import Creator from "./creator/Creator";

const Footer = () => {
  return (
    <div className="footer-section dark:bg-slate-900 bg-slate-200">
      <div className="container mx-auto flex flex-col gap-4 items-center  justify-end py-5  px-3 md:flex-row">
        <p className="dark:text-white">Created By: </p>
        <div className="creators flex flex-wrap justify-center gap-5 md:flex-nowrap">
          <Creator name="Md Sakib Hossen" email="sakib.hossen0143@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
