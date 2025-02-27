export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex item-center justify-center bg-black text-white p-20 rounded-sm shadow-md tracking-wider">
      {children}
    </div>
  );
}
