import AppLayout from "@/components/layouts/AppLayout";
import { mockUser } from "@/mocks/mockUser";

const LayoutExample = () => {
  return (
    <AppLayout user={mockUser}>
      <div className="my-4 flex h-100 items-center justify-center rounded-lg border border-gray-300 bg-gray-100">
        <p className="text-xl font-medium">Contenu</p>
      </div>
    </AppLayout>
  );
};

export default LayoutExample;
