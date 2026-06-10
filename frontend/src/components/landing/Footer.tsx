export function Footer() {
  return (
    <footer className="border-t border-surface-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-600">
            <span className="text-xs font-bold text-white">m0</span>
          </div>
          <span className="font-semibold">mem0ry</span>
        </div>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} mem0ry. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
