interface HeaderProps {
    tag?: string;
    title: string;
    description?: string;
}

export function Header({ title, tag, description }: HeaderProps) {
    return (
      <div className="max-lg:w-[90%] max-w-xl mx-auto">
        {tag &&
        <header className="bg-[#FCFCFC] w-fit mx-auto border border-[#F5F5F5] py-1 px-3 rounded-4xl mt-10 md:mt-12">
          <div className="text-[#4E5456] text-xs md:text-sm font-medium">{tag}</div>
        </header>}

        <h2 className="text-[#272525] text-2xl md:text-3xl lg:text-4xl font-semibold text-center my-5">
          {title}
        </h2>
        {description && (
          <p className="text-[#69666E] md:text-lg lg:text-xl text-center my-3">
            {description}
          </p>
        )}
      </div>
    );
}