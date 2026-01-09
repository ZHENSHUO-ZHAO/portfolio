export default function Bio({ bio }: { bio: string }) {
  return (
    <div className="max-w-2xl mx-auto bg-card rounded-r-md border-l-4 border-l-accent mb-8">
      <p className="text-base px-6 py-4 lg:text-lg sm:text-center">{bio}</p>
    </div>
  );
}
