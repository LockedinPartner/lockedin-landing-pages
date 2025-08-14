interface HeaderProps {
    tag?: string;
    title: string;
    description?: string;
}

export function Header({ title, tag, description }: HeaderProps) {
    return (
      <div className="max-w-xl mx-auto">
        {tag &&
        <header className="bg-[#FCFCFC] w-fit mx-auto border border-[#F5F5F5] py-1 px-3 rounded-4xl mt-10 md:mt-12">
          <div className="text-[#4E5456] text-sm font-medium">{tag}</div>
        </header>}

        <h2 className="text-[#272525] text-3xl md:text-4xl font-semibold text-center my-5">
          {title}
        </h2>
        {description && (
          <p className="text-[#69666E] text-lg md:text-xl text-center my-3">
            {description}
          </p>
        )}
      </div>
    );
}