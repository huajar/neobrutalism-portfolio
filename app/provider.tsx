import { Header } from "@/components/header";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div className="size-full py-3">
      <Header />
      {children}
    </div>
  );
};