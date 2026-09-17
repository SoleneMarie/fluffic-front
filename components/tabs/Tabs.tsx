type TabItem = {
  label: string;
  value: string;
};

type TabsProps = {
  items: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
};

const Tabs = ({ items, activeTab, onChange, className }: TabsProps) => {
  return (
    <div className={`flex ${className || ""}`} role="tablist">
      {items.map((item) => {
        const isActive = activeTab === item.value;

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
            className={` px-1 pt-2 pb-0.5 transition-colors font-medium text-[14px] md:text-base ${
              isActive
                ? "border-b-2 border-secondary-very-dark font-medium text-secondary-very-dark "
                : "text-secondary-very-dark/60 hover:text-secondary-very-dark/80  mb-0.5"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
