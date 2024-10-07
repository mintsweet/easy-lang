import LogoImg from '@assets/logo.svg';

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="w-12 h-12" src={LogoImg} alt="Logo" />
      <span className="ml-2 text-lg font-semibold">Easy Lang</span>
    </div>
  );
};
