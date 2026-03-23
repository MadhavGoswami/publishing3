export default function Tag({ label }: { label: string }) {
  return (
    <span className="px-5 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition cursor-pointer">
      {label}
    </span>
  );
}