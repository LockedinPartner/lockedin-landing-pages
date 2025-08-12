interface HeaderProps {
    title?: string;
}

export function Header({ title }: HeaderProps) {
    return (
      <div>
        <header className="bg-[#FCFCFC] w-fit mx-auto border border-[#F5F5F5] py-1 px-3 rounded-4xl mt-10 md:mt-16">
          <div className="text-[#4E5456] text-sm font-medium">{title}</div>
        </header>
      </div>
    );
}