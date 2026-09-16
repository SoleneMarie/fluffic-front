type TabItem = {
  label: string;
  value: string;
};

type TabsProps = {
  items: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
};

const Tabs = ({ items, activeTab, onChange }: TabsProps) => {
  return (
    <div className="flex" role="tablist">
      {items.map((item) => {
        const isActive = activeTab === item.value;

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
            className={`px-2 pt-2 pb-1 text-sm transition-colors ${
              isActive
                ? "border-b-2 border-secondary-very-dark font-medium text-secondary-very-dark text-base md:text-xl"
                : "text-tertiary hover:text-secondary"
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
