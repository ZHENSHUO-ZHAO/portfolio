export default function Bio({ bio }: { bio: string }) {
  return (
    <div className="bg-card rounded-r-md border-l-4 border-l-accent mb-8">
      <p className="text-base text-left px-6 py-4 lg:text-lg">{bio}</p>
    </div>
  );
}
